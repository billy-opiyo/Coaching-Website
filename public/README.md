# Dr. Evelyn Reed - Executive Coaching & Consulting Website

Professional modern website for Dr. Evelyn Reed, PhD - Executive Coach and Strategy Consultant. This is a fully responsive, production-ready single page website with dark mode support, interactive elements and modern UI design.

---

## 🔍 Project Overview

This website is built for an executive coaching business, featuring services, testimonials, booking system, contact forms and blog content. It's designed to convert visitors into clients while establishing professional credibility.

## ✨ Key Features

### Core Functionality

- ✅ **Fully Responsive Design** - works perfectly on mobile, tablet and desktop
- ✅ **Dark / Light Mode Toggle** - automatic system preference detection + manual switch
- ✅ **Smooth Scroll Navigation** - anchored sections with animated scrolling
- ✅ **Mobile Hamburger Menu** - responsive navigation for small screens
- ✅ **Interactive Booking Modal** - appointment scheduling system
- ✅ **Service Inquiry Forms** - program specific contact forms
- ✅ **Newsletter Signup** - lead generation system
- ✅ **Contact Form** - client message submission
- ✅ **Fade-in Animations** - scroll triggered entrance animations
- ✅ **Modern Card Layouts** - services, testimonials, blog sections

### Website Sections

1.  **Hero Section** - Value proposition, primary CTA buttons, social proof
2.  **About Section** - Bio, credentials, certifications and achievements
3.  **Services / Programs** - 3 coaching packages with pricing
4.  **Testimonials** - Client success stories and social proof
5.  **Blog / Insights** - Latest articles and thought leadership content
6.  **Newsletter** - Lead magnet free guide download
7.  **Contact Section** - Booking calendar and contact form
8.  **Footer** - Social links and copyright

---

## 📁 Project Structure

```
Coaching Website/
├── coaching_consultant.html    # Main HTML file (all content)
├── CSS/
│   └── style.css               # Complete styling with CSS variables
├── JS/
│   └── script.js               # All interactive functionality
├── IMG/
│   ├── ER.png                  # Favicon / logo
│   ├── Evelyn Reed.png         # Hero headshot
│   └── Evelyn.png              # About page portrait
└── README.md                   # This file
```

---

## 🚀 How To Run

This is a static website, no build tools or server required:

1.  **Open Directly in Browser** - Just double click `coaching_consultant.html`
2.  **Local Development** - Open with VS Code Live Server extension for hot reload
3.  **Hosting** - Upload all files directly to any web hosting (Netlify, Vercel, AWS S3, cPanel etc.)

✅ **Zero Dependencies** - All assets are loaded from CDNs. No npm install, no build process required.

---

## ⚙️ Technical Implementation

### Technologies Used

| Component     | Technology                                 |
| ------------- | ------------------------------------------ |
| Markup        | HTML5 Semantic                             |
| Styling       | Vanilla CSS 3 with CSS Custom Properties   |
| Interactivity | Vanilla JavaScript (ES6+)                  |
| Icons         | Font Awesome 6.0                           |
| Fonts         | Google Fonts (Inter + Merriweather)        |
| No Framework  | No React, Vue or jQuery - pure native code |

### CSS Architecture

- CSS variables for theme management (colors, spacing, shadows)
- Responsive grid and flex layouts
- Mobile-first breakpoints
- Smooth transitions and hover states
- Dark mode system using `data-theme` attribute

### JavaScript Features

- Navigation menu toggle
- Dark mode switch with localStorage persistence
- Modal windows for booking and inquiries
- Scroll animations
- Form handling
- Date picker minimum date validation

---

## 🎨 Design System

### Color Palette

- Primary Blue: Professional trust-building accent color
- Neutral Grays: Clean typography hierarchy
- White / Dark backgrounds: Automatic theme switching
- Subtle shadows and depth for modern card design

### Typography

- **Headings**: Merriweather (serif) - authoritative, professional
- **Body**: Inter (sans-serif) - modern, highly readable
- Clear typographic scale with proper line heights and spacing

---

## 🔧 Customization Guide

### Updating Content

All text content is directly in `coaching_consultant.html` - edit as required:

- Update prices in Services section
- Add new testimonials
- Modify contact information
- Update biography and credentials
- Add new blog cards

### Changing Styling

All design variables are at the top of `CSS/style.css`:

```css
:root {
	--accent-blue: #2563eb;
	--bg-primary: #ffffff;
	--text-primary: #111827;
	/* etc */
}
```

Modify these values to change the entire website color scheme instantly.

---

## 📈 Business Features

This website is optimized for lead generation and conversion:

- Clear value proposition above the fold
- Multiple call-to-action placements
- Social proof throughout the page
- Low friction booking process
- Mobile optimized for on-the-go users
- Fast loading performance

---

## ✅ Browser Support

Works on all modern browsers:

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- All mobile browsers

---

## 📋 Deployment Checklist

Before going live:

1.  Update email address and phone number
2.  Replace placeholder booking system with real calendar (Calendly, Acuity etc.)
3.  Connect contact forms to actual backend / email service
4.  Replace blog images with real content
5.  Update social media links
6.  Add proper privacy policy and terms pages

---

## 📄 License

© 2026 Evelyn Reed Consulting. All rights reserved.
