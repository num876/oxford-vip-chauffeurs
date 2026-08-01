from html.parser import HTMLParser
import sys

class T(HTMLParser):
    def __init__(self):
        super().__init__()
        self.p = 0
        self.txt = []
    def handle_starttag(self, t, a):
        if t in ('script','style'): self.p += 1
    def handle_endtag(self, t):
        if t in ('script','style'): self.p = max(0, self.p - 1)
    def handle_data(self, d):
        if not self.p:
            clean = d.strip()
            if clean: self.txt.append(clean)

html = open('about-us-raw.html', 'r', encoding='utf-8').read()
t = T()
t.feed(html)
with open('about-us-text.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(t.txt))
