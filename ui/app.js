// Dedicated Category-Only Palette
const CATEGORY_PALETTE = [
  { hex: "#818cf8", name: "Indigo Pulse" },
  { hex: "#a855f7", name: "Royal Amethyst" },
  { hex: "#fb7185", name: "Rose Coral" },
  { hex: "#06b6d4", name: "Deep Cyan" },
  { hex: "#c084fc", name: "Lavender Haze" },
  { hex: "#d97757", name: "Canyon Terracotta" },
  { hex: "#38bdf8", name: "Sky Cerulean" },
  { hex: "#fdba74", name: "Peach Mirage" }
];

const CATEGORY_COLORS_STORAGE_KEY = "sheltr_category_colors_v2";
const LOCAL_MODIFIED_STORAGE_KEY = "sheltr_local_modified_v1";

const STATUS_TIERS = [
  { val: "QUEUED", label: "QUEUED", emoji: "🥫", desc: "Sealed Ration" },
  { val: "ACTIVE", label: "ACTIVE", emoji: "🍲", desc: "Simmering" },
  { val: "CONSUMED", label: "CONSUMED", emoji: "🍽️", desc: "Clean Plate" },
  { val: "DROPPED", label: "DROPPED", emoji: "🍄", desc: "Spoiled Scrap" }
];

const THUMB_TIERS = [
  { val: 0, label: "UNSTAMPED", emoji: "🔘", desc: "Unscanned" },
  { val: 1, label: "RED THUMB", emoji: "☠️", desc: "Toxic" },
  { val: 2, label: "ORANGE THUMB", emoji: "☣️", desc: "Rations Only" },
  { val: 3, label: "GREEN THUMB", emoji: "👍", desc: "Safe Sector" },
  { val: 4, label: "GOLD THUMB", emoji: "🏆", desc: "Pre-War Relic" },
  { val: 5, label: "DIAMOND THUMB", emoji: "💎", desc: "Vault Apex" }
];

const FALLOUT_STAMPS = [
  { icon: "🥤", title: "NUKA-COLA", sub: "QUANTUM", border: "border-cyan", bg: "#091824", fg: "#7dd3fc", subColor: "#e0f7ff", quote: "🥤 NUKA-COLA QUANTUM: +400 AP, +5 RADS, 100% GLOWING!" },
  { icon: "⚙️", title: "VAULT-TEC", sub: "SECTOR 101", border: "border-gold", bg: "#0c192e", fg: "#facc15", subColor: "#93c5fd", quote: "⚙️ VAULT-TEC REMINDER: A BETTER LIFE UNDERGROUND!" },
  { icon: "☢️", title: "RAD-AWAY", sub: "IV DRIP", border: "border-red", bg: "#240d0d", fg: "#fca5a5", subColor: "#ef4444", quote: "☢️ RAD-AWAY ADMINISTERED: -300 RADS FLUSHED!" },
  { icon: "📟", title: "PIP-BOY", sub: "3000 MK IV", border: "border-green", bg: "#0a1f13", fg: "#6ee7b7", subColor: "#a3e635", quote: "📟 ROBCO PIP-BOY 3000: V.A.T.S. TARGETING ONLINE!" },
  { icon: "🐍", title: "TUNNEL", sub: "SNAKES RULE", border: "", bg: "#171412", fg: "#f4f0eb", subColor: "#eab308", quote: "🐍 TUNNEL SNAKES RULE! THAT'S US, AND WE RULE!" },
  { icon: "💣", title: "WAR NEVER", sub: "CHANGES", border: "border-gold", bg: "#1c150c", fg: "#fde047", subColor: "#d6ccc2", quote: "💣 WAR. WAR NEVER CHANGES." },
  { icon: "🌱", title: "G.E.C.K.", sub: "EDEN KIT", border: "border-green", bg: "#0b2218", fg: "#3ee8ad", subColor: "#a7f3d0", quote: "🌱 GARDEN OF EDEN CREATION KIT: TERRAFORMING READY!" },
  { icon: "🪙", title: "BOTTLECAP", sub: "HOARDER", border: "border-red", bg: "#26110e", fg: "#fed7aa", subColor: "#fb923c", quote: "🪙 SUNSET SARSAPARILLA STAR CAPS DETECTED IN STASH!" },
  { icon: "🛡️", title: "AD VICTORIAM", sub: "SCRIBE", border: "border-gold", bg: "#181410", fg: "#facc15", subColor: "#a8a29e", quote: "🛡️ BROTHERHOOD SCRIBE: PRESERVING PRE-WAR TECHNOLOGY!" },
  { icon: "🦖", title: "QUARRY", sub: "SURVIVOR", border: "border-red", bg: "#240c0c", fg: "#ff7575", subColor: "#fca5a5", quote: "🦖 WARNING: ALPHA DEATHCLAW NEST NEARBY!" },
  { icon: "💉", title: "STIMPAK", sub: "ADDICT", border: "border-red", bg: "#210e12", fg: "#fda4af", subColor: "#f43f5e", quote: "💉 STIMPAK INJECTED: CRIPPLED LIMBS RESTORED!" },
  { icon: "🧠", title: "MENTATS", sub: "+2 INT / PER", border: "border-red", bg: "#291015", fg: "#fecdd3", subColor: "#fb7185", quote: "🧠 MENTATS CONSUMED: ARCHIVE SEARCH EFFICIENCY +20%!" },
  { icon: "🤠", title: "NEW VEGAS", sub: "LUCKY 38", border: "border-gold", bg: "#1f1809", fg: "#ffe266", subColor: "#f59e0b", quote: "🤠 WELCOME TO THE LUCKY 38 — THE HOUSE ALWAYS WINS!" },
  { icon: "🤖", title: "YES MAN", sub: "APPROVED!", border: "border-green", bg: "#0d2418", fg: "#a3e635", subColor: "#3ee8ad", quote: "🤖 YES MAN: I LITERALLY CANNOT SAY NO TO THIS ARCHIVE!" },
  { icon: "🏜️", title: "MOJAVE", sub: "PATROL", border: "", bg: "#211810", fg: "#fdba74", subColor: "#d6ccc2", quote: "🏜️ PATROLLING THE MOJAVE ALMOST MAKES YOU WISH FOR A NUCLEAR WINTER." },
  { icon: "📻", title: "THREE DOG", sub: "OWOOOO!", border: "border-gold", bg: "#17130e", fg: "#facc15", subColor: "#e8dfd5", quote: "📻 THIS IS THREE DOG! FIGHTING THE GOOD FIGHT!" },
  { icon: "🧪", title: "F.E.V.", sub: "MARIPOSA", border: "border-green", bg: "#0e2112", fg: "#a3e635", subColor: "#4ade80", quote: "🧪 FORCED EVOLUTIONARY VIRUS: MUTATION RATE 99.8%!" },
  { icon: "🔌", title: "FUSION", sub: "CORE 100%", border: "border-gold", bg: "#1f1907", fg: "#fef08a", subColor: "#eab308", quote: "🔌 T-51B POWER ARMOR: FUSION CORE AT FULL CHARGE!" },
  { icon: "🧟", title: "FERAL", sub: "GHOUL", border: "border-green", bg: "#141d11", fg: "#bef264", subColor: "#84cc16", quote: "🧟 WHAT ARE YOU LOOKING AT, SMOOTHSKIN?" },
  { icon: "🐕", title: "DOGMEAT", sub: "GOOD BOY", border: "", bg: "#1c1612", fg: "#f4f0eb", subColor: "#fbbf24", quote: "🐕 DOGMEAT FOUND SOMETHING! [1x PRE-WAR HOLOTAPE]" },
  { icon: "🐻", title: "DON'T FEED", sub: "YAO GUAI", border: "border-red", bg: "#22110d", fg: "#fdba74", subColor: "#ef4444", quote: "🐻 PUBLIC SERVICE ANNOUNCEMENT: DO NOT FEED THE YAO GUAI!" },
  { icon: "📼", title: "HOLOTAPE", sub: "64 KB", border: "border-cyan", bg: "#0c1821", fg: "#bae6fd", subColor: "#38bdf8", quote: "📼 HOLOTAPE INSERTED: PLAYING PRE-WAR ARCHIVE..." },
  { icon: "🍄", title: "GLOWING", sub: "SEA", border: "border-green", bg: "#112214", fg: "#86efac", subColor: "#a3e635", quote: "🍄 ENTERING THE GLOWING SEA — CHECK RAD-SUIT SEALS!" },
  { icon: "💎", title: "PRE-WAR", sub: "RELIC", border: "border-cyan", bg: "#0b1a22", fg: "#e0f7ff", subColor: "#7dd3fc", quote: "💎 MINT-CONDITION PRE-WAR RELIC SECURED IN VAULT!" },
  { icon: "🌿", title: "FIREFLY", sub: "LOOK FOR LIGHT", border: "border-gold", bg: "#1c190b", fg: "#fde047", subColor: "#a3e635", quote: "🌿 FIREFLIES: WHEN YOU ARE LOST IN THE DARKNESS, LOOK FOR THE LIGHT." },
  { icon: "🔦", title: "HARRAN", sub: "GOOD NIGHT", border: "border-cyan", bg: "#0b1724", fg: "#7dd3fc", subColor: "#facc15", quote: "🔦 HARRAN: GOOD NIGHT, GOOD LUCK — UV FLASHLIGHT AT 100%!" },
  { icon: "🧤", title: "FACILITY 3826", sub: "CHAR-LES AI", border: "border-red", bg: "#240d11", fg: "#fda4af", subColor: "#38bdf8", quote: "🧤 CHAR-LES ONLINE: POLYMER GLOVE & SHOCK CAPACITORS CHARGED!" },
  { icon: "🧭", title: "CHERNARUS", sub: "NW AIRFIELD", border: "border-green", bg: "#121c11", fg: "#bef264", subColor: "#facc15", quote: "🧭 CHERNARUS: FRIENDLY IN CHERNO? GEARED UP AT NW AIRFIELD!" }
];

