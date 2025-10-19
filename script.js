const data = {
  // Los datos de 'menu' se mantienen
  menu: [],
  portadas: [
    { title: "FRONTEOTOUR", client: "NEBU", src: "img/portadas/fronteotour.png" },
    { title: "El genesis", client: "Frannko", src: "img/portadas/genesis.png" },
    { title: "En Mi Mente <3", client: "Siroe", src: "img/portadas/en_mi_mente.jpg" },
    { title: "SELATROP", client: "Berti", src: "img/portadas/selatrop.png" },
    { title: "Vuelvo a caer", client: "Niro", src: "img/portadas/vuelvo-a-caer.jpeg" },
    { title: "CHINA LAKE", client: "ORBE", src: "img/portadas/china-lake.png" },
    { title: "TAMO NUEVO", client: "Gondra", src: "img/portadas/tamonuevo.png" },
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
  
  
  ],
  flyers: [
    { title: "Sorteo de entradas Niceto", client: "FRN", src: "img/flyers/frn-emerfst.png" },
    { title: "Flyer promocional spotify", client: "Gondra", src: "img/flyers/tamonuevo-flyer.png" },
    { title: "Plugtwrd Studio", client: "Yvng Golden", src: "img/flyers/plugtwrd.png" },
    { title: "Invitado a Niceto", client: "FRN", src: "img/flyers/frn-niceto.png" },
    { title: "Poster C.R.O.", client: "wesstyle.arg", src: "img/flyers/cro.png" },
    { title: "Poster Fvck Luv", client: "wesstyle.arg", src: "img/flyers/fuckluv.png" },
  ],
  logos: [
    { title: "JvnRoman", client: "Logotipo", src: "img/logos/jvnroman.png" },
    { title: "D9", client: "Monograma", src: "img/logos/d9.png" },
    { title: "Wesstyle", client: "Isotipo", src: "img/logos/wesstyle.png" },
]

};

const categoryTitles = {
    portadas: "Portadas de album",
    flyers: "Flyers & Posters",
    videolyrics: "Video Lyrics",
    logos: "Logos",
    branding: "Branding" // Añadir título para 'branding'
};

let currentSection = null; 
let currentIndex = 0;
// --- NUEVAS VARIABLES DE PAGINACIÓN ---
let currentDisplayCount = 0;
const CARDS_PER_LOAD = 4;
// ------------------------------------

const grid = document.getElementById("grid");
const previewImage = document.getElementById("preview-image");
const previewTitle = document.getElementById("preview-title");
const previewClient = document.getElementById("preview-client");
const playerCover = document.getElementById("player-cover");
const sectionNameTitle = document.getElementById("section-name");

// NUEVAS CONSTANTES DEL LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image"); 
const lightboxClose = document.querySelector(".lightbox-close"); 

// --- LÓGICA DEL LIGHTBOX ---
function openLightbox() {
    // Solo abre el lightbox si hay una sección cargada Y NO es la vista de menú.
    if (currentSection && currentSection !== 'menu') { 
        lightboxImage.src = previewImage.src; 
        lightbox.classList.add("open");
    }
}

function closeLightbox() {
    lightbox.classList.remove("open");
}

previewImage.addEventListener("click", openLightbox);
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
    if (e.target.id === 'lightbox' || e.target === lightbox) {
        closeLightbox();
    }
});
// -----------------------------


// FUNCIÓN MODIFICADA: Renderiza las tarjetas de categorías usando imágenes de /img/playlist/
function renderCategories() {
  currentSection = 'menu';
  currentIndex = 0;
  grid.innerHTML = "";
  
  // Oculta el panel derecho y el reproductor
  document.querySelector('.right-panel').style.display = 'none';
  document.querySelector('.player').style.display = 'none';

  sectionNameTitle.textContent = "Menú Principal";
  
  // Oculta el botón de "Ver más" (si existiera)
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) loadMoreBtn.remove();


  // Obtenemos todas las categorías EXCLUYENDO 'menu'
  const categories = Object.keys(data).filter(key => key !== 'menu' && data.hasOwnProperty(key));

  categories.forEach((key, index) => { // Añadido 'index' para el retraso
    const title = categoryTitles[key] || key.charAt(0).toUpperCase() + key.slice(1);
    
    // Usar la imagen de la carpeta 'playlist'
    const finalImgSrc = `img/playlist/${key}.png`; 
    const clientText = `Ver ${data[key] ? data[key].length : 0} diseños`;
    
    const card = document.createElement("div");
    card.classList.add("card");
    
    // ESTRUCTURA DE CARD IDÉNTICA (img, h4, p)
    card.innerHTML = `
      <img src="${finalImgSrc}" alt="${title}" onerror="this.src='img/placeholder.jpg'">
      <h4>${title}</h4>
      <p>${clientText}</p> 
    `;
    
    card.addEventListener("click", () => renderSection(key));
    grid.appendChild(card);
    
    // === NUEVO: Activa la animación escalonada ===
    setTimeout(() => {
        card.classList.add('animate');
    }, index * 75); // 75ms de retraso entre cada tarjeta
    // ===========================================
  });
  
  if (categories.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1 / -1; color: var(--muted);">No hay secciones con contenido para mostrar.</p>`;
  }
}

