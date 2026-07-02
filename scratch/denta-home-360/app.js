/**
 * Denta Home 360 - Main JavaScript Application
 * Populates content from config.js and manages UI interactivity
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Ensure config is loaded
  const config = window.clinicConfig;
  if (!config) {
    console.error("Clinic configuration not found. Please ensure config.js is loaded first.");
    return;
  }

  // 2. SVG Icon Library (inline SVGs for premium, crisp visuals)
  const SVGs = {
    tooth: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c-.6 0-1.1.2-1.5.6L9.1 4H6.5C5.1 4 4 5.1 4 6.5c0 1.2.6 2.3 1.6 2.9l-.6 6c-.2 2.3 1.3 4.4 3.6 4.9.4.1.8.1 1.2.1 1.4 0 2.7-.7 3.5-1.9.1-.2.4-.2.5 0 .8 1.2 2.1 1.9 3.5 1.9.4 0 .8 0 1.2-.1 2.3-.5 3.8-2.6 3.6-4.9l-.6-6c1-.6 1.6-1.7 1.6-2.9C20 5.1 18.9 4 17.5 4h-2.6l-1.4-1.4c-.4-.4-.9-.6-1.5-.6zm3.5 4h2c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5z"/>
    </svg>`,
    phone: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>`,
    email: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`,
    address: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`,
    clock: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>`,
    shield: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 15l-4-4 1.41-1.41L10 13.17l5.59-5.59L17 9l-7 7z"/>
    </svg>`,
    sparkles: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
    </svg>`,
    aligners: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
    </svg>`,
    child: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>`,
    sun: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM4 10.5H1v2h3v-2zm9-8h-2v3h2v-3zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.75l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zm-6.24 2.84h2v-3h-2v3zm-4.85-4.85l-1.8 1.79 1.41 1.41 1.8-1.79-1.41-1.41zM20 10.5v2h3v-2h-3zM12 5.5c-3.58 0-6.5 2.92-6.5 6.5s2.92 6.5 6.5 6.5 6.5-2.92 6.5-6.5-2.92-6.5-6.5-6.5z"/>
    </svg>`,
    checkmark: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>`,
    facebook: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
    </svg>`,
    instagram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>`,
    twitter: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>`,
    star: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>`,
    "tooth-implant": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 10c0-3.31-2.69-6-6-6S7 6.69 7 10c0 1.22.37 2.36 1 3.31v3.19h8v-3.19c.63-.95 1-2.09 1-3.31zm-6 10h-2v-2h2v2zm0-3h-2v-1h2v1zM8.5 10c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5c0 1.54-.78 2.9-1.97 3.71l-.53.36v2.93h-4v-2.93l-.53-.36C9.28 12.9 8.5 11.54 8.5 10z"/>
    </svg>`,
    family: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>`,
    tech: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
    </svg>`,
    comfort: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>`,
    finance: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>`
  };

  const getSVG = (name) => SVGs[name] || SVGs.tooth;

  // 3. Populate Logo & Basic Brand Meta
  const logoElements = document.querySelectorAll("#nav-logo");
  logoElements.forEach(el => {
    el.innerHTML = `${getSVG("tooth")} <span>${config.name}</span>`;
  });
  
  // Set Footer Year and Clinic Name
  document.getElementById("footer-clinic-name").textContent = config.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  // Populate Header CTA Phone
  const phoneWrapper = document.querySelector(".nav-phone-wrapper");
  phoneWrapper.innerHTML = `
    <a href="tel:${config.phoneRaw}" class="nav-phone" id="nav-phone-btn">
      ${getSVG("phone")}
      <span>${config.phone}</span>
    </a>
  `;

  // 4. Render Hero Section
  const heroGrid = document.getElementById("hero-grid");
  heroGrid.innerHTML = `
    <div class="hero-content">
      <span class="badge">${config.tagline}</span>
      <h1 class="hero-title">A Modern Care Home for <span>Your Family's Smile</span></h1>
      <p class="hero-text">Welcome to Denta Home 360. We offer a full spectrum of dental treatments using modern procedures in a clean, state-of-the-art office.</p>
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Book Consultation</a>
        <a href="#services" class="btn btn-outline">Explore Services</a>
      </div>
    </div>
    <div class="hero-image-wrapper">
      <div class="hero-image-container">
        <img src="${config.gallery[2].url}" alt="Denta Home 360 Professional Dentist" loading="eager">
      </div>
      <div class="hero-floating-badge">
        <div class="badge-icon">${getSVG("checkmark")}</div>
        <div class="badge-info">
          <h4>Friendly Care</h4>
          <p>Kids & Adults Welcome</p>
        </div>
      </div>
    </div>
  `;

  // 5. Render Benefits Grid
  const benefitsGrid = document.getElementById("benefits-grid");
  benefitsGrid.innerHTML = config.benefits.map(benefit => `
    <div class="benefit-card">
      <div class="benefit-icon">
        ${getSVG(benefit.icon)}
      </div>
      <h3 class="benefit-title">${benefit.title}</h3>
      <p class="benefit-desc">${benefit.description}</p>
    </div>
  `).join('');

  // 6. Render Services Grid
  const servicesGrid = document.getElementById("services-grid");
  servicesGrid.innerHTML = config.services.map(service => `
    <div class="service-card" id="service-card-${service.id}">
      <div class="service-icon">
        ${getSVG(service.icon)}
      </div>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.description}</p>
    </div>
  `).join('');

  // 7. Render About Section
  const aboutGrid = document.getElementById("about-grid");
  aboutGrid.innerHTML = `
    <div class="about-images">
      <div class="about-img-main">
        <img src="${config.gallery[0].url}" alt="Modern dental lobby" loading="lazy">
      </div>
      <div class="about-img-sub">
        <img src="${config.gallery[1].url}" alt="State of the art treatment room" loading="lazy">
      </div>
    </div>
    <div class="about-content">
      <span class="badge">About Denta Home 360</span>
      <h2 class="section-title">Your Health & Comfort is Our Main Focus</h2>
      <p class="section-subtitle" style="margin: 0 0 24px 0; text-align: left;">
        We aim to provide dental treatments that are comfortable, safe, and of exceptional quality. From digital radiography and low radiation X-rays to state-of-the-art dental chairs, we ensure you receive premium dental services.
      </p>
      <ul class="about-list">
        <li class="about-item">${getSVG("checkmark")} Comfortable environment</li>
        <li class="about-item">${getSVG("checkmark")} Experienced dentists</li>
        <li class="about-item">${getSVG("checkmark")} Digital dental tools</li>
        <li class="about-item">${getSVG("checkmark")} Children friendly staff</li>
        <li class="about-item">${getSVG("checkmark")} Convenient locations</li>
        <li class="about-item">${getSVG("checkmark")} Low radiation X-Rays</li>
      </ul>
      <a href="#contact" class="btn btn-primary">Schedule a Visit</a>
    </div>
  `;

  // 8. Render Gallery Grid
  const galleryGrid = document.getElementById("gallery-grid");
  galleryGrid.innerHTML = config.gallery.map((item, index) => `
    <div class="gallery-item" data-index="${index}">
      <img src="${item.url}" alt="${item.alt}" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-overlay-icon">
          <svg viewBox="0 0 24 24" width="24" height="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </div>
        <h4 class="gallery-title">${item.alt}</h4>
        <p class="gallery-caption">${item.caption}</p>
      </div>
    </div>
  `).join('');

  // 9. Render Testimonials
  const testimonialsSlider = document.getElementById("testimonials-slider");
  testimonialsSlider.innerHTML = config.testimonials.map((test, index) => `
    <div class="testimonial-card ${index === 0 ? 'active' : ''}" data-slide="${index}">
      <p class="testimonial-quote">${test.quote}</p>
      <h4 class="testimonial-author">${test.author}</h4>
      <p class="testimonial-role">${test.role}</p>
    </div>
  `).join('');

  // Render Testimonial Navigation Dots
  const dotsContainer = document.getElementById("testimonials-dots");
  dotsContainer.innerHTML = config.testimonials.map((_, index) => `
    <span class="dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
  `).join('');

  // 10. Render Contact Details & Location
  const contactInfo = document.getElementById("contact-info");
  contactInfo.innerHTML = `
    <div class="contact-details">
      <div class="contact-item">
        <div class="contact-icon">${getSVG("phone")}</div>
        <div class="contact-text">
          <h4>Phone Number</h4>
          <a href="tel:${config.phoneRaw}">${config.phone}</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">${getSVG("email")}</div>
        <div class="contact-text">
          <h4>Email Address</h4>
          <a href="mailto:${config.email}">${config.email}</a>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">${getSVG("address")}</div>
        <div class="contact-text">
          <h4>Clinic Location</h4>
          <p>${config.address}</p>
        </div>
      </div>
    </div>
    
    <div class="hours-card">
      <h4>${getSVG("clock")} Opening Hours</h4>
      ${config.hours.map(hour => `
        <div class="hours-row">
          <span class="hours-days">${hour.days}</span>
          <span class="hours-time">${hour.time}</span>
        </div>
      `).join('')}
    </div>
  `;

  // Render Google Maps embed
  const mapContainer = document.getElementById("map-container");
  mapContainer.innerHTML = `
    <iframe 
      src="${config.mapEmbedUrl}" 
      width="100%" 
      height="100%" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      title="Google Map location of Denta Home 360">
    </iframe>
  `;

  // 11. Render Footer Brand & Menus
  const footerGrid = document.getElementById("footer-grid");
  footerGrid.innerHTML = `
    <div class="footer-brand">
      <h3>${config.name}</h3>
      <p>${config.tagline}. Creating bright, healthy smiles for your entire family in our comfortable modern clinic.</p>
      <div class="social-links">
        <a href="#" class="social-btn" aria-label="Facebook">${getSVG("facebook")}</a>
        <a href="#" class="social-btn" aria-label="Instagram">${getSVG("instagram")}</a>
        <a href="#" class="social-btn" aria-label="Twitter">${getSVG("twitter")}</a>
      </div>
    </div>
    
    <div class="footer-links">
      <h4>Quick Links</h4>
      <ul class="footer-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">Why Us</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
    
    <div class="footer-contact">
      <h4>Contact Info</h4>
      <div class="footer-contact-details">
        <div class="footer-contact-item">
          ${getSVG("address")}
          <span>${config.address}</span>
        </div>
        <div class="footer-contact-item">
          ${getSVG("phone")}
          <span>${config.phone}</span>
        </div>
        <div class="footer-contact-item">
          ${getSVG("email")}
          <span>${config.email}</span>
        </div>
      </div>
    </div>
  `;


  /* ==========================================================================
     INTERACTIVITY & LOGIC
     ========================================================================== */

  // 1. Sticky Navbar
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Mobile Menu Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      
      // Update Active Navigation Item Link
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // 3. Highlighting Nav Link on Scroll (Intersection Observer)
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // triggers when section occupies main center of viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // 4. Gallery Lightbox Logic
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  
  let currentImageIndex = 0;

  const showImage = (index) => {
    const item = config.gallery[index];
    if (!item) return;
    
    lightboxImg.src = item.url;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = item.caption;
    currentImageIndex = index;
  };

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const index = parseInt(item.getAttribute("data-index"), 10);
      showImage(index);
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // Disable scroll when modal is active
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // Restore scroll
  };

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  const nextImage = () => {
    let nextIndex = currentImageIndex + 1;
    if (nextIndex >= config.gallery.length) {
      nextIndex = 0;
    }
    showImage(nextIndex);
  };

  const prevImage = () => {
    let prevIndex = currentImageIndex - 1;
    if (prevIndex < 0) {
      prevIndex = config.gallery.length - 1;
    }
    showImage(prevIndex);
  };

  lightboxNext.addEventListener("click", (e) => {
    e.stopPropagation();
    nextImage();
  });
  
  lightboxPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    prevImage();
  });

  // Keyboard navigation for Lightbox
  window.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      nextImage();
    } else if (e.key === "ArrowLeft") {
      prevImage();
    }
  });

  // 5. Testimonial Slider Logic
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");
  let currentTestimonialIndex = 0;
  let testimonialInterval;

  const showTestimonial = (index) => {
    testimonialCards.forEach(card => card.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    testimonialCards[index].classList.add("active");
    dots[index].classList.add("active");
    currentTestimonialIndex = index;
  };

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-slide"), 10);
      showTestimonial(index);
      resetTestimonialTimer();
    });
  });

  const nextTestimonial = () => {
    let nextIndex = currentTestimonialIndex + 1;
    if (nextIndex >= testimonialCards.length) {
      nextIndex = 0;
    }
    showTestimonial(nextIndex);
  };

  const startTestimonialTimer = () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  };

  const resetTestimonialTimer = () => {
    clearInterval(testimonialInterval);
    startTestimonialTimer();
  };

  startTestimonialTimer();

  // 6. Contact Form Logic & Custom Animation Validation
  const contactForm = document.getElementById("clinic-contact-form");
  const notification = document.getElementById("notification");
  const submitBtn = document.getElementById("btn-submit-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulate API sending delay
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    submitBtn.style.opacity = "0.7";

    setTimeout(() => {
      // Show Success Toast
      notification.classList.add("active");
      
      // Reset Submit Button
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
      submitBtn.style.opacity = "";
      
      // Reset Form Inputs
      contactForm.reset();
      
      // Automatically hide notification toast
      setTimeout(() => {
        notification.classList.remove("active");
      }, 4000);

    }, 1500);
  });
});
