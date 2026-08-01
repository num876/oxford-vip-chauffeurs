const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const https = require('https');

const urlsToScrape = {
    '/about-us': 'About Us',
    '/our-fleet': 'Our Fleet',
    '/contact': 'Contact Us',
    '/booking': 'Booking',
    '/terms-and-conditions': 'Terms & Conditions',
    '/airport-transfers': 'Airport Transfers',
    '/business-travel': 'Business Travel',
    '/event-travel': 'Event Travel',
    '/group-travel': 'Group Travel',
    '/tours': 'Tours'
};

const baseUrl = 'https://www.oxfordvipchauffeurs.com';
const appDir = 'C:/Users/44737/Downloads/oxford vip chauffeurs/src/app';

function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function scrapeAndGenerate() {
    for (const [routePath, title] of Object.entries(urlsToScrape)) {
        console.log(`Processing ${routePath}...`);
        try {
            const html = await fetchHtml(baseUrl + routePath);
            const $ = cheerio.load(html);
            
            // Remove header and footer to avoid extracting nav links
            $('#masthead, .site-footer, .ast-above-header, .site-header, footer, header, nav, script, style, noscript').remove();
            
            let elements = [];
            
            // Extract all text nodes that have meaningful content
            function extractText(node) {
                if (node.type === 'text') {
                    const text = node.data.trim().replace(/[{}]/g, '');
                    if (text.length > 5) {
                        // Check if it looks like a heading
                        if (text.length < 60 && !text.endsWith('.') && text === text.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')) {
                            elements.push({ tag: 'h2', text });
                        } else {
                            elements.push({ tag: 'p', text });
                        }
                    }
                } else if (node.type === 'tag') {
                    // special handling for lists
                    if (node.name === 'li') {
                        const text = $(node).text().trim().replace(/[{}]/g, '');
                        if (text.length > 3) elements.push({ tag: 'li', text });
                        return; // don't recurse into li
                    }
                    if (node.name === 'h1' || node.name === 'h2' || node.name === 'h3') {
                        const text = $(node).text().trim().replace(/[{}]/g, '');
                        if (text.length > 2) elements.push({ tag: 'h2', text });
                        return;
                    }
                    if (node.children) {
                        node.children.forEach(extractText);
                    }
                }
            }
            
            extractText($('body')[0]);
            
            // Deduplicate
            const seen = new Set();
            const uniqueElements = elements.filter(el => {
                if (seen.has(el.text)) return false;
                seen.add(el.text);
                return true;
            });
            
            let targetDir = appDir + routePath;
            if (['/airport-transfers', '/business-travel', '/event-travel', '/group-travel', '/tours'].includes(routePath)) {
                targetDir = appDir + '/services' + routePath;
            }
            
            fs.mkdirSync(targetDir, { recursive: true });
            
            let tsxContent = `import styles from '@/app/page.module.css';

export const metadata = {
  title: '${title} | Oxford VIP Chauffeurs',
};

export default function Page() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            <h1 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>${title}</h1>
`;
            
            uniqueElements.forEach(el => {
                if (el.tag === 'h2') {
                    tsxContent += `            <h2 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--accent-gold)", fontWeight: 300 }}>${el.text}</h2>\n`;
                } else if (el.tag === 'li') {
                    tsxContent += `            <li style={{ marginBottom: "0.5rem", color: "var(--text-secondary)", listStylePosition: "inside" }}>• ${el.text}</li>\n`;
                } else {
                    tsxContent += `            <p style={{ marginBottom: "1.5rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>${el.text}</p>\n`;
                }
            });
            
            tsxContent += `          </div>
        </div>
      </section>
    </main>
  );
}
`;
            fs.writeFileSync(path.join(targetDir, 'page.tsx'), tsxContent, 'utf8');
            console.log(`  -> Created ${targetDir}/page.tsx with ${uniqueElements.length} unique elements`);
            
        } catch (e) {
            console.error(`  -> Error processing ${routePath}:`, e.message);
        }
    }
}

scrapeAndGenerate();
