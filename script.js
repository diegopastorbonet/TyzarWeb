// Año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mejora accesible para usuarios con "reduced motion"
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReduced) {
  const style = document.createElement("style");
  style.textContent = `
    .link-btn { transition: none !important; }
  `;
  document.head.appendChild(style);
}

// (Opcional) Estructura para añadir enlaces desde JS en el futuro:
// Descomenta y edita el array; luego elimina el <a> fijo del HTML si quieres gestionarlo 100% aquí.
/*
const links = [
  { text: "Mi enlace principal", url: "https://tu-enlace.com" },
  { text: "Instagram", url: "https://instagram.com/tuperfil" },
  { text: "WhatsApp", url: "https://wa.me/34XXXXXXXXX" },
];

const nav = document.querySelector(".links");
nav.innerHTML = "";
links.forEach(({ text, url }) => {
  const a = document.createElement("a");
  a.className = "link-btn";
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = text;
  nav.appendChild(a);
});
*/
