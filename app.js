/**
 * BRANDIER STUDIO — AI ADVERTISING & CREATIVE INTELLIGENCE
 * Application Controller & Connected Editorial Ecosystem
 */

// ══════════════════════════════════════════
// 1. EDITORIAL & VIDEO DATABASE
// ══════════════════════════════════════════

const EDITORIAL_DATA = {
  // Featured Cover Story
  'art-featured-01': {
    id: 'art-featured-01',
    type: 'article',
    category: 'STRATEGIC ESSAY',
    title: 'Why AI Advertising Is Becoming Essential for Modern Brands',
    subtitle: 'Legacy advertising cycles of 6-month TV commercial sprints are officially dead. How continuous neural creative pipelines are reshaping commercial viability.',
    author: 'Brandier Studio Editorial Board',
    date: 'SEPTEMBER 2026',
    readTime: '7 MIN READ',
    videoId: 'vid-featured-01',
    videoDuration: '09:42',
    inShort: [
      'Velocity over bureaucracy: Production turnaround collapsed from 180 days to 48 hours for cinematic commercial campaigns.',
      'Creative abundance: Shift from testing 2-3 monolithic TV spots to running 300 targeted hyper-personalized neural permutations.',
      'The New Director: Creative directors transition from manual render coordinators into semantic prompt architects and style curator models.'
    ],
    stats: [
      { num: '-82%', label: 'Production Cost Reduction' },
      { num: '300x', label: 'Creative Iteration Velocity' },
      { num: '+340%', label: 'Scroll-Stop Hook Retention' }
    ],
    contentHtml: `
      <p class="reader-lead">The traditional agency model was built on an industrial-era assumption: that cinematic film requires physical camera crews, location permits, catering trucks, three-month VFX rendering cycles, and millions of dollars in fixed overhead.</p>

      <p>Over the past twelve months, that foundation has dissolved. Neural video generation models—specifically the leap represented by Google Veo 2, Kling 1.5, and Runway Gen-3—have crossed the photorealism threshold. They are no longer toys for Discord enthusiasts; they are the new infrastructure of modern brand expression.</p>

      <blockquote class="reader-pull-quote">
        "In the AI era, the bottleneck in advertising is no longer your production budget. It is your depth of creative taste."
      </blockquote>

      <h3>The Shift From Scarcity to Creative Abundance</h3>
      <p>When a luxury fashion or automotive brand spent $800,000 on a commercial shoot in 2022, they walked away with a single 30-second master cut and two 15-second cutdowns. If that hook failed in the first three seconds on paid social feeds, the brand had zero recourse. The entire quarter's ad spend was chained to a single creative hypothesis.</p>

      <p>With synthetic commercial pipelines, the paradigm flips from scarcity to infinite iteration. A brand can establish a single cinematic visual world—say, a brutalist concrete pavilion overlooking an Arctic sea—and generate 80 distinct lighting, motion, and narrative variations in an afternoon.</p>

      <div class="inline-watch-breakout">
        <div>
          <div class="breakout-title">Watch the Video Breakdown</div>
          <div class="breakout-sub">See the complete side-by-side speed test and neural prompt architecture.</div>
        </div>
        <button class="btn-clipped btn-light" onclick="openVideoModal('vid-featured-01')">
          WATCH BREAKDOWN (09:42) →
        </button>
      </div>

      <h3>The Director's New Role: Curating Latent Space</h3>
      <p>Critics frequently argue that generative video diminishes human authorship. Inside Brandier Studio, our experiments demonstrate the exact opposite: AI elevates the director by eliminating technical drudgery. Rather than spending weeks adjusting polygon meshes in 3D software or waiting for render farm queues, directors operate as semantic conductors.</p>

      <p>They define lens optics (e.g. 50mm anamorphic primes with subtle barrel distortion), specify lighting ratios (key-to-fill 4:1 with cold bounce), and sculpt pacing. The creative challenge is no longer "Can we afford to build this world?" but "Is this world unforgettable?"</p>
    `,
    related: ['art-01', 'art-bd-01']
  },

  // Insights 01: Uncanny Valley
  'art-01': {
    id: 'art-01',
    type: 'article',
    category: 'AI VIDEO',
    title: 'The Death of Uncanny Valley: How Veo 2 & Kling 1.5 Reached True Commercial Fidelity',
    subtitle: 'Examining lighting physics, sub-surface skin scattering, and micro-expressions in modern neural video generators.',
    author: 'Brandier Research Lab',
    date: 'SEP 04, 2026',
    readTime: '6 MIN READ',
    videoId: 'vid-01',
    videoDuration: '08:14',
    inShort: [
      'Sub-surface light scattering is now calculated accurately, eliminating the "plastic waxy" look of older models.',
      'Micro-saccades and pupil dilation in generated humans now pass the human biological empathy detector.',
      'Brands can deploy synthetic talent for commercial broadcast with zero audience discomfort.'
    ],
    stats: [
      { num: '4K 60FPS', label: 'Native Output Resolution' },
      { num: '0.04s', label: 'Facial Drift Latency' },
      { num: '99.2%', label: 'Blind Audience Believability' }
    ],
    contentHtml: `
      <p class="reader-lead">For three years, AI video lived in the uncanny valley. Faces had an oily sheen, teeth merged into solid bone rows, and fingers multiplied like fractals. As of Q3 2026, that era has officially ended.</p>
      <p>Through deep diffusion transformer architectures and improved temporal motion representations, the latest models now accurately simulate how photons interact with human epidermis—including peach fuzz, pore irregularity, and blood vessel undertones.</p>
      <blockquote class="reader-pull-quote">
        "When the consumer can no longer tell what is synthetic, advertising shifts completely to narrative resonance."
      </blockquote>
      <p>Commercial directors are now combining these video engines with custom fine-tuned LoRAs to preserve hyper-consistent talent across multi-scene narrative spots without physical filming days.</p>
    `,
    related: ['art-tool-kling', 'art-tool-veo']
  },

  // Insights 02: 3-Second Hook
  'art-02': {
    id: 'art-02',
    type: 'article',
    category: 'AI UGC',
    title: 'Deconstructing Synthetic UGC: The 3-Second Hook Formula Driving $4.2M in Meta Ad Spend',
    subtitle: 'Analyzing 150 top-performing synthetic TikTok and Instagram ads.',
    author: 'Brandier Growth Intelligence',
    date: 'SEP 02, 2026',
    readTime: '4 MIN READ',
    videoId: 'vid-02',
    videoDuration: '11:02',
    inShort: [
      'The first 1.2 seconds require visual discontinuity (unexpected physical motion or macro close-up).',
      'Synthetic audio pacing must include conversational hesitations and room air noise.',
      'Dynamic typography overlays increase thumb-stop rates by 44% compared to clean footage.'
    ],
    stats: [
      { num: '$4.2M', label: 'Analyzed Media Spend' },
      { num: '68%', label: '3-Second Retention Rate' },
      { num: '2.8x', label: 'ROAS Improvement' }
    ],
    contentHtml: `
      <p class="reader-lead">User-Generated Content (UGC) was supposed to be the antidote to high-production studio commercials. But traditional UGC has hit a wall: creator fatigue, erratic deliveries, and inconsistent audio quality.</p>
      <p>Synthetic UGC bridges the gap. By training synthetic avatars on top-performing organic creators and applying conversational acoustic room filters, performance marketers can test 50 hook variations per day.</p>
      <blockquote class="reader-pull-quote">
        "If you don't break the viewer's visual pattern in 1.5 seconds, your ad does not exist."
      </blockquote>
      <p>The winning formula relies on subtle conversational stumbles, micro-nodding, and imperfect phone camera shake injected via post-processing shaders.</p>
    `,
    related: ['guide-02', 'art-03']
  },

  // Insights 03: Prompt Director
  'art-03': {
    id: 'art-03',
    type: 'article',
    category: 'STRATEGY',
    title: 'From Prompt Engineer to Prompt Director: The New High-Table Agency Hierarchy',
    subtitle: 'The creative director of tomorrow builds semantic style loras, motion seeds, and iterative lighting topologies.',
    author: 'Brandier Studio Editorial',
    date: 'AUG 28, 2026',
    readTime: '5 MIN READ',
    videoId: 'vid-03',
    videoDuration: '15:45',
    inShort: [
      '"Prompt engineering" was a transitional hobby; "Prompt Directing" is an executive discipline.',
      'Requires mastery of cinematography history: lighting ratios, camera lenses, and color theories.',
      'The creative lead now interfaces directly with foundation model parameters to establish brand design languages.'
    ],
    stats: [
      { num: '10x', label: 'Creative Leverage' },
      { num: '100%', label: 'Visual Cohesion' },
      { num: 'Zero', label: 'Manual CAD Time' }
    ],
    contentHtml: `
      <p class="reader-lead">Two years ago, companies rushed to hire prompt engineers who memorized magic keywords like "8k octanerender trending on artstation". Those keywords are now meaningless noise.</p>
      <p>Modern models respond to genuine cinematic syntax: anamorphic bokeh, key-to-ambient lighting ratios, shutter angles, and physical camera movement semantics. The Prompt Director is not a technician; they are a visual auteur with extreme technical command of latent topologies.</p>
    `,
    related: ['art-featured-01', 'guide-03']
  },

  // Breakdown 01: Nike Spec
  'art-bd-01': {
    id: 'art-bd-01',
    type: 'breakdown',
    category: 'AD BREAKDOWN',
    title: 'Nike Speed Lab Spec Study: "Zero Gravity Gravity"',
    subtitle: 'How liquid metallic morphing at 1000fps was rendered without a physical prototype.',
    author: 'Brandier Intelligence Lab',
    date: 'AUG 2026',
    readTime: '5 MIN READ',
    videoId: 'vid-bd-01',
    videoDuration: '08:14',
    inShort: [
      'Hook: Chrome mercury droplet sneaker morphing mid-stride at 1000fps.',
      'Core Idea: Transcending human exhaustion through liquid aerodynamics.',
      'Execution: Multi-pass generation combining Kling 1.5 camera sweeps and Runway Gen-3 particle physics.'
    ],
    stats: [
      { num: '1000 FPS', label: 'Simulated Frame Rate' },
      { num: '72 Hours', label: 'Total Production Time' },
      { num: '$0', label: 'Physical Rigging Cost' }
    ],
    contentHtml: `
      <p class="reader-lead">When athletic apparel brands create flagship running ads, they typically spend $200,000 on high-speed Phantom Flex 4K camera rigs, specialized treadmill tracks, and pyrotechnics.</p>
      <p>In this spec case study, Brandier Studio designed a runner whose footwear transforms between solid carbon-fiber plates and liquid mercury. We combined Blender depth vectors with Kling 1.5 camera controls to ensure the shoe stayed locked to the runner's foot without drifting.</p>
    `,
    related: ['vid-bd-01', 'guide-01', 'art-tool-kling']
  },

  // Breakdown 02: Rimowa Spec
  'art-bd-02': {
    id: 'art-bd-02',
    type: 'breakdown',
    category: 'AD BREAKDOWN',
    title: 'Rimowa × Spatial Odyssey: "The Indestructible Horizon"',
    subtitle: 'Treating luxury travel luggage like an interstellar space vehicle through brutalist metallic reflections.',
    author: 'Brandier Intelligence Lab',
    date: 'AUG 2026',
    readTime: '6 MIN READ',
    videoId: 'vid-bd-02',
    videoDuration: '06:30',
    inShort: [
      'Hook: Macro aluminum grooves surviving Mach 3 atmospheric reentry burn.',
      'Core Idea: Elevating luggage durability to astronomical extremes.',
      'Execution: Flux 1.1 Pro metallic textures rendered into Veo 2 orbital physics.'
    ],
    stats: [
      { num: '4K Prores', label: 'Master Output' },
      { num: '99.4%', label: 'Aluminum Texture Fidelity' },
      { num: '48 Hours', label: 'Concept to Broadcast Cut' }
    ],
    contentHtml: `
      <p class="reader-lead">Rimowa's brand equity lives in the ribbed anodized aluminum shell. In conventional CGI, rendering photorealistic brushed aluminum with micro-scratches and caustic reflections requires massive compute hours.</p>
      <p>Using Flux 1.1 Pro and Veo 2, we simulated extreme orbital reentry heat, showing glowing titanium rivets and atmospheric friction without a single physical prop.</p>
    `,
    related: ['vid-bd-02', 'art-tool-veo', 'art-tool-flux']
  },

  // Guide 01: Product Ads
  'guide-01': {
    id: 'guide-01',
    type: 'guide',
    category: 'PRACTICAL GUIDE',
    title: 'How to Create an AI Product Advertisement: End-to-End Masterclass',
    subtitle: 'From a single physical product photo to 4K cinematic commercial reveal.',
    author: 'Brandier Studio Curriculum',
    date: 'SEP 2026',
    readTime: '8 MIN READ',
    videoId: 'vid-guide-01',
    videoDuration: '12:00',
    inShort: [
      'Step 1: Capture 8 clean product angles under neutral diffuse lighting.',
      'Step 2: Train a micro-LoRA or depth mask to lock product geometry.',
      'Step 3: Generate atmospheric commercial environments in Flux 1.1 Pro.',
      'Step 4: Animate camera sweeps using Kling 1.5 image-to-video with motion brush.'
    ],
    stats: [
      { num: '4 Steps', label: 'Production Process' },
      { num: '12 Min', label: 'Video Walkthrough' },
      { num: '100%', label: 'Commercial Safe' }
    ],
    contentHtml: `
      <p class="reader-lead">Creating an AI product ad that doesn't hallucinate or warp the brand's logo is the holy grail of generative advertising. Here is the exact studio pipeline we use for client deliverables.</p>
      <h3>Phase 1: Geometry Locking</h3>
      <p>Never rely solely on text prompts to describe your product. Instead, use a combination of Depth-Anything masks and ControlNet normals to preserve the exact silhouette of your packaging.</p>
      <h3>Phase 2: Lighting & Environment Synthesis</h3>
      <p>Prompt your environment independently from the product to ensure optimal contrast and specular highlights along the product edges.</p>
    `,
    related: ['art-tool-kling', 'art-bd-01']
  },

  // Guide 02: AI UGC
  'guide-02': {
    id: 'guide-02',
    type: 'guide',
    category: 'PRACTICAL GUIDE',
    title: 'How AI UGC Ads Work: Scripting, Voice Cloning & Synthesizing Organic Hook Rates',
    subtitle: 'Building believable TikTok-native ads that bypass user ad resistance.',
    author: 'Brandier Studio Curriculum',
    date: 'AUG 2026',
    readTime: '11 MIN READ',
    videoId: 'vid-guide-02',
    videoDuration: '18:00',
    inShort: [
      'Script for the ear, not the eye: Short conversational fragments, breath pauses, and casual slang.',
      'Audio room impulse: Add 8% ambient living room resonance to eliminate sterile studio voice.',
      'Avatar lip-sync: Match phoneme speed to natural human pacing.'
    ],
    stats: [
      { num: '150 Ads', label: 'Benchmark Sample' },
      { num: '5x', label: 'Creative Velocity' },
      { num: '-65%', label: 'CPA Reduction' }
    ],
    contentHtml: `
      <p class="reader-lead">The highest performing ads on TikTok and Reels do not look like ads. They look like an excited friend FaceTiming you from their bedroom.</p>
      <p>In this playbook, we walk through setting up synthetic actors in Seedance 2.0, applying ElevenLabs voice weights, and compositing organic iPhone camera jitter.</p>
    `,
    related: ['art-02', 'art-tool-seedance']
  },

  // Tools: Kling
  'art-tool-kling': {
    id: 'art-tool-kling',
    type: 'tool',
    category: 'TOOL BENCHMARK',
    title: 'Kling 1.5 Pro: Advertising Production Benchmark Report',
    subtitle: 'Evaluating temporal stability, physics adherence, and multi-camera consistency.',
    author: 'Brandier Tech Benchmarks',
    date: 'SEP 2026',
    readTime: '5 MIN READ',
    videoId: 'vid-tool-kling',
    videoDuration: '07:12',
    inShort: [
      'Physics rating: 9.4/10 for cloth simulation and water droplets.',
      'Camera control: Native pan, tilt, zoom, and roll vectors work reliably.',
      'Limitation: Complex hand gestures still require selective masking in post.'
    ],
    stats: [
      { num: '9.4 / 10', label: 'Commercial Ad Utility' },
      { num: '1080p', label: 'Native Generation' },
      { num: '30 FPS', label: 'Fluid Motion' }
    ],
    contentHtml: `
      <p class="reader-lead">Kling 1.5 has emerged as the studio workhorse for high-speed dynamic commercials. Its understanding of gravity, fluid kinematics, and fabric motion outclasses general-purpose models.</p>
    `,
    related: ['art-bd-01', 'guide-01']
  },

  // Tools: Veo
  'art-tool-veo': {
    id: 'art-tool-veo',
    type: 'tool',
    category: 'TOOL BENCHMARK',
    title: 'Google Veo 2: The Cinematic Architecture Benchmark',
    subtitle: 'How DeepMind\'s newest generative video model decodes luxury cinematography.',
    author: 'Brandier Tech Benchmarks',
    date: 'SEP 2026',
    readTime: '6 MIN READ',
    videoId: 'vid-tool-veo',
    videoDuration: '08:40',
    inShort: [
      'Architectural perspective: Unrivaled vanishing point consistency in long tracking shots.',
      'Lens comprehension: Native recognition of anamorphic flare and 35mm shallow depth.',
      'Best for: Luxury fragrance, automotive tracking, and architectural commercials.'
    ],
    stats: [
      { num: '9.6 / 10', label: 'Cinematic Score' },
      { num: '4K', label: 'Upscale Pipeline' },
      { num: 'Zero', label: 'Vanishing Point Drift' }
    ],
    contentHtml: `
      <p class="reader-lead">Veo 2 is the most cinephilic model in existence. It understands camera blocking terminology better than most junior agency art directors.</p>
    `,
    related: ['art-bd-02', 'orig-02']
  },

  // Originals: Chronos
  'orig-01': {
    id: 'orig-01',
    type: 'original',
    category: 'BRANDIER ORIGINAL',
    title: 'Project Chronos: The Perpetual Mechanism',
    subtitle: 'A 100% generative luxury horology commercial created without physical cameras.',
    author: 'Brandier Studio Creative Direction',
    date: 'AUGUST 2026',
    readTime: '4 MIN READ',
    videoId: 'vid-featured-01',
    videoDuration: '09:42',
    inShort: [
      'Challenge: Render micro-gears, synthetic rubies, and sapphire crystal reflections with zero CGI modeling.',
      'Workflow: Midjourney v6.1 keyframes + Kling 1.5 camera rigging + Topaz AI 4K master.',
      'Result: Completed in 72 hours at 5% of traditional luxury watch commercial budgets.'
    ],
    stats: [
      { num: '72 Hours', label: 'Concept to Master' },
      { num: '0 Cameras', label: 'Physical Gear' },
      { num: '4K 60FPS', label: 'Master Delivery' }
    ],
    contentHtml: `
      <p class="reader-lead">Project Chronos was conceived as an internal Brandier Studio stress test: can generative AI deliver the sterile, obsessive precision required by high horology?</p>
      <p>Through careful light-bounce prompt architecture and micro-motion vectors, we simulated the exact ticking of a tourbillon movement under anti-reflective sapphire glass.</p>
    `,
    related: ['orig-02', 'art-bd-02']
  },

  // Originals: Aura
  'orig-02': {
    id: 'orig-02',
    type: 'original',
    category: 'BRANDIER ORIGINAL',
    title: 'Aura: Olfactory Architecture Spec Study',
    subtitle: 'Visualizing invisible scent notes through undulating iridescent liquid crystal forms.',
    author: 'Brandier Studio Creative Direction',
    date: 'JULY 2026',
    readTime: '4 MIN READ',
    videoId: 'vid-01',
    videoDuration: '08:14',
    inShort: [
      'Challenge: Communicating scent notes (bergamot, amber, smoked cedar) purely through visual physics.',
      'Workflow: Veo 2 fluid dynamics + Unreal Engine color grading passes.',
      'Visual Language: Liquid glass, obsidian reflections, and zero-gravity suspension.'
    ],
    stats: [
      { num: '48 Hours', label: 'Production Time' },
      { num: '100%', label: 'Liquid Glass Physics' },
      { num: 'Global', label: 'Brandier Portfolio Feature' }
    ],
    contentHtml: `
      <p class="reader-lead">Perfume commercials are the purest form of visual abstraction in advertising. In Aura, Brandier Studio eliminated celebrity endorsements entirely, replacing them with hypnotic liquid glass physics that evoke physical warmth and olfactory depth.</p>
    `,
    related: ['orig-01', 'art-tool-veo']
  }
};

