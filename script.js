// ... (mantené todo tu listado de data y funciones)

// CRÍTICO: Ejecutar al cargar para que la web no empiece vacía
document.addEventListener("DOMContentLoaded", function() {
    renderCategories(); 
});

// Asegurarnos que los botones del sidebar funcionen
document.querySelectorAll(".side-item").forEach(btn => {
    btn.addEventListener("click", () => {
        // Quitar activos
        document.querySelectorAll(".side-item").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        // Renderizar sección
        const section = btn.getAttribute("data-section");
        if(section === "menu") {
            renderCategories();
        } else {
            renderSection(section);
        }
    });
});
