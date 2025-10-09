# Blog-Generator
Week 6 assignment
A static blog generator built with Node.js, EJS, and Markdown.
It reads Markdown files from your content folder, converts them into HTML, and outputs a complete static website — all automatically.

Features:
- Converts Markdown (.md) files into HTML pages
- Uses EJS templates for layout and styling
- Automatically saves generated pages into a /docs  folder (ready for GitHub Pages)
- Supports custom CSS and JS assets
- Includes a Grunt build task to minify CSS for faster performance


Project Structure:

Blog-Generator/
├── docs/                 # Generated static HTML files
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css        # Main stylesheet
│   │   └── js/
│   ├── content/
│   │   ├── post1.md             # Example blog post
│   │   └── post2.md
│   └── templates/
│       └── index.ejs            # EJS layout template
├── index.js                     # Main site generation script
├── Gruntfile.js                 # Grunt configuration for CSS minification
├── package.json
└── README.md


Preview:
Each generated HTML page displays:
- The converted Markdown content
- CSS styling
- JS interactivity

Technologies used:
- Node.js
- EJS – Templating engine
- Marked – Markdown to HTML converter
- Grunt – CSS minification
- HTML/CSS/JavaScript