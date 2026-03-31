const data = {
  menu: [],
  portadas: [
    { title: "Soul Side", client: "Frannko", src: "img/portadas/soulside.png"},
    { title: "Ciclo", client: "Gonda", src: "img/portadas/ciclo.png"},
    { title: "Lejos de ti", client: "Vanek", src: "img/portadas/lejos-de-ti.png"},
    { title: "Noche en Capital", client: "Xeon", src: "img/portadas/caribuenas.png"},
    { title: "Future Trap", client: "EzeLyrics", src: "img/portadas/futuretrap.png"},
    { title: "Remember", client: "Siroe", src: "img/portadas/remember.png"},
    { title: "Te vi", client: "Gondra", src: "img/portadas/te-vi.png" },
    { title: "PUCCA", client: "Niro", src: "img/portadas/Portada Pucca v1 final.png" },
    { title: "Nuestro Ayer", client: "Siroe", src: "img/portadas/nuestroayer.png" },
    { title: "Mi ataúd", client: "Gondra", src: "img/portadas/mi-ataud.png" },
    { title: "Como te pensé", client: "Waru Lavv", src: "img/portadas/como_te_pense.png" },
    { title: "0 Movimiento", client: "DCHINX", src: "img/portadas/ceromovimiento.png"},
    { title: "Thanos", client: "Rull Royce", src: "img/portadas/thanos.png" },
    { title: "El genesis", client: "Frannko", src: "img/portadas/genesis.png" },
    { title: "En Mi Mente <3", client: "Siroe", src: "img/portadas/en_mi_mente.jpg" },
    { title: "SELATROP", client: "Berti", src: "img/portadas/selatrop.png" },
    { title: "4077", client: "Vazzko", src: "img/portadas/4077.png"},
    { title: "Altibajos", client: "Leitoo", src: "img/portadas/altibajos.png" },
    { title: "Fvck luv", client: "Duki, C.R.O (Concepto)", src: "img/portadas/fuck_luv.png" },
    { title: "Vampiros", client: "Duki, C.R.O (Concepto)", src: "img/portadas/vampiros.png" },
    { title: "Vuelvo a caer", client: "Niro", src: "img/portadas/vuelvo-a-caer.jpeg" },
    { title: "FRONTEOTOUR", client: "NEBU", src: "img/portadas/fronteotour.png" },
    { title: "TAMO NUEVO", client: "Gondra", src: "img/portadas/tamonuevo.png" },
    { title: "TONY MONTANA", client: "C.R..O (Concepto)", src: "img/portadas/tony_montana.png" },
    { title: "Make it happn", client: "TWK", src: "img/portadas/makeithappn.png" },
    { title: "Parcerita", client: "Chemz LP", src: "img/portadas/parcerita.png" },
    { title: "Chantas", client: "Valuto, Ara, Sixto (Concepto)", src: "img/portadas/chantas.png" },
    { title: "COSM1C", client: "Cosmic Kid (Concepto)", src: "img/portadas/cosmic.jpeg" },
    { title: "Kid Knak", client: "Knak (Concepto)", src: "img/portadas/knak.png" },
    { title: "Sincero", client: "BARI", src: "img/portadas/sincero.png" },
    { title: "indiferente", client: "", src: "img/portadas/indiferente.png" },
    { title: "Reversionado", client: "RodriiLA", src: "img/portadas/reversionado.png" },
    { title: "DOPAMINA", client: "D CHINX", src: "img/portadas/dopamina.png" },
    { title: "AW", client: "ONCE", src: "img/portadas/aw.png" },
    { title: "CHINA LAKE", client: "ORBE", src: "img/portadas/china-lake.png" },
  ],
  flyers: [
    { title: "Noche Mexicana", client: "Viersadingos", src: "img/flyers/frpicante.png" },
    { title: "La Santa Trinidad", client: "Micery", src: "img/flyers/santatrinidad.jpg" },
    { title: "Te vi (Lanzamiento)", client: "Gondra", src: "img/flyers/tevi.jpg" },
    { title: "Invitado a Niceto", client: "FRN", src: "img/flyers/frn-niceto.png" },
    { title: "Poster FRO!", client: "wesstyle.arg", src: "img/flyers/fro.png" },
    { title: "i gotta feeling", client: "wesstyle.arg", src: "img/flyers/i gotta feeling.png"},
    { title: "Poster Saturacion Pop", client: "wesstyle.arg", src: "img/flyers/saturacionpop.png" },
    { title: "Poster Fvck Luv", client: "wesstyle.arg", src: "img/flyers/fuckluv.png" },
    { title: "Sorteo de entradas Niceto", client: "FRN", src: "img/flyers/frn-emerfst.png" },
    { title: "Flyer promocional spotify", client: "Gondra", src: "img/flyers/tamonuevo-flyer.png" },
    { title: "Plugtwrd Studio", client: "Yvng Golden", src: "img/flyers/plugtwrd.png" },
    { title: "Poster C.R.O.", client: "wesstyle.arg", src: "img/flyers/cro.png" },
  ],
  // ✅ FIX: coma al final del array anterior, y 'videos' como key correcta
  videos: [
    { title: "Pasa un rato (Video Lyrics)", client: "NIRO", embed: "https://www.youtube.com/embed/oTmju9RE8qs", src: "img/miniaturas/pasaunrato.png" },
  ],
  logos: [
    { title: "Niro", client: "Logotipo", src: "img/logos/niro.png" },
    { title: "JvnRoman", client: "Logotipo", src: "img/logos/jvnroman.png" },
    { title: "D9", client: "Monograma", src: "img/logos/d9.png" },
    { title: "Wesstyle", client: "Isotipo", src: "img/logos/wesstyle.png" },
  ]
};

