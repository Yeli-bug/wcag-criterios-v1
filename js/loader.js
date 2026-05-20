/**
 * Carga todas las secciones HTML con fetch e inicializa los módulos JS.
 * Orden: carga las secciones → espera → inicializa filtros y formulario.
 */

const SECTIONS = [
  { slot: "slot-header",     file: "sections/header.html"    },
  { slot: "slot-criterios",  file: "sections/criterios.html" },
  { slot: "slot-formulario", file: "sections/formulario.html"},
  { slot: "slot-recursos",   file: "sections/recursos.html"  },
  { slot: "slot-footer",     file: "sections/footer.html"    },
];

/**
 * Carga un archivo HTML parcial e inyecta su contenido en el slot indicado.
 */
async function loadSection({ slot, file }) {
  const el = document.getElementById(slot);
  if (!el) return;

  // Mostrar skeleton mientras carga
  el.innerHTML = '<div class="loading-slot" aria-hidden="true"></div>';

  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`HTTP ${res.status} — ${file}`);
    const html = await res.text();
    el.innerHTML = html;
  } catch (err) {
    el.innerHTML = `<p style="color:var(--accent3);padding:1rem;font-size:.8rem;">
      ⚠ No se pudo cargar <code>${file}</code>. Asegúrate de servir el proyecto con un servidor local.
    </p>`;
    console.error('[loader]', err);
  }
}

/**
 * Carga todas las secciones en paralelo y luego inicializa módulos.
 */
async function init() {
  await Promise.all(SECTIONS.map(loadSection));

  // Inicializar módulos después de que el DOM esté listo
  if (typeof initFilters   === 'function') initFilters();
  if (typeof initForm      === 'function') initForm();
}

document.addEventListener('DOMContentLoaded', init);
