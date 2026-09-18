# Anas Bin Mehboob — Creative Portfolio Prototype

> **Creative Direction & 3D Motion for Frontier Brands**  
> AI UGC Ads • AI Motion Graphics • 3D Product Animation • Creative Visuals

A modern, high-polish creative portfolio website prototype inspired by the structure, information architecture, spacing rhythm, and tactile micro-interactions of **[Mobbin](https://mobbin.com/)**.

---

## ✦ Architecture & File Structure

```
├── index.html            # Mobbin-inspired semantic HTML structure
├── styles.css            # Restrained monochrome palette, typography scale, tactile buttons
├── data.js               # Centralized data store (Projects, YouTube IDs, Services, Process, Socials)
├── app.js                # Interaction controller, category filter switcher, YouTube modal player
└── assets/
    └── anas-logo.png     # Official "am" monogram & Anas Bin Mehboob brand asset
```

---

## ✦ Key Features

1. **Floating Pill Dock Navigation**:
   - Compact centered pill dock with the `am` monogram, section anchors, and tactile `Let's Talk →` CTA with directional arrow motion.
2. **Hero Composition**:
   - Status beacon (`● AVAILABLE FOR SELECT COMMISSIONS`), bold display typography, and an interactive category segment filter (`All Work`, `AI UGC Ads`, `3D Product Animation`, `AI Motion Graphics`, `Commercials`).
3. **High-Performance YouTube Video System**:
   - All videos and projects are configured in **`data.js`**.
   - Zero initial iframe loading for instant page loads.
   - Click to play immediately opens the custom cinema modal and injects the YouTube player on-demand.
4. **Interactive Services**:
   - Expandable disclosure cards for `01 AI UGC Ads`, `02 AI Motion Graphics`, `03 3D Product Animation`, `04 AI Product Visuals` with deliverables and use-case details.
5. **Linear Process Pipeline**:
   - Six connected stages: `Research → Concept → Visual Development → Animation → Editing → Delivery`.
6. **Tactile Micro-Interactions**:
   - Button lifts, arrow shifts (`translateX(4px)`), press feedback (`scale(0.97)`), and smooth card hover zooms.
   - Built with strict respect for `prefers-reduced-motion`.

---

## ✦ How to Update Content (Phase 2 & Beyond)

All content is centralized in **`data.js`**:
- **Adding / Updating YouTube Videos**: Add or edit the `youtubeId` field in `data.js`.
- **Changing Services or Deliverables**: Edit the `services` array in `data.js`.
- **Updating Social Links & Email**: Edit `PORTFOLIO_DATA.profile` in `data.js`.

---

© 2026 Anas Bin Mehboob. All rights reserved.