const FALLOUT_BLINKIES = [
  { icon: "☢️", text: "DIGITAL HOARDER", color: "#eab308", textCol: "#fef08a", quote: "☢️ DIGITAL HOARDER: SAVING EVERY HOLOTAPE SINCE 2001!" },
  { icon: "🥤", text: "NUKA ADDICT", color: "#ef4444", textCol: "#fecaca", quote: "🥤 NUKA ADDICT: BOTTLECAPS FOR DAYS!" },
  { icon: "📟", text: "PIP-BOY READY", color: "#10b981", textCol: "#a7f3d0", quote: "📟 PIP-BOY READY: V.A.T.S. 95% HEADSHOT!" },
  { icon: "💎", text: "GLITTER-GORE OS", color: "#38bdf8", textCol: "#e0f7ff", quote: "💎 GLITTER-GORE OS: SPARKLY FOIL IN THE WASTELAND!" },
  { icon: "☠️", text: "RAD-RESISTANT", color: "#a3e635", textCol: "#ecfccb", quote: "☠️ RAD-RESISTANT: +85% RADIATION RESISTANCE!" },
  { icon: "📼", text: "HOLOTAPE JUNKIE", color: "#c084fc", textCol: "#f3e8ff", quote: "📼 HOLOTAPE JUNKIE: ARCHIVE EVERYTHING!" },
  { icon: "🚇", text: "METRO RANGER", color: "#f97316", textCol: "#fed7aa", quote: "🚇 SPARTAN ORDER: IF NOT US, THEN WHO? CHECK GAS MASK FILTERS!" },
  { icon: "🧪", text: "POLYMER CORE", color: "#2dd4bf", textCol: "#ccfbf1", quote: "🧪 POLYMER CORE: KOLLEKTIV 2.0 NEURAL LINK SYNCHRONIZED!" }
];

let mediaTypes = [];
let categoryColors = {};
let localModifiedMap = {};
let entriesCache = {};
let entriesOrderedIds = [];
let lastFilteredEntries = [];
let globalTopTags = [];
let categoryTagsCache = {};
let savedSearches = [];
let activeSavedSearchId = null;
let totalVaultRecords = 0;

let activeTags = new Set();
let tagMatchMode = "AND";
let currentFilterStatus = "ALL";
let currentFilterRating = "-1";
let currentSortBy = "updated_at"; // Default sort: Last Modified
let selectedStatus = "QUEUED";
let selectedRating = 0;
let sortDir = "DESC";
let userOverrodeSortDir = false;
let searchTimer = null;

let modalCoverPath = null;
let modalCoverCleared = false;
let hoveredCardId = null;

/* --- LOAD MODULAR HTML PARTIALS --- */
async function loadLayoutPartials() {
  const slots = [
    { id: "slot-header", url: "partials/header.html" },
    { id: "slot-sidebar", url: "partials/sidebar.html" },
    { id: "slot-footer", url: "partials/footer.html" },
    { id: "slot-modals", url: "partials/modals.html" }
  ];

  await Promise.all(
    slots.map(async slot => {
      const container = document.getElementById(slot.id);
      if (!container) return;
      const res = await fetch(slot.url);
      if (res.ok) {
        container.innerHTML = await res.text();
      }
    })
  );
}

function loadLocalModifiedMap() {
  try {
    const raw = localStorage.getItem(LOCAL_MODIFIED_STORAGE_KEY);
    localModifiedMap = raw ? JSON.parse(raw) : {};
  } catch {
    localModifiedMap = {};
  }
}

function recordLocalModified(id) {
  if (!id) return;
  localModifiedMap[id] = new Date().toISOString();
  try {
    localStorage.setItem(LOCAL_MODIFIED_STORAGE_KEY, JSON.stringify(localModifiedMap));
  } catch {}
}

function getEffectiveModifiedTimestamp(item) {
  const candidates = [
    item.updated_at,
    item.modified_at,
    localModifiedMap[item.id],
    item.created_at
  ].filter(Boolean);

  let best = 0;
  for (const c of candidates) {
    const ms = Date.parse(c);
    if (!Number.isNaN(ms) && ms > best) {
      best = ms;
    }
  }
  return best;
}

function renderBunkerStampsAndBlinkies() {
  const sidebarGrid = document.getElementById("sidebarStampGrid");
  const footerWall = document.getElementById("footerStampWall");
  const blinkieRibbon = document.getElementById("footerBlinkieRibbon");
  const headerBadge = document.querySelector(".stamp-hoard-header span:last-child");

  if (headerBadge) {
    headerBadge.textContent = `[${FALLOUT_STAMPS.length} PERFORATED STAMPS • GPU OPTIMIZED]`;
  }

  const stampToHtml = (s, idx) => `
    <div
      class="neo-stamp ${s.border}"
      style="--stamp-bg:${s.bg}; --stamp-fg:${s.fg}; --stamp-sub:${s.subColor}; --stagger:${idx};"
      data-quote="${escapeHtml(s.quote || `${s.icon} ${s.title} // ${s.sub}`)}"
      onclick="showToast(this.dataset.quote)"
      title="${escapeHtml(s.title)} — ${escapeHtml(s.sub)}"
    >
      <div class="neo-stamp-icon">${s.icon}</div>
      <div class="neo-stamp-title">${escapeHtml(s.title)}</div>
      <div class="neo-stamp-sub">${escapeHtml(s.sub)}</div>
    </div>
  `;

  if (sidebarGrid) {
    sidebarGrid.innerHTML = FALLOUT_STAMPS.slice(0, 6).map(stampToHtml).join("");
  }

  if (footerWall) {
    footerWall.innerHTML = FALLOUT_STAMPS.map(stampToHtml).join("");
  }

  if (blinkieRibbon) {
    blinkieRibbon.innerHTML = FALLOUT_BLINKIES.map((b, idx) => `
      <div
        class="retro-blinkie"
        style="--blink-color:${b.color}; --blink-text:${b.textCol}; --stagger:${idx};"
        data-quote="${escapeHtml(b.quote || `${b.icon} ${b.text}`)}"
        onclick="showToast(this.dataset.quote)"
      >
        <span class="blink-pip">${b.icon}</span>
        <span>${escapeHtml(b.text)}</span>
        <span class="blink-pip">${b.icon}</span>
      </div>
    `).join("");
  }
}

function loadStoredCategoryColors() {
  try {
    const raw = localStorage.getItem(CATEGORY_COLORS_STORAGE_KEY);
    categoryColors = raw ? JSON.parse(raw) : {};
  } catch {
    categoryColors = {};
  }
}

function saveStoredCategoryColors() {
  try {
    localStorage.setItem(CATEGORY_COLORS_STORAGE_KEY, JSON.stringify(categoryColors));
  } catch {}
}

function pickNextAvailableColor() {
  const used = new Set(Object.values(categoryColors).map(c => c.toLowerCase()));
  const unused = CATEGORY_PALETTE.find(p => !used.has(p.hex.toLowerCase()));
  if (unused) return unused.hex;
  return CATEGORY_PALETTE[Object.keys(categoryColors).length % CATEGORY_PALETTE.length].hex;
}

function getCategoryColor(catName) {
  if (!catName) return "#818cf8";
  return categoryColors[catName] || "#818cf8";
}

function hexToRgb(hex) {
  const clean = (hex || "#818cf8").replace("#", "").trim();
  const full = clean.length === 3
    ? clean.split("").map(c => c + c).join("")
    : clean.padEnd(6, "0").slice(0, 6);
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return "129, 140, 248";
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
}

function renderCategoryColorPresets() {
  const wrap = document.getElementById("catColorPresets");
  const colorInput = document.getElementById("newCategoryColor");
  if (!wrap || !colorInput) return;

  wrap.innerHTML =
    `<span style="font-family:var(--font-mono); font-size:0.72rem; color:var(--text-muted); margin-right:4px;">PRESETS:</span>` +
    CATEGORY_PALETTE.map(p => `
      <button
        type="button"
        class="cat-swatch-btn ${colorInput.value.toLowerCase() === p.hex.toLowerCase() ? "active" : ""}"
        style="background:${p.hex}; color:${p.hex};"
        title="${p.name} (${p.hex})"
        onclick="selectPresetCategoryColor('${p.hex}')"
      ></button>
    `).join("");
}

function selectPresetCategoryColor(hex) {
  const colorInput = document.getElementById("newCategoryColor");
  colorInput.value = hex;
  syncCategorySwatchHighlight(hex);
}

function syncCategorySwatchHighlight(hex) {
  const target = (hex || "").toLowerCase();
  document.querySelectorAll(".cat-swatch-btn").forEach(btn => {
    const btnHex = (btn.getAttribute("title") || "").match(/#[0-9a-f]{6}/i)?.[0]?.toLowerCase();
    btn.classList.toggle("active", btnHex === target);
  });
}

async function updateExistingCategoryColor(name, newHex) {
  categoryColors[name] = newHex;
  saveStoredCategoryColors();

  fetch(`/api/media-types/${encodeURIComponent(name)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ color: newHex })
  }).catch(() => {});

  renderCategoryList();
  await loadEntries();
  showToast(`🎨 ${name} COLOR UPDATED`);
}

/* --- PARSE SEARCH BAR FOR BOTH FREE TEXT AND #TAGS --- */
function parseSearchBarInput() {
  const raw = document.getElementById("searchInput").value;
  const inlineTags = [];
  const cleanedText = raw
    .replace(/(?:^|\s)#([^\s#]+)/g, (_, tag) => {
      inlineTags.push(tag.toLowerCase());
      return " ";
    })
    .replace(/\s+/g, " ")
    .trim();

  return {
    textQuery: cleanedText,
    inlineTags: [...new Set(inlineTags)]
  };
}

function getCombinedEffectiveTags() {
  const { inlineTags } = parseSearchBarInput();
  return [...new Set([...activeTags, ...inlineTags])];
}

function toggleTagMatchMode() {
  tagMatchMode = tagMatchMode === "AND" ? "OR" : "AND";
  showToast(`⚙️ TAG MATCH MODE: ${tagMatchMode === "AND" ? "ALL TAGS (AND)" : "ANY TAG (OR)"}`);
  loadEntries();
}

