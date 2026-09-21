/**
 * ANAS BIN MEHBOOB — PORTFOLIO APPLICATION CONTROLLER
 * Handles dynamic rendering from data.js, category filtering,
 * high-performance YouTube video embeds on demand, and tactile interactions.
 */

let activeCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderCategoryFilters();
  renderProjects();
  renderServices();
  renderProcess();
  renderTools();
  renderSocials();
  initDockScrollSpy();
  initKeyboardListeners();
  initCursorSpotlight();
  initScrollReveals();
  initCardTiltAndSheen();
  initStatCounters();
  initTopSearch();
  initHeroAiSquircle();
  initPortraitTilt();
  initContactBgVideo();
  initHeroBgVideo();
  initClaudeMotionTilt();
});

// ══════════════════════════════════════════
// 1. CATEGORY FILTER SEGMENT SWITCHER
// ══════════════════════════════════════════
function renderCategoryFilters() {
  const container = document.getElementById('category-filter-bar');
  if (!container || !PORTFOLIO_DATA.categories) return;

  container.innerHTML = PORTFOLIO_DATA.categories.map(cat => {
    const count = cat.id === 'all' 
      ? PORTFOLIO_DATA.projects.length 
      : PORTFOLIO_DATA.projects.filter(p => p.categorySlug === cat.id).length;

    return `
      <button 
        class="segment-btn ${cat.id === activeCategory ? 'active' : ''}" 
        data-cat-id="${cat.id}"
        onclick="setFilterCategory('${cat.id}')">
        <span class="cat-dot" style="background: ${cat.dotColor || '#141414'}"></span>
        <span>${cat.label}</span>
        <span class="cat-count">${count}</span>
      </button>
    `;
  }).join('');
}

function setFilterCategory(categoryId) {
  activeCategory = categoryId;
  
  // Clear any active search query when explicitly picking category
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.value = '';
  }
  
  // Update button active states
  const buttons = document.querySelectorAll('.segment-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-cat-id') === categoryId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderProjects();
}

// ══════════════════════════════════════════
// 2. PROJECT CARDS & YOUTUBE POSTERS
// ══════════════════════════════════════════
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const countEl = document.getElementById('active-project-count');
  if (!grid || !PORTFOLIO_DATA.projects) return;

  const filtered = PORTFOLIO_DATA.projects.filter(p => {
    if (activeCategory === 'all') return true;
    return p.categorySlug === activeCategory;
  });

  if (countEl) {
    countEl.textContent = filtered.length;
  }

  const bgClasses = [
    'bg-gradient-01',
    'bg-gradient-02',
    'bg-gradient-03',
    'bg-gradient-04',
    'bg-gradient-05',
    'bg-gradient-06'
  ];

  grid.innerHTML = filtered.map((proj, idx) => {
    const bgClass = bgClasses[idx % bgClasses.length];
    const isFeaturedWide = proj.featured && idx === 0;

    // Build tags
    const tagsHtml = (proj.tags || []).map(t => `<span class="tag-pill">${t}</span>`).join('');

    // Category-specific badge class
    let badgeCatClass = '';
    if (proj.categorySlug === '3d-motion') badgeCatClass = 'badge-cat-3d';
    else if (proj.categorySlug === 'ai-ugc') badgeCatClass = 'badge-cat-ai-ugc';
    else if (proj.categorySlug === 'ai-motion') badgeCatClass = 'badge-cat-ai-motion';
    else if (proj.categorySlug === 'commercials') badgeCatClass = 'badge-cat-commercials';

    return `
      <article class="project-card reveal-item ${isFeaturedWide ? 'featured-wide' : ''}" data-project-id="${proj.id}">
        
        <!-- Media Visual Viewport with Tactile Play Trigger -->
        <div class="project-media-wrap" onclick="openVideoModal('${proj.id}')" title="Click to Watch Commercial">
          
          ${proj.thumbnailImage ? `
            <img src="${proj.thumbnailImage}" alt="${proj.title}" class="project-poster-img" loading="lazy">
          ` : `
            <div class="project-poster-canvas ${bgClass}">
              <div class="poster-inner-art">
                <div class="art-badge-code">SPEC REEL &bull; ${proj.year}</div>
                <h4 class="art-spec-title">${proj.title}</h4>
              </div>
            </div>
          `}

          <!-- Top Telemetry Badges -->
          <div class="media-top-badges">
            <span class="badge-pill-light ${badgeCatClass}">${proj.category}</span>
            <span class="badge-pill-light badge-duration">⏱ ${proj.duration || '00:30'}<span class="soundwave-bars"><span class="soundwave-bar"></span><span class="soundwave-bar"></span><span class="soundwave-bar"></span><span class="soundwave-bar"></span></span></span>
          </div>

          <!-- Center Play Button Trigger -->
          <button class="card-play-trigger" aria-label="Play ${proj.title} video">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
          </button>

        </div>

        <!-- Project Info Block -->
        <div class="project-info-block">
          <div>
            <div class="project-header-row">
              <div>
                <span class="project-client-name">${proj.client || 'Commercial Project'}</span>
                <h3 class="project-title">${proj.title}</h3>
              </div>
              <span class="project-year">${proj.year}</span>
            </div>
            
            <p class="project-summary">${proj.description}</p>
          </div>

          <div class="project-footer-row">
            <div class="project-tags-wrap">${tagsHtml}</div>
            <button class="btn-open-study" onclick="openVideoModal('${proj.id}')">
              <span>Watch Case Reel</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </article>
    `;
  }).join('');

  initCardTiltAndSheen();
  initScrollReveals();
}

