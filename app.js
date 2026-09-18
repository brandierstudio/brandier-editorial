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
});

// ══════════════════════════════════════════
// 1. CATEGORY FILTER SEGMENT SWITCHER
// ══════════════════════════════════════════
function renderCategoryFilters() {
  const container = document.getElementById('category-filter-bar');
  if (!container || !PORTFOLIO_DATA.categories) return;

  container.innerHTML = PORTFOLIO_DATA.categories.map(cat => `
    <button 
      class="segment-btn ${cat.id === activeCategory ? 'active' : ''}" 
      data-cat-id="${cat.id}"
      onclick="setFilterCategory('${cat.id}')">
      ${cat.label}
    </button>
  `).join('');
}

function setFilterCategory(categoryId) {
  activeCategory = categoryId;
  
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

    return `
      <article class="project-card reveal-item ${isFeaturedWide ? 'featured-wide' : ''}" data-project-id="${proj.id}">
        
        <!-- Media Visual Viewport with Tactile Play Trigger -->
        <div class="project-media-wrap" onclick="openVideoModal('${proj.id}')" title="Click to Watch Commercial">
          
          <div class="project-poster-canvas ${bgClass}">
            <div class="poster-inner-art">
              <div class="art-badge-code">SPEC REEL &bull; ${proj.year}</div>
              <h4 class="art-spec-title">${proj.title}</h4>
            </div>
          </div>

          <!-- Top Telemetry Badges -->
          <div class="media-top-badges">
            <span class="badge-pill-light">${proj.category}</span>
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
  const email = PORTFOLIO_DATA.profile.email || 'contact@anasbinmehboob.com';
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