// Video Details Database
const VIDEO_DATA = {
  'hero-reel': {
    id: 'hero-reel',
    title: 'Brandier Neural Kinetics 01: Master Commercial Showcase',
    category: 'BRANDIER SHOWCASE',
    duration: '02:45',
    desc: 'A continuous showcase of synthetic commercial spots engineered by Brandier Studio across luxury, athletics, automotive, and consumer electronics.',
    relatedArticle: 'art-featured-01',
    relatedGuide: 'guide-01',
    relatedTool: 'art-tool-kling'
  },
  'vid-featured-01': {
    id: 'vid-featured-01',
    title: 'Why AI Advertising Is Essential: 48-Hour Commercial Breakdown',
    category: 'STRATEGIC BREAKDOWN',
    duration: '09:42',
    desc: 'Deep-dive into the economics of neural advertising pipelines versus traditional 6-month commercial agency production.',
    relatedArticle: 'art-featured-01',
    relatedGuide: 'guide-01',
    relatedTool: 'art-tool-kling'
  },
  'vid-01': {
    id: 'vid-01',
    title: 'The Death of Uncanny Valley: Veo 2 & Kling 1.5 Stress Test',
    category: 'AI VIDEO BENCHMARK',
    duration: '08:14',
    desc: 'Analyzing subsurface scattering, micro-expressions, and eye saccades in 4K synthetic commercial talent.',
    relatedArticle: 'art-01',
    relatedGuide: 'guide-03',
    relatedTool: 'art-tool-veo'
  },
  'vid-02': {
    id: 'vid-02',
    title: 'Deconstructing the 3-Second Hook: $4.2M Meta Ad Case Study',
    category: 'AI UGC STRATEGY',
    duration: '11:02',
    desc: 'Exact auditory cadence, visual pattern interrupts, and synthetic actor setups that stop algorithmic social feeds.',
    relatedArticle: 'art-02',
    relatedGuide: 'guide-02',
    relatedTool: 'art-tool-seedance'
  },
  'vid-03': {
    id: 'vid-03',
    title: 'Prompt Directing Masterclass: Commercial Lighting Topologies',
    category: 'TUTORIALS',
    duration: '15:45',
    desc: 'How to prompt 50mm anamorphic lenses, rim lighting, and DaVinci color grading syntax directly in latent space.',
    relatedArticle: 'art-03',
    relatedGuide: 'guide-03',
    relatedTool: 'art-tool-flux'
  },
  'vid-04': {
    id: 'vid-04',
    title: '$10,000 Live Ad Spend Experiment: Synthetic Luxury Watch Campaign',
    category: 'CREATIVE EXPERIMENTS',
    duration: '06:20',
    desc: 'We put real ad spend behind a 100% generative watch commercial. Here are the conversion, retention, and CTR metrics.',
    relatedArticle: 'orig-01',
    relatedGuide: 'guide-01',
    relatedTool: 'art-tool-kling'
  },
  'vid-bd-01': {
    id: 'vid-bd-01',
    title: 'Nike Spec Breakdown: Dissecting 1000fps Fluid Generative Dynamics',
    category: 'AD BREAKDOWN',
    duration: '08:14',
    desc: 'Deconstructing the multi-model pipeline: Kling 1.5 for camera sweeps, Runway Gen-3 for particle dynamics, and Topaz AI for final 4K finish.',
    relatedArticle: 'art-bd-01',
    relatedGuide: 'guide-01',
    relatedTool: 'art-tool-kling'
  },
  'vid-bd-02': {
    id: 'vid-bd-02',
    title: 'Rimowa Indestructible Horizon: Industrial Metal Rendering in Veo 2',
    category: 'AD BREAKDOWN',
    duration: '06:30',
    desc: 'Simulating Mach 3 orbital reentry friction on brushed aluminum suitcases without physical CGI farms.',
    relatedArticle: 'art-bd-02',
    relatedGuide: 'guide-04',
    relatedTool: 'art-tool-veo'
  },
  'vid-theatre-main': {
    id: 'vid-theatre-main',
    title: 'Building a 100% Synthetic Commercial in 48 Hours: Complete Workflow',
    category: 'MASTERCLASS BROADCAST',
    duration: '14:18',
    desc: 'Full documentary breakdown of writing, prompting, animating, sound designing, and delivering a broadcast commercial spot.',
    relatedArticle: 'art-featured-01',
    relatedGuide: 'guide-01',
    relatedTool: 'art-tool-kling'
  },
  'vid-tool-kling': {
    id: 'vid-tool-kling',
    title: 'Kling 1.5 Pro: Advertising Production Benchmark',
    category: 'TOOL TEST',
    duration: '07:12',
    desc: 'Rigorous physics and motion stress testing of Kling 1.5 Pro against commercial agency standards.',
    relatedArticle: 'art-tool-kling',
    relatedGuide: 'guide-01',
    relatedTool: 'art-tool-kling'
  },
  'vid-tool-veo': {
    id: 'vid-tool-veo',
    title: 'Google Veo 2: Architecture & Cinematography Benchmark',
    category: 'TOOL TEST',
    duration: '08:40',
    desc: 'Testing Veo 2 with complex cinematic language, vanishing points, and luxury glass reflections.',
    relatedArticle: 'art-tool-veo',
    relatedGuide: 'guide-03',
    relatedTool: 'art-tool-veo'
  },
  'vid-tool-seedance': {
    id: 'vid-tool-seedance',
    title: 'Seedance 2.0: Character Consistency Stress Test',
    category: 'TOOL TEST',
    duration: '05:55',
    desc: 'How Seedance eliminates character drift across multiple scene lighting setups.',
    relatedArticle: 'art-tool-seedance',
    relatedGuide: 'guide-02',
    relatedTool: 'art-tool-seedance'
  },
  'vid-tool-flux': {
    id: 'vid-tool-flux',
    title: 'Flux 1.1 Pro & Midjourney: Commercial Keyart Benchmarking',
    category: 'TOOL TEST',
    duration: '09:15',
    desc: 'Testing product packaging typography and micro-textures for digital billboard (OOH) scale.',
    relatedArticle: 'art-tool-flux',
    relatedGuide: 'guide-04',
    relatedTool: 'art-tool-flux'
  },
  'vid-guide-01': {
    id: 'vid-guide-01',
    title: 'How to Create an AI Product Ad: Complete Video Masterclass',
    category: 'TUTORIALS',
    duration: '12:00',
    desc: 'Watch step-by-step as we take a raw product photo, generate background sets, and animate commercial hero reveals.',
    relatedArticle: 'guide-01',
    relatedGuide: 'guide-01',
    relatedTool: 'art-tool-kling'
  },
  'vid-guide-02': {
    id: 'vid-guide-02',
    title: 'Synthetic UGC Ads: Scripting, Voice, & Lip-Sync Masterclass',
    category: 'TUTORIALS',
    duration: '18:00',
    desc: 'Hands-on workflow for creating high-converting TikTok and Reels ads with synthetic creators.',
    relatedArticle: 'guide-02',
    relatedGuide: 'guide-02',
    relatedTool: 'art-tool-seedance'
  },
  'vid-guide-03': {
    id: 'vid-guide-03',
    title: 'Cinematic Commercial Masterclass: DaVinci Resolve & Sound Design',
    category: 'TUTORIALS',
    duration: '24:00',
    desc: 'Finishing neural video: color space transforms, film grain emulations, and spatial sound design.',
    relatedArticle: 'guide-03',
    relatedGuide: 'guide-03',
    relatedTool: 'art-tool-veo'
  },
  'vid-guide-04': {
    id: 'vid-guide-04',
    title: 'Studio Lighting Without Studios: AI Product Photography Masterclass',
    category: 'TUTORIALS',
    duration: '10:00',
    desc: 'Prompting specular caustics, softboxes, and studio lighting setups for luxury products.',
    relatedArticle: 'guide-04',
    relatedGuide: 'guide-04',
    relatedTool: 'art-tool-flux'
  },
  'vid-guide-05': {
    id: 'vid-guide-05',
    title: 'The Creative Synthesis Pipeline: Idea to Commercial Ad',
    category: 'TUTORIALS',
    duration: '15:00',
    desc: 'Converting abstract marketing briefs into actionable generative prompt matrices and testing variants.',
    relatedArticle: 'guide-05',
    relatedGuide: 'guide-05',
    relatedTool: 'art-tool-kling'
  }
};

