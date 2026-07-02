# Implementation Plan - Denta Home 360 Website (Vanilla HTML/CSS/JS Pivot)

Due to Node.js/NPM not being installed in the environment, we have updated the implementation plan to build a **premium single-page HTML, CSS, and JS website**. 

This approach is highly advantageous:
1. **Zero Setup Required:** You can double-click `index.html` to run the website instantly in any browser. No installation or compilation steps are needed.
2. **Easy Content Customization:** We will structure the data inside a `config.js` file bound to the window object. This avoids browser CORS blocks when opening the file locally via `file://`.
3. **Rich Aesthetics & Premium Feel:** We will use vanilla CSS with CSS variables, modern layout grids, smooth scrolling, and custom micro-animations.

## Proposed Website Features & Design
1. **Color Palette:** HSL-based teal/emerald theme with dark and light variants, creating a high-end medical/wellness atmosphere.
2. **Hero Section:** Tagline "Your family dentist", clean Call to Action (CTA), and professional dental clinic photos.
3. **Services Section:** Dynamic grid of clinic services loaded automatically from `config.js`.
4. **Gallery Section:** Responsive grid of photos with an integrated lightbox modal to view full-resolution images on click.
5. **About Section:** Information highlighting the clinic's core strengths.
6. **Contact Section:** 
   - Address, Phone, Email, Hours.
   - Interactive contact form with input validation and feedback animations.
   - Google Maps iframe integration.
7. **Footer:** Sleek copyright, social links, and navigation shortcuts.

---

## Project Structure
We will create the project in `C:\Users\chittoor\.gemini\antigravity\scratch\denta-home-360`:

```text
denta-home-360/
├── images/
│   ├── hero_dentist.jpg     # Generated high-quality image
│   ├── clinic_lobby.jpg     # Generated high-quality image
│   ├── treatment_room.jpg   # Generated high-quality image
│   └── family_smile.jpg     # Generated high-quality image
├── config.js                # <--- Editable configuration file (no CORS issues)
├── app.js                   # Main logic (DOM creation, gallery lightbox, contact form)
├── style.css                # Premium CSS styling
├── index.html               # Main entry page
└── favicon.svg              # SVG dental icon
```

---

## Proposed Changes

### Configuration
#### [NEW] [config.js](file:///C:/Users/chittoor/.gemini/antigravity/scratch/denta-home-360/config.js)
Stores all dental clinic details:
```javascript
window.clinicConfig = {
  name: "Denta Home 360",
  tagline: "Your family dentist",
  phone: "+1 (555) 123-4567",
  email: "info@dentahome360.com",
  address: "123 Dental Care Blvd, Suite 100, Health City, HC 12345",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=...", 
  hours: [ ... ],
  services: [ ... ],
  gallery: [ ... ]
};
```

### Main Entry & CSS
#### [NEW] [index.html](file:///C:/Users/chittoor/.gemini/antigravity/scratch/denta-home-360/index.html)
Provides the markup and loads the scripts.
#### [NEW] [style.css](file:///C:/Users/chittoor/.gemini/antigravity/scratch/denta-home-360/style.css)
Main styling sheet utilizing custom variables, modern layout grids, flexbox, and keyframe animations.
#### [NEW] [app.js](file:///C:/Users/chittoor/.gemini/antigravity/scratch/denta-home-360/app.js)
Renders configuration data and controls user interactions (lightbox, scroll-to-top, mobile menu toggle, contact form submission UI feedback).

---

## Verification Plan

### Manual Verification
- Verify that double-clicking `index.html` loads the site correctly without CORS/module errors.
- Test responsive viewports on desktop and mobile.
- Verify that editing `config.js` updates the website content dynamically.
- Check form validation and gallery lightbox functionality.
