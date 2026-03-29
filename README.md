# Academic Homepage

A clean, modern, and responsive academic personal homepage template with a modular component-based architecture.

## 📁 Project Structure

```
academic-webpage/
├── index.html              # Main entry point
├── components/             # Reusable components
│   ├── header.html        # Header with profile info
│   └── footer.html        # Footer with copyright
├── sections/              # Page sections
│   ├── about.html         # About me section
│   ├── contact.html       # Contact information
│   ├── research.html      # Research interests
│   ├── education.html     # Education history
│   ├── publications.html  # Publications list
│   ├── experience.html    # Research experience
│   ├── awards.html        # Awards and honors
│   ├── teaching.html      # Teaching experience
│   └── service.html       # Professional service
├── assets/
│   ├── css/
│   │   ├── main.css       # Main stylesheet
│   │   └── responsive.css # Responsive styles
│   ├── js/
│   │   ├── main.js        # Main JavaScript
│   │   └── loader.js      # Page loader
│   └── images/
│       └── profile.jpg    # Your profile photo
└── README.md
```

## 🚀 Quick Start

1. **Replace placeholders**: Search and replace all `[...]` placeholders with your actual information
2. **Add your photo**: Place your profile photo in `assets/images/profile.jpg`
3. **Open in browser**: Open `index.html` in your web browser
4. **Deploy**: Upload to GitHub Pages, Netlify, or your preferred hosting service

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/main.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... */
}
```

### Sections
To add/remove sections:
1. Edit `index.html` to add/remove container divs
2. Create/delete corresponding HTML files in `sections/`
3. Update `config.sections` in `assets/js/main.js`

### Publications
Add new publications by copying the `publication-item` template in `sections/publications.html`.

## 📱 Features

- ✅ Fully responsive design
- ✅ Component-based architecture
- ✅ Smooth scroll animations
- ✅ Clean, modern UI
- ✅ Easy to customize
- ✅ Print-friendly styles
- ✅ No dependencies (pure HTML/CSS/JS)

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 License

Feel free to use and modify this template for your academic homepage.

## 🙏 Credits

Template designed for academic personal homepages.