function toggleTagFilter(tagName) {
  const clean = String(tagName || "").trim().toLowerCase().replace(/^#+/, "");
  if (!clean) return;

  clearActiveSavedSearch();
  const combined = new Set(getCombinedEffectiveTags());
  if (combined.has(clean)) {
    removeTagFilter(clean, true);
  } else {
    activeTags.add(clean);
    showToast(`🏷️ TAG FILTER ADDED: #${clean.toUpperCase()}`);
    loadEntries();
  }
}

function removeTagFilter(tagName, announce = false) {
  const clean = String(tagName || "").toLowerCase();
  activeTags.delete(clean);

  const searchInput = document.getElementById("searchInput");
  const regex = new RegExp(`(?:^|\\s)#${clean.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=\\s|$)`, "gi");
  searchInput.value = searchInput.value.replace(regex, " ").replace(/\s+/g, " ").trim();

  clearActiveSavedSearch();
  if (announce) {
    showToast(`🏷️ TAG FILTER REMOVED: #${clean.toUpperCase()}`);
  }
  loadEntries();
}

function resetAllFiltersAndSearch() {
  clearActiveSavedSearch();
  document.getElementById("searchInput").value = "";
  document.getElementById("filterType").value = "ALL";
  currentFilterStatus = "ALL";
  currentFilterRating = "-1";
  activeTags.clear();
  syncFilterButtonStates();
  showToast("🧹 ALL FILTERS & TAGS CLEARED");
  loadEntries();
}

/* --- FILTER & SORT HANDLERS --- */
function syncFilterButtonStates() {
  document.querySelectorAll("#statusButtonGroup .choice-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.val === currentFilterStatus);
  });
  document.querySelectorAll("#ratingButtonGroup .choice-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.val === String(currentFilterRating));
  });
  document.querySelectorAll("#sortButtonGroup .choice-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.val === currentSortBy);
  });
  updateSortDirButton();
  syncShrineNavState();
}

function selectStatusFilter(val) {
  clearActiveSavedSearch();
  currentFilterStatus = val;
  syncFilterButtonStates();
  loadEntries();
}

function selectRatingFilter(val) {
  clearActiveSavedSearch();
  currentFilterRating = String(val);
  syncFilterButtonStates();
  loadEntries();
}

function selectSortField(field) {
  if (field === "random") {
    currentSortBy = "random";
    syncFilterButtonStates();
    loadEntries();
    showToast("🎲 SHUFFLED ARCHIVE SIGNALS");
    return;
  }

  if (currentSortBy === field) {
    userOverrodeSortDir = true;
    sortDir = sortDir === "DESC" ? "ASC" : "DESC";
  } else {
    currentSortBy = field;
    if (!userOverrodeSortDir) {
      sortDir = ["title", "domain", "media_type", "status"].includes(field) ? "ASC" : "DESC";
    }
  }

  syncFilterButtonStates();
  loadEntries();
}

function updateSortDirButton() {
  const btn = document.getElementById("sortDirBtn");
  if (!btn) return;
  if (currentSortBy === "random") {
    btn.textContent = "🎲 RESHUFFLE";
  } else {
    btn.textContent = sortDir === "ASC" ? "↑ ASC" : "↓ DESC";
  }
}

function toggleSortDir() {
  if (currentSortBy === "random") {
    loadEntries();
    showToast("🎲 RESHUFFLED ARCHIVE SIGNALS");
    return;
  }
  userOverrodeSortDir = true;
  sortDir = sortDir === "DESC" ? "ASC" : "DESC";
  updateSortDirButton();
  loadEntries();
}

function applyQuickFilter(statusVal, ratingVal, btnEl) {
  clearActiveSavedSearch();
  currentFilterStatus = statusVal;
  currentFilterRating = String(ratingVal);
  syncFilterButtonStates();
  if (btnEl) {
    document.querySelectorAll(".shrine-link").forEach(b => b.classList.remove("active"));
    btnEl.classList.add("active");
  }
  loadEntries();
}

function syncShrineNavState() {
  const st = currentFilterStatus;
  const rt = String(currentFilterRating);
  document.querySelectorAll(".shrine-link").forEach(b => b.classList.remove("active"));
  if (st === "ALL" && rt === "-1") {
    document.querySelector('.shrine-link[data-shrine="ALL"]')?.classList.add("active");
  } else if (rt === "-1" && ["QUEUED", "ACTIVE", "CONSUMED"].includes(st)) {
    document.querySelector(`.shrine-link[data-shrine="${st}"]`)?.classList.add("active");
  } else if (st === "ALL" && rt === "5") {
    document.querySelector('.shrine-link[data-shrine="DIAMOND"]')?.classList.add("active");
  } else if (st === "ALL" && rt === "0") {
    document.querySelector('.shrine-link[data-shrine="UNSTAMPED"]')?.classList.add("active");
  }
}

function openRandomEntryDossier() {
  if (!entriesOrderedIds.length) {
    showToast("⚠️ NO TRANSMISSIONS IN CURRENT VIEW TO OPEN");
    return;
  }
  const randomId = entriesOrderedIds[Math.floor(Math.random() * entriesOrderedIds.length)];
  openEditModal(randomId);
  showToast("🎲 TUNED INTO RANDOM TRANSMISSION");
}

function stepDossierEntry(delta) {
  const currentId = document.getElementById("editId").value;
  if (!currentId || entriesOrderedIds.length < 2) return;
  const idx = entriesOrderedIds.indexOf(currentId);
  if (idx === -1) return;
  const nextIdx = (idx + delta + entriesOrderedIds.length) % entriesOrderedIds.length;
  openEditModal(entriesOrderedIds[nextIdx]);
}

function updateLedCounter(totalNum) {
  totalVaultRecords = Math.max(0, Number(totalNum) || 0);
  const padded = String(totalVaultRecords).padStart(5, "0").slice(-5);
  const wrap = document.getElementById("ledDigits");
  if (!wrap) return;
  wrap.innerHTML = padded
    .split("")
    .map(d => `<span class="led-digit">${d}</span>`)
    .join("");
}

function updateMatchResultsBar(matchedCount) {
  const countEl = document.getElementById("matchCountText");
  const subEl = document.getElementById("matchTotalSubtext");
  const pillsEl = document.getElementById("activeFilterPills");
  if (!countEl || !subEl || !pillsEl) return;

  countEl.textContent = matchedCount;
  subEl.textContent = totalVaultRecords > 0 ? `OF ${totalVaultRecords} ARCHIVED` : "";

  const { textQuery } = parseSearchBarInput();
  const combinedTags = getCombinedEffectiveTags();
  const catVal = document.getElementById("filterType").value;

  const pills = [];
  if (textQuery) {
    pills.push(`<span class="active-tag-pill" onclick="document.getElementById('searchInput').value=document.getElementById('searchInput').value.replace(/[^#\\s]+/g,'').trim(); loadEntries();">🔍 "${escapeHtml(textQuery)}" ×</span>`);
  }
  if (catVal && catVal !== "ALL") {
    pills.push(`<span class="active-tag-pill" onclick="document.getElementById('filterType').value='ALL'; loadEntries();">📁 ${escapeHtml(catVal)} ×</span>`);
  }
  if (currentFilterStatus !== "ALL") {
    pills.push(`<span class="active-tag-pill" onclick="selectStatusFilter('ALL')">🥫 ${escapeHtml(currentFilterStatus)} ×</span>`);
  }
  if (String(currentFilterRating) !== "-1") {
    const t = THUMB_TIERS.find(x => String(x.val) === String(currentFilterRating));
    pills.push(`<span class="active-tag-pill" onclick="selectRatingFilter('-1')">👍 ${escapeHtml(t ? t.label : currentFilterRating)} ×</span>`);
  }
  combinedTags.forEach(tag => {
    pills.push(`<span class="active-tag-pill" data-remove-tag="${escapeHtml(tag)}">#${escapeHtml(tag)} ×</span>`);
  });

  if (pills.length > 0) {
    pills.push(`<button type="button" class="btn btn-danger" style="padding:2px 8px; font-size:0.7rem;" onclick="resetAllFiltersAndSearch()">✖ RESET ALL</button>`);
  }

  pillsEl.innerHTML = pills.join("");
  pillsEl.querySelectorAll("[data-remove-tag]").forEach(el => {
    el.addEventListener("click", () => removeTagFilter(el.dataset.removeTag, true));
  });
}

function foodStatusSvg(status, size = 20) {
  switch (status) {
    case "QUEUED":
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <ellipse cx="12" cy="5.5" rx="7" ry="2.5"/>
          <path d="M5 5.5v13c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-13"/>
          <path d="M5 10.5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5"/>
          <path d="M5 15c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5"/>
          <circle cx="14.5" cy="5.2" r="1.2" fill="currentColor"/>
        </svg>
      `;
    case "ACTIVE":
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 11h16a1 1 0 0 1 1 1v.5a7.5 7.5 0 0 1-7.5 7.5h-3A7.5 7.5 0 0 1 3 12.5V12a1 1 0 0 1 1-1z"/>
          <path d="M8 21h8"/>
          <path d="M8 3.5c0 1.5 1.5 2 1.5 3.5S8 9 8 9"/>
          <path d="M12 2.5c0 1.5 1.5 2 1.5 3.5S12 8 12 8"/>
          <path d="M16 3.5c0 1.5 1.5 2 1.5 3.5S16 9 16 9"/>
        </svg>
      `;
    case "CONSUMED":
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="6.5"/>
          <circle cx="12" cy="12" r="3" opacity="0.55"/>
          <path d="M3 4v5a2 2 0 0 0 2 2v9"/>
          <path d="M5 4v4"/>
          <path d="M7 4v5a2 2 0 0 1-2 2"/>
          <path d="M20 4v16"/>
          <path d="M20 4c1.5 1.5 1.5 4.5 0 6"/>
        </svg>
      `;
    case "DROPPED":
    default:
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3c1.5-1 3.5-.5 4 1"/>
          <path d="M7 6.5c2.5-1.2 7.5-1.2 10 0-1.8 1.8-2.2 3.8-2.2 5.5s.4 3.7 2.2 5.5c-2.5 1.2-7.5 1.2-10 0 1.8-1.8 2.2-3.8 2.2-5.5S8.8 8.3 7 6.5z"/>
          <line x1="12" y1="6" x2="12" y2="18"/>
          <circle cx="11" cy="11.5" r="0.8" fill="currentColor"/>
          <circle cx="13" cy="13" r="0.8" fill="currentColor"/>
        </svg>
      `;
  }
}

