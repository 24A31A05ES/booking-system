// =====================================================
// PEC CAMPUS EVENTS — MAIN SCRIPT
// =====================================================

// ── CATEGORY COLORS ───────────────────────────────
const CAT_COLORS = {
  tech:     "#10B981",
  cultural: "#A855F7",
  festival: "#F59E0B",
  ncc_nss:  "#3B82F6",
  sports:   "#EF4444"
};

const SYMP_COLORS = {
  "EPROZYNE":"#1B3A8C","E-JIVE":"#00695C","E-ARTIFACT":"#6A1B9A",
  "EBHIGNA":"#283593","EXULT":"#E65100","EDATUM":"#00838F",
  "EMITRIX":"#AD1457","ELEVER":"#558B2F","ERUDITE":"#4E342E"
};

// Current filter state
let currentCat  = "all";
let currentSymp = "ALL";

// ── CREATE EVENT CARD ─────────────────────────────
function createCard(ev, catId) {
  const catColor  = CAT_COLORS[catId] || "#10B981";
  const sympColor = SYMP_COLORS[ev.symposium] || catColor;
  const isComingSoon = !ev.regLink || ev.regLink === "#";

  const catLabels = { tech:"Tech", cultural:"Cultural", festival:"Festival", ncc_nss:"NCC/NSS", sports:"Sports" };

  const regBtn = isComingSoon
    ? `<button class="btn-reg-dark" disabled style="opacity:0.5;cursor:not-allowed;">Coming Soon</button>`
    : `<a href="${ev.regLink}" target="_blank" class="btn-reg-dark"
         onclick="markInterest('${ev.id}','${(ev.name||"").replace(/'/g,"\\'")}')">Register Now</a>`;

  return `
    <div class="event-card" onclick="window.location.href='event-detail.html?id=${ev.id}'" style="cursor:pointer;">
      <div class="event-img-wrap">
        <img src="${ev.image||''}" alt="${ev.name||''}"
             onerror="this.style.display='none';this.parentElement.classList.add('img-error')"/>
        <div class="ev-top-badges">
          ${ev.symposium ? `<span class="ev-symp-pill" style="background:${sympColor};">${ev.symposium}</span>` : ""}
          <span class="ev-cat-pill" style="background:${catColor};">${catLabels[catId]||""}</span>
        </div>
      </div>
      <div class="event-body">
        <div class="ev-title">${ev.name||""}</div>
        <div class="ev-meta">
          <span class="ev-branch">🏛️ ${ev.dept||ev.category||""}</span>
          <span class="ev-date">📅 ${ev.date||""}</span>
        </div>
        <div class="ev-desc">${ev.desc||""}</div>
        ${ev.venue ? `<div class="ev-venue">📍 <strong>${ev.venue}</strong></div>` : ""}
        <div class="ev-actions" onclick="event.stopPropagation();">
          ${regBtn}
        </div>
      </div>
    </div>`;
}

// ── RENDER EVENTS ─────────────────────────────────
function renderEvents() {
  const container = document.getElementById("events-container");
  const countEl   = document.getElementById("events-count");
  const sympFilter= document.getElementById("symp-filter");
  if (!container) return;

  // Show symposium sub-filter ONLY when tech tab is active (not all)
  if (sympFilter) {
    sympFilter.style.display = currentCat === "tech" ? "flex" : "none";
  }

  let allCards = [];

  // Tech events
  if (currentCat === "all" || currentCat === "tech") {
    const techFiltered = currentSymp === "ALL"
      ? PEC_DB.techEvents
      : PEC_DB.techEvents.filter(e => e.symposium === currentSymp);
    techFiltered.forEach(ev => allCards.push(createCard(ev, "tech")));
  }

  // Cultural events
  if (currentCat === "all" || currentCat === "cultural") {
    PEC_DB.culturalEvents.forEach(ev => allCards.push(createCard(ev, "cultural")));
  }

  // Festival events
  if (currentCat === "all" || currentCat === "festival") {
    PEC_DB.festivalEvents.forEach(ev => allCards.push(createCard(ev, "festival")));
  }

  // NCC/NSS events
  if (currentCat === "all" || currentCat === "ncc_nss") {
    PEC_DB.nccNssEvents.forEach(ev => allCards.push(createCard(ev, "ncc_nss")));
  }

  // Sports events
  if (currentCat === "all" || currentCat === "sports") {
    PEC_DB.sportsEvents.forEach(ev => allCards.push(createCard(ev, "sports")));
  }

  container.innerHTML = allCards.length > 0
    ? allCards.join("")
    : `<div class="no-results" style="grid-column:1/-1;"><span>🔍</span><p>No events found.</p></div>`;

  if (countEl) {
    const catLabel = { all:"All Events", tech:"Tech Events", cultural:"Cultural Events",
                       festival:"Festivals", ncc_nss:"NCC & NSS", sports:"Sports" };
    countEl.textContent = `${allCards.length} event${allCards.length!==1?"s":""} · ${catLabel[currentCat]||""}${
      currentCat==="tech" && currentSymp!=="ALL" ? " · "+currentSymp : ""}`;
  }
}

