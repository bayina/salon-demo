# Petal & Polish Salon — Demo Site

Sample portfolio project by [Chandhini Software Solutions LLC](https://chandhini.com).
A sample portfolio demo of a beauty salon website built by Chandhini Software Solutions LLC.

> **Demo only.** Not a real business. All content is illustrative and meant
> to showcase web design / front-end work.

## Stack
- Plain HTML, CSS, JavaScript
- No build step
- Hosted on GitHub Pages

## Local preview
```bash
# Any static server works. Examples:
python3 -m http.server 8000
# or
npx serve .
```
Then open http://localhost:8000

## Deployment
- Hosted via GitHub Pages from the `main` branch root.
- Custom subdomain configured via `CNAME` file: `salon.chandhini.com`
- DNS: add a CNAME record at the registrar pointing
  `salon` → `bayina.github.io`.

## Structure
```
.
├── index.html
├── assets/
│   ├── css/styles.css
│   └── js/main.js
├── CNAME
├── robots.txt
├── sitemap.xml
├── README.md
├── CHANGELOG.md
├── ROADMAP.md
└── LICENSE
```

## License
MIT — see [LICENSE](LICENSE).