function sparkleStarSvg(size = 12) {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z"/>
    </svg>
  `;
}

function cardSparklesHtml(ratingNum) {
  if (ratingNum === 4) {
    const stars = [
      { top: "14px", right: "24px", size: 13, delay: "0.1s", dur: "2.7s" },
      { top: "46px", right: "14px", size: 9, delay: "1.2s", dur: "3.1s" },
      { top: "142px", left: "14px", size: 12, delay: "0.7s", dur: "2.9s" },
      { top: "160px", left: "40px", size: 8, delay: "1.9s", dur: "2.5s" }
    ];
    return `
      <div class="tier-sparkles" aria-hidden="true">
        ${stars.map(s => `
          <span class="sparkle-star" style="
            ${s.top ? `top:${s.top};` : ""}
            ${s.left ? `left:${s.left};` : ""}
            ${s.right ? `right:${s.right};` : ""}
            animation-delay:${s.delay};
            animation-duration:${s.dur};
          ">${sparkleStarSvg(s.size)}</span>
        `).join("")}
      </div>
    `;
  }

  if (ratingNum === 5) {
    const stars = [
      { top: "12px", right: "22px", size: 15, delay: "0.0s", dur: "2.3s" },
      { top: "34px", right: "44px", size: 9, delay: "0.9s", dur: "2.7s" },
      { top: "64px", right: "14px", size: 11, delay: "1.6s", dur: "2.4s" },
      { top: "134px", left: "14px", size: 14, delay: "0.5s", dur: "2.6s" },
      { top: "156px", left: "36px", size: 10, delay: "1.3s", dur: "2.2s" },
      { top: "22px", left: "128px", size: 9, delay: "2.0s", dur: "2.9s" }
    ];
    return `
      <div class="tier-sparkles" aria-hidden="true">
        ${stars.map(s => `
          <span class="sparkle-star" style="
            ${s.top ? `top:${s.top};` : ""}
            ${s.left ? `left:${s.left};` : ""}
            ${s.right ? `right:${s.right};` : ""}
            animation-delay:${s.delay};
            animation-duration:${s.dur};
          ">${sparkleStarSvg(s.size)}</span>
        `).join("")}
      </div>
    `;
  }

  return "";
}

function thumbSvg(tier, size = 16) {
  if (tier === 5) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12,1 23,9 12,23 1,9" opacity="0.28"/>
        <polyline points="1,9 12,13 23,9" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
        <path d="M20.5 1L21.3 3.7L24 4.5L21.3 5.3L20.5 8L19.7 5.3L17 4.5L19.7 3.7Z" fill="#ffffff"/>
      </svg>
    `;
  }

  if (tier === 4) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
        <path d="M20 1.5L20.8 4.2L23.5 5L20.8 5.8L20 8.5L19.2 5.8L16.5 5L19.2 4.2Z" fill="#fff8c9"/>
      </svg>
    `;
  }

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
    </svg>
  `;
}

function thumbPipsHtml(rating) {
  let pips = "";
  for (let i = 1; i <= 5; i++) {
    pips += `<span class="thumb-pip ${i <= rating ? "filled" : ""}"></span>`;
  }
  return `<span class="thumb-pips" aria-hidden="true">${pips}</span>`;
}

function showToast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = `// ${msg}`;
  el.style.display = "none";
  void el.offsetWidth;
  el.style.display = "block";
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.style.display = "none"; }, 3400);
}

function escapeHtml(str) {
  return String(str || "").replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}

function shuffleArray(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function handleSearchTyping() {
  clearActiveSavedSearch();
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    loadEntries();
  }, 180);
}

/* --- COVER IMAGE ZOOM LIGHTBOX --- */
function openCoverLightbox(coverPath, title = "VISUAL_SIGNAL_INSPECTOR.IMG") {
  const box = document.getElementById("coverLightbox");
  const img = document.getElementById("coverLightboxImg");
  const titleEl = document.getElementById("coverLightboxTitle");
  const hintEl = document.getElementById("coverLightboxHintText");
  if (!box || !img) return;

  img.src = coverPath;
  img.classList.remove("is-zoomed");
  img.style.transformOrigin = "center center";
  if (titleEl) titleEl.textContent = `🖼️ ${title.toUpperCase()}`;
  if (hintEl) hintEl.textContent = "🔍 CLICK IMAGE TO ZOOM 2X";

  box.classList.add("open");
  showToast(`🔍 ZOOMED COVER: ${title.slice(0, 34)}`);
}

function closeCoverLightbox() {
  const box = document.getElementById("coverLightbox");
  const img = document.getElementById("coverLightboxImg");
  if (!box) return;
  box.classList.remove("open");
  if (img) img.classList.remove("is-zoomed");
}

function toggleCoverLightboxZoom(e) {
  const img = document.getElementById("coverLightboxImg");
  const hintEl = document.getElementById("coverLightboxHintText");
  if (!img) return;

  const zoomingIn = !img.classList.contains("is-zoomed");
  if (zoomingIn && e) {
    const rect = img.getBoundingClientRect();
    const xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    img.style.transformOrigin = `${xPct}% ${yPct}%`;
  } else {
    img.style.transformOrigin = "center center";
  }

  img.classList.toggle("is-zoomed", zoomingIn);
  if (hintEl) {
    hintEl.textContent = zoomingIn ? "🔎 ZOOMED 2X — CLICK IMAGE TO RESET" : "🔍 CLICK IMAGE TO ZOOM 2X";
  }
}

/* --- CARD INTERACTION HANDLERS --- */
function handleCardPrimaryClick(id) {
  const item = entriesCache[id];
  if (!item) return;

  if (item.url) {
    showToast(`📡 LAUNCHING SIGNAL: ${item.title.slice(0, 34)}`);
    window.open(item.url, "_blank", "noopener,noreferrer");
  } else {
    showToast(`📂 OPENING OFFLINE DOSSIER: ${item.title.slice(0, 30)}`);
    openEditModal(id);
  }
}

function toggleCardThumbFilter(ratingVal) {
  const valStr = String(ratingVal ?? 0);
  const tier = THUMB_TIERS.find(t => String(t.val) === valStr) || THUMB_TIERS[0];
  clearActiveSavedSearch();

  if (String(currentFilterRating) === valStr) {
    currentFilterRating = "-1";
    showToast(`${tier.emoji} THUMB FILTER CLEARED (${tier.label})`);
  } else {
    currentFilterRating = valStr;
    showToast(`${tier.emoji} FILTERED BY RATING: ${tier.label}`);
  }
  syncFilterButtonStates();
  loadEntries();
}

function toggleCardCategoryFilter(catName) {
  if (!catName) return;
  const filterSel = document.getElementById("filterType");
  clearActiveSavedSearch();

  if (filterSel.value === catName) {
    filterSel.value = "ALL";
    showToast(`📁 CATEGORY FILTER CLEARED (${catName})`);
  } else {
    filterSel.value = catName;
    showToast(`📁 FILTERED BY CATEGORY: ${catName}`);
  }
  syncShrineNavState();
  loadEntries();
}

function toggleCardStatusFilter(statusVal) {
  if (!statusVal) return;
  clearActiveSavedSearch();

  if (currentFilterStatus === statusVal) {
    currentFilterStatus = "ALL";
    showToast(`🥫 STATUS FILTER CLEARED (${statusVal})`);
  } else {
    currentFilterStatus = statusVal;
    showToast(`🥫 FILTERED BY STATUS: ${statusVal}`);
  }
  syncFilterButtonStates();
  loadEntries();
}

function handleCardDomainClick(id) {
  const item = entriesCache[id];
  if (!item) return;

  if (!item.domain) {
    showToast("📟 OFFLINE_ARCHIVE — NO EXTERNAL DOMAIN TO FILTER");
    return;
  }

  const searchInput = document.getElementById("searchInput");
  clearActiveSavedSearch();
  if (searchInput.value.trim().toLowerCase() === item.domain.toLowerCase()) {
    searchInput.value = "";
    showToast(`🌐 DOMAIN FILTER CLEARED (${item.domain})`);
  } else {
    searchInput.value = item.domain;
    showToast(`🌐 FILTERED BY DOMAIN: ${item.domain}`);
  }
  loadEntries();
}

function setupGridDelegatedActions() {
  const grid = document.getElementById("entriesGrid");
  if (!grid || grid.dataset.actionsBound === "1") return;
  grid.dataset.actionsBound = "1";

  grid.addEventListener("click", e => {
    const card = e.target.closest(".card[data-entry-id]");
    if (!card) return;
    const entryId = card.dataset.entryId;
    const item = entriesCache[entryId];
    if (!item) return;

    const actionEl = e.target.closest("[data-action]");
    if (actionEl) {
      e.stopPropagation();
      const action = actionEl.dataset.action;

      if (action === "zoom-cover" && item.cover_path) {
        openCoverLightbox(item.cover_path, item.title);
      } else if (action === "no-cover") {
        showToast("📟 NO VISUAL SIGNAL — HOVER CARD & PRESS [CTRL+V] OR CLICK [EDIT] TO ADD COVER");
      } else if (action === "filter-category") {
        toggleCardCategoryFilter(item.media_type);
      } else if (action === "filter-status") {
        toggleCardStatusFilter(item.status || "QUEUED");
      } else if (action === "filter-domain") {
        handleCardDomainClick(entryId);
      } else if (action === "edit-entry") {
        showToast(`📂 DOSSIER OPENED: ${item.title.slice(0, 32)}`);
        openEditModal(entryId);
      } else if (action === "toggle-tag") {
        toggleTagFilter(actionEl.dataset.tag);
      } else if (action === "more-tags") {
        const extra = (item.tags || []).slice(4).map(t => `#${t}`).join(" ");
        showToast(`🏷️ MORE TAGS: ${extra} (CLICK [EDIT] TO MANAGE)`);
      } else if (action === "filter-thumb") {
        toggleCardThumbFilter(item.thumb_rating ?? 0);
      }
      return;
    }

    handleCardPrimaryClick(entryId);
  });
}