const categoryTitles = {
  portadas: "Portadas de album",
  flyers: "Flyers & Posters",
  videos: "Videos",      // ✅ FIX: era 'videolyrics', ahora coincide con la key del data
  logos: "Logos",
};

let currentSection = null;
let currentIndex = 0;
let currentDisplayCount = 0;
const CARDS_PER_LOAD = 4;

const grid = document.getElementById("grid");
let previewImage = document.getElementById("preview-image"); // ✅ let en lugar de const (se reasigna en openPreview)
const previewTitle = document.getElementById("preview-title");
const previewClient = document.getElementById("preview-client");
const playerCover = document.getElementById("player-cover");
const sectionNameTitle = document.getElementById("section-name");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

// --- LÓGICA DEL LIGHTBOX ---
function openLightbox() {
  // No abrir lightbox si es menú o si el preview actual es un video (embed)
  const items = data[currentSection];
  if (!items || !items.length) return;
  const item = items[currentIndex];
  if (item && item.embed) return; // ✅ No lightbox para videos

  if (currentSection && currentSection !== 'menu') {
    lightboxImage.src = previewImage.src;
    lightbox.classList.add("open");
  }
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

// El listener de click en previewImage se maneja dinámicamente en openPreview
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target.id === 'lightbox' || e.target === lightbox) {
    closeLightbox();
  }
});

// --- RENDERIZADO DE CATEGORÍAS (MENÚ PRINCIPAL) ---
function renderCategories() {
  currentSection = 'menu';
  currentIndex = 0;
  grid.innerHTML = "";

  document.querySelector('.right-panel').style.display = 'none';
  document.querySelector('.player').style.display = 'none';

  sectionNameTitle.textContent = "Menú Principal";

  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) loadMoreBtn.remove();

  const categories = Object.keys(data).filter(key => key !== 'menu');

  categories.forEach((key, index) => {
    const title = categoryTitles[key] || key.charAt(0).toUpperCase() + key.slice(1);
    const finalImgSrc = `img/playlist/${key}.png`;
    const clientText = `Ver ${data[key] ? data[key].length : 0} diseños`;

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${finalImgSrc}" alt="${title}" onerror="this.src='img/placeholder.jpg'">
      <h4>${title}</h4>
      <p>${clientText}</p>
    `;
    card.addEventListener("click", () => renderSection(key));
    grid.appendChild(card);

    setTimeout(() => {
      card.classList.add('animate');
    }, index * 75);
  });

  if (categories.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1 / -1; color: var(--muted);">No hay secciones con contenido para mostrar.</p>`;
  }
}

// --- BOTÓN "VER MÁS" ---
function createLoadMoreButton() {
  let loadMoreBtn = document.getElementById('load-more-btn');
  if (!loadMoreBtn) {
    loadMoreBtn = document.createElement('button');
    loadMoreBtn.id = 'load-more-btn';
    loadMoreBtn.textContent = 'Ver más';
    loadMoreBtn.style.cssText = `
      grid-column: 1 / -1;
      padding: 10px 20px;
      margin: 20px auto 40px auto;
      display: block;
      background: var(--wesstyle);
      color: #fff;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      font-size: 1rem;
      transition: opacity 0.2s;
      font-family: circular;
    `;
    loadMoreBtn.onmouseover = () => loadMoreBtn.style.opacity = 0.9;
    loadMoreBtn.onmouseout = () => loadMoreBtn.style.opacity = 1;
    loadMoreBtn.addEventListener('click', loadNextBatch);
    document.querySelector('.left-panel').appendChild(loadMoreBtn);
  }
  return loadMoreBtn;
}

