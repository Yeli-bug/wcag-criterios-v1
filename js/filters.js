/**
 * FILTERS.JS
 * Lee WCAG_CRITERIA (data/wcag-criteria.js), genera las filas de la tabla
 * y maneja toda la lógica de filtrado por nivel, principio y versión.
 *
 * Depende de: data/wcag-criteria.js (debe cargarse antes en index.html)
 */

/* ── Helpers ── */

function principioBadgeClass(principio) {
  const map = {
    Perceptible:  'badge-perceptible',
    Operable:     'badge-operable',
    Comprensible: 'badge-comprensible',
    Robusto:      'badge-robusto',
  };
  return map[principio] || '';
}

function nivelBadgeClass(nivel) {
  const map = { A: 'badge-a', AA: 'badge-aa', AAA: 'badge-aaa' };
  return map[nivel] || '';
}

function buildRow(c) {
  return `
    <tr
      data-level="${c.nivel}"
      data-principle="${c.principio}"
      data-version="${c.version}"
    >
      <td class="col-id" data-label="Criterio">
        <span class="criterio-id">${c.id}</span>
        <span class="criterio-nombre">${c.nombre}</span>
      </td>

      <td class="col-que-pide" data-label="Qué pide">${c.quePide}</td>

      <td class="col-nivel" style="text-align:center;" data-label="Nivel">
        <span class="badge ${nivelBadgeClass(c.nivel)}">${c.nivel}</span>
      </td>

      <td class="col-principio" data-label="Principio">
        <span class="badge ${principioBadgeClass(c.principio)}">${c.principio}</span>
      </td>

      <td class="col-version" data-label="Versión">${c.version}</td>

      <td class="col-mala" data-label="Mala práctica">
        <p class="code-label code-label-bad">❌ ${c.malaPractica.label}</p>

        <details class="snippet-details">
          <summary>Ver código</summary>
          <div class="code-snippet code-bad">${escapeHtml(c.malaPractica.code)}</div>
        </details>
      </td>

      <td class="col-buena" data-label="Buena práctica">
        <p class="code-label code-label-good">✅ ${c.buenaPractica.label}</p>
        
        <details class="snippet-details">
          <summary>Ver código</summary>
          <div class="code-snippet code-good">${escapeHtml(c.buenaPractica.code)}</div>
        </details>
      </td>

      <td class="col-recurso" data-label="Recurso">
        <a
          class="wcag-ext-link"
          href="${c.recurso}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver criterio ${c.id} en W3C (abre en nueva pestaña)"
        >Ver ↗</a>
      </td>
    </tr>
  `;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Render inicial ── */

function renderTable() {
  const tbody = document.getElementById('criteria-tbody');
  if (!tbody) return;

  if (typeof WCAG_CRITERIA === 'undefined' || WCAG_CRITERIA.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--text-dim);">
      No hay criterios cargados en <code>data/wcag-criteria.js</code>
    </td></tr>`;
    return;
  }

  tbody.innerHTML = WCAG_CRITERIA.map(buildRow).join('');
  updateCount();
}

/* ── Filtros ── */

function applyFilters() {
  const level     = document.getElementById('filter-level')?.value     || '';
  const principle = document.getElementById('filter-principle')?.value || '';
  const version   = document.getElementById('filter-version')?.value   || '';

  const rows = document.querySelectorAll('#criteria-tbody tr');
  let visible = 0;

  rows.forEach(row => {
    const match =
      (!level     || row.dataset.level     === level)     &&
      (!principle || row.dataset.principle === principle) &&
      (!version   || row.dataset.version   === version);

    if (match) {
      row.removeAttribute('hidden');
      visible++;
    } else {
      row.setAttribute('hidden', '');
    }
  });

  updateCount(visible, rows.length);

  const noResults = document.getElementById('no-results');
  if (noResults) {
    noResults.classList.toggle('visible', visible === 0);
  }

  renderActiveChips({ level, principle, version });
}

function updateCount(visible, total) {
  const el = document.getElementById('results-count');
  if (!el) return;
  const v = visible ?? document.querySelectorAll('#criteria-tbody tr:not([hidden])').length;
  const t = total   ?? document.querySelectorAll('#criteria-tbody tr').length;
  el.innerHTML = `Mostrando <strong>${v}</strong> de <strong>${t}</strong> criterios`;
}

function renderActiveChips({ level, principle, version }) {
  const wrap = document.getElementById('active-filters');
  if (!wrap) return;
  const chips = [
    level     && `Nivel: ${level}`,
    principle && `Principio: ${principle}`,
    version   && `Versión: ${version}`,
  ].filter(Boolean);

  wrap.innerHTML = chips.map(c =>
    `<span class="filter-chip">${c}</span>`
  ).join('');
}

function resetFilters() {
  ['filter-level','filter-principle','filter-version'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  applyFilters();
}

/* ── Punto de entrada (llamado por loader.js) ── */

function initFilters() {
  renderTable();

  document.getElementById('filter-level')    ?.addEventListener('change', applyFilters);
  document.getElementById('filter-principle') ?.addEventListener('change', applyFilters);
  document.getElementById('filter-version')   ?.addEventListener('change', applyFilters);
  document.getElementById('reset-filters')    ?.addEventListener('click',  resetFilters);

  applyFilters();
}