// ══════════════════════════════════════════
// 3. HIGH-PERFORMANCE YOUTUBE VIDEO MODAL
// ══════════════════════════════════════════
function openVideoModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('video-modal');
  const viewport = document.getElementById('vmodal-viewport');
  const catEl = document.getElementById('vmodal-category');
  const titleEl = document.getElementById('vmodal-title');
  const descEl = document.getElementById('vmodal-description');
  const tagsEl = document.getElementById('vmodal-tags');

  catEl.textContent = `${project.category.toUpperCase()} • ${project.client.toUpperCase()}`;
  titleEl.textContent = project.title;
  descEl.textContent = project.caseStudy ? `${project.caseStudy.overview} Deliverables: ${project.caseStudy.deliverables.join(', ')}.` : project.description;

  tagsEl.innerHTML = (project.tags || []).map(t => `<span class="modal-tag-chip">${t}</span>`).join('');

  // Inject YouTube iframe ON-DEMAND (Performance Priority: zero initial iframe drag)
  const youtubeId = project.youtubeId || 'dQw4w9WgXcQ';
  viewport.innerHTML = `
    <iframe 
      src="https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1" 
      title="${project.title}" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  const viewport = document.getElementById('vmodal-viewport');
  
  // Clean up iframe to immediately kill playback audio
  viewport.innerHTML = '';
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initKeyboardListeners() {
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeMobileMenu();
    }
  });
}

// ══════════════════════════════════════════
// 4. SERVICES ACCORDION
// ══════════════════════════════════════════
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container || !PORTFOLIO_DATA.services) return;

  container.innerHTML = PORTFOLIO_DATA.services.map((s, idx) => `
    <div class="service-card-row ${idx === 0 ? 'open' : ''}" id="service-row-${idx}">
      <div class="service-head-trigger" onclick="toggleService(${idx})">
        <span class="service-num">${s.number}</span>
        <h3 class="service-main-title">${s.title}</h3>
        <span class="service-tagline-text">${s.tagline}</span>
        <div class="service-toggle-icon">+</div>
      </div>

      <div class="service-expand-body">
        <div class="service-inner-grid">
          <div>
            <p style="font-size: 14.5px; color: var(--text-primary); margin-bottom: 16px; font-weight: 500;">
              ${s.summary}
            </p>
            <ul class="service-bullets">
              ${s.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
          <div class="service-meta-box">
            <span class="meta-box-label">IDEAL USE CASE</span>
            <div class="meta-box-val">${s.idealFor}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleService(index) {
  const row = document.getElementById(`service-row-${index}`);
  if (!row) return;
  row.classList.toggle('open');
}

// ══════════════════════════════════════════
// 5. PROCESS PIPELINE
// ══════════════════════════════════════════
function renderProcess() {
  const container = document.getElementById('process-container');
  if (!container || !PORTFOLIO_DATA.process) return;

  container.innerHTML = PORTFOLIO_DATA.process.map(step => `
    <div class="process-step-card">
      <div>
        <div class="step-number">STEP ${step.step}</div>
        <h4 class="step-title">${step.name}</h4>
      </div>
      <p class="step-desc">${step.description}</p>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
// 6. TOOLS & TECH MATRIX
// ══════════════════════════════════════════
function renderTools() {
  const container = document.getElementById('tools-pills-container');
  if (!container || !PORTFOLIO_DATA.tools) return;

  container.innerHTML = PORTFOLIO_DATA.tools.map(tool => `
    <span class="tool-badge">${tool.name}</span>
  `).join('');
}

// ══════════════════════════════════════════
// 7. SOCIAL LINKS
// ══════════════════════════════════════════
function renderSocials() {
  const container = document.getElementById('social-links-container');
  if (!container || !PORTFOLIO_DATA.profile.socials) return;

  const socials = PORTFOLIO_DATA.profile.socials;
  container.innerHTML = Object.entries(socials).map(([key, url]) => `
    <a href="${url}" target="_blank" rel="noopener" class="social-link-item">${key} ↗</a>
  `).join('');
}

// ══════════════════════════════════════════
// 8. COPY EMAIL CLIPBOARD FEEDBACK
// ══════════════════════════════════════════
function copyEmailToClipboard() {
  const email = PORTFOLIO_DATA.profile.email || 'brandierstudio@gmail.com';
  const textEl = document.getElementById('copy-btn-text');

  navigator.clipboard.writeText(email).then(() => {
    if (textEl) {
      const original = textEl.textContent;
      textEl.textContent = 'Copied to Clipboard!';
      setTimeout(() => {
        textEl.textContent = original;
      }, 3000);
    }
  }).catch(() => {
    window.location.href = `mailto:${email}`;
  });
}

// ══════════════════════════════════════════
// 9. DOCK SCROLL SPY & MOBILE MENU
// ══════════════════════════════════════════
function initDockScrollSpy() {
  const links = document.querySelectorAll('.dock-link');
  const sections = ['work', 'services', 'process', 'about', 'contact'].map(id => document.getElementById(id));

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      if (!sec) return;
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        links.forEach(l => {
          if (l.getAttribute('data-section') === id) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
      }
    });
  });

  // Mobile dock hamburger
  const toggle = document.getElementById('mobile-dock-toggle');
  const menu = document.getElementById('mobile-menu-overlay');
  const close = document.getElementById('mobile-menu-close');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
    });
  }

  if (close && menu) {
    close.addEventListener('click', closeMobileMenu);
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu-overlay');
  if (menu) {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
  }
}

// ══════════════════════════════════════════
// 10. DYNAMIC CURSOR SPOTLIGHT
// ══════════════════════════════════════════
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX;
  let curY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursor() {
    curX += (mouseX - curX) * 0.12;
    curY += (mouseY - curY) * 0.12;
    spotlight.style.left = `${curX}px`;
    spotlight.style.top = `${curY}px`;
    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);
}

// ══════════════════════════════════════════
// 11. SCROLL-DRIVEN REVEALS
// ══════════════════════════════════════════
function initScrollReveals() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-item').forEach(el => {
    if (!el.classList.contains('is-revealed')) {
      observer.observe(el);
    }
  });
}

// ══════════════════════════════════════════
// 12. 3D CARD TILT & CURSOR SHEEN
// ══════════════════════════════════════════
function initCardTiltAndSheen() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.project-card, .process-step-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
      card.style.setProperty('--card-mouse-x', `${x}px`);
      card.style.setProperty('--card-mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.removeProperty('--card-mouse-x');
      card.style.removeProperty('--card-mouse-y');
    });
  });
}

// ══════════════════════════════════════════
// 13. ANIMATED TELEMETRY COUNTERS
// ══════════════════════════════════════════
function initStatCounters() {
  const statElements = document.querySelectorAll('.stat-counter-val');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  statElements.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.getAttribute('data-target') || '0');
  const prefix = el.getAttribute('data-prefix') || '';
  const suffix = el.getAttribute('data-suffix') || '';
  const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
  const duration = 1400;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = (target * easeProgress).toFixed(decimals);

    el.textContent = `${prefix}${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ══════════════════════════════════════════
// 14. MOBBIN-STYLE TOP SEARCH BAR
// ══════════════════════════════════════════
let searchSearchQuery = '';

function initTopSearch() {
  const searchInput = document.getElementById('top-search-input');
  const dropdown = document.getElementById('search-dropdown-menu');
  const kbdHint = document.getElementById('search-kbd-hint');

  if (!searchInput) return;

  const mobileInput = document.getElementById('mobile-search-input');
  if (mobileInput) {
    mobileInput.addEventListener('input', (e) => {
      const q = e.target.value.trim();
      searchSearchQuery = q;
      filterProjectGridBySearch(q);
    });
  }

  // Detect Mac vs Windows for ⌘K vs Ctrl+K
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  if (kbdHint) {
    kbdHint.textContent = isMac ? '⌘K' : 'Ctrl+K';
  }

  // Global keyboard shortcut
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
      openSearchDropdown();
    }
    if (e.key === 'Escape') {
      closeSearchDropdown();
      searchInput.blur();
    }
  });

  searchInput.addEventListener('focus', () => {
    openSearchDropdown();
    updateSearchResults(searchInput.value.trim());
  });

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim();
    searchSearchQuery = q;
    updateSearchResults(q);
    filterProjectGridBySearch(q);
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    const box = document.getElementById('dock-search-box');
    if (box && !box.contains(e.target)) {
      closeSearchDropdown();
    }
  });
}