// --- SAVED SEARCHES ---
async function loadSavedSearches() {
  const res = await fetch("/api/saved-searches");
  if (!res.ok) return;
  savedSearches = await res.json();
  renderSavedSearches();
}

function renderSavedSearches() {
  const bar = document.getElementById("savedSearchesBar");
  if (!savedSearches.length) {
    bar.classList.remove("has-items");
    bar.innerHTML = "";
    return;
  }

  bar.classList.add("has-items");
  const chipsHtml = savedSearches
    .map(s => {
      const isActive = s.id === activeSavedSearchId;
      const showSubQuery = s.query && s.name.toLowerCase() !== s.query.toLowerCase();
      const subHint = showSubQuery
        ? ` <span style="opacity:0.7; font-size:0.72rem;">[${escapeHtml(s.query)}]</span>`
        : "";
      return `
        <div class="saved-search-chip ${isActive ? "active" : ""}">
          <button type="button" class="saved-search-run" onclick="applySavedSearch('${escapeHtml(s.id)}')" title="Load exact search query into search bar">
            <span>📌</span>
            <span>${escapeHtml(s.name)}${subHint}</span>
          </button>
          <button type="button" class="saved-search-del" onclick="deleteSavedSearch('${escapeHtml(s.id)}')" title="Remove saved search">×</button>
        </div>
      `;
    })
    .join("");

  bar.innerHTML = `<span class="saved-searches-label">📌 SAVED QUERIES:</span>${chipsHtml}`;
}

function clearActiveSavedSearch() {
  if (activeSavedSearchId !== null) {
    activeSavedSearchId = null;
    renderSavedSearches();
  }
}

function openSaveSearchModal() {
  const currentQuery = document.getElementById("searchInput").value;
  const mediaType = document.getElementById("filterType").value;
  const status = currentFilterStatus;
  const rating = String(currentFilterRating);
  const sortBy = currentSortBy;
  const combinedTags = getCombinedEffectiveTags();

  const hasCustomFilters =
    mediaType !== "ALL" ||
    status !== "ALL" ||
    rating !== "-1" ||
    combinedTags.length > 0 ||
    sortBy !== "updated_at" ||
    sortDir !== "DESC";

  document.getElementById("saveSearchNameInput").value = currentQuery.trim();
  document.getElementById("saveSearchQueryInput").value = currentQuery;

  const checkbox = document.getElementById("saveSearchIncludeFilters");
  checkbox.checked = hasCustomFilters;

  const parts = [];
  if (mediaType !== "ALL") parts.push(`Category=${mediaType}`);
  if (status !== "ALL") parts.push(`Status=${status}`);
  if (rating !== "-1") {
    const tObj = THUMB_TIERS.find(x => String(x.val) === rating);
    parts.push(`Thumb=${tObj ? tObj.label : rating}`);
  }
  if (combinedTags.length) parts.push(`Tags=${combinedTags.map(t => "#" + t).join("+")}`);
  if (sortBy !== "updated_at" || sortDir !== "DESC") parts.push(`Sort=${sortBy} (${sortDir})`);

  document.getElementById("saveSearchFiltersSummary").textContent = parts.length
    ? `Also save active filters & sort (${parts.join(", ")})`
    : "Also save current filter & sort settings";

  document.getElementById("saveSearchModal").classList.add("open");
  const nameInput = document.getElementById("saveSearchNameInput");
  nameInput.focus();
  nameInput.select();
}

function closeSaveSearchModal() {
  document.getElementById("saveSearchModal").classList.remove("open");
}

async function submitSaveSearch(e) {
  e.preventDefault();
  const name = document.getElementById("saveSearchNameInput").value.trim();
  const query = document.getElementById("saveSearchQueryInput").value;
  const includeFilters = document.getElementById("saveSearchIncludeFilters").checked;
  const tagList = getCombinedEffectiveTags();

  if (!name && !query.trim() && !tagList.length) {
    showToast("⚠️ ERROR: ENTER A SEARCH QUERY OR LABEL");
    return;
  }

  const payload = {
    name: name || query.trim() || tagList.map(t => "#" + t).join(" "),
    query,
    include_filters: includeFilters,
    media_type: includeFilters ? document.getElementById("filterType").value : "ALL",
    status: includeFilters ? currentFilterStatus : "ALL",
    rating: includeFilters ? Number(currentFilterRating) : -1,
    tag: includeFilters ? tagList.join(",") : "",
    sort_by: includeFilters ? currentSortBy : "updated_at",
    sort_dir: includeFilters ? sortDir : "DESC"
  };

  const res = await fetch("/api/saved-searches", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    const created = await res.json();
    activeSavedSearchId = created.id;
    closeSaveSearchModal();
    await loadSavedSearches();
    showToast(`📌 SAVED SEARCH: ${created.name}`);
  }
}

async function applySavedSearch(id) {
  const item = savedSearches.find(s => s.id === id);
  if (!item) return;

  activeSavedSearchId = item.id;
  const searchInput = document.getElementById("searchInput");
  searchInput.value = item.query;

  if (item.include_filters) {
    document.getElementById("filterType").value = item.media_type || "ALL";
    currentFilterStatus = item.status || "ALL";
    currentFilterRating = String(item.rating ?? -1);
    activeTags = new Set(
      (item.tag || "")
        .split(",")
        .map(t => t.trim().toLowerCase())
        .filter(Boolean)
    );
    currentSortBy = item.sort_by || "updated_at";
    sortDir = item.sort_dir || "DESC";
    userOverrodeSortDir = true;
    syncFilterButtonStates();
  }

  renderSavedSearches();
  searchInput.focus();
  await Promise.all([loadStats(), loadEntries()]);
}

async function deleteSavedSearch(id) {
  const res = await fetch(`/api/saved-searches/${encodeURIComponent(id)}`, { method: "DELETE" });
  if (res.ok) {
    if (activeSavedSearchId === id) activeSavedSearchId = null;
    await loadSavedSearches();
    showToast("🗑️ SAVED SEARCH REMOVED");
  }
}

// --- CATEGORY-SCOPED TAG AUTOCOMPLETE ---
async function fetchTagsForCategory(categoryName) {
  const key = categoryName === "__NEW__" ? "" : (categoryName || "");
  if (categoryTagsCache[key]) {
    return categoryTagsCache[key];
  }
  const res = await fetch(`/api/tags?media_type=${encodeURIComponent(key)}`);
  const tags = res.ok ? await res.json() : [];
  categoryTagsCache[key] = tags;
  return tags;
}

