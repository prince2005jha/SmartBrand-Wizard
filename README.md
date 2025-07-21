📁 **SmartBrand Wizard** — Adobe Express Add-on

---

### 🧾 `manifest.json`
```json
{
  "name": "SmartBrand Wizard",
  "version": "1.0",
  "manifest_version": 3,
  "description": "Generate a complete brand kit (colors, fonts, logo) from a single uploaded image.",
  "icons": {
    "128": "assets/icon.png"
  },
  "express": {
    "type": "addon-panel",
    "entry": "index.html",
    "permissions": ["image", "text", "fonts"]
  }
}
```

---

### 📄 `README.md`
```markdown
# SmartBrand Wizard

SmartBrand Wizard is an Adobe Express Add-on that generates a complete brand kit—including colors, font suggestions, and mockup-ready logos—from a single uploaded image.

## 🔥 Why It Matters
Millions of small businesses struggle to define a brand identity. With SmartBrand Wizard, they can upload a reference image—like a product photo or inspiration graphic—and instantly generate:
- 🎨 Color palette
- 🔠 Font pairing suggestions
- 🧢 Logo layout previews
- 📄 Auto-styled templates (cards, flyers, thumbnails)

## 🛠 Tech Stack
- **Languages:** HTML, CSS, JavaScript
- **APIs & Libraries:** Color Thief, Chroma.js, Google Fonts API
- **Platform:** Adobe Express SDK + local prototyping

## 🚀 How to Use
1. Upload your brand image.
2. Wait for analysis: color palette + tone detection.
3. Review font and logo suggestions.
4. Export to your Express workspace.

## 📂 Folder Structure
```
SmartBrandWizard/
├── index.html          ← UI Panel
├── styles.css          ← Styling
├── script.js           ← Logic & API calls
├── manifest.json       ← Add-on config
├── assets/             ← Icons, sample images
└── docs/technical.pdf  ← Architecture & flow
```

## 📺 Demo Video
[YouTube – SmartBrand Wizard Hackathon Pitch](https://youtu.be/demo-smartbrandwizard)

## 🧪 Figma Prototype
[View the interactive UI prototype](https://figma.com/file/demo-smartbrandwizard)

## 🧑‍💻 GitHub
[https://github.com/princejha/SmartBrandWizard](https://github.com/princejha/SmartBrandWizard)

## ✨ Made for the Adobe Express Add-ons Hackathon 2025 ✨
```