function openMobileSearch() {
  const menu = document.getElementById('mobile-menu-overlay');
  const mobileInput = document.getElementById('mobile-search-input');
  if (menu) {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
  }
  if (mobileInput) {
    setTimeout(() => {
      mobileInput.focus();
    }, 150);
  }
}

function applyMobileSearchTag(tag) {
  const mobileInput = document.getElementById('mobile-search-input');
  if (mobileInput) {
    mobileInput.value = tag;
  }
  searchSearchQuery = tag;
  filterProjectGridBySearch(tag);
  closeMobileMenu();
  const workSec = document.getElementById('work');
  if (workSec) {
    workSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function openSearchDropdown() {
  const dropdown = document.getElementById('search-dropdown-menu');
  if (dropdown) {
    dropdown.classList.add('open');
    dropdown.setAttribute('aria-hidden', 'false');
  }
}

function closeSearchDropdown() {
  const dropdown = document.getElementById('search-dropdown-menu');
  if (dropdown) {
    dropdown.classList.remove('open');
    dropdown.setAttribute('aria-hidden', 'true');
  }
}

function applySearchTag(tag) {
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.value = tag;
    searchSearchQuery = tag;
    updateSearchResults(tag);
    filterProjectGridBySearch(tag);
    searchInput.focus();
  }
}

function updateSearchResults(query) {
  const resultsList = document.getElementById('search-results-list');
  if (!resultsList || !PORTFOLIO_DATA.projects) return;

  if (!query) {
    // Show top 3 recent projects
    const topPicks = PORTFOLIO_DATA.projects.slice(0, 3);
    resultsList.innerHTML = topPicks.map(p => `
      <div class="search-result-item" onclick="openVideoModal('${p.id}'); closeSearchDropdown();">
        <div class="search-result-left">
          <span class="search-res-title">${p.title}</span>
          <span class="search-res-cat">${p.category} &bull; ${p.year}</span>
        </div>
        <span class="search-res-badge" style="background: rgba(99, 102, 241, 0.15); color: #6366F1;">Watch ↗</span>
      </div>
    `).join('');
    return;
  }

  const q = query.toLowerCase();
  const matches = PORTFOLIO_DATA.projects.filter(p => {
    const inTitle = p.title.toLowerCase().includes(q);
    const inCat = p.category.toLowerCase().includes(q);
    const inDesc = p.description.toLowerCase().includes(q);
    const inTags = (p.tags || []).some(t => t.toLowerCase().includes(q));
    const inClient = (p.client || '').toLowerCase().includes(q);
    return inTitle || inCat || inDesc || inTags || inClient;
  });

  if (matches.length === 0) {
    resultsList.innerHTML = `<div class="search-no-results">No projects matching "${query}"</div>`;
    return;
  }

  resultsList.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="openVideoModal('${p.id}'); closeSearchDropdown();">
      <div class="search-result-left">
        <span class="search-res-title">${p.title}</span>
        <span class="search-res-cat">${p.category} &bull; ${p.client || ''}</span>
      </div>
      <span class="search-res-badge" style="background: rgba(99, 102, 241, 0.15); color: #6366F1;">Watch ↗</span>
    </div>
  `).join('');
}

function filterProjectGridBySearch(query) {
  if (!query) {
    renderProjects();
    return;
  }

  const grid = document.getElementById('projects-grid');
  const countEl = document.getElementById('active-project-count');
  if (!grid || !PORTFOLIO_DATA.projects) return;

  const q = query.toLowerCase();
  const filtered = PORTFOLIO_DATA.projects.filter(p => {
    const inTitle = p.title.toLowerCase().includes(q);
    const inCat = p.category.toLowerCase().includes(q);
    const inDesc = p.description.toLowerCase().includes(q);
    const inTags = (p.tags || []).some(t => t.toLowerCase().includes(q));
    const inClient = (p.client || '').toLowerCase().includes(q);
    return inTitle || inCat || inDesc || inTags || inClient;
  });

  if (countEl) {
    countEl.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: span 2; text-align: center; padding: 60px 20px;">
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">No projects found for "${query}"</h3>
        <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 20px;">Try searching for "3D", "AI UGC", "Commercials", or "Runway"</p>
        <button class="btn-tactile btn-secondary" onclick="applySearchTag('')">Clear Search</button>
      </div>
    `;
    return;
  }

  const bgClasses = ['bg-gradient-01', 'bg-gradient-02', 'bg-gradient-03', 'bg-gradient-04', 'bg-gradient-05', 'bg-gradient-06'];

  grid.innerHTML = filtered.map((proj, idx) => {
    const bgClass = bgClasses[idx % bgClasses.length];
    const isFeaturedWide = filtered.length === 1;
    const tagsHtml = (proj.tags || []).map(t => `<span class="tag-pill">${t}</span>`).join('');

    let badgeCatClass = '';
    if (proj.categorySlug === '3d-motion') badgeCatClass = 'badge-cat-3d';
    else if (proj.categorySlug === 'ai-ugc') badgeCatClass = 'badge-cat-ai-ugc';
    else if (proj.categorySlug === 'ai-motion') badgeCatClass = 'badge-cat-ai-motion';
    else if (proj.categorySlug === 'commercials') badgeCatClass = 'badge-cat-commercials';

    return `
      <article class="project-card reveal-item is-revealed ${isFeaturedWide ? 'featured-wide' : ''}" data-project-id="${proj.id}">
        <div class="project-media-wrap" onclick="openVideoModal('${proj.id}')" title="Click to Watch Commercial">
          ${proj.thumbnailImage ? `
            <img src="${proj.thumbnailImage}" alt="${proj.title}" class="project-poster-img" loading="lazy">
          ` : `
            <div class="project-poster-canvas ${bgClass}">
              <div class="poster-inner-art">
                <div class="art-badge-code">SPEC REEL &bull; ${proj.year}</div>
                <h4 class="art-spec-title">${proj.title}</h4>
              </div>
            </div>
          `}
          <div class="media-top-badges">
            <span class="badge-pill-light ${badgeCatClass}">${proj.category}</span>
            <span class="badge-pill-light badge-duration">⏱ ${proj.duration || '00:30'}<span class="soundwave-bars"><span class="soundwave-bar"></span><span class="soundwave-bar"></span><span class="soundwave-bar"></span><span class="soundwave-bar"></span></span></span>
          </div>
          <button class="card-play-trigger" aria-label="Play ${proj.title} video">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
          </button>
        </div>
        <div class="project-info-block">
          <div>
            <div class="project-header-row">
              <div>
                <span class="project-client-name">${proj.client || 'Commercial Project'}</span>
                <h3 class="project-title">${proj.title}</h3>
              </div>
              <span class="project-year">${proj.year}</span>
            </div>
            <p class="project-summary">${proj.description}</p>
          </div>
          <div class="project-footer-row">
            <div class="project-tags-wrap">${tagsHtml}</div>
            <button class="btn-open-study" onclick="openVideoModal('${proj.id}')">
              <span>Watch Case Reel</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  initCardTiltAndSheen();
}

// ══════════════════════════════════════════
// 10. MOBBIN-STYLE HERO AI SQUIRCLE CONTROLLER
// ══════════════════════════════════════════
const AI_MODELS_DATA = {
  seedance: {
    name: 'Seedance 2.0',
    tag: 'Kinematics',
    pillText: 'AI VIDEO STACK: SEEDANCE 2.0 • FLUID KINEMATICS',
    svg: `
      <svg class="squircle-svg-icon" viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="seedGradH" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06B6D4"/>
            <stop offset="50%" stop-color="#3B82F6"/>
            <stop offset="100%" stop-color="#6366F1"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#0A0F1D" stroke="url(#seedGradH)" stroke-width="1.2"/>
        <path d="M12 24C14 18 18 14 24 14C28 14 29 17 27 20C25 23 21 24 18 26C15 28 17 30 20 30C25 30 28 26 29 23" stroke="url(#seedGradH)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="23" cy="14" r="2.5" fill="#06B6D4"/>
      </svg>
    `
  },
  kling: {
    name: 'Kling 1.5 Pro',
    tag: 'Photoreal',
    pillText: 'AI VIDEO STACK: KLING 1.5 PRO • PHOTOREAL PHYSICS',
    svg: `
      <svg class="squircle-svg-icon" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#0D0E12" stroke="#C8FF00" stroke-width="1.2"/>
        <path d="M13 10V30M13 20L25 10M17 17L27 30" stroke="#C8FF00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="27" cy="12" r="2" fill="#10B981"/>
      </svg>
    `
  },
  omni: {
    name: 'Google Omni Flash',
    tag: 'Multimodal',
    pillText: 'AI VIDEO STACK: GOOGLE OMNI FLASH • MULTIMODAL AI',
    svg: `
      <svg class="squircle-svg-icon" viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="omniGradH" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4285F4"/>
            <stop offset="35%" stop-color="#9B72CF"/>
            <stop offset="70%" stop-color="#D96570"/>
            <stop offset="100%" stop-color="#F4B400"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#0A0B10" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
        <path d="M20 6C20 13.732 13.732 20 6 20C13.732 20 20 26.268 20 34C20 26.268 26.268 20 34 20C26.268 20 20 13.732 20 6Z" fill="url(#omniGradH)"/>
        <circle cx="20" cy="20" r="3" fill="#FFFFFF"/>
      </svg>
    `
  },
  banana: {
    name: 'Nano Banana Pro',
    tag: 'Latent Engine',
    pillText: 'AI VIDEO STACK: NANO BANANA PRO • LATENT SPEED',
    svg: `
      <svg class="squircle-svg-icon" viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="bananaGradH" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FDE047"/>
            <stop offset="50%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#D97706"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#141108" stroke="#F59E0B" stroke-width="1.2"/>
        <path d="M12 26C15 28.5 21 29 27 24C30 21.5 31 17 29 12C27.5 14 25.5 15.5 23 16C19 16.8 15 19 12 26Z" fill="url(#bananaGradH)"/>
        <path d="M29 12L31 9" stroke="#FDE047" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `
  },
  runway: {
    name: 'Runway Gen-3',
    tag: 'Motion',
    pillText: 'AI VIDEO STACK: RUNWAY GEN-3 ALPHA • COMMERCIAL MOTION',
    svg: `
      <svg class="squircle-svg-icon" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="9" fill="#111114" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
        <path d="M13 11H21C24.3137 11 27 13.6863 27 17C27 20.3137 24.3137 23 21 23H17M17 11V29M17 23L27 29" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  }
};

const AI_MODEL_KEYS = ['seedance', 'kling', 'omni', 'banana', 'runway'];
let currentModelIdx = 0;
let squircleTimer = null;

function initHeroAiSquircle() {
  selectAiModel('seedance', false);
  startSquircleAutoCycle();
}

function startSquircleAutoCycle() {
  if (squircleTimer) clearInterval(squircleTimer);
  squircleTimer = setInterval(() => {
    cycleNextAiModel(true);
  }, 2800);
}

function cycleNextAiModel(fromAuto = false) {
  currentModelIdx = (currentModelIdx + 1) % AI_MODEL_KEYS.length;
  const nextKey = AI_MODEL_KEYS[currentModelIdx];
  selectAiModel(nextKey, !fromAuto);
}

function selectAiModel(modelKey, resetAutoTimer = true) {
  const model = AI_MODELS_DATA[modelKey];
  if (!model) return;

  currentModelIdx = AI_MODEL_KEYS.indexOf(modelKey);

  // Update Squircle Stage with 3D Flip
  const stage = document.getElementById('squircle-icon-stage');
  if (stage) {
    stage.classList.add('flip');
    setTimeout(() => {
      stage.innerHTML = model.svg;
      stage.classList.remove('flip');
    }, 200);
  }

  // Update Pill Text
  const pillText = document.getElementById('hero-model-pill-text');
  if (pillText) {
    pillText.textContent = model.pillText;
  }

  // Update Button Active States
  const buttons = document.querySelectorAll('.ai-app-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-model') === modelKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (resetAutoTimer) {
    startSquircleAutoCycle();
  }
}

// ══════════════════════════════════════════
// 11. ABOUT PORTRAIT 3D TILT & SHEEN
// ══════════════════════════════════════════
function initPortraitTilt() {
  const card = document.getElementById('about-portrait-card');
  if (!card) return;

  const viewport = card.querySelector('.portrait-glass-viewport');
  if (!viewport) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    viewport.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
  });

  card.addEventListener('mouseleave', () => {
    viewport.style.transform = '';
  });
}