// ── CATEGORY FILTER ───────────────────────────────
function filterCat(cat, btn) {
  currentCat  = cat;
  currentSymp = "ALL";
  document.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".symp-btn").forEach(b => b.classList.remove("active"));
  const allBtn = document.querySelector('.symp-btn[onclick*="ALL"]');
  if (allBtn) allBtn.classList.add("active");
  renderEvents();
}

// ── SYMPOSIUM FILTER ──────────────────────────────
function filterSymp(symp, btn) {
  currentSymp = symp;
  currentCat  = "tech";
  document.querySelectorAll(".symp-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
  const techBtn = document.querySelector('.cat-tab[data-cat="tech"]');
  if (techBtn) techBtn.classList.add("active");
  renderEvents();
}

// ── MARK INTEREST ─────────────────────────────────
function markInterest(id, title) {
  PEC_DB.saveRegistration(id, title);
}

// ── MODAL ─────────────────────────────────────────
function closeModal() {
  const m = document.getElementById("modal-overlay");
  if (m) m.style.display = "none";
}

// ── HOME PAGE SYMPOSIUM GRID ──────────────────────
function renderSympGrid() {
  const grid = document.getElementById("symp-grid-home");
  if (!grid) return;
  grid.innerHTML = PEC_DB.symposia.map(s => `
    <a href="event.html?symp=${s.name}" class="symp-card"
       style="border-top:3px solid ${s.color};">
      <div class="symp-icon" style="background:${s.color}22;color:${s.color};">${s.icon}</div>
      <div class="symp-info">
        <h3 style="color:${s.color};">${s.name}</h3>
        <p class="symp-dept">${s.dept} Department</p>
        <p class="symp-date">📅 ${s.date}</p>
        <p class="symp-count">${s.count} Event${s.count!==1?"s":""}</p>
      </div>
      <div class="symp-arrow" style="color:${s.color};">→</div>
    </a>`).join("");
}

// ── LOGIN ─────────────────────────────────────────
function handleLogin() {
  const email    = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();
  const errorEl  = document.getElementById("login-error");
  if (!email || !password) {
    errorEl.textContent = "❌ Please fill in all fields.";
    errorEl.style.display = "block"; return;
  }
  if (password.length < 6) {
    errorEl.textContent = "❌ Password must be at least 6 characters.";
    errorEl.style.display = "block"; return;
  }
  errorEl.style.display = "none";
  localStorage.setItem("pec_logged_in", email);
  alert("✅ Login Successful! Welcome to PEC Campus Events.");
  window.location.href = "index.html";
}

// ── REGISTER ──────────────────────────────────────
function handleRegister() {
  const fname    = document.getElementById("fname")?.value.trim();
  const lname    = document.getElementById("lname")?.value.trim();
  const email    = document.getElementById("reg-email")?.value.trim();
  const studentId= document.getElementById("student-id")?.value.trim();
  const dept     = document.getElementById("department")?.value;
  const year     = document.getElementById("year")?.value;
  const password = document.getElementById("reg-password")?.value;
  const confirm  = document.getElementById("confirm-password")?.value;
  const terms    = document.getElementById("terms")?.checked;
  const errorEl  = document.getElementById("reg-error");
  const successEl= document.getElementById("reg-success");
  errorEl.style.display = "none";
  successEl.style.display = "none";
  if (!fname||!lname||!email||!studentId||!dept||!year||!password||!confirm) {
    errorEl.textContent="❌ Please fill in all fields."; errorEl.style.display="block"; return;
  }
  if (!email.includes("@")) {
    errorEl.textContent="❌ Enter a valid email."; errorEl.style.display="block"; return;
  }
  if (password.length < 8) {
    errorEl.textContent="❌ Password must be at least 8 characters."; errorEl.style.display="block"; return;
  }
  if (password !== confirm) {
    errorEl.textContent="❌ Passwords do not match."; errorEl.style.display="block"; return;
  }
  if (!terms) {
    errorEl.textContent="❌ Please accept Terms & Conditions."; errorEl.style.display="block"; return;
  }
  PEC_DB.saveUser({ fname, lname, email, studentId, dept, year });
  successEl.style.display = "block";
  document.querySelectorAll(".form-group input, .form-group select").forEach(el => el.value="");
  document.getElementById("terms").checked = false;
}

// ── INIT ──────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // event.html
  if (document.getElementById("events-container")) {
    const params = new URLSearchParams(window.location.search);
    const symp   = params.get("symp");
    if (symp) {
      currentCat  = "tech";
      currentSymp = symp;
      document.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
      const techBtn = document.querySelector('.cat-tab[data-cat="tech"]');
      if (techBtn) techBtn.classList.add("active");
      document.querySelectorAll(".symp-btn").forEach(b => {
        b.classList.toggle("active", b.textContent.includes(symp));
      });
    }
    renderEvents();
  }

  // index.html
  if (document.getElementById("symp-grid-home")) renderSympGrid();

  // Modal overlay click
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.addEventListener("click", e => { if (e.target===overlay) closeModal(); });
});