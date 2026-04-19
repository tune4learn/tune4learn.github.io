# Tune4Learn 🎵

**Where Learning Sings** — Educational songs, videos and interactive activities for children ages 3–8.

🌐 **Live site:** [tune4learn.com](https://tune4learn.com)

---

## About

Tune4Learn is a free educational platform that helps young children (ages 3–8) learn numbers, letters, science and social values through the power of music. The site combines:

- 🎬 **40+ animated educational videos** — catchy songs about counting, letters, seasons, space and more
- 🖍️ **16+ interactive online coloring pages** — paint directly in the browser, no download needed
- 🌀 **40+ playable maze puzzles** — including math mazes for addition & subtraction practice
- 📚 **Teacher & parent resources** — printable PDFs, lesson tips, and at-home activity ideas
- 🔬 **Research-backed blog** — summaries of studies on music in early childhood learning

---

## Repository structure

```
.
├── index.html              # Home page
├── videos.html             # Video catalog (For Kids)
├── teachers.html           # Resources for teachers & parents
├── research.html           # Research summaries & blog
├── coloring.html           # Interactive coloring book
├── mazes.html              # Playable maze puzzles
├── analiz.html             # Internal site analysis report
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
└── assets/                 # Logos, mascots, coloring images, icons
    └── coloring/           # 16 coloring page source images
```

---

## Tech stack

Deliberately minimal — no build step, no framework:

- Plain HTML + CSS + vanilla JS
- Google Fonts (Fredoka One, Nunito)
- Google Analytics 4
- Brevo (Sendinblue) newsletter form
- YouTube embeds for videos
- Hosted on GitHub Pages

---

## Running locally

No build tools required. Either:

```bash
# Option 1: Python's built-in server
python3 -m http.server 8000

# Option 2: Node's http-server
npx http-server .
```

Then open <http://localhost:8000>.

---

## Design system

| Token      | Hex        | Usage                  |
|------------|------------|------------------------|
| Sky        | `#23BFEF`  | Primary / links        |
| Sun        | `#FFD93D`  | Accent / highlights    |
| Red        | `#FF4757`  | CTA / alerts           |
| Green      | `#2ED573`  | Success / positive     |
| Purple     | `#9B59B6`  | Secondary accent       |
| Orange     | `#FF6B35`  | Coloring section       |
| Dark       | `#1E2A3A`  | Text / dark backgrounds|
| Off-white  | `#F7F9FC`  | Page background        |

**Typography:**
- **Fredoka One** — display headlines
- **Nunito** (weights 600–900) — body, nav, CTAs

---

## Contributing

This is a small personal project. Issues and PRs welcome for:

- Accessibility improvements
- New educational content
- Bug fixes
- Translations (Turkish support in progress)

---

## License

Content (songs, videos, illustrations) © Tune4Learn — all rights reserved.
Code is open for learning purposes — please don't re-deploy the site as-is.

---

Made with ♪ for curious little learners.