// ══════════════════════════════════════════
// 12. FLUID INTERACTIVE CURSOR & SPOTLIGHT
// ══════════════════════════════════════════
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  // Skip on touch / coarse pointer devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let spotX = mouseX;
  let spotY = mouseY;
  let isVisible = false;

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      if (spotlight) spotlight.style.opacity = '1';
      if (dot) dot.style.opacity = '1';
      if (ring) ring.style.opacity = '1';
    }

    if (dot) {
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    }
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });

  // Smooth lerp loop for trailer ring and radiant spotlight
  function animateCursor() {
    ringX += (mouseX - ringX) * 0.22;
    ringY += (mouseY - ringY) * 0.22;

    spotX += (mouseX - spotX) * 0.12;
    spotY += (mouseY - spotY) * 0.12;

    if (ring) {
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
    }

    if (spotlight) {
      spotlight.style.left = `${spotX}px`;
      spotlight.style.top = `${spotY}px`;
    }

    requestAnimationFrame(animateCursor);
  }

  requestAnimationFrame(animateCursor);

  document.addEventListener('mouseleave', () => {
    isVisible = false;
    if (spotlight) spotlight.style.opacity = '0';
    if (dot) dot.style.opacity = '0';
    if (ring) ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    isVisible = true;
    if (spotlight) spotlight.style.opacity = '1';
    if (dot) dot.style.opacity = '1';
    if (ring) ring.style.opacity = '1';
  });

  window.addEventListener('mousedown', () => {
    if (ring) ring.classList.add('cursor-down');
  });

  window.addEventListener('mouseup', () => {
    if (ring) ring.classList.remove('cursor-down');
  });

  // Dynamic hover reaction on interactive elements
  const interactiveSelector = 'a, button, input, textarea, select, .project-card, .ai-app-btn, .mobbin-app-squircle, .motion-glass-capsule, .service-card-item, .search-chip, .tool-logo-box, .dock-link, .segment-btn, .btn-tactile, [data-interactive]';

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      if (ring) ring.classList.add('cursor-hover');
      if (dot) dot.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      if (ring) ring.classList.remove('cursor-hover');
      if (dot) dot.classList.remove('cursor-hover');
    }
  });
}