function parseTagInputState(rawValue) {
  const parts = rawValue.split(",");
  const committed = parts
    .slice(0, -1)
    .map(s => s.trim().toLowerCase().replace(/^#+/, ""))
    .filter(Boolean);
  const currentFragment = parts[parts.length - 1]
    .trim()
    .toLowerCase()
    .replace(/^#+/, "");
  return { parts, committed, currentFragment };
}

function setupCategoryTagAutocomplete(inputId, dropdownId, categorySelectId) {
  const input = document.getElementById(inputId);
  const dropdown = document.getElementById(dropdownId);
  const catSelect = document.getElementById(categorySelectId);

  let currentMatches = [];
  let highlightedIndex = -1;

  function closeDropdown() {
    dropdown.classList.remove("open");
    currentMatches = [];
    highlightedIndex = -1;
  }

  function applyTag(tagName) {
    const { parts } = parseTagInputState(input.value);
    parts[parts.length - 1] = tagName;
    const cleaned = parts
      .map(s => s.trim().toLowerCase().replace(/^#+/, ""))
      .filter(Boolean);
    const unique = [...new Set(cleaned)];
    input.value = unique.join(", ") + ", ";
    input.focus();
    refreshSuggestions();
  }

  function renderDropdown(catLabel) {
    const headerHtml = `<div class="tag-suggestions-header">🏷️ EXISTING TAGS IN [${escapeHtml(catLabel)}]</div>`;
    if (!currentMatches.length) {
      dropdown.innerHTML =
        headerHtml +
        `<div class="tag-suggestion-empty">No matching tags in this category — keep typing to create new</div>`;
      dropdown.classList.add("open");
      return;
    }

    dropdown.innerHTML =
      headerHtml +
      currentMatches
        .map(
          (t, idx) => `
          <div
            class="tag-suggestion-item ${idx === highlightedIndex ? "highlighted" : ""}"
            data-idx="${idx}"
          >
            <span>#${escapeHtml(t.name)}</span>
            <span class="tag-suggestion-count">(${t.count})</span>
          </div>
        `
        )
        .join("");

    dropdown.querySelectorAll(".tag-suggestion-item").forEach(el => {
      el.addEventListener("mousedown", e => {
        e.preventDefault();
        const idx = Number(el.dataset.idx);
        if (currentMatches[idx]) {
          applyTag(currentMatches[idx].name);
        }
      });
    });

    dropdown.classList.add("open");
  }

  async function refreshSuggestions() {
    const rawCat = catSelect.value === "__NEW__" ? "" : catSelect.value;
    const catLabel = rawCat || "VAULT";
    const allCategoryTags = await fetchTagsForCategory(rawCat);
    const { committed, currentFragment } = parseTagInputState(input.value);
    const committedSet = new Set(committed);

    currentMatches = allCategoryTags.filter(t => {
      if (committedSet.has(t.name)) return false;
      if (!currentFragment) return true;
      return t.name.includes(currentFragment);
    });

    if (!allCategoryTags.length && !currentFragment) {
      closeDropdown();
      return;
    }

    highlightedIndex = currentMatches.length > 0 && currentFragment ? 0 : -1;
    renderDropdown(catLabel);
  }

  input.addEventListener("focus", refreshSuggestions);
  input.addEventListener("input", refreshSuggestions);
  input.addEventListener("blur", () => {
    setTimeout(closeDropdown, 120);
  });

  input.addEventListener("keydown", e => {
    if (!dropdown.classList.contains("open")) return;

    if (e.key === "ArrowDown") {
      if (!currentMatches.length) return;
      e.preventDefault();
      highlightedIndex = (highlightedIndex + 1) % currentMatches.length;
      renderDropdown(catSelect.value || "VAULT");
    } else if (e.key === "ArrowUp") {
      if (!currentMatches.length) return;
      e.preventDefault();
      highlightedIndex =
        highlightedIndex <= 0 ? currentMatches.length - 1 : highlightedIndex - 1;
      renderDropdown(catSelect.value || "VAULT");
    } else if ((e.key === "Enter" || e.key === "Tab") && highlightedIndex >= 0 && currentMatches[highlightedIndex]) {
      e.preventDefault();
      applyTag(currentMatches[highlightedIndex].name);
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      closeDropdown();
    }
  });

  catSelect.addEventListener("change", () => {
    if (document.activeElement === input) {
      refreshSuggestions();
    } else {
      fetchTagsForCategory(catSelect.value);
    }
  });

  return { refreshSuggestions, closeDropdown };
}

// --- IMAGE UPLOAD & CLIPBOARD PASTE HELPERS ---
function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function uploadImageBlob(blob) {
  const dataUrl = await blobToDataUrl(blob);
  const res = await fetch("/api/media/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data_url: dataUrl })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Image upload failed");
  }
  const data = await res.json();
  return data.cover_path;
}

function updateModalCoverPreview(coverPath) {
  modalCoverPath = coverPath;
  modalCoverCleared = !coverPath;
  const container = document.getElementById("coverPreviewContent");
  const clearBtn = document.getElementById("clearCoverBtn");

  if (coverPath) {
    container.outerHTML = `<img id="coverPreviewContent" src="${escapeHtml(coverPath)}" alt="Cover preview" />`;
    clearBtn.style.display = "inline-block";
  } else {
    container.outerHTML = `
      <div class="cover-dropzone-hint" id="coverPreviewContent">
        [ NO VISUAL SIGNAL ]<br/>PASTE IMAGE [CTRL+V] OR DROP FILE
      </div>
    `;
    clearBtn.style.display = "none";
  }
}

function clearModalCover() {
  updateModalCoverPreview(null);
  showToast("🗑️ COVER SIGNAL CLEARED (SAVE TO COMMIT)");
}

async function handleCoverFileSelect(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    showToast("📡 UPLOADING COVER SIGNAL...");
    const path = await uploadImageBlob(file);
    updateModalCoverPreview(path);
    showToast("🖼️ COVER IMAGE CACHED IN VAULT");
  } catch (err) {
    showToast(`⚠️ ERROR: ${err.message}`);
  } finally {
    e.target.value = "";
  }
}

async function handleCoverDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove("dragover");
  const file = e.dataTransfer?.files?.[0];
  if (!file || !file.type.startsWith("image/")) {
    showToast("⚠️ ERROR: DROP AN IMAGE FILE");
    return;
  }
  try {
    showToast("📡 CACHING DROPPED IMAGE...");
    const path = await uploadImageBlob(file);
    updateModalCoverPreview(path);
    showToast("🖼️ COVER IMAGE CACHED IN VAULT");
  } catch (err) {
    showToast(`⚠️ ERROR: ${err.message}`);
  }
}

async function fetchCustomCoverUrl() {
  const input = document.getElementById("customCoverUrlInput");
  const imgUrl = input.value.trim();
  if (!imgUrl) return;
  try {
    showToast("📡 DOWNLOADING IMAGE TO VAULT...");
    const res = await fetch("/api/media/fetch-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url: imgUrl })
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || "Unable to fetch image");
    }
    const data = await res.json();
    input.value = "";
    updateModalCoverPreview(data.cover_path);
    showToast("🖼️ COVER IMAGE DOWNLOADED & CACHED");
  } catch (err) {
    showToast(`⚠️ ERROR: ${err.message}`);
  }
}

document.addEventListener("paste", async e => {
  const items = Array.from(e.clipboardData?.items || []);
  const imageItem = items.find(item => item.type.startsWith("image/"));
  if (!imageItem) return;

  const blob = imageItem.getAsFile();
  if (!blob) return;

  const modalOpen = document.getElementById("dossierModal")?.classList.contains("open");
  if (modalOpen) {
    e.preventDefault();
    try {
      showToast("📋 CAPTURING CLIPBOARD IMAGE...");
      const path = await uploadImageBlob(blob);
      updateModalCoverPreview(path);
      showToast("🖼️ CLIPBOARD COVER CAPTURED (CLICK COMMIT TO SAVE)");
    } catch (err) {
      showToast(`⚠️ ERROR: ${err.message}`);
    }
  } else if (hoveredCardId && entriesCache[hoveredCardId]) {
    e.preventDefault();
    const targetId = hoveredCardId;
    try {
      showToast("📋 ATTACHING CLIPBOARD COVER TO CARD...");
      const path = await uploadImageBlob(blob);
      const res = await fetch(`/api/entries/${targetId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cover_path: path })
      });
      if (res.ok) {
        recordLocalModified(targetId);
        showToast(`🖼️ COVER UPDATED: ${entriesCache[targetId].title.slice(0, 34)}`);
        await loadEntries();
      }
    } catch (err) {
      showToast(`⚠️ ERROR: ${err.message}`);
    }
  }
});

// --- CATEGORY MANAGEMENT & COLOR ASSIGNMENT ---
async function loadMediaTypes(preserveSelections = true) {
  const prevIngest = document.getElementById("ingestType").value;
  const prevFilter = document.getElementById("filterType").value;
  const prevEdit = document.getElementById("editType").value;

  const res = await fetch("/api/media-types");
  mediaTypes = await res.json();

  let colorMapUpdated = false;
  mediaTypes.forEach(m => {
    if (m.color && /^#[0-9a-f]{6}$/i.test(m.color)) {
      if (categoryColors[m.name] !== m.color) {
        categoryColors[m.name] = m.color;
        colorMapUpdated = true;
      }
    } else if (!categoryColors[m.name]) {
      categoryColors[m.name] = pickNextAvailableColor();
      colorMapUpdated = true;
    }
  });
  if (colorMapUpdated) saveStoredCategoryColors();

  const optionsHtml = mediaTypes
    .map(m => `<option value="${escapeHtml(m.name)}">📁 ${escapeHtml(m.name)}</option>`)
    .join("");

  const emptyCategoryOption = mediaTypes.length === 0
    ? `<option value="" disabled selected>CREATE A CATEGORY...</option>`
    : "";

  const ingestSel = document.getElementById("ingestType");
  ingestSel.innerHTML =
    emptyCategoryOption +
    optionsHtml +
    `<option value="__NEW__">+ NEW CATEGORY...</option>`;

  const filterSel = document.getElementById("filterType");
  filterSel.innerHTML =
    `<option value="ALL">📁 CATEGORY: ALL</option>` +
    optionsHtml;

  const editSel = document.getElementById("editType");
  editSel.innerHTML =
    emptyCategoryOption +
    optionsHtml +
    `<option value="__NEW__">+ NEW CATEGORY...</option>`;

  if (preserveSelections) {
    if (prevIngest && prevIngest !== "__NEW__" && mediaTypes.some(m => m.name === prevIngest)) {
      ingestSel.value = prevIngest;
    }
    if (prevFilter && (prevFilter === "ALL" || mediaTypes.some(m => m.name === prevFilter))) {
      filterSel.value = prevFilter;
    }
    if (prevEdit && prevEdit !== "__NEW__" && mediaTypes.some(m => m.name === prevEdit)) {
      editSel.value = prevEdit;
    }
  }

  renderCategoryList();
}

async function handleCategorySelectChange(selectEl) {
  if (selectEl.value === "__NEW__") {
    const fallback = mediaTypes[0]?.name || "";
    selectEl.value = fallback;
    await quickAddCategoryForSelect(selectEl);
  }
}

function renderCategoryList() {
  const list = document.getElementById("categoryList");
  if (!list) return;
  if (!mediaTypes.length) {
    list.innerHTML = `<div style="color:var(--text-muted); font-family:var(--font-mono); font-size:0.82rem; padding:10px 0;">[ NO CATEGORIES DEFINED YET — CREATE ONE ABOVE ]</div>`;
    return;
  }
  list.innerHTML = mediaTypes.map(m => {
    const hex = getCategoryColor(m.name);
    return `
      <div class="cat-row" style="--cat-row-color: ${escapeHtml(hex)};">
        <div class="cat-row-left">
          <input
            type="color"
            class="cat-row-color-picker"
            value="${escapeHtml(hex)}"
            title="Change color for ${escapeHtml(m.name)}"
            onchange="updateExistingCategoryColor('${escapeHtml(m.name)}', this.value)"
          />
          <span style="color:${escapeHtml(hex)}; font-weight:700;">📁 ${escapeHtml(m.name)}</span>
        </div>
        <button type="button" class="btn btn-danger" style="padding:5px 10px; font-size:0.74rem;" onclick="deleteCategory('${escapeHtml(m.name)}')">REMOVE</button>
      </div>
    `;
  }).join("");
}

function openCategoryModal() {
  const nextColor = pickNextAvailableColor();
  const colorInput = document.getElementById("newCategoryColor");
  if (colorInput) colorInput.value = nextColor;
  renderCategoryColorPresets();
  renderCategoryList();
  document.getElementById("categoryModal").classList.add("open");
  document.getElementById("newCategoryInput").focus();
}

function closeCategoryModal() {
  document.getElementById("categoryModal").classList.remove("open");
}

async function handleAddCategory(e) {
  e.preventDefault();
  const input = document.getElementById("newCategoryInput");
  const colorInput = document.getElementById("newCategoryColor");
  const raw = input.value.trim();
  const chosenColor = colorInput?.value || pickNextAvailableColor();
  if (!raw) return;

  const res = await fetch("/api/media-types", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: raw, color: chosenColor })
  });

  if (res.ok) {
    const created = await res.json();
    categoryColors[created.name] = chosenColor;
    saveStoredCategoryColors();

    input.value = "";
    await loadMediaTypes(true);

    if (colorInput) {
      colorInput.value = pickNextAvailableColor();
      renderCategoryColorPresets();
    }
    await loadEntries();
    showToast(`🏷️ CATEGORY ADDED: ${created.name}`);
  }
}

async function quickAddCategoryForSelect(targetSelect) {
  const raw = prompt("Enter new category name:");
  if (!raw || !raw.trim()) return;

  const autoColor = pickNextAvailableColor();
  const res = await fetch("/api/media-types", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: raw.trim(), color: autoColor })
  });

  if (res.ok) {
    const created = await res.json();
    categoryColors[created.name] = autoColor;
    saveStoredCategoryColors();
    await loadMediaTypes(true);
    if (targetSelect) {
      targetSelect.value = created.name;
      fetchTagsForCategory(created.name);
    }
    showToast(`🏷️ CATEGORY ADDED: ${created.name}`);
  }
}

async function deleteCategory(name) {
  const res = await fetch(`/api/media-types/${encodeURIComponent(name)}`, { method: "DELETE" });
  if (res.ok) {
    delete categoryColors[name];
    saveStoredCategoryColors();
    await loadMediaTypes(true);
    showToast(`🗑️ CATEGORY REMOVED: ${name}`);
  } else {
    const err = await res.json();
    showToast(err.detail || "⚠️ CANNOT REMOVE CATEGORY");
  }
}

// --- STATS & FACETED MULTI-TAG CLOUD ---
async function loadStats() {
  const res = await fetch("/api/stats");
  const data = await res.json();
  const total = data.total || 0;
  updateLedCounter(total);
  globalTopTags = data.top_tags || [];
  renderTagCloud();
}

function renderTagCloud() {
  const cloud = document.getElementById("tagCloud");
  if (!cloud) return;
  cloud.innerHTML = "";

  const combinedSelected = new Set(getCombinedEffectiveTags());
  const { textQuery } = parseSearchBarInput();
  const catVal = document.getElementById("filterType")?.value || "ALL";
  const hasNarrowingFilter =
    combinedSelected.size > 0 ||
    Boolean(textQuery) ||
    (catVal && catVal !== "ALL") ||
    currentFilterStatus !== "ALL" ||
    String(currentFilterRating) !== "-1";

  let displayTags = [];

  if (tagMatchMode === "AND" && hasNarrowingFilter) {
    // Only show tags that appear on at least one currently matching entry
    const counts = new Map();
    for (const entry of lastFilteredEntries) {
      const seenOnEntry = new Set();
      for (const rawTag of entry.tags || []) {
        const clean = rawTag.trim().toLowerCase();
        if (clean && !seenOnEntry.has(clean)) {
          seenOnEntry.add(clean);
          counts.set(clean, (counts.get(clean) || 0) + 1);
        }
      }
    }

    // Keep currently selected tags visible so the user can toggle them off even if 0 results
    for (const sel of combinedSelected) {
      if (!counts.has(sel)) {
        counts.set(sel, 0);
      }
    }

    displayTags = Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => (b.count - a.count) || a.name.localeCompare(b.name))
      .slice(0, 40);
  } else {
    displayTags = globalTopTags;
  }

  if (!displayTags.length && combinedSelected.size === 0) return;

  const clearChip = document.createElement("button");
  clearChip.type = "button";
  clearChip.className = `tag-chip ${combinedSelected.size === 0 ? "active" : ""}`;
  clearChip.textContent = "🏷️ #ALL_SIGNALS";
  clearChip.onclick = () => {
    clearActiveSavedSearch();
    activeTags.clear();
    const searchInput = document.getElementById("searchInput");
    searchInput.value = searchInput.value.replace(/(?:^|\s)#[^\s#]+/g, " ").replace(/\s+/g, " ").trim();
    showToast("🏷️ SHOWING ALL TAGS");
    loadEntries();
  };
  cloud.appendChild(clearChip);

  displayTags.forEach(t => {
    const tagLower = t.name.toLowerCase();
    const isSelected = combinedSelected.has(tagLower);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `tag-chip ${isSelected ? "active" : ""}`;
    btn.dataset.tag = tagLower;
    btn.textContent = `#${t.name} (${t.count})`;
    btn.title = isSelected ? "Click to remove tag filter" : "Click to filter by this tag";
    btn.onclick = () => toggleTagFilter(tagLower);
    cloud.appendChild(btn);
  });

  if (combinedSelected.size >= 2) {
    const modeBtn = document.createElement("button");
    modeBtn.type = "button";
    modeBtn.className = "tag-mode-chip";
    modeBtn.textContent = tagMatchMode === "AND" ? "⚙️ MATCH: ALL TAGS (AND)" : "⚙️ MATCH: ANY TAG (OR)";
    modeBtn.title = "Toggle whether items must match ALL selected tags or ANY selected tag";
    modeBtn.onclick = toggleTagMatchMode;
    cloud.appendChild(modeBtn);
  }
}

async function loadEntries() {
  const params = new URLSearchParams();
  const { textQuery } = parseSearchBarInput();
  const combinedTags = getCombinedEffectiveTags();
  const mediaType = document.getElementById("filterType").value;
  const status = currentFilterStatus;
  const rating = String(currentFilterRating);
  const sortBy = currentSortBy;

  if (textQuery) params.set("q", textQuery);
  if (mediaType && mediaType !== "ALL") params.set("media_type", mediaType);
  if (status !== "ALL") params.set("status", status);
  if (rating !== "-1") params.set("rating", rating);

  if (combinedTags.length > 0 && tagMatchMode === "AND") {
    params.set("tag", combinedTags.join(","));
  }

  params.set("sort_by", sortBy === "random" ? "created_at" : sortBy);
  params.set("sort_dir", sortDir);

  const res = await fetch(`/api/entries?${params.toString()}`);
  let entries = await res.json();

  if (combinedTags.length > 0) {
    entries = entries.filter(item => {
      const itemTags = new Set((item.tags || []).map(t => t.toLowerCase()));
      if (tagMatchMode === "OR" && combinedTags.length > 1) {
        return combinedTags.some(reqTag => itemTags.has(reqTag));
      }
      return combinedTags.every(reqTag => itemTags.has(reqTag));
    });
  }

  // Default & explicit Last Modified sort (creation date or last edit date)
  if (sortBy === "updated_at") {
    entries.sort((a, b) => {
      const diff = getEffectiveModifiedTimestamp(b) - getEffectiveModifiedTimestamp(a);
      return sortDir === "ASC" ? -diff : diff;
    });
  } else if (sortBy === "random") {
    entries = shuffleArray(entries);
  }

  lastFilteredEntries = entries;
  entriesCache = {};
  entriesOrderedIds = entries.map(item => item.id);
  entries.forEach(item => { entriesCache[item.id] = item; });

  updateMatchResultsBar(entries.length);
  renderTagCloud();
  renderGrid(entries);
}

function renderGrid(entries) {
  const grid = document.getElementById("entriesGrid");
  if (!entries.length) {
    grid.innerHTML = `
      <div class="empty-state">
        📡 [ NO TRANSMISSIONS MATCH CURRENT PARAMETERS ]<br/>
        PASTE ANY URL ABOVE TO SCAVENGE A LINK OR CLICK ➕ MANUAL LOG [N]
      </div>
    `;
    return;
  }

  const activeSet = new Set(getCombinedEffectiveTags());

  grid.innerHTML = entries.map((item, idx) => {
    const ratingNum = Number(item.thumb_rating) || 0;
    const tier = THUMB_TIERS[ratingNum] || THUMB_TIERS[0];
    const statusVal = item.status || "QUEUED";
    const hasCat = Boolean(item.media_type);
    const catColor = getCategoryColor(item.media_type);
    const catRgb = hexToRgb(catColor);
    const typeLabel = hasCat ? ` // ${escapeHtml(item.media_type)}` : "";

    const coverHtml = item.cover_path
      ? `<img src="${escapeHtml(item.cover_path)}" data-action="zoom-cover" alt="" loading="lazy" title="Click cover image to zoom in" />`
      : `<div class="card-cover-placeholder" data-action="no-cover" title="Click for cover instructions">📟 [ NO VISUAL SIGNAL${typeLabel} ]<br/>HOVER &amp; CTRL+V TO PASTE IMAGE</div>`;

    const typeBadgeHtml = hasCat
      ? `
        <span class="badge-type" data-action="filter-category" title="Click to toggle ${escapeHtml(item.media_type)} filter">
          <span class="badge-type-dot" aria-hidden="true"></span>
          <span>${escapeHtml(item.media_type)}</span>
        </span>
      `
      : "";

    const editBtnHtml = `
      <button
        type="button"
        class="card-edit-btn"
        data-action="edit-entry"
        title="Edit dossier, tags, rating & notes"
      >
        <span>✏️ EDIT</span>
      </button>
    `;

    const allItemTags = item.tags || [];
    const visibleTags = allItemTags.slice(0, 4);
    const extraCount = allItemTags.length - visibleTags.length;

    const tagsHtml =
      visibleTags
        .map(t => {
          const isTagActive = activeSet.has(t.toLowerCase());
          return `<span class="mini-tag ${isTagActive ? "active" : ""}" data-action="toggle-tag" data-tag="${escapeHtml(t)}" title="Click to toggle #${escapeHtml(t)} filter">#${escapeHtml(t)}</span>`;
        })
        .join("") +
      (extraCount > 0
        ? `<span class="mini-tag" data-action="more-tags" title="Click to view remaining tags">+${extraCount}</span>`
        : "");

    const previewText = item.notes || item.metadata?.description || "No survival notes logged yet.";
    const glintDelay = `${((idx % 6) * 0.85).toFixed(2)}s`;
    const cardTitleHint = item.url
      ? "Click card to open link in new tab (or click EDIT to open dossier)"
      : "Offline archive record — click to open dossier";

    return `
      <article
        class="card card-rating-${ratingNum} ${hasCat ? "has-category" : ""}"
        data-entry-id="${escapeHtml(item.id)}"
        style="--glint-delay:${glintDelay}; --cat-color:${escapeHtml(catColor)}; --cat-rgb:${catRgb};"
        title="${cardTitleHint}"
        onmouseenter="hoveredCardId=this.dataset.entryId"
        onmouseleave="if(hoveredCardId===this.dataset.entryId) hoveredCardId=null"
      >
        ${cardSparklesHtml(ratingNum)}
        <div class="card-cover">
          ${coverHtml}
          ${typeBadgeHtml}
          <span class="badge-status status-${escapeHtml(statusVal)}" data-action="filter-status" title="Click to toggle ${escapeHtml(statusVal)} status filter">
            ${foodStatusSvg(statusVal, 13)}
            <span>${escapeHtml(statusVal)}</span>
          </span>
        </div>
        <div class="card-body">
          <div class="card-meta-row">
            <div class="card-domain" data-action="filter-domain" title="Click to filter by domain">${escapeHtml(item.domain || "OFFLINE_ARCHIVE")}</div>
            ${editBtnHtml}
          </div>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-notes-preview">${escapeHtml(previewText)}</p>
        </div>
        <div class="card-footer">
          <div class="card-tags">${tagsHtml}</div>
          <span class="thumb-badge thumb-${ratingNum}" data-action="filter-thumb" title="Click to toggle ${escapeHtml(tier.label)} filter">
            ${thumbSvg(ratingNum, 16)}
            <span>${tier.label}</span>
            ${thumbPipsHtml(ratingNum)}
          </span>
        </div>
      </article>
    `;
  }).join("");
}

async function handleIngest(e) {
  e.preventDefault();
  const urlInput = document.getElementById("ingestUrl");
  const btn = document.getElementById("ingestBtn");
  const statusLabel = document.getElementById("ingestStatus");
  const chosenType = document.getElementById("ingestType").value;

  btn.disabled = true;
  statusLabel.textContent = "[📡 INTERCEPTING & CACHING...]";

  try {
    const tags = document.getElementById("ingestTags").value
      .split(",").map(s => s.trim()).filter(Boolean);

    const res = await fetch("/api/ingest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: urlInput.value.trim(),
        media_type: chosenType === "__NEW__" ? "" : chosenType,
        status: document.getElementById("ingestStatusSelect").value,
        tags
      })
    });

    if (!res.ok) throw new Error("Failed to ingest link");
    const created = await res.json();
    if (created?.id) recordLocalModified(created.id);

    categoryTagsCache = {};
    urlInput.value = "";
    document.getElementById("ingestTags").value = "";
    const catNote = created.media_type ? ` [${created.media_type}]` : "";
    showToast(`⚡ ARCHIVED${catNote}: ${created.title.slice(0, 38)}`);
    await loadStats();
    await loadEntries();
  } catch (err) {
    showToast("⚠️ ERROR: UNABLE TO INGEST LINK");
  } finally {
    btn.disabled = false;
    statusLabel.textContent = "[READY]";
  }
}