// FUNCIÓN NUEVA: Añade el botón "Ver más"
function createLoadMoreButton() {
    let loadMoreBtn = document.getElementById('load-more-btn');
    if (!loadMoreBtn) {
        loadMoreBtn = document.createElement('button');
        loadMoreBtn.id = 'load-more-btn';
        loadMoreBtn.textContent = 'Ver más';
        // Estilo básico para el botón (se puede mejorar en style.css)
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

// FUNCIÓN NUEVA: Carga las siguientes 4 tarjetas
function loadNextBatch() {
    const items = data[currentSection];
    if (!items) return;
    
    const start = currentDisplayCount;
    const end = Math.min(items.length, start + CARDS_PER_LOAD);
    
    // Renderiza el nuevo lote
    renderBatch(items, start, end);
    
    currentDisplayCount = end;
    
    // Actualiza o esconde el botón
    updateLoadMoreButton(items.length);
}

// FUNCIÓN NUEVA: Renderiza un lote específico de tarjetas
function renderBatch(items, start, end) {
    for (let i = start; i < end; i++) {
        const item = items[i];
        const card = document.createElement("div");
        card.classList.add("card");
        
        // ESTRUCTURA DE CARD IDÉNTICA (img, h4, p)
        card.innerHTML = `
          <img src="${item.src}" alt="${item.title}" onerror="this.src='img/placeholder.jpg'">
          <h4>${item.title}</h4>
          <p>${item.client}</p>
        `;
        card.addEventListener("click", () => openPreview(i));
        grid.appendChild(card);
        
        // Activa la animación escalonada (el retraso usa el índice relativo dentro del lote)
        setTimeout(() => {
            card.classList.add('animate');
        }, (i - start) * 75); 
    }
}

// FUNCIÓN NUEVA: Controla la visibilidad del botón "Ver más"
function updateLoadMoreButton(totalItems) {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        if (currentDisplayCount < totalItems) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
}


function renderSection(section) {
  // Si la sección es 'menu', mostramos la vista de categorías
  if (section === 'menu') {
      renderCategories();
      return;
  }
  
  currentSection = section;
  grid.innerHTML = "";
  currentDisplayCount = 0; // Reinicia el contador de tarjetas mostradas

  // Muestra el panel derecho solo si la pantalla NO es móvil (ancho > 600px)
  if (window.matchMedia('(min-width: 601px)').matches) {
      document.querySelector('.right-panel').style.display = 'flex'; 
  } else {
      // En móvil, asegura que el panel de preview esté oculto
      document.querySelector('.right-panel').style.display = 'none';
  }

  // El reproductor inferior siempre se muestra (position: fixed)
  document.querySelector('.player').style.display = 'flex'; 

  sectionNameTitle.textContent = categoryTitles[section] || section.charAt(0).toUpperCase() + section.slice(1);
  
  const items = data[section];
  if (!items) return;
  
  // Carga el primer lote (o todos si son menos de CARDS_PER_LOAD)
  loadNextBatch(); 

  // Crea y actualiza el botón "Ver más"
  createLoadMoreButton();
  updateLoadMoreButton(items.length);

  // Si la sección tiene elementos, abre la primera vista previa
  if (items.length > 0) {
      openPreview(0);
  } else {
      // Ocultar la preview si no hay ítems (volviendo a 'none')
      grid.innerHTML = `<p style="grid-column: 1 / -1; color: var(--muted);">Aún no hay diseños en esta sección.</p>`;
      
      previewTitle.textContent = "Sin contenido";
      previewClient.textContent = "";
      previewImage.src = "img/placeholder.jpg"; 
      playerCover.src = "img/placeholder.jpg";
      document.querySelector('.right-panel').style.display = 'none';
      document.querySelector('.player').style.display = 'none';
      
      // Asegura que el botón se oculte
      updateLoadMoreButton(0);
  }
}

function openPreview(index) {
  const items = data[currentSection];
  if (!items || !items.length) return;

  currentIndex = index;
  const item = items[index];
    
  previewImage.src = item.src;
  playerCover.src = item.src;

  previewTitle.textContent = item.title;
  previewClient.textContent = item.client;
}

// Event Listeners para la sidebar
document.querySelectorAll(".side-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Primero, elimina la clase 'active' de todos los botones de navegación principales si están en la página index
    document.querySelectorAll(".top-nav .nav-btn").forEach(navBtn => {
        if(navBtn.textContent === 'Diseños') {
            navBtn.classList.add('active');
        } else {
            navBtn.classList.remove('active');
        }
    });

    renderSection(btn.dataset.section);
  });
});

// Event Listener para el botón 'Diseños' en el topbar (si existe y es el activo)
document.getElementById("btn-disenos")?.addEventListener("click", () => {
    // Al hacer clic en 'Diseños', volvemos al menú de categorías
    renderCategories();
    
    // Asegura que 'Diseños' se mantenga activo y los demás inactivos
    document.querySelectorAll(".top-nav .nav-btn").forEach(navBtn => {
        if(navBtn.textContent === 'Diseños') {
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

// INICIO: Llama a renderCategories() al cargar la página para mostrar el índice.
renderCategories();