// ══════════════════════════════════════════
// 12.5. HERO BACKGROUND VIDEO AUTOPLAY
// ══════════════════════════════════════════
function initHeroBgVideo() {
  const videos = document.querySelectorAll('.hero-bg-video, #hero-bg-video-desktop, #hero-bg-video-mobile');
  if (!videos.length) return;

  const configureVideo = (vid) => {
    if (!vid) return;
    vid.muted = true;
    vid.defaultMuted = true;
    vid.volume = 0;
    vid.playsInline = true;
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', '');
    vid.setAttribute('muted', '');
    vid.setAttribute('autoplay', '');
    vid.setAttribute('loop', '');

    const tryPlay = () => {
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const resumePlay = () => {
            vid.play();
            window.removeEventListener('click', resumePlay);
            window.removeEventListener('scroll', resumePlay);
            window.removeEventListener('touchstart', resumePlay);
          };
          window.addEventListener('click', resumePlay, { once: true });
          window.addEventListener('scroll', resumePlay, { once: true });
          window.addEventListener('touchstart', resumePlay, { once: true });
        });
      }
    };

    if (vid.readyState >= 2) {
      tryPlay();
    } else {
      vid.addEventListener('loadeddata', tryPlay, { once: true });
      vid.addEventListener('canplay', tryPlay, { once: true });
    }
  };

  videos.forEach(v => configureVideo(v));
}