let currentActiveArticleId = null;
let currentActiveVideoId = null;

// ══════════════════════════════════════════
// 2. ARTICLE READER MODAL CONTROLLER
// ══════════════════════════════════════════

function openArticleModal(articleId) {
  const data = EDITORIAL_DATA[articleId];
  if (!data) return;

  currentActiveArticleId = articleId;
  const modal = document.getElementById('article-reader-modal');
  const body = document.getElementById('reader-article-body');
  const hudTag = document.getElementById('reader-hud-tag');
  const hudTitle = document.getElementById('reader-hud-title-preview');
  const watchBtn = document.getElementById('reader-watch-trigger-btn');

  // Set HUD
  hudTag.textContent = data.category;
  hudTitle.textContent = data.title;

  if (data.videoId) {
    watchBtn.style.display = 'inline-flex';
    watchBtn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      WATCH BREAKDOWN (${data.videoDuration || 'VIDEO'})
    `;
  } else {
    watchBtn.style.display = 'none';
  }

  // Build In-Short List
  const inShortItems = (data.inShort || []).map(item => `<li><strong>&bull;</strong> ${item}</li>`).join('');

  // Build Stats row if available
  let statsHtml = '';
  if (data.stats && data.stats.length > 0) {
    statsHtml = `
      <div class="reader-stats-banner">
        ${data.stats.map(s => `
          <div>
            <div class="rs-num">${s.num}</div>
            <div class="rs-lbl">${s.label}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Build Related stories
  let relatedHtml = '';
  if (data.related && data.related.length > 0) {
    relatedHtml = `
      <div class="reader-video-finish">
        <h4 class="finish-title">CONNECTED INTELLIGENCE</h4>
        <div class="reader-related-grid">
          ${data.related.map(relId => {
            const rel = EDITORIAL_DATA[relId];
            if (!rel) return '';
            return `
              <div class="related-mini-card" onclick="openArticleModal('${rel.id}')">
                <span class="rm-cat">${rel.category}</span>
                <h5 class="rm-title">${rel.title}</h5>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // Populate Body
  body.innerHTML = `
    <div class="reader-category">${data.category}</div>
    <h1 class="reader-big-title">${data.title}</h1>
    <p class="reader-short-intro">${data.subtitle || ''}</p>
    
    <div class="reader-author-meta">
      <span>BY ${data.author || 'BRANDIER STUDIO'}</span>
      <span>&bull;</span>
      <span>${data.date}</span>
      <span>&bull;</span>
      <span>${data.readTime}</span>
    </div>

    <div class="reader-in-short-box">
      <div class="in-short-headline">IN SHORT — 3 KEY TAKEAWAYS</div>
      <ul>${inShortItems}</ul>
    </div>

    ${statsHtml}

    <div class="reader-prose">
      ${data.contentHtml}
    </div>

    ${data.videoId ? `
      <div class="reader-video-finish">
        <h4 class="finish-title">WATCH THIS STORY</h4>
        <div class="breakdown-card" style="margin-top: 16px;">
          <div class="breakdown-visual-col" style="padding: 24px;">
            <div class="breakdown-visual-frame" style="margin: 0;">
              <div class="breakdown-play-overlay" onclick="openVideoModal('${data.videoId}')">
                <div class="glass-play-ring">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <span>PLAY BREAKDOWN (${data.videoDuration})</span>
              </div>
            </div>
          </div>
          <div class="breakdown-specs-col" style="padding: 28px;">
            <span class="spec-label">COMPANION VIDEO</span>
            <h4 style="font-family: var(--font-serif); font-size: 20px; color: var(--white); margin: 8px 0 14px;">
              ${data.title}
            </h4>
            <button class="btn-clipped btn-light" onclick="openVideoModal('${data.videoId}')">
              OPEN CINEMATIC PLAYER →
            </button>
          </div>
        </div>
      </div>
    ` : ''}

    ${relatedHtml}
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;
}

function closeArticleModal() {
  const modal = document.getElementById('article-reader-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function triggerReaderVideo() {
  if (currentActiveArticleId) {
    const data = EDITORIAL_DATA[currentActiveArticleId];
    if (data && data.videoId) {
      openVideoModal(data.videoId);
    }
  }
}

// ══════════════════════════════════════════
// 3. VIDEO MODAL CONTROLLER
// ══════════════════════════════════════════

function openVideoModal(videoId) {
  const video = VIDEO_DATA[videoId] || {
    id: videoId,
    title: 'Brandier Neural Commercial Showcase',
    category: 'CINEMATIC VIDEO',
    duration: '08:00',
    desc: 'Deconstructing modern AI video and advertising campaigns.',
    relatedArticle: 'art-featured-01',
    relatedGuide: 'guide-01',
    relatedTool: 'art-tool-kling'
  };

  currentActiveVideoId = videoId;
  const modal = document.getElementById('video-theatre-modal');
  const catEl = document.getElementById('vmodal-cat');
  const titleEl = document.getElementById('vmodal-title');
  const streamTitleEl = document.getElementById('vmodal-stream-title');
  const descEl = document.getElementById('vmodal-desc');
  const relatedGuideBtn = document.getElementById('vmodal-related-guide-btn');
  const relatedToolBtn = document.getElementById('vmodal-related-tool-btn');
  const connectionsEl = document.getElementById('vmodal-connections');

  catEl.textContent = video.category;
  titleEl.textContent = video.title;
  streamTitleEl.textContent = video.title;
  descEl.textContent = video.desc;

  // Connected pills
  connectionsEl.innerHTML = `
    <a href="javascript:void(0)" class="conn-chip" onclick="closeVideoModal(); openArticleModal('${video.relatedArticle || 'art-featured-01'}')">📄 Read Full Article</a>
    <a href="javascript:void(0)" class="conn-chip" onclick="closeVideoModal(); openArticleModal('${video.relatedGuide || 'guide-01'}')">🛠 Companion Playbook</a>
    <a href="javascript:void(0)" class="conn-chip" onclick="closeVideoModal(); openArticleModal('${video.relatedTool || 'art-tool-kling'}')">⚡ Benchmark Analysis</a>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('video-theatre-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  if (!document.getElementById('article-reader-modal').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function toggleModalVideoPlay() {
  const btn = document.querySelector('.sc-btn-play');
  if (btn.textContent === '❚❚') {
    btn.textContent = '▶';
  } else {
    btn.textContent = '❚❚';
  }
}

function switchToRelatedGuide() {
  if (currentActiveVideoId && VIDEO_DATA[currentActiveVideoId]) {
    const guideId = VIDEO_DATA[currentActiveVideoId].relatedGuide || 'guide-01';
    closeVideoModal();
    openArticleModal(guideId);
  }
}

function switchToRelatedTool() {
  if (currentActiveVideoId && VIDEO_DATA[currentActiveVideoId]) {
    const toolId = VIDEO_DATA[currentActiveVideoId].relatedTool || 'art-tool-kling';
    closeVideoModal();
    openArticleModal(toolId);
  }
}

function toggleTheatreFullscreen() {
  const elem = document.getElementById('theatre-canvas');
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// ══════════════════════════════════════════
// 4. GLOBAL SEARCH MODAL (Instant Search & Filter)
// ══════════════════════════════════════════

let searchActiveFilter = 'all';

function openSearchModal() {
  const modal = document.getElementById('search-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  const input = document.getElementById('global-search-input');
  setTimeout(() => input.focus(), 50);
  renderSearchResults('');
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function renderSearchResults(query) {
  const container = document.getElementById('search-results-container');
  const countEl = document.getElementById('search-match-count');
  const q = query.toLowerCase().trim();

  // Combine items from both EDITORIAL_DATA and VIDEO_DATA
  const items = [];

  Object.values(EDITORIAL_DATA).forEach(art => {
    items.push({
      id: art.id,
      type: art.type || 'articles',
      category: art.category,
      title: art.title,
      desc: art.subtitle || '',
      isArticle: true
    });
  });

  Object.values(VIDEO_DATA).forEach(vid => {
    items.push({
      id: vid.id,
      type: 'videos',
      category: vid.category,
      title: vid.title,
      desc: vid.desc || '',
      isVideo: true
    });
  });

  // Trends
  items.push(
    { id: 'trend-1', type: 'trends', category: 'TREND', title: 'Realtime Autonomous Creative Optimization', desc: 'Dynamic ad synthesis based on user signals.' },
    { id: 'trend-2', type: 'trends', category: 'TREND', title: 'Micro-Identities & Virtual Brand Ambassadors', desc: 'Proprietary synthetic talent replacing celebrity endorsements.' },
    { id: 'trend-3', type: 'trends', category: 'TREND', title: 'Generative Hyper-VFX at Indie Budgets', desc: 'High-end cinema commercials without $1M VFX houses.' },
    { id: 'trend-4', type: 'trends', category: 'TREND', title: 'Auditory Authenticity: Room Impulse Matching', desc: 'Spatial acoustic modeling for synthetic voices.' }
  );

  const filtered = items.filter(item => {
    // Type filter
    if (searchActiveFilter !== 'all') {
      if (searchActiveFilter === 'articles' && item.type !== 'article') return false;
      if (searchActiveFilter === 'breakdowns' && item.type !== 'breakdown') return false;
      if (searchActiveFilter === 'videos' && item.type !== 'videos') return false;
      if (searchActiveFilter === 'tools' && item.type !== 'tool') return false;
      if (searchActiveFilter === 'guides' && item.type !== 'guide') return false;
      if (searchActiveFilter === 'trends' && item.type !== 'trends') return false;
    }

    // Query filter
    if (!q) return true;
    return item.title.toLowerCase().includes(q) ||
           item.category.toLowerCase().includes(q) ||
           item.desc.toLowerCase().includes(q);
  });

  countEl.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'} matching`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 32px 24px; text-align: center; color: var(--muted); font-family: var(--font-mono); font-size: 11px;">
        NO EDITORIAL RESULTS FOR "${query.toUpperCase()}"
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="search-result-item" onclick="handleSearchResultClick('${item.id}', ${item.isVideo})">
      <div>
        <div class="sr-type-badge">${item.category}</div>
        <div class="sr-title">${item.title}</div>
      </div>
      <div class="sr-meta">
        ${item.isVideo ? '▶ WATCH' : '↗ READ'}
      </div>
    </div>
  `).join('');
}

function handleSearchResultClick(id, isVideo) {
  closeSearchModal();
  if (isVideo) {
    openVideoModal(id);
  } else if (EDITORIAL_DATA[id]) {
    openArticleModal(id);
  } else if (id.startsWith('trend')) {
    const el = document.getElementById('trends');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}

// ══════════════════════════════════════════
// 5. AMBIENT AURORA CANVAS (Brandier Studio Visual DNA)
// ══════════════════════════════════════════

function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const orbs = [
    { x: width * 0.25, y: height * 0.3, r: 280, color: 'rgba(0, 196, 212, 0.04)', vx: 0.25, vy: 0.15 },
    { x: width * 0.75, y: height * 0.4, r: 340, color: 'rgba(139, 63, 245, 0.045)', vx: -0.2, vy: 0.2 },
    { x: width * 0.5, y: height * 0.8, r: 300, color: 'rgba(240, 48, 138, 0.035)', vx: 0.15, vy: -0.25 }
  ];

  function animate() {
    ctx.clearRect(0, 0, width, height);

    orbs.forEach(orb => {
      orb.x += orb.vx;
      orb.y += orb.vy;

      if (orb.x - orb.r < 0 || orb.x + orb.r > width) orb.vx *= -1;
      if (orb.y - orb.r < 0 || orb.y + orb.r > height) orb.vy *= -1;

      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
      grad.addColorStop(0, orb.color);
      grad.addColorStop(1, 'transparent');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ══════════════════════════════════════════
// 6. MAGNETIC CURSOR
// ══════════════════════════════════════════

function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(renderRing);
  }

  renderRing();

  // Active hover states on buttons and links
  const interactives = document.querySelectorAll('a, button, .story-card, .breakdown-card, .tool-editorial-card, .guide-item-card, .trend-card, .original-project-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('active');
      ring.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('active');
      ring.classList.remove('active');
    });
  });
}

// ══════════════════════════════════════════
// 7. EVENT LISTENERS & INITIALIZATION
// ══════════════════════════════════════════

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) drawer.classList.remove('open');
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletter-email');
  const success = document.getElementById('newsletter-success');
  if (input && input.value) {
    input.value = '';
    if (success) {
      success.style.display = 'block';
      setTimeout(() => {
        success.style.display = 'none';
      }, 5000);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initCursor();

  // Header scroll detection
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  // Search shortcuts
  const openSearchBtn = document.getElementById('open-search-btn');
  if (openSearchBtn) {
    openSearchBtn.addEventListener('click', openSearchModal);
  }

  window.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
      closeArticleModal();
      closeVideoModal();
    }
  });

  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      renderSearchResults(e.target.value);
    });
  }

  // Search filter pills
  const searchPills = document.querySelectorAll('.search-pill');
  searchPills.forEach(pill => {
    pill.addEventListener('click', () => {
      searchPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      searchActiveFilter = pill.getAttribute('data-stype');
      renderSearchResults(searchInput ? searchInput.value : '');
    });
  });

  // Insights category filter pills
  const insightFilterBtns = document.querySelectorAll('#insights-filter-group .filter-btn');
  const insightCards = document.querySelectorAll('#insights-grid .story-card');

  insightFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      insightFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      insightCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          if (card.classList.contains('card-large')) {
            card.style.display = 'grid';
          }
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Video channel category tabs
  const videoFilterBtns = document.querySelectorAll('#video-filter-group .v-tab-btn');
  const videoItems = document.querySelectorAll('#video-previews-grid .video-card-item');

  videoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      videoFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-vfilter');

      videoItems.forEach(item => {
        const cat = item.getAttribute('data-vcat');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Trends horizontal carousel scroll buttons
  const slider = document.getElementById('trends-slider');
  const prevBtn = document.getElementById('trends-prev-btn');
  const nextBtn = document.getElementById('trends-next-btn');

  if (slider && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -400, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: 400, behavior: 'smooth' });
    });
  }

  // Update current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