function renderStatusSelector(currentStatus) {
  selectedStatus = currentStatus || "QUEUED";
  const container = document.getElementById("statusSelector");
  container.innerHTML = STATUS_TIERS.map(s => `
    <div
      class="status-option status-opt-${s.val} ${s.val === selectedStatus ? "selected" : ""}"
      onclick="renderStatusSelector('${s.val}')"
    >
      ${foodStatusSvg(s.val, 22)}
      <strong>${s.emoji} ${s.label}</strong>
      <span style="opacity:0.84; font-size:0.7rem;">${s.desc}</span>
    </div>
  `).join("");
}

function renderThumbSelector(currentVal) {
  selectedRating = currentVal;
  const container = document.getElementById("thumbSelector");
  container.innerHTML = THUMB_TIERS.map(t => `
    <div
      class="thumb-option thumb-${t.val} ${t.val === currentVal ? "selected" : ""}"
      onclick="renderThumbSelector(${t.val})"
    >
      ${thumbSvg(t.val, 20)}
      <strong>${t.emoji} ${t.label.replace(" THUMB", "")}</strong>
      <span style="opacity:0.8; font-size:0.68rem;">${t.desc}</span>
    </div>
  `).join("");
}

async function openManualModal() {
  await loadMediaTypes(false);
  document.getElementById("editId").value = "";
  document.getElementById("modalHeaderTitle").textContent = "➕ NEW_MANUAL_ENTRY.DAT";
  document.getElementById("prevEntryModalBtn").style.display = "none";
  document.getElementById("nextEntryModalBtn").style.display = "none";
  document.getElementById("editTitle").value = "";
  document.getElementById("editUrl").value = "";
  document.getElementById("customCoverUrlInput").value = "";

  const activeFilterCat = document.getElementById("filterType").value;
  const defaultCat = (activeFilterCat && activeFilterCat !== "ALL" && mediaTypes.some(m => m.name === activeFilterCat))
    ? activeFilterCat
    : (mediaTypes[0]?.name || "");
  document.getElementById("editType").value = defaultCat;

  document.getElementById("editTags").value = "";
  document.getElementById("editNotes").value = "";
  document.getElementById("visitLinkBtn").style.display = "none";
  document.getElementById("scrapedDescBox").style.display = "none";
  document.getElementById("deleteBtn").style.visibility = "hidden";
  updateModalCoverPreview(null);
  modalCoverCleared = false;
  renderStatusSelector("QUEUED");
  renderThumbSelector(0);
  fetchTagsForCategory(defaultCat);
  document.getElementById("dossierModal").classList.add("open");
  document.getElementById("editTitle").focus();
}

