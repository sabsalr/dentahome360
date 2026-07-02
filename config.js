/**
 * Denta Home 360 - Website Configuration File
 * 
 * You can easily edit any text, service, or image here.
 * Changes made to this file will update the website instantly.
 * To add new images, place them in the 'images/' folder and update the path here.
 */

window.clinicConfig = {
  // General Clinic Info
  name: "Denta Home 360",
  tagline: "Your family dentist",
  logoText: "Denta Home 360", // Text logo or fallback
  phone: "+91- 7896541231",
  phoneRaw: "998745677", // For tel: links
  email: "care@dentahome360.com",
  address: "saleena flour mill, court road alathur",
  
  // Google Maps Embed Link
  // You can replace this src value with your clinic's actual Google Maps share embed link
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.1220749197814!2d76.53494428489827!3d10.647623434482583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba80b2ce9fb4a69%3A0x7b7a2e180e5c1551!2sDenta%20home%20360!5e0!3m2!1sen!2sin!4v1782211472598!5m2!1sen!2sin",


//
  // Opening Hours
  hours: [
    { days: "Monday - sunday", time: "9:00 AM - 7:00 PM" },
      ],

  // Value Propositions (Why Choose Us)
  benefits: [
    {
      title: "Family Centered",
      description: "Gentle dental care designed for every stage of life, from kids' first visits to seniors' specialized needs.",
      icon: "family"
    },
    {
      title: "Modern Technology",
      description: "Equipped with state-of-the-art 3D imaging, digital X-rays, and laser systems for precise, painless treatments.",
      icon: "tech"
    },
    {
      title: "Comfortable Environment",
      description: "Relax in our spa-like atmosphere with cozy blankets, noise-canceling headphones, and ceiling entertainment screens.",
      icon: "comfort"
    },
    {
      title: "Flexible Payment Plans",
      description: "We accept most insurances and offer in-house payment solutions to keep your family's smiles affordable.",
      icon: "finance"
    }
  ],

  // Dental Services Offered
  services: [
    {
      id: "preventative",
      title: "Preventative Dentistry",
      description: "Routine checkups, cleanings, digital X-rays, and fluoride treatments to catch problems early and preserve your natural smile.",
      icon: "shield"
    },
    {
      id: "cosmetic",
      title: "Cosmetic & Veneers",
      description: "Transform your smile with porcelain veneers, cosmetic bonding, and personalized smile makeovers tailored to your features.",
      icon: "sparkles"
    },
    {
      id: "implants",
      title: "Dental Implants",
      description: "Restore both appearance and chewing function with premium titanium implants that look, feel, and function like real teeth.",
      icon: "tooth-implant"
    },
    {
      id: "ortho",
      title: "Clear Aligners & Ortho",
      description: "Straighten your teeth discreetly with modern clear aligner therapy designed to fit seamlessly into your daily lifestyle.",
      icon: "aligners"
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      description: "Creating positive, fun dental habits early. Our friendly staff knows how to make dental care exciting and stress-free for kids.",
      icon: "child"
    },
    {
      id: "whitening",
      title: "Professional Whitening",
      description: "Safe, advanced in-office teeth whitening systems that brighten your teeth by several shades in just a single appointment.",
      icon: "sun"
    }
  ],

  // Gallery Images
  // You can easily edit names and paths below or add new entries
  gallery: [
    {
      url: "images/clinic_lobby.png",
      alt: "Denta Home 360 Lobby",
      caption: "Our modern, welcoming reception area designed for your comfort."
    },
    {
      url: "images/treatment_room.png",
      alt: "Dental Care Treatment Room",
      caption: "Equipped with state-of-the-art dental equipment and sanitization."
    },
    {
      url: "images/hero_dentist.png",
      alt: "Friendly Dental Consultation",
      caption: "Experienced dentists dedicated to your family's oral health."
    },
    {
      url: "images/family_smile.png",
      alt: "Happy Patients",
      caption: "We take pride in bringing healthy, bright smiles to families."
    }

  ],

  // Patient Testimonials
  testimonials: [
    {
      quote: "The staff at Denta Home 360 is incredibly gentle. My children actually look forward to their dental appointments now!",
      author: "Sarah Jenkins",
      role: "Parent of 2"
    },
    {
      quote: "State of the art clinic. I got a dental implant done here and the process was virtually painless. Best dentist in town by far.",
      author: "Marcus Chen",
      role: "Implant Patient"
    },
    {
      quote: "Highly recommend for anyone with dental anxiety. They explain everything, play relaxing music, and take their time.",
      author: "Elena Rostova",
      role: "General Care Patient"
    }
  ]
};
