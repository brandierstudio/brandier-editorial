/**
 * ANAS BIN MEHBOOB — PORTFOLIO DATA STORE
 * All projects, YouTube videos, services, process steps, and social links
 * are configured here for easy updating in Phase 2 & beyond.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Anas Bin Mehboob",
    title: "Creative Director & 3D Visual Artist",
    tagline: "AI UGC Ads • AI Motion Graphics • 3D Product Animation • Creative Visuals",
    bio: "Pioneering the intersection of frontier generative AI pipelines and high-end 3D product animation. Crafting high-converting, scroll-stopping commercials and visual worlds for ambitious brands worldwide.",
    availability: "Available for select commissions & commercial direction",
    location: "Global / Remote",
    email: "contact@anasbinmehboob.com", // Temporary placeholder
    whatsapp: "+1234567890", // Configurable
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com",
      github: "https://github.com/brandierstudio",
      x: "https://x.com"
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

  // Projects & YouTube Video Library
  // Each project can have either a custom thumbnail, an automatic YouTube thumbnail, or both.
  projects: [
    {
      id: "proj-01",
      title: "Zero Gravity Velocity",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Athletic Footwear Spec",
      year: "2026",
      featured: true,
      description: "A 1000fps simulation of dynamic fluid mercury morphing into an aerodynamic sneaker sole mid-stride.",
      youtubeId: "dQw4w9WgXcQ", // Temporary placeholder YouTube ID
      duration: "00:45",
      tags: ["Blender", "Unreal Engine 5", "Fluid Dynamics", "ProRes 4K"],
      aspectRatio: "16/10",
      accentColor: "#1A233A",
      caseStudy: {
        role: "3D Direction, Physics Simulation, Lighting & Color Grade",
        timeline: "2 Weeks",
        overview: "Exploration of high-speed athletic commercial aesthetics where impossible fluid kinematics blend seamlessly with precision footwear engineering.",
        deliverables: ["1x 30s Master Commercial", "3x 15s Vertical Cutdowns", "5x High-Resolution Key Visuals"]
      }
    },
    {
      id: "proj-02",
      title: "Aura: Synthetic Fragrance Identity",
      category: "AI Motion Graphics",
      categorySlug: "ai-motion",
      client: "Luxury Perfumery Spec",
      year: "2026",
      featured: true,
      description: "Visualizing intangible scent notes through undulating iridescent liquid crystal bodies in zero-gravity space.",
      youtubeId: "L_LUpnjgPso", // Temporary placeholder YouTube ID
      duration: "01:12",
      tags: ["Veo 2", "ComfyUI", "DaVinci Resolve", "Liquid Glass"],
      aspectRatio: "16/10",
      accentColor: "#2E1B38",
      caseStudy: {
        role: "Creative Direction, Neural Prompt Architecture, Finishing",
        timeline: "10 Days",
        overview: "Replacing conventional celebrity fragrance spots with hypnotic liquid optics that evoke physical warmth and olfactory depth.",
        deliverables: ["1x 60s Brand Film", "Instagram Stories Suite", "OOH Digital Billboard Loop"]
      }
    },
    {
      id: "proj-03",
      title: "The 3-Second Retention Hook",
      category: "AI UGC Ads",
      categorySlug: "ai-ugc",
      client: "DTC Skincare Brand",
      year: "2026",
      featured: false,
      description: "High-converting synthetic UGC commercial utilizing rapid auditory pacing, dynamic pattern interrupts, and acoustic room modeling.",
      youtubeId: "fJ9rUzIMcZQ", // Temporary placeholder YouTube ID
      duration: "00:30",
      tags: ["Seedance 2.0", "ElevenLabs", "TikTok Native", "ROAS +340%"],
      aspectRatio: "9/16",
      accentColor: "#142F2D",
      caseStudy: {
        role: "Scripting, Voice Architecture, Avatar Pacing, Performance Editing",
        timeline: "48 Hours",
        overview: "Deconstructing creator fatigue by deploying 25 variations of organic synthetic video ads, driving scalable paid social acquisition.",
        deliverables: ["25x Segmented UGC Hook Variations", "Creative Testing Matrix"]
      }
    },
    {
      id: "proj-04",
      title: "Project Chronos: Perpetual Mechanism",
      category: "3D Product Animation",
      categorySlug: "3d-motion",
      client: "Haute Horlogerie Spec",
      year: "2026",
      featured: false,
      description: "Obsessive macro exploration of titanium tourbillon movements, synthetic ruby gears, and anti-reflective sapphire crystal.",
      youtubeId: "9bZkp7q19f0", // Temporary placeholder YouTube ID
      duration: "00:50",
      tags: ["Blender Cycles", "Octane", "Macro Cinematography", "8K Textures"],
      aspectRatio: "16/10",
      accentColor: "#26262B",
      caseStudy: {
        role: "Hard-Surface CAD Modeling, Lighting, Macro Camera Animation",
        timeline: "3 Weeks",
        overview: "A sterile, brutalist watch commercial designed to benchmark physical material accuracy and specular micro-reflections.",
        deliverables: ["1x 45s Launch Spot", "Macro Detail Social Stills", "Looping Exhibition Reel"]
      }
    },
    {
      id: "proj-05",
      title: "Neural Kinetic Commercial",
      category: "Commercials",
      categorySlug: "commercials",
      client: "Automotive Concept Studio",
      year: "2026",
      featured: false,
      description: "High-octane commercial tracking an electric hypercar cutting through wind-tunnel laser particle vectors in an underground brutalist tunnel.",
      youtubeId: "kJQP7kiw5Fk", // Temporary placeholder YouTube ID
      duration: "01:05",
      tags: ["Unreal Engine 5.4", "Kling 1.5", "DaVinci Resolve", "Sound FX"],
      aspectRatio: "16/10",
      accentColor: "#1B2228",
      caseStudy: {
        role: "Scene Composition, Particle Simulation, Direction",
        timeline: "2 Weeks",
        overview: "Blending real-time Unreal Engine raytraced environments with generative motion sweeps for next-gen broadcast television.",
        deliverables: ["1x 60s Broadcast Master", "15s Cutdowns", "Audio Stems"]
      }
    },
    {
      id: "proj-06",
      title: "Organic Conversational UGC",
      category: "AI UGC Ads",
      categorySlug: "ai-ugc",
      client: "Fintech Mobile App",
      year: "2026",
      featured: false,
      description: "Synthetic talking creator explaining investment interfaces with natural head micro-movements, eye saccades, and room impulse reverb.",
      youtubeId: "RgKAFK5djSk", // Temporary placeholder YouTube ID
      duration: "00:35",
      tags: ["Synthetic Actor", "Voice Clone", "High CTR", "Meta Ads"],
      aspectRatio: "9/16",
      accentColor: "#1E2B22",
      caseStudy: {
        role: "Creative Strategy, Scriptwriting, Avatar Rigging",
        timeline: "3 Days",
        overview: "A test campaign comparing authentic live creators against synthetic AI UGC, achieving a 42% decrease in CPA across Meta and TikTok.",
        deliverables: ["12x Ad Creative Variations", "Vertical Story Assets"]
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
