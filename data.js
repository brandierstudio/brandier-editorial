/**
 * ANAS BIN MEHBOOB — PORTFOLIO DATA STORE
 * All projects, YouTube videos, services, process steps, and social links
 * Configured for anas.brandierstudio.online
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Anas Bin Mehboob",
    title: "AI Advertising Pioneer & Creative Director",
    tagline: "AI UGC Ads • AI Commercials • 3D Product Motion • Creative Direction",
    bio: "Co-founder & Chief Growth Officer at Brandier Studio. Pioneering the convergence of Generative AI commercial pipelines, high-converting AI UGC ads, and 3D product motion to scale ambitious E-commerce & SaaS brands globally.",
    availability: "Available for select commissions & commercial direction",
    location: "Global / Remote",
    email: "brandierstudio@gmail.com",
    website: "https://anas.brandierstudio.online",
    brandierTv: "https://tv.brandierstudio.online",
    mainAgency: "https://brandierstudio.online",
    aboutVideoId: "f0Asztss5_o",
    whatsapp: "+1234567890",
    socials: {
      instagram: "https://www.instagram.com/anas.mehboob.ai/",
      linkedin: "https://www.linkedin.com/in/anasmehboob/",
      facebook: "https://www.facebook.com/anas.bin.mehboob",
      x: "https://x.com/AnasbinMehboob",
      youtube: "https://www.youtube.com/@AnasBinMehboob"
    }
  },

  // Category filter list
  categories: [
    { id: "all", label: "All Work", dotColor: "#141414" },
    { id: "3d-motion", label: "3D Product Animation", dotColor: "#06B6D4" },
    { id: "ai-motion", label: "AI Motion Graphics", dotColor: "#8B5CF6" },
    { id: "ai-ugc", label: "AI UGC Ads", dotColor: "#F43F5E" },
    { id: "commercials", label: "Commercials", dotColor: "#F59E0B" }
  ],

  // Complete Projects & YouTube Video Showcase Library
  // Includes 16:9 Landscape Commercials and 9:16 Vertical Shorts
  projects: [
    // 01. Spotlight Anthem
    {
      id: "proj-01",
      title: "AI ADS: Real People / Real Feelings / Real Results",
      category: "AI Motion Graphics",
      categorySlug: "ai-motion",
      client: "Brandier Studio Commercial",
      year: "2026",
      featured: true,
      description: "Official brand intro commercial directed by Anas Bin Mehboob. Pioneering real people, real feelings, and real results through the fusion of AI UGC Ads, cinematic AI Motion Graphics, and photoreal 3D Animation.",
      youtubeId: "DVjIMppmh2A",
      thumbnailImage: "assets/brand-intro-thumbnail.jpg",
      duration: "01:00",
      aspectRatio: "16/9",
      tags: ["AI UGC Ads", "AI Motion Graphics", "3D Animation", "Brand Intro", "Commercials"],
      accentColor: "#1A233A",
      caseStudy: {
        role: "Creative Direction, Generative AI Pipelines, 3D Motion, Sound Design",
        timeline: "Brand Showcase 2026",
        overview: "Official Brandier Studio commercial showreel spotlighting next-generation advertising: AI UGC video ads featuring genuine human emotion, high-end 3D product rendering, and scroll-stopping motion graphics engineered for maximum performance and conversion.",
        deliverables: ["Official Brand Commercial Film (DVjIMppmh2A)", "AI UGC Ad Creatives (Perfume, Apparel, Lifestyle)", "High-Converting 9:16 Social Cutdowns", "4K Key Commercial Visuals"]
      }
    },

    // 02. BYD Automotive (16:9)
    {
      id: "proj-byd",
      title: "BYD: Future Electric Automotive Spec",
      category: "Commercials",
      categorySlug: "commercials",
      client: "BYD Automotive Spec",
      year: "2026",
      featured: false,
      description: "Cinematic commercial spec exploring sleek vehicle contours, aerodynamic airflows, and futuristic electric mobility aesthetics.",
      youtubeId: "aMb5mz7su8E",
      duration: "00:45",
      aspectRatio: "16/9",
      tags: ["Automotive", "3D Motion", "Electric Vehicle", "Commercial", "Cinema 4D"],
      accentColor: "#0E1E2D",
      caseStudy: {
        role: "3D Animation, Lighting Rigs, Automotive Shaders",
        timeline: "10 Days",
        overview: "Exploration of next-generation electric automotive design language with high-contrast studio rim lighting and kinetic tracking.",
        deliverables: ["1x 45s Commercial Film", "High-Resolution Key Stills"]
      }
    },

    // 03. Pak Fragrance (16:9)
    {
      id: "proj-pak-fragrance",
      title: "Pak Fragrance: Heritage Scent Commercial",
      category: "AI Motion Graphics",
      categorySlug: "ai-motion",
      client: "Luxury Fragrance Brand",
      year: "2026",
      featured: false,
      description: "Ethereal visual poetry capturing traditional oriental scent notes through flowing crystalline fluids and organic golden lighting.",
      youtubeId: "WYS_mXzY_2Q",
      duration: "00:40",
      aspectRatio: "16/9",
      tags: ["AI Motion", "Fragrance", "Liquid Art", "Brand Film", "Gold Caustics"],
      accentColor: "#2C1B10",
      caseStudy: {
        role: "Creative Direction, Fluid Neural Synthesis, Color Grade",
        timeline: "1 Week",
        overview: "Visualizing intangible aromatic warmth through undulating iridescent golden fluids and floating botanical micro-elements.",
        deliverables: ["1x 40s Master Film", "Social Cutdowns"]
      }
    },

    // 04. Dior Spec (16:9)
    {
      id: "proj-dior-spec",
      title: "Dior Spec: Haute Parfumerie Film",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Luxury Beauty Spec",
      year: "2026",
      featured: false,
      description: "High-fashion fragrance spot featuring dramatic Parisian lighting, golden reflections, and timeless elegance.",
      youtubeId: "FNH-5yhkLZs",
      duration: "00:50",
      aspectRatio: "16/9",
      tags: ["Haute Couture", "Commercial", "Cinematic", "Parisian Luxury"],
      accentColor: "#221C2B",
      caseStudy: {
        role: "Commercial Direction, Style Frames, Finishing",
        timeline: "2 Weeks",
        overview: "High-end commercial visual exploring French haute parfumerie aesthetics, crystal bottle caustics, and couture mood.",
        deliverables: ["1x 50s Director's Cut", "OOH Campaign Stills"]
      }
    },

    // 05. Under Canopy (16:9)
    {
      id: "proj-under-canopy",
      title: "Under Canopy: Wilderness Outdoor Spec",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Outdoor Adventure Brand",
      year: "2026",
      featured: false,
      description: "Raw wilderness atmosphere highlighting technical shelter fabrics resisting rainstorms beneath deep forest canopies.",
      youtubeId: "S2t1Q1qkt84",
      duration: "00:35",
      aspectRatio: "16/9",
      tags: ["Outdoor Gear", "Cinematography", "Atmospheric", "Weatherproof 3D"],
      accentColor: "#132117",
      caseStudy: {
        role: "Atmospheric Simulation, Sound Design, Grading",
        timeline: "8 Days",
        overview: "Capturing technical weather protection through intense rainfall dynamics, deep forest mist, and tactile nylon close-ups.",
        deliverables: ["1x 35s Commercial", "Social Cutdowns"]
      }
    },

    // 06. Amped (16:9)
    {
      id: "proj-amped",
      title: "Amped: High-Octane Performance Energy",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Energy Beverage Brand",
      year: "2026",
      featured: false,
      description: "Fast-paced kinetic commercial combining rapid macro droplets, electrifying transitions, and neon particle bursts.",
      youtubeId: "orijUTH3Oyc",
      duration: "00:30",
      aspectRatio: "16/9",
      tags: ["Kinetic Motion", "Energy Drink", "Extreme Sports", "Fast Cuts"],
      accentColor: "#1F2309",
      caseStudy: {
        role: "Kinetic Editing, Particle FX, Audio Mix",
        timeline: "1 Week",
        overview: "Ultra high-energy commercial engineered for Gen-Z sports enthusiasts with rhythmic cuts on every beat.",
        deliverables: ["1x 30s Master Commercial", "Story Cutdowns"]
      }
    },

    // 07. BookNationMedia (16:9)
    {
      id: "proj-booknation",
      title: "BookNationMedia: SaaS Kinetic Platform",
      category: "AI Motion Graphics",
      categorySlug: "ai-motion",
      client: "BookNationMedia SaaS",
      year: "2026",
      featured: false,
      description: "Modern SaaS platform explainer merging dynamic typography, dashboard UI fly-throughs, and crisp generative motion.",
      youtubeId: "k7RPSs6QWTQ",
      duration: "00:45",
      aspectRatio: "16/9",
      tags: ["SaaS Ad", "Kinetic Typography", "Tech Platform", "Product Explainer"],
      accentColor: "#1A1A2E",
      caseStudy: {
        role: "Motion Design, UI Compositing, Voice Direction",
        timeline: "5 Days",
        overview: "Transforming complex media platform software features into an engaging, high-converting product commercial.",
        deliverables: ["1x 45s Product Commercial", "Interactive Ad Variations"]
      }
    },

    // 08. Zafrani Honey Nuts (16:9)
    {
      id: "proj-zafrani",
      title: "Zafrani Honey Nuts: Gourmet Organic Food",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Organic Gourmet Foods",
      year: "2026",
      featured: false,
      description: "Mouth-watering macro commercial showcasing golden amber saffron honey cascading over fresh roasted nuts.",
      youtubeId: "U1dOMQPALxg",
      duration: "00:35",
      aspectRatio: "16/9",
      tags: ["Gourmet Food", "Organic Honey", "Macro 3D", "Delicious Pacing"],
      accentColor: "#2C1B06",
      caseStudy: {
        role: "Fluid Simulation, Macro Lighting, Sound Design",
        timeline: "1 Week",
        overview: "Viscous fluid physics simulating pure saffron honey drizzle across textured organic almonds and cashews.",
        deliverables: ["1x 35s Master Ad", "Social Square & Story Cuts"]
      }
    },

    // 09. Siwella 3D Cosmetic Bottle (9:16)
    {
      id: "proj-siwella-3d",
      title: "Siwella: 3D Cosmetic Bottle Rendering",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Siwella Cosmetics",
      year: "2026",
      featured: false,
      description: "Photorealistic 3D bottle spin with caustics, serum refraction, and precision metallic dropper mechanics.",
      youtubeId: "0AX6C1HSDL8",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["3D Product", "Cosmetics", "Glass Shaders", "Vertical 9:16"],
      accentColor: "#1A252E",
      caseStudy: {
        role: "3D CAD Modeling, Refraction Shading, Vertical Direction",
        timeline: "4 Days",
        overview: "Vertical format commercial designed for Instagram Reels and TikTok beauty shoppers.",
        deliverables: ["9:16 Master Ad", "4K Transparent Alpha Stills"]
      }
    },

    // 10. Black Oud (9:16)
    {
      id: "proj-black-oud",
      title: "Black Oud: Luxury Arabian Parfumerie",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Haute Arabian Parfums",
      year: "2026",
      featured: false,
      description: "Moody black flacon enveloped in swirling gold flecks and rich incense smoke simulations.",
      youtubeId: "bWWq6M_M248",
      duration: "00:20",
      aspectRatio: "9/16",
      tags: ["Black Oud", "Arabian Luxury", "3D Smoke", "Vertical 9:16"],
      accentColor: "#111115",
      caseStudy: {
        role: "Fluid Dynamics, Smoke Sim, Gold Foil Rendering",
        timeline: "4 Days",
        overview: "Ultra-luxury dark aesthetic spotlighting rare oriental agarwood oud.",
        deliverables: ["9:16 Reel Commercial"]
      }
    },

    // 11. AI UGC Hook (9:16)
    {
      id: "proj-ai-ugc-hook",
      title: "AI UGC Hook: High-Converting Creator Ads",
      category: "AI UGC Ads",
      categorySlug: "ai-ugc",
      client: "Performance DTC Brand",
      year: "2026",
      featured: false,
      description: "Hyper-realistic synthetic creator hook engineered to stop scrolling feeds within 1.2 seconds.",
      youtubeId: "xsiHXV3vzV0",
      duration: "00:30",
      aspectRatio: "9/16",
      tags: ["AI UGC", "TikTok Hook", "Scroll-Stopper", "Vertical 9:16"],
      accentColor: "#2A141A",
      caseStudy: {
        role: "AI Avatar Directing, Script Writing, CTR Optimization",
        timeline: "2 Days",
        overview: "Testing synthetic face micro-expressions and voice naturalness to maximize ROAS on paid social channels.",
        deliverables: ["4x Hook Iterations (9:16)"]
      }
    },

    // 12. Kinetic Motion Graphics Ad (9:16)
    {
      id: "proj-motion-ad",
      title: "Kinetic Motion Graphics Ad",
      category: "AI Motion Graphics",
      categorySlug: "ai-motion",
      client: "Brandier Studio",
      year: "2026",
      featured: false,
      description: "Explosive motion design test weaving typographic momentum with dynamic product reveals.",
      youtubeId: "4QuYLFgA0_Y",
      duration: "00:20",
      aspectRatio: "9/16",
      tags: ["Motion Design", "Visual Rhythm", "Kinetic Cuts", "Vertical 9:16"],
      accentColor: "#221A2E",
      caseStudy: {
        role: "Kinetic Typography, Neural Frame Generation",
        timeline: "3 Days",
        overview: "Pacing experiment testing fast optical jumps to preserve viewer engagement past 3 seconds.",
        deliverables: ["Vertical Short 9:16"]
      }
    },

    // 13. AI UGC Creator Lifestyle (9:16)
    {
      id: "proj-ugc-lifestyle",
      title: "AI UGC Creator Lifestyle Ad",
      category: "AI UGC Ads",
      categorySlug: "ai-ugc",
      client: "Consumer Lifestyle Brand",
      year: "2026",
      featured: false,
      description: "Conversational UGC creator demo testing multiple angle variations for high CTR Meta and TikTok campaigns.",
      youtubeId: "Uzxj6xVB610",
      duration: "00:30",
      aspectRatio: "9/16",
      tags: ["AI Creator", "Lifestyle Hook", "Meta Ads", "Vertical 9:16"],
      accentColor: "#1B2822",
      caseStudy: {
        role: "Prompt Architecture, Voice Synthesis, Multi-angle Cut",
        timeline: "3 Days",
        overview: "Generating organic creator living room environments without shooting sets or physical cameras.",
        deliverables: ["Paid Social Creative Pack"]
      }
    },

    // 14. Dynamic Unboxing (9:16)
    {
      id: "proj-unboxing",
      title: "Dynamic High-Energy Unboxing Experience",
      category: "AI UGC Ads",
      categorySlug: "ai-ugc",
      client: "DTC Packaging Spec",
      year: "2026",
      featured: false,
      description: "Fast tactile unboxing sequence highlighting premium packaging textures and instant customer delight.",
      youtubeId: "C8-t7vVh0Xk",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Unboxing", "Packaging", "Tactile ASMR", "Vertical 9:16"],
      accentColor: "#1E1A29",
      caseStudy: {
        role: "Creative Sequencing, ASMR Sound Engineering",
        timeline: "2 Days",
        overview: "Sensory-rich unboxing ad demonstrating unboxing joy and product arrival excitement.",
        deliverables: ["Vertical Story Ad (9:16)"]
      }
    },

    // 15. Sleek Minimalist Perfume (9:16)
    {
      id: "proj-minimal-perfume",
      title: "Sleek Minimalist Perfume Visual",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Boutique Fragrance Studio",
      year: "2026",
      featured: false,
      description: "Scandinavian minimalist product visual with soft studio shadows and pure frosted glass textures.",
      youtubeId: "Q5UJjGcmJV0",
      duration: "00:20",
      aspectRatio: "9/16",
      tags: ["Minimal 3D", "Perfume Bottle", "Clean Aesthetics", "Vertical 9:16"],
      accentColor: "#15181C",
      caseStudy: {
        role: "Minimalist Set Design, Lighting, Octane Shaders",
        timeline: "3 Days",
        overview: "Less is more: highlighting pure geometry, glass caustics, and fine mist spray.",
        deliverables: ["9:16 Vertical Cut"]
      }
    },

    // 16. Authentic UGC Review (9:16)
    {
      id: "proj-ugc-review",
      title: "Authentic UGC Creator Review Hook",
      category: "AI UGC Ads",
      categorySlug: "ai-ugc",
      client: "E-Commerce Beauty Brand",
      year: "2026",
      featured: false,
      description: "Believable creator testimonial focusing on real problem-solution framing with organic sound design.",
      youtubeId: "USamVe29nBU",
      duration: "00:30",
      aspectRatio: "9/16",
      tags: ["Authentic UGC", "Product Review", "High ROAS", "Vertical 9:16"],
      accentColor: "#2D1C1B",
      caseStudy: {
        role: "AI Human Performance Direction, Script Writing",
        timeline: "3 Days",
        overview: "Engineered to mimic user-filmed smartphone video with natural vocal imperfections.",
        deliverables: ["High-Converting Hook Suite"]
      }
    },

    // 17. Gourmet Pistachio Delights (9:16)
    {
      id: "proj-pistachio",
      title: "Gourmet Pistachio Delights Motion",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Artisan Bakery Brand",
      year: "2026",
      featured: false,
      description: "Crispy textured biscuit break in slow motion with roasted pistachio crumbs flying through warm lighting.",
      youtubeId: "mUFrhoMTfPs",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Food Motion", "Culinary 3D", "Slow Motion", "Vertical 9:16"],
      accentColor: "#182414",
      caseStudy: {
        role: "Fracture Dynamics, Texture Baking, High-Speed Lighting",
        timeline: "4 Days",
        overview: "Simulating physical cookie breakage with hyper-detailed crumb scattering.",
        deliverables: ["Vertical Commercial (9:16)"]
      }
    },

    // 18. Neo-Tokyo Japanese Aesthetic (9:16)
    {
      id: "proj-japanese-ad",
      title: "Neo-Tokyo Japanese Aesthetic Ad",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Streetwear & Beverage Spec",
      year: "2026",
      featured: false,
      description: "Sleek Tokyo urban cinematography with vibrant neon reflections and high-speed rhythmic cuts.",
      youtubeId: "T4tT3Os2AK0",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Tokyo Vibes", "Kanji Kinetic", "Cyberpunk Light", "Vertical 9:16"],
      accentColor: "#1A0E2A",
      caseStudy: {
        role: "Style Direction, Neon Volumetrics, Soundscape",
        timeline: "4 Days",
        overview: "Cinematic homage to Shinjuku night aesthetics designed for youth culture brands.",
        deliverables: ["Vertical Reel 9:16"]
      }
    },

    // 19. Gourmet Arabic Shawarma (9:16)
    {
      id: "proj-shawarma",
      title: "Gourmet Arabic Shawarma Culinary Ad",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Middle Eastern Streetfood",
      year: "2026",
      featured: false,
      description: "Sizzling meat carving, garlic toum spread, and fire-charred pita wrap crafted for food brand campaigns.",
      youtubeId: "GMDEc47e3uY",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Culinary Video", "Street Food", "Flame Grilled", "Vertical 9:16"],
      accentColor: "#2A180C",
      caseStudy: {
        role: "Macro Food Styling, Smoke Simulation, Rhythm Pacing",
        timeline: "3 Days",
        overview: "Highlighting texture, sizzle, and aroma through macro lens choreography.",
        deliverables: ["Food Commercial (9:16)"]
      }
    },

    // 20. Haute Parfumerie Gold Bottle (9:16)
    {
      id: "proj-luxury-perfume-gold",
      title: "Haute Parfumerie Gold Bottle Commercial",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Prestige Fragrance House",
      year: "2026",
      featured: false,
      description: "Polished gold metal cap reveal with microscopic liquid spray atomization in zero gravity.",
      youtubeId: "ra62PyGgxvE",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Gold Bottle", "3D Animation", "Luxury Parfumerie", "Vertical 9:16"],
      accentColor: "#251D0B",
      caseStudy: {
        role: "Anisotropic Metal Shaders, Spray Physics, 3D Direction",
        timeline: "4 Days",
        overview: "Zero-gravity beauty spot with high-precision spray atomization physics.",
        deliverables: ["9:16 Social Commercial"]
      }
    },

    // 21. Luxury Leather Handbag (9:16)
    {
      id: "proj-ladies-bag",
      title: "Luxury Leather Handbag Feature",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Designer Leathergoods",
      year: "2026",
      featured: false,
      description: "Macro stitch detailing, golden hardware clips, and supple grain leather textures rotating in 3D.",
      youtubeId: "EOKJ5AuZoOc",
      duration: "00:20",
      aspectRatio: "9/16",
      tags: ["Leather Goods", "Fashion 3D", "Texture Macro", "Vertical 9:16"],
      accentColor: "#1B171D",
      caseStudy: {
        role: "Cloth & Leather Simulation, Micro-Stitch Detailing",
        timeline: "3 Days",
        overview: "Precision CAD model of designer handbag emphasizing bespoke hand-stitched leather.",
        deliverables: ["Vertical Showcase Video"]
      }
    },

    // 22. Modern Architectural Lounge Sofa (9:16)
    {
      id: "proj-sofa",
      title: "Modern Architectural Lounge Sofa Spec",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Luxury Furniture Atelier",
      year: "2026",
      featured: false,
      description: "Architectural living room scene with plush bouclé fabric simulation, sunlight rays, and ergonomic angles.",
      youtubeId: "C1w9NvCh1Ys",
      duration: "00:20",
      aspectRatio: "9/16",
      tags: ["Interior Design", "Furniture 3D", "Fabric Shaders", "Vertical 9:16"],
      accentColor: "#221E19",
      caseStudy: {
        role: "Architectural Staging, Fabric Shading, Lighting",
        timeline: "3 Days",
        overview: "Translating tactile home comfort into high-fidelity 3D spatial renders.",
        deliverables: ["9:16 Product Feature"]
      }
    },

    // 23. Chronograph Luxury Watch (9:16)
    {
      id: "proj-watch",
      title: "Chronograph Luxury Watch Motion",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Swiss Horology Spec",
      year: "2026",
      featured: false,
      description: "Precision gear movement, sapphire crystal antireflective sheen, and brushing on a stainless steel bezel.",
      youtubeId: "OTII7Z-ecVw",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Luxury Watch", "Horology 3D", "Bezel Reflection", "Vertical 9:16"],
      accentColor: "#101824",
      caseStudy: {
        role: "Micro Gear Modeling, Dial Typography, Caustics",
        timeline: "5 Days",
        overview: "Horology animation showcasing chronograph second hand sweep and brushed steel finish.",
        deliverables: ["Vertical Horology Reel"]
      }
    },

    // 24. Siwella Botanical Glow (9:16)
    {
      id: "proj-siwella-botanical",
      title: "Siwella Botanical Glow Essence",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Siwella Skincare",
      year: "2026",
      featured: false,
      description: "Clean aesthetic showcasing botanical serum droplets restoring radiant skin moisture.",
      youtubeId: "SAvQXZ_J-PM",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Skincare", "Siwella Brand", "Botanical Droplets", "Vertical 9:16"],
      accentColor: "#172620",
      caseStudy: {
        role: "Commercial Direction, Color Grading",
        timeline: "3 Days",
        overview: "Organic botanical ingredients highlighted through clean daylight studio aesthetics.",
        deliverables: ["Social Ad Cut"]
      }
    },

    // 25. Siwella Botanical Radiance (9:16)
    {
      id: "proj-siwella-radiance",
      title: "Siwella Botanical Radiance Campaign",
      category: "AI Motion Graphics",
      categorySlug: "ai-motion",
      client: "Siwella Skincare",
      year: "2026",
      featured: false,
      description: "Glowing liquid caustics and soft pink-gold botanical gradients reflecting through pure serum.",
      youtubeId: "fYfTVDnJhrg",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Radiance", "Siwella Brand", "Liquid Optics", "Vertical 9:16"],
      accentColor: "#2A1822",
      caseStudy: {
        role: "Latent Motion, Liquid Caustics",
        timeline: "3 Days",
        overview: "Dreamy visual metaphor for internal dermal hydration and glow.",
        deliverables: ["Vertical Story Video"]
      }
    },

    // 26. Siwella Radiance Debut (9:16)
    {
      id: "proj-siwella-debut",
      title: "Siwella Radiance Debut Reel",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Siwella Skincare",
      year: "2026",
      featured: false,
      description: "Commercial spot celebrating the first launch drop of Siwella's signature hydration line.",
      youtubeId: "GFhjEKD-VBI",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Brand Launch", "Commercial Cut", "Siwella Brand", "Vertical 9:16"],
      accentColor: "#1B2228",
      caseStudy: {
        role: "Campaign Direction, Audio Pacing",
        timeline: "3 Days",
        overview: "Announcement reel designed for pre-launch waitlist conversion.",
        deliverables: ["Launch Cutdown (9:16)"]
      }
    },

    // 27. Brandier Studio Directing Reel (9:16)
    {
      id: "proj-brandier-reel",
      title: "Brandier Studio Directing Reel",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Brandier Studio Showcase",
      year: "2026",
      featured: false,
      description: "Fast dynamic montage showcasing Brandier Studio's commercial direction capabilities.",
      youtubeId: "IeEC3khKJIM",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Directing Reel", "Brandier Studio", "Shorts Showcase", "Vertical 9:16"],
      accentColor: "#1B1728",
      caseStudy: {
        role: "Editorial Direction, Sound Montage",
        timeline: "2 Days",
        overview: "Showcasing studio range across 3D product, AI ads, and commercial storytelling.",
        deliverables: ["9:16 Brand Reel"]
      }
    },

    // 28. Siwella Deep Hydration Droplet Macro (9:16)
    {
      id: "proj-siwella-droplet",
      title: "Siwella Deep Hydration Droplet Macro",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Siwella Skincare",
      year: "2026",
      featured: false,
      description: "Sub-millimeter fluid simulation of a moisture droplet bursting into a hydrating micro-cloud.",
      youtubeId: "5qww_AhG1-c",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Fluid Sim", "Micro Droplet", "Hydration", "Vertical 9:16"],
      accentColor: "#112228",
      caseStudy: {
        role: "Micro Physics Sim, Refraction Passes",
        timeline: "3 Days",
        overview: "Extreme macro fluid dynamics showcasing deep cellular moisture absorption.",
        deliverables: ["Vertical Short 9:16"]
      }
    },

    // 29. Bin Ghani Traditional Attar (9:16)
    {
      id: "proj-bin-ghani",
      title: "Bin Ghani Traditional Attar & Oud",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Bin Ghani Perfumes",
      year: "2026",
      featured: false,
      description: "Traditional artisan attar bottle spot celebrating oriental craftsmanship and aromatic depth.",
      youtubeId: "-kaZj_UdZxw",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Attar", "Heritage Parfums", "Traditional Luxury", "Vertical 9:16"],
      accentColor: "#221610",
      caseStudy: {
        role: "Commercial Direction, Heritage Lighting",
        timeline: "3 Days",
        overview: "Warm amber glow reflecting off ornate oriental glass bottles.",
        deliverables: ["Social Ad Cut"]
      }
    },

    // 30. Dynamic E-Commerce Product Showcase (9:16)
    {
      id: "proj-product-showcase",
      title: "Dynamic E-Commerce Product Showcase",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Global E-Commerce Spec",
      year: "2026",
      featured: false,
      description: "Conversion-optimized product spotlight designed for high-spend social media scaling.",
      youtubeId: "PVXYS5794w0",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["E-Commerce", "Product Ad", "Ad Spend Ready", "Vertical 9:16"],
      accentColor: "#1B221E",
      caseStudy: {
        role: "Ad Creative Direction, Benefit Callouts",
        timeline: "2 Days",
        overview: "Engineered specifically to convert cold traffic into customers on TikTok & Reels.",
        deliverables: ["Vertical Creative 9:16"]
      }
    },

    // 31. Alpine Mist Mountain Atmosphere (9:16)
    {
      id: "proj-alpine-mist",
      title: "Alpine Mist Mountain Atmosphere",
      category: "AI Motion Graphics",
      categorySlug: "ai-motion",
      client: "Alpine Mist Eau de Parfum",
      year: "2026",
      featured: false,
      description: "Glacial mountain peaks, crisp cold mist breezes, and fresh aromatic mountain botanicals.",
      youtubeId: "AAbOF7_IHrA",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Alpine Mist", "Mountain Fresh", "Crisp Air", "Vertical 9:16"],
      accentColor: "#13202E",
      caseStudy: {
        role: "Volumetric Mist Simulation, Cold Palette Color Grade",
        timeline: "3 Days",
        overview: "Evoking fresh glacial altitude and crisp morning air through ethereal motion.",
        deliverables: ["Vertical Short 9:16"]
      }
    },

    // 32. Studio Visual Experiments Reel (9:16)
    {
      id: "proj-studio-experiments",
      title: "Studio Visual Experiments Reel",
      category: "AI Motion Graphics",
      categorySlug: "ai-motion",
      client: "Brandier Creative Labs",
      year: "2026",
      featured: false,
      description: "Frontier visual experiments exploring generative light refraction, particle fields, and morphing geometry.",
      youtubeId: "U_A-dlot05U",
      duration: "00:25",
      aspectRatio: "9/16",
      tags: ["Experiments", "Latent AI", "Creative Labs", "Vertical 9:16"],
      accentColor: "#251829",
      caseStudy: {
        role: "R&D Exploration, Neural Pipeline Integration",
        timeline: "Ongoing",
        overview: "Weekly experimental studio sketches pushing the boundaries of AI-assisted 3D generation.",
        deliverables: ["Lab Archive Visual"]
      }
    }
  ],

  // Services & Capabilities (Interactive Disclosures)
  services: [
    {
      number: "01",
      title: "AI UGC Ads",
      tagline: "High-Performance Paid Social Commercials",
      summary: "High-volume, conversion-engineered shortform video ads designed specifically for TikTok, Meta, and YouTube Shorts algorithms.",
      details: [
        "Rapid scripting with pattern-interrupt 1.5s hook testing",
        "Hyper-realistic synthetic creators & multi-accent voice clones",
        "Acoustic room resonance filtering for believable organic audio",
        "Continuous iteration matrices delivering 20+ hooks per week"
      ],
      idealFor: "E-commerce brands, DTC scale-ups, consumer mobile apps"
    },
    {
      number: "02",
      title: "AI Motion Graphics",
      tagline: "Frontier Latent Space Video & Kinetic Design",
      summary: "Cinematic, physics-defying motion visuals crafted through cutting-edge neural video models and prompt-directing pipelines.",
      details: [
        "Complex fluid dynamics, particle bursts, and liquid glass optics",
        "Camera tracking and parallax motion simulation",
        "Multi-model pipeline (Veo 2, Kling 1.5, Runway Gen-3, Topaz 4K)",
        "Zero-drift character and brand asset consistency"
      ],
      idealFor: "Fashion labels, music & entertainment, technology keynotes"
    },
    {
      number: "03",
      title: "3D Product Animation",
      tagline: "Photorealistic CAD Modeling, Lighting & Commercial Direction",
      summary: "High-precision 3D animations that showcase materials, internal mechanisms, and product form factors with uncompromising fidelity.",
      details: [
        "Industrial CAD translation and precision topology refinement",
        "Custom studio lighting rigs (softbox diffusers, caustics, rim reflections)",
        "Exploded mechanical view animations & micro-macro passes",
        "Broadcast-ready 4K ProRes & 8K still rendering"
      ],
      idealFor: "Luxury watches, consumer hardware, cosmetics, footwear"
    },
    {
      number: "04",
      title: "AI Product Visuals",
      tagline: "Virtual Studio Photography Without the Physical Studio",
      summary: "Zero-overhead product photography and launch keyart engineered through photoreal latent diffusion models.",
      details: [
        "Custom fine-tuned LoRAs and depth maps to lock exact product packaging",
        "Unlimited architectural and outdoor environmental placements",
        "High-density billboard-ready resolution (OOH print scale)",
        "Rapid seasonal and e-commerce catalog refresh cycles"
      ],
      idealFor: "Beverage brands, luxury packaging, global e-commerce catalogs"
    }
  ],

  // Creative Process Pipeline
  process: [
    {
      step: "01",
      name: "Research",
      description: "Deep dive into product anatomy, competitor hooks, and visual benchmarks to establish the creative hypothesis."
    },
    {
      step: "02",
      name: "Concept",
      description: "Developing the central creative hook, narrative rhythm, and visual tone boards before rendering a single frame."
    },
    {
      step: "03",
      name: "Visual Development",
      description: "Locking 3D geometry, training custom LoRAs, and defining the lighting topologies and material shaders."
    },
    {
      step: "04",
      name: "Animation",
      description: "Kinetic motion passes, fluid physics simulations, camera choreography, and multi-model neural generation."
    },
    {
      step: "05",
      name: "Editing",
      description: "Pacing refinement, sound design with acoustic spatial impulse, typography compositing, and DaVinci color grading."
    },
    {
      step: "06",
      name: "Delivery",
      description: "Master broadcast files in 4K ProRes, plus segmented social ratios (9:16, 16:9, 1:1, 4:5) ready for ad spend."
    }
  ],

  // Tools & Tech Stack
  tools: [
    { name: "Seedance 2.0", category: "Physics Kinematics" },
    { name: "Kling 1.5 Pro", category: "Photoreal Video" },
    { name: "Google Omni Flash", category: "Multimodal AI" },
    { name: "Nano Banana Pro", category: "Latent Motion" },
    { name: "Runway Gen-3 Alpha", category: "Commercial Motion" },
    { name: "Cinema 4D & Octane", category: "3D Product Stills" },
    { name: "Blender 4.2", category: "Fluid Dynamics" },
    { name: "ComfyUI & LoRAs", category: "Custom Pipelines" },
    { name: "DaVinci Resolve Studio", category: "Color & HDR" },
    { name: "Topaz Video AI", category: "4K Neural Upscale" }
  ]
};