// ══════════════════════════════════════════
// 13. CONTACT BACKGROUND VIDEO AUTOPLAY
// ══════════════════════════════════════════
function initContactBgVideo() {
  const video = document.getElementById('contact-bg-video');
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.playsInline = true;
  video.setAttribute('playsinline', '');
  video.setAttribute('muted', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('loop', '');

  const tryPlay = () => {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const resumePlay = () => {
          video.play();
          window.removeEventListener('click', resumePlay);
          window.removeEventListener('scroll', resumePlay);
          window.removeEventListener('touchstart', resumePlay);
        };
        window.addEventListener('click', resumePlay, { once: true });
        window.addEventListener('scroll', resumePlay, { once: true });
        window.addEventListener('touchstart', resumePlay, { once: true });
      });
    }
  };

  if (video.readyState >= 2) {
    tryPlay();
  } else {
    video.addEventListener('loadeddata', tryPlay, { once: true });
    video.addEventListener('canplay', tryPlay, { once: true });
  }
}

// ══════════════════════════════════════════
// 14. HERO STORY SKETCH AMBIENT INTERACTION
// ══════════════════════════════════════════
function initClaudeMotionTilt() {
  const sketch = document.getElementById('hero-story-sketch');
  if (!sketch) return;

  if (window.matchMedia('(pointer: coarse)').matches) return;

  window.addEventListener('mousemove', (e) => {
    const rect = sketch.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / window.innerWidth;
    const deltaY = (e.clientY - centerY) / window.innerHeight;

    sketch.style.transform = `translate(${deltaX * 12}px, ${deltaY * 12}px)`;
  }, { passive: true });
}