async function openEditModal(id) {
  const item = entriesCache[id];
  if (!item) return;

  await loadMediaTypes(false);
  const editSel = document.getElementById("editType");
  if (item.media_type && mediaTypes.some(m => m.name === item.media_type)) {
    editSel.value = item.media_type;
  } else if (!item.media_type && mediaTypes.length > 0) {
    editSel.insertAdjacentHTML("afterbegin", `<option value="" disabled selected>SELECT CATEGORY...</option>`);
    editSel.value = "";
  }

  const canStep = entriesOrderedIds.length > 1 ? "inline-flex" : "none";
  document.getElementById("prevEntryModalBtn").style.display = canStep;
  document.getElementById("nextEntryModalBtn").style.display = canStep;

  document.getElementById("editId").value = item.id;
  document.getElementById("modalHeaderTitle").textContent = `📂 DOSSIER_[${item.id.slice(0, 8).toUpperCase()}].DAT`;
  document.getElementById("editTitle").value = item.title;
  document.getElementById("editUrl").value = item.url || "";
  document.getElementById("customCoverUrlInput").value = "";
  document.getElementById("editTags").value = (item.tags || []).join(", ");
  document.getElementById("editNotes").value = item.notes || "";

  updateModalCoverPreview(item.cover_path || null);
  modalCoverCleared = false;
  fetchTagsForCategory(item.media_type || "");

  const visitBtn = document.getElementById("visitLinkBtn");
  if (item.url) {
    visitBtn.href = item.url;
    visitBtn.style.display = "inline-flex";
  } else {
    visitBtn.style.display = "none";
  }

  const descBox = document.getElementById("scrapedDescBox");
  if (item.metadata && item.metadata.description) {
    descBox.textContent = `📡 INTERCEPTED SUMMARY: ${item.metadata.description}`;
    descBox.style.display = "block";
  } else {
    descBox.style.display = "none";
  }

  document.getElementById("deleteBtn").style.visibility = "visible";
  renderStatusSelector(item.status || "QUEUED");
  renderThumbSelector(item.thumb_rating || 0);
  document.getElementById("dossierModal").classList.add("open");
}

function closeModal() {
  document.getElementById("dossierModal").classList.remove("open");
}

async function saveDossier(e) {
  e.preventDefault();
  const id = document.getElementById("editId").value;
  const rawType = document.getElementById("editType").value;
  const payload = {
    title: document.getElementById("editTitle").value.trim(),
    url: document.getElementById("editUrl").value.trim() || null,
    media_type: rawType === "__NEW__" ? "" : rawType,
    status: selectedStatus,
    thumb_rating: selectedRating,
    tags: document.getElementById("editTags").value.split(",").map(s => s.trim()).filter(Boolean),
    notes: document.getElementById("editNotes").value
  };

  if (id) {
    if (modalCoverCleared) {
      payload.clear_cover = true;
    } else if (modalCoverPath !== null) {
      payload.cover_path = modalCoverPath;
    }
  } else if (modalCoverPath) {
    payload.cover_path = modalCoverPath;
  }

  const endpoint = id ? `/api/entries/${id}` : "/api/entries";
  const method = id ? "PATCH" : "POST";

  const res = await fetch(endpoint, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (res.ok) {
    const saved = await res.json().catch(() => null);
    recordLocalModified(id || saved?.id);
    categoryTagsCache = {};
    closeModal();
    showToast(id ? "💾 DOSSIER UPDATED" : "⚡ MANUAL RECORD ARCHIVED");
    await Promise.all([loadMediaTypes(true), loadStats()]);
    await loadEntries();
  }
}

async function deleteCurrentEntry() {
  const id = document.getElementById("editId").value;
  if (!id) return;
  if (!confirm("Permanently incinerate this record from the vault?")) return;

  const res = await fetch(`/api/entries/${id}`, { method: "DELETE" });
  if (res.ok) {
    categoryTagsCache = {};
    closeModal();
    showToast("🔥 RECORD INCINERATED");
    await loadStats();
    await loadEntries();
  }
}

async function triggerBackup() {
  const res = await fetch("/api/backup", { method: "POST" });
  if (res.ok) {
    const data = await res.json();
    showToast(`💾 SNAPSHOT SAVED: /backups/${data.db_backup}`);
  }
}

// Keyboard Shortcuts
document.addEventListener("keydown", e => {
  const inInput = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName);
  if (e.key === "Escape") {
    const lightbox = document.getElementById("coverLightbox");
    if (lightbox && lightbox.classList.contains("open")) {
      closeCoverLightbox();
      return;
    }
    closeModal();
    closeCategoryModal();
    closeSaveSearchModal();
  }
  if (!inInput && e.key === "/") {
    e.preventDefault();
    document.getElementById("searchInput").focus();
  }
  if (!inInput && (e.key === "n" || e.key === "N")) {
    e.preventDefault();
    openManualModal();
  }
});

// Initial Boot
(async function boot() {
  await loadLayoutPartials();
  loadStoredCategoryColors();
  loadLocalModifiedMap();
  renderBunkerStampsAndBlinkies();
  setupGridDelegatedActions();
  setupCategoryTagAutocomplete("ingestTags", "ingestTagsDropdown", "ingestType");
  setupCategoryTagAutocomplete("editTags", "editTagsDropdown", "editType");
  await Promise.all([loadMediaTypes(false), loadSavedSearches(), loadStats()]);
  await loadEntries();
})();