function loadNextBatch() {
  const items = data[currentSection];
  if (!items) return;

  const start = currentDisplayCount;
  const end = Math.min(items.length, start + CARDS_PER_LOAD);

  renderBatch(items, start, end);
  currentDisplayCount = end;
  updateLoadMoreButton(items.length);
}

function renderBatch(items, start, end) {
  for (let i = start; i < end; i++) {
    const item = items[i];
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${item.src}" alt="${item.title}" onerror="this.src='img/placeholder.jpg'">
      <h4>${item.title}</h4>
      <p>${item.client}</p>
    `;
    card.addEventListener("click", () => openPreview(i));
    grid.appendChild(card);

    setTimeout(() => {
      card.classList.add('animate');
    }, (i - start) * 75);
  }
}

function updateLoadMoreButton(totalItems) {
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentDisplayCount < totalItems ? 'block' : 'none';
  }
}

// --- RENDERIZADO DE SECCIÓN ---
function renderSection(section) {
  if (section === 'menu') {
    renderCategories();
    return;
  }

  currentSection = section;
  grid.innerHTML = "";
  currentDisplayCount = 0;

  if (window.matchMedia('(min-width: 601px)').matches) {
    document.querySelector('.right-panel').style.display = 'flex';
  } else {
    document.querySelector('.right-panel').style.display = 'none';
  }

  document.querySelector('.player').style.display = 'flex';

  sectionNameTitle.textContent = categoryTitles[section] || section.charAt(0).toUpperCase() + section.slice(1);

  const items = data[section];
  if (!items) return;

  loadNextBatch();
  createLoadMoreButton();
  updateLoadMoreButton(items.length);

  if (items.length > 0) {
    openPreview(0);
  } else {
    grid.innerHTML = `<p style="grid-column: 1 / -1; color: var(--muted);">Aún no hay diseños en esta sección.</p>`;
    previewTitle.textContent = "Sin contenido";
    previewClient.textContent = "";
    playerCover.src = "img/placeholder.jpg";
    document.querySelector('.right-panel').style.display = 'none';
    document.querySelector('.player').style.display = 'none';
    updateLoadMoreButton(0);
  }
}

// ✅ FIX PRINCIPAL: openPreview maneja tanto imágenes como videos (embed)
function openPreview(index) {
  const items = data[currentSection];
  if (!items || !items.length) return;

  currentIndex = index;
  const item = items[index];

  playerCover.src = item.src;
  previewTitle.textContent = item.title;
  previewClient.textContent = item.client;

  const previewWrapper = document.querySelector('.preview-image');

  if (item.embed) {
    // Es un video: mostrar iframe de YouTube
    previewWrapper.innerHTML = `
      <iframe
        src="${item.embed}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="position:absolute; top:0; left:0; width:100%; height:100%; border-radius:8px;">
      </iframe>`;
    previewImage = null; // No hay imagen en este modo
  } else {
    // Es una imagen: restaurar el <img> y el listener del lightbox
    previewWrapper.innerHTML = `<img id="preview-image" src="${item.src}" alt="preview" />`;
    previewImage = document.getElementById('preview-image');
    previewImage.addEventListener('click', openLightbox);
  }
}

// --- EVENT LISTENERS SIDEBAR ---
document.querySelectorAll(".side-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".top-nav .nav-btn").forEach(navBtn => {
      if (navBtn.textContent === 'Diseños') {
        navBtn.classList.add('active');
      } else {
        navBtn.classList.remove('active');
      }
    });
    renderSection(btn.dataset.section);
  });
});

document.getElementById("btn-disenos")?.addEventListener("click", () => {
  renderCategories();
  document.querySelectorAll(".top-nav .nav-btn").forEach(navBtn => {
    if (navBtn.textContent === 'Diseños') {
      navBtn.classList.add('active');
    } else {
      navBtn.classList.remove('active');
    }
  });
});

document.getElementById("prev").addEventListener("click", () => {
  const items = data[currentSection];
  if (!items || !items.length) return;
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  openPreview(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  const items = data[currentSection];
  if (!items || !items.length) return;
  currentIndex = (currentIndex + 1) % items.length;
  openPreview(currentIndex);
});

// INICIO
renderCategories();
