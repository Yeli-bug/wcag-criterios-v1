/**
 * ================================================================
 *  WCAG_CRITERIA.JS
 *  Archivo de datos — aquí agregas los 86 criterios WCAG
 *
 *  CÓMO AGREGAR UN CRITERIO:
 *  1. Copia uno de los objetos de abajo.
 *  2. Cambia los valores según el criterio.
 *  3. Guarda el archivo. El filtro y la tabla se actualizan solos.
 *
 *  CAMPOS:
 *    id         — número del criterio, ej: "1.1.1"
 *    nombre     — nombre corto, ej: "Contenido no textual"
 *    quePide    — descripción breve de qué exige el criterio
 *    nivel      — "A" | "AA" | "AAA"
 *    principio  — "Perceptible" | "Operable" | "Comprensible" | "Robusto"
 *    version    — "2.0" | "2.1" | "2.2"
 *    malaPractica — { label, code }   (code puede ser string multilinea)
 *    buenaPractica— { label, code }
 *    recurso    — URL a la página oficial del criterio en W3C
 * ================================================================
 */

const WCAG_CRITERIA = [

  // ──────────────────────────────────────────────
  //  PRINCIPIO 1 — PERCEPTIBLE
  // ──────────────────────────────────────────────
  {
    id: "1.1.1",
    nombre: "Contenido no textual",
    quePide: "Todo contenido no textual que se presenta al usuario tiene una alternativa textual que sirve el propósito equivalente.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Imagen sin atributo alt",
      code: `<img src="grafico-ventas.png">`
    },
    buenaPractica: {
      label: "Imagen con atributo alt descriptivo",
      code: `<img src="grafico-ventas.png" alt="Gráfico de barras que muestra el incremento de ventas del 30% en el Q4 de 2024">`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html"
  },
  {
    id: "1.2.1",
    nombre: "Solo audio y solo vídeo (pregrabado)",
    quePide: "Para medios solo audio o solo vídeo pregrabados, se proporciona una alternativa que presenta información equivalente.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Audio pregrabado sin transcripción",
      code: `<audio controls src="podcast.mp3"></audio>`
    },
    buenaPractica: {
      label: "Audio pregrabado con enlace a transcripción",
      code: `<audio controls src="podcast.mp3"></audio>
<p><a href="transcripcion-podcast.html">Leer la transcripción del podcast</a></p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html"
  },
  {
    id: "1.2.2",
    nombre: "Subtítulos (pregrabado)",
    quePide: "Se proporcionan subtítulos para todo el contenido de audio pregrabado en medios sincronizados, excepto cuando el medio es una alternativa al texto y está claramente etiquetado como tal.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Vídeo sin pista de subtítulos",
      code: `<video controls src="tutorial.mp4"></video>`
    },
    buenaPractica: {
      label: "Vídeo con pista de subtítulos en español",
      code: `<video controls src="tutorial.mp4">
  <track kind="captions" src="subtitulos-es.vtt" srclang="es" label="Español" default>
</video>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html"
  },
  {
    id: "1.2.3",
    nombre: "Audiodescripción o alternativa multimedia (pregrabado)",
    quePide: "Se proporciona una alternativa para los medios tempodependientes o una audiodescripción para el contenido de vídeo pregrabado en medios sincronizados.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Vídeo sin audiodescripción ni alternativa textual",
      code: `<video controls src="demo-producto.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
</video>`
    },
    buenaPractica: {
      label: "Vídeo con audiodescripción y alternativa textual",
      code: `<video controls src="demo-producto.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
  <track kind="descriptions" src="audiodescripcion.vtt" srclang="es" label="Audiodescripción">
</video>
<p><a href="alternativa-textual.html">Ver alternativa textual del vídeo</a></p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html"
  },
  {
    id: "1.2.4",
    nombre: "Subtítulos (en directo)",
    quePide: "Se proporcionan subtítulos para todo el contenido de audio en directo en medios sincronizados.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Transmisión en vivo sin subtítulos",
      code: `<video controls src="https://stream.ejemplo.com/live">
  <p>Tu navegador no soporta vídeo en directo.</p>
</video>`
    },
    buenaPractica: {
      label: "Transmisión en vivo con subtítulos en tiempo real mediante WebVTT dinámico",
      code: `<video id="live-video" controls src="https://stream.ejemplo.com/live">
  <track id="live-captions" kind="captions" src="" srclang="es" label="Español en vivo" default>
</video>
<script>
  // Conexión a servicio de subtitulado en tiempo real (ej. CART)
  const ws = new WebSocket("wss://subtitulos-live.ejemplo.com");
  ws.onmessage = (event) => {
    const track = document.getElementById("live-captions").track;
    const cue = new VTTCue(event.data.start, event.data.end, event.data.text);
    track.addCue(cue);
  };
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html"
  },
  {
    id: "1.2.5",
    nombre: "Audiodescripción (pregrabado)",
    quePide: "Se proporciona audiodescripción para todo el contenido de vídeo pregrabado en medios sincronizados.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Vídeo sin pista de audiodescripción",
      code: `<video controls src="presentacion.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
</video>`
    },
    buenaPractica: {
      label: "Vídeo con pista de audiodescripción dedicada",
      code: `<video controls src="presentacion.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
  <track kind="descriptions" src="audiodesc.vtt" srclang="es" label="Audiodescripción">
</video>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html"
  },
  {
    id: "1.2.6",
    nombre: "Lengua de señas (pregrabado)",
    quePide: "Se proporciona interpretación en lengua de señas para todo el contenido de audio pregrabado en medios sincronizados.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Vídeo de conferencia sin intérprete de lengua de señas",
      code: `<video controls src="conferencia.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
</video>`
    },
    buenaPractica: {
      label: "Vídeo con versión interpretada en lengua de señas española (LSE)",
      code: `<video controls src="conferencia.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
</video>
<p>
  <a href="conferencia-lse.mp4">
    Ver versión con intérprete de Lengua de Señas Española (LSE)
  </a>
</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded.html"
  },
  {
    id: "1.2.7",
    nombre: "Audiodescripción ampliada (pregrabado)",
    quePide: "Cuando las pausas en el audio de primer plano son insuficientes para permitir que la audiodescripción comunique el sentido del vídeo, se proporciona una versión alternativa del medio tempodependiente con audiodescripción ampliada.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Vídeo con acción continua sin pausas para audiodescripción",
      code: `<video controls src="documental-rapido.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
  <track kind="descriptions" src="audiodesc-corta.vtt" srclang="es" label="Audiodescripción">
</video>`
    },
    buenaPractica: {
      label: "Enlace a versión del vídeo con pausas y audiodescripción ampliada",
      code: `<video controls src="documental-rapido.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
</video>
<p>
  <a href="documental-audiodesc-ampliada.mp4">
    Ver versión con audiodescripción ampliada (incluye pausas adicionales)
  </a>
</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded.html"
  },
  {
    id: "1.2.8",
    nombre: "Alternativa multimedia (pregrabado)",
    quePide: "Se proporciona una alternativa para los medios tempodependientes para todo el contenido de vídeo pregrabado en medios sincronizados y para todos los medios de solo vídeo pregrabados.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Vídeo sin transcripción completa ni alternativa textual",
      code: `<video controls src="entrevista.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
</video>`
    },
    buenaPractica: {
      label: "Vídeo con enlace a transcripción textual completa incluyendo descripción visual",
      code: `<video controls src="entrevista.mp4">
  <track kind="captions" src="subtitulos.vtt" srclang="es" label="Español">
</video>
<details>
  <summary>Transcripción completa del vídeo</summary>
  <p>[La entrevistadora, sentada frente a una mesa, comienza a hablar]</p>
  <p><strong>Entrevistadora:</strong> Buenos días, hoy hablamos sobre accesibilidad web...</p>
</details>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded.html"
  },
  {
    id: "1.2.9",
    nombre: "Solo audio (en directo)",
    quePide: "Se proporciona una alternativa para los medios tempodependientes que presenta información equivalente para el contenido de solo audio en directo.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Transmisión de audio en vivo sin alternativa textual en tiempo real",
      code: `<audio controls src="https://radio.ejemplo.com/live">
  <p>Tu navegador no soporta audio en directo.</p>
</audio>`
    },
    buenaPractica: {
      label: "Audio en vivo con panel de subtítulos en tiempo real",
      code: `<audio controls src="https://radio.ejemplo.com/live">
  <p>Tu navegador no soporta audio en directo.</p>
</audio>
<section aria-live="polite" aria-label="Subtítulos en tiempo real">
  <p id="live-transcript">Conectando con el servicio de subtitulado...</p>
</section>
<script>
  const ws = new WebSocket("wss://subtitulos.ejemplo.com/live");
  ws.onmessage = (e) => {
    document.getElementById("live-transcript").textContent = e.data;
  };
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live.html"
  },
  {
    id: "1.3.1",
    nombre: "Información y relaciones",
    quePide: "La información, estructura y relaciones comunicadas a través de la presentación pueden ser determinadas por software o están disponibles en texto.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Tabla de datos sin encabezados semánticos",
      code: `<table>
  <tr>
    <td><strong>Nombre</strong></td>
    <td><strong>Edad</strong></td>
    <td><strong>Ciudad</strong></td>
  </tr>
  <tr>
    <td>Ana López</td>
    <td>34</td>
    <td>Madrid</td>
  </tr>
</table>`
    },
    buenaPractica: {
      label: "Tabla de datos con encabezados semánticos y caption",
      code: `<table>
  <caption>Listado de usuarios registrados</caption>
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
      <th scope="col">Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ana López</td>
      <td>34</td>
      <td>Madrid</td>
    </tr>
  </tbody>
</table>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
  },
  {
    id: "1.3.2",
    nombre: "Secuencia significativa",
    quePide: "Cuando la secuencia en que se presenta el contenido afecta su significado, se puede determinar por software la secuencia correcta de lectura.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Diseño de dos columnas con orden DOM incorrecto que confunde a lectores de pantalla",
      code: `<style>
  .col-derecha { float: left; width: 50%; }
  .col-izquierda { float: right; width: 50%; }
</style>
<div class="col-derecha">Paso 2: Confirmar pedido</div>
<div class="col-izquierda">Paso 1: Añadir al carrito</div>`
    },
    buenaPractica: {
      label: "Diseño de dos columnas con orden DOM lógico y CSS Grid para el layout visual",
      code: `<style>
  .contenedor { display: grid; grid-template-columns: 1fr 1fr; }
  .paso-1 { grid-column: 1; }
  .paso-2 { grid-column: 2; }
</style>
<div class="contenedor">
  <div class="paso-1">Paso 1: Añadir al carrito</div>
  <div class="paso-2">Paso 2: Confirmar pedido</div>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html"
  },
  {
    id: "1.3.3",
    nombre: "Características sensoriales",
    quePide: "Las instrucciones proporcionadas para entender y operar el contenido no dependen únicamente de características sensoriales de los componentes como forma, color, tamaño, ubicación visual, orientación o sonido.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Instrucción que depende exclusivamente del color o la posición visual",
      code: `<p>Haz clic en el botón verde para continuar.</p>
<p>Completa los campos marcados en rojo.</p>`
    },
    buenaPractica: {
      label: "Instrucción con referencia textual explícita además del indicador visual",
      code: `<p>Haz clic en el botón <strong>Continuar</strong> para avanzar al siguiente paso.</p>
<p>Completa los campos obligatorios marcados con un asterisco (<abbr title="obligatorio">*</abbr>) y resaltados en rojo.</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html"
  },
  {
    id: "1.3.4",
    nombre: "Orientación",
    quePide: "El contenido no restringe su visualización y funcionamiento a una única orientación de pantalla, como vertical u horizontal, a menos que sea esencial.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.1",
    malaPractica: {
      label: "CSS que bloquea la orientación horizontal en dispositivos móviles",
      code: `<style>
  @media (orientation: landscape) {
    body {
      display: none;
    }
  }
</style>
<p>Este sitio solo funciona en modo vertical.</p>`
    },
    buenaPractica: {
      label: "Diseño responsivo que funciona en ambas orientaciones",
      code: `<style>
  .contenedor {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  @media (orientation: landscape) {
    .contenedor {
      flex-direction: row;
      gap: 2rem;
    }
  }
</style>
<div class="contenedor">
  <main>Contenido principal</main>
  <aside>Panel lateral</aside>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/orientation.html"
  },
  {
    id: "1.3.5",
    nombre: "Identificación del propósito de entrada",
    quePide: "El propósito de cada campo de entrada que recoge información del usuario puede ser determinado por software cuando el campo sirve para recoger información personal.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.1",
    malaPractica: {
      label: "Formulario sin atributos autocomplete en campos de datos personales",
      code: `<label for="nombre">Nombre completo</label>
<input type="text" id="nombre" name="nombre">

<label for="correo">Correo electrónico</label>
<input type="email" id="correo" name="correo">

<label for="tel">Teléfono</label>
<input type="tel" id="tel" name="tel">`
    },
    buenaPractica: {
      label: "Formulario con atributos autocomplete correctos para cada campo",
      code: `<label for="nombre">Nombre completo</label>
<input type="text" id="nombre" name="nombre" autocomplete="name">

<label for="correo">Correo electrónico</label>
<input type="email" id="correo" name="correo" autocomplete="email">

<label for="tel">Teléfono</label>
<input type="tel" id="tel" name="tel" autocomplete="tel">`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html"
  },
  {
    id: "1.3.6",
    nombre: "Identificación del propósito",
    quePide: "En contenido implementado usando lenguajes de marcado, el propósito de los componentes de la interfaz de usuario, los iconos y las regiones puede ser determinado por software.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.1",
    malaPractica: {
      label: "Secciones e iconos sin roles ni landmarks semánticos",
      code: `<div class="cabecera">
  <div class="logo"><img src="logo.svg" alt="Logo"></div>
  <div class="nav">...</div>
</div>
<div class="contenido-principal">...</div>
<div class="pie">...</div>`
    },
    buenaPractica: {
      label: "Secciones con landmarks ARIA y roles semánticos explícitos",
      code: `<header role="banner">
  <img src="logo.svg" alt="Empresa Ejemplo - Inicio">
  <nav aria-label="Navegación principal">...</nav>
</header>
<main id="contenido-principal">...</main>
<footer role="contentinfo">...</footer>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose.html"
  },
  {
    id: "1.4.1",
    nombre: "Uso del color",
    quePide: "El color no se usa como el único medio visual para transmitir información, indicar una acción, provocar una respuesta o distinguir un elemento visual.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Error de formulario indicado únicamente con color rojo",
      code: `<style>
  .error { border-color: red; }
</style>
<label for="email">Email</label>
<input type="email" id="email" class="error" value="no-es-email">`
    },
    buenaPractica: {
      label: "Error indicado con color, icono y texto descriptivo",
      code: `<style>
  .error { border-color: #d32f2f; border-width: 2px; }
  .mensaje-error { color: #d32f2f; }
</style>
<label for="email">Email</label>
<input type="email" id="email" class="error"
       aria-describedby="email-error" aria-invalid="true"
       value="no-es-email">
<p id="email-error" class="mensaje-error" role="alert">
  ⚠ Por favor, introduce una dirección de correo válida.
</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html"
  },
  {
    id: "1.4.2",
    nombre: "Control del audio",
    quePide: "Si algún audio suena automáticamente durante más de 3 segundos, hay un mecanismo disponible para pausarlo o detenerlo, o para controlar el volumen del audio de forma independiente.",
    nivel: "A",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Audio que se reproduce automáticamente sin controles accesibles",
      code: `<audio autoplay loop src="musica-fondo.mp3"></audio>`
    },
    buenaPractica: {
      label: "Audio con autoplay desactivado y controles visibles, o con botón de pausa accesible",
      code: `<div role="region" aria-label="Reproductor de audio de fondo">
  <audio id="audio-fondo" src="musica-fondo.mp3"></audio>
  <button id="btn-audio" onclick="toggleAudio()" aria-pressed="false">
    ▶ Reproducir música de fondo
  </button>
</div>
<script>
  function toggleAudio() {
    const audio = document.getElementById("audio-fondo");
    const btn = document.getElementById("btn-audio");
    if (audio.paused) {
      audio.play();
      btn.textContent = "⏸ Pausar música de fondo";
      btn.setAttribute("aria-pressed", "true");
    } else {
      audio.pause();
      btn.textContent = "▶ Reproducir música de fondo";
      btn.setAttribute("aria-pressed", "false");
    }
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html"
  },
  {
    id: "1.4.3",
    nombre: "Contraste (mínimo)",
    quePide: "La presentación visual de texto e imágenes de texto tiene una relación de contraste de al menos 4.5:1, excepto para texto grande (3:1), texto decorativo o logotipos.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Texto con contraste insuficiente sobre fondo claro",
      code: `<style>
  p {
    color: #aaaaaa; /* gris claro */
    background-color: #ffffff;
    /* ratio de contraste: ~2.32:1 — INSUFICIENTE */
  }
</style>
<p>Este texto es difícil de leer para muchas personas.</p>`
    },
    buenaPractica: {
      label: "Texto con contraste suficiente (ratio superior a 4.5:1)",
      code: `<style>
  p {
    color: #595959; /* gris oscuro */
    background-color: #ffffff;
    /* ratio de contraste: ~7.0:1 — SUPERA el mínimo AA */
  }
</style>
<p>Este texto es legible para la gran mayoría de usuarios.</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
  },
  {
    id: "1.4.4",
    nombre: "Cambio de tamaño del texto",
    quePide: "El texto puede ser redimensionado hasta un 200% sin pérdida de contenido o funcionalidad, exceptuando los subtítulos y las imágenes de texto.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Contenedor con altura fija en píxeles que recorta el texto al ampliar",
      code: `<style>
  .caja {
    height: 80px;
    overflow: hidden;
    font-size: 14px;
  }
</style>
<div class="caja">
  Este texto quedará cortado cuando el usuario aumente el tamaño de fuente al 200%.
</div>`
    },
    buenaPractica: {
      label: "Contenedor flexible que se adapta al tamaño de fuente del usuario",
      code: `<style>
  .caja {
    min-height: 5rem; /* usa rem para escalar con la fuente base */
    overflow: visible;
    font-size: 1rem; /* relativo, respeta la preferencia del navegador */
    line-height: 1.5;
  }
</style>
<div class="caja">
  Este texto se adapta correctamente al aumentar el tamaño de fuente al 200%.
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html"
  },
  {
    id: "1.4.5",
    nombre: "Imágenes de texto",
    quePide: "Si las tecnologías utilizadas pueden lograr la presentación visual deseada, se usa texto en lugar de imágenes de texto para transmitir información, exceptuando casos esenciales o personalizables.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Título principal implementado como imagen de texto",
      code: `<img src="titulo-bienvenida.png" alt="Bienvenido a nuestro sitio web">`
    },
    buenaPractica: {
      label: "Título implementado con HTML y CSS tipografía web",
      code: `<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
  h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2.5rem;
    color: #1a1a2e;
  }
</style>
<h1>Bienvenido a nuestro sitio web</h1>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html"
  },
  {
    id: "1.4.6",
    nombre: "Contraste (mejorado)",
    quePide: "La presentación visual de texto e imágenes de texto tiene una relación de contraste de al menos 7:1, excepto para texto grande (4.5:1), decorativo o logotipos.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Texto de cuerpo con contraste AA pero insuficiente para AAA",
      code: `<style>
  p {
    color: #767676; /* ratio ~4.54:1 — pasa AA pero no AAA */
    background-color: #ffffff;
  }
</style>
<p>Texto con contraste mínimo AA, insuficiente para nivel AAA.</p>`
    },
    buenaPractica: {
      label: "Texto con relación de contraste de 7:1 o superior",
      code: `<style>
  p {
    color: #4a4a4a; /* ratio ~9.73:1 — supera AAA */
    background-color: #ffffff;
  }
</style>
<p>Texto con contraste mejorado que supera el nivel AAA.</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced.html"
  },
  {
    id: "1.4.7",
    nombre: "Audio de fondo bajo o sin audio de fondo",
    quePide: "Para el contenido de solo audio pregrabado que contiene principalmente voz, no hay audio de fondo, o este puede desactivarse, o tiene al menos 20 dB más bajo que el habla en primer plano.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Archivo de audio con música de fondo al mismo volumen que la voz",
      code: `<!-- Audio mezclado con voz y música al mismo nivel, sin opción de separar pistas -->
<audio controls src="podcast-mala-mezcla.mp3">
  <p>Tu navegador no soporta el elemento audio.</p>
</audio>`
    },
    buenaPractica: {
      label: "Audio con controles separados de voz y fondo, o solo voz sin música",
      code: `<p>Versión solo con voz (sin música de fondo):</p>
<audio controls src="podcast-solo-voz.mp3">
  <p>Tu navegador no soporta el elemento audio.</p>
</audio>
<p>
  <a href="podcast-con-musica.mp3">
    Descargar versión con música de fondo (mezclada a -20 dB)
  </a>
</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html"
  },
  {
    id: "1.4.8",
    nombre: "Presentación visual",
    quePide: "Para la presentación visual de bloques de texto, hay un mecanismo para seleccionar colores, ancho de columna no superior a 80 caracteres, texto no justificado, interlineado de al menos 1.5 y cambio de tamaño hasta 200% sin scroll horizontal.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Bloque de texto con ancho ilimitado, justificado y sin control de usuario",
      code: `<style>
  article {
    text-align: justify;
    max-width: 100%;
    line-height: 1.2;
    color: #000000;
    background-color: #ffffff;
  }
</style>
<article>
  <p>Texto largo con justificación completa, ríos de espacio y sin opciones de personalización para el usuario...</p>
</article>`
    },
    buenaPractica: {
      label: "Bloque de texto con ancho limitado, alineación izquierda e interlineado adecuado",
      code: `<style>
  article {
    max-width: 70ch; /* máximo 70 caracteres de ancho */
    text-align: left;
    line-height: 1.6;
    font-size: 1rem;
    color: #1a1a1a;
    background-color: #fafafa;
    padding: 1.5rem;
  }
</style>
<article>
  <p>Texto con ancho cómodo de lectura, alineado a la izquierda e interlineado generoso para mejorar la legibilidad.</p>
</article>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html"
  },
  {
    id: "1.4.9",
    nombre: "Imágenes de texto (sin excepción)",
    quePide: "Las imágenes de texto solo se usan con fines puramente decorativos o cuando la presentación particular de texto es esencial para la información transmitida.",
    nivel: "AAA",
    principio: "Perceptible",
    version: "2.0",
    malaPractica: {
      label: "Logotipo con texto incrustado en imagen sin alternativa escalable",
      code: `<!-- El texto "Empresa Ejemplo" está dentro de la imagen, no es escalable ni personalizable -->
<img src="logo-con-texto.png" alt="Empresa Ejemplo">`
    },
    buenaPractica: {
      label: "Logotipo con SVG escalable que mantiene el texto como elemento vectorial",
      code: `<a href="/" aria-label="Empresa Ejemplo - Ir al inicio">
  <svg role="img" aria-label="Empresa Ejemplo" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <title>Empresa Ejemplo</title>
    <rect width="200" height="60" fill="#1a1a2e"/>
    <text x="10" y="40" font-family="Arial, sans-serif"
          font-size="24" font-weight="bold" fill="#ffffff">
      Empresa Ejemplo
    </text>
  </svg>
</a>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html"
  },
  {
    id: "1.4.10",
    nombre: "Reajuste (Reflow)",
    quePide: "El contenido puede presentarse sin pérdida de información o funcionalidad y sin necesitar desplazamiento en dos dimensiones para un ancho equivalente a 320 píxeles CSS y una altura equivalente a 256 píxeles CSS.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.1",
    malaPractica: {
      label: "Layout con ancho fijo en píxeles que requiere scroll horizontal en móvil",
      code: `<style>
  .contenedor {
    width: 1200px; /* fijo, no responsivo */
    display: flex;
    gap: 2rem;
  }
  .columna { width: 580px; }
</style>
<div class="contenedor">
  <div class="columna">Columna 1</div>
  <div class="columna">Columna 2</div>
</div>`
    },
    buenaPractica: {
      label: "Layout responsivo que reajusta el contenido en pantallas estrechas sin scroll horizontal",
      code: `<style>
  .contenedor {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 100%;
  }
  .columna {
    flex: 1 1 280px; /* se apila en pantallas < 320px CSS */
    min-width: 0;
  }
</style>
<div class="contenedor">
  <div class="columna">Columna 1</div>
  <div class="columna">Columna 2</div>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
  },
  {
    id: "1.4.11",
    nombre: "Contraste en componentes que no son texto",
    quePide: "Los componentes de la interfaz de usuario y los gráficos informativos tienen una relación de contraste de al menos 3:1 con los colores adyacentes.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.1",
    malaPractica: {
      label: "Botón con borde de baja visibilidad sobre fondo similar",
      code: `<style>
  button {
    background-color: #ffffff;
    border: 1px solid #cccccc; /* contraste borde/fondo ~1.6:1 — INSUFICIENTE */
    color: #333333;
    padding: 0.5rem 1rem;
  }
</style>
<button>Enviar formulario</button>`
    },
    buenaPractica: {
      label: "Botón con borde visible que supera el ratio 3:1 respecto al fondo",
      code: `<style>
  button {
    background-color: #ffffff;
    border: 2px solid #767676; /* contraste borde/fondo ~4.54:1 — SUPERA 3:1 */
    color: #1a1a1a;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  button:focus-visible {
    outline: 3px solid #005fcc;
    outline-offset: 2px;
  }
</style>
<button>Enviar formulario</button>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html"
  },
  {
    id: "1.4.12",
    nombre: "Espaciado del texto",
    quePide: "No se produce pérdida de contenido ni funcionalidad cuando el usuario aplica: interlineado de 1.5, espaciado entre párrafos de 2em, espaciado entre letras de 0.12em y espaciado entre palabras de 0.16em.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.1",
    malaPractica: {
      label: "Contenedor con altura fija y overflow hidden que corta el texto al ampliar espaciado",
      code: `<style>
  .tarjeta {
    height: 120px;
    overflow: hidden;
    line-height: 1.2;
    padding: 0.5rem;
  }
</style>
<div class="tarjeta">
  Cuando el usuario personaliza el espaciado del texto, este contenido queda cortado y es ilegible.
</div>`
    },
    buenaPractica: {
      label: "Contenedor flexible que no pierde contenido al aplicar el espaciado de texto máximo de WCAG",
      code: `<style>
  .tarjeta {
    min-height: 4rem; /* mínimo, crece con el contenido */
    overflow: visible;
    line-height: 1.5;       /* WCAG: mínimo 1.5 */
    letter-spacing: 0.12em; /* WCAG: mínimo 0.12em */
    word-spacing: 0.16em;   /* WCAG: mínimo 0.16em */
    padding: 1rem;
  }
  .tarjeta + .tarjeta {
    margin-top: 2em; /* WCAG: espaciado entre párrafos 2em */
  }
</style>
<div class="tarjeta">
  Este contenido permanece íntegro aunque el usuario personalice el espaciado del texto.
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html"
  },
  {
    id: "1.4.13",
    nombre: "Contenido en hover o focus",
    quePide: "Cuando la recepción del puntero o el foco del teclado activan contenido adicional, ese contenido es descartable, hoverable y persistente.",
    nivel: "AA",
    principio: "Perceptible",
    version: "2.1",
    malaPractica: {
      label: "Tooltip que desaparece al mover el puntero hacia él y no puede cerrarse con teclado",
      code: `<style>
  .tooltip { display: none; position: absolute; background: #333; color: #fff; padding: 0.5rem; }
  .btn:hover + .tooltip { display: block; }
  /* Desaparece si el cursor se mueve al tooltip — no es hoverable */
</style>
<button class="btn">Más información</button>
<div class="tooltip">Este contenido desaparece al moverse encima de él.</div>`
    },
    buenaPractica: {
      label: "Tooltip accesible: persistente, hoverable y descartable con Escape",
      code: `<style>
  [role="tooltip"] {
    display: none;
    position: absolute;
    background: #1a1a2e;
    color: #ffffff;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    max-width: 220px;
    z-index: 100;
  }
  .tooltip-container:hover [role="tooltip"],
  .tooltip-container:focus-within [role="tooltip"] {
    display: block; /* visible al hacer hover en CUALQUIER parte del contenedor */
  }
</style>
<div class="tooltip-container" style="position:relative; display:inline-block;">
  <button aria-describedby="tip1"
          onkeydown="if(event.key==='Escape') this.closest('.tooltip-container').blur()">
    Más información
  </button>
  <div id="tip1" role="tooltip">
    Puedes mantener el puntero sobre este tooltip sin que desaparezca.
    Ciérralo pulsando <kbd>Escape</kbd>.
  </div>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html"
  },
  {
    id: "2.1.1",
    nombre: "Teclado",
    quePide: "Toda la funcionalidad del contenido es operable a través de una interfaz de teclado sin requerir tiempos específicos para las pulsaciones de teclas, excepto cuando la función subyacente requiere entrada que depende del camino del movimiento del usuario.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Funcionalidad de arrastrar y soltar sin alternativa de teclado",
      code: `<style>
  .droppable { border: 2px dashed #ccc; padding: 2rem; }
</style>
<div class="droppable"
     ondragover="event.preventDefault()"
     ondrop="soltar(event)">
  Arrastra aquí tus archivos
</div>
<!-- Sin alternativa de teclado para subir archivos -->`
    },
    buenaPractica: {
      label: "Zona de drag & drop con input file como alternativa accesible de teclado",
      code: `<div class="droppable"
     ondragover="event.preventDefault()"
     ondrop="soltar(event)"
     role="region"
     aria-label="Zona de carga de archivos">
  <p>Arrastra aquí tus archivos o</p>
  <label for="file-input">
    <span>selecciona un archivo desde tu dispositivo</span>
    <input id="file-input" type="file" multiple
           onchange="procesarArchivos(this.files)">
  </label>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
  },
  {
    id: "2.1.2",
    nombre: "Sin trampa de teclado",
    quePide: "Si el foco del teclado puede moverse a un componente de la página usando la interfaz de teclado, el foco puede alejarse de ese componente usando solo la interfaz de teclado.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Modal que atrapa el foco sin permitir salir con teclado",
      code: `<div id="modal" role="dialog" aria-modal="true" aria-label="Aviso">
  <p>Contenido del modal</p>
  <iframe src="widget-externo.html" title="Widget"></iframe>
  <!-- El foco entra al iframe y no puede salir con Tab ni Escape -->
</div>`
    },
    buenaPractica: {
      label: "Modal con gestión de foco correcta: Escape para cerrar y foco atrapado dentro del diálogo",
      code: `<div id="modal" role="dialog" aria-modal="true"
     aria-labelledby="modal-titulo" tabindex="-1">
  <h2 id="modal-titulo">Aviso importante</h2>
  <p>Contenido del modal.</p>
  <button id="btn-cerrar" onclick="cerrarModal()">Cerrar</button>
</div>
<script>
  const modal = document.getElementById("modal");
  const focusables = modal.querySelectorAll(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const primero = focusables[0];
  const ultimo = focusables[focusables.length - 1];

  modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault(); ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault(); primero.focus();
      }
    }
  });
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html"
  },
  {
    id: "2.1.3",
    nombre: "Teclado (sin excepción)",
    quePide: "Toda la funcionalidad del contenido es operable a través de una interfaz de teclado sin excepciones relativas al camino del movimiento.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Herramienta de firma digital que solo admite entrada de ratón o lápiz táctil",
      code: `<canvas id="firma"
        width="400" height="150"
        onmousedown="iniciarFirma(event)"
        onmousemove="dibujarFirma(event)"
        onmouseup="terminarFirma()">
  <!-- Sin alternativa de teclado para firmar -->
</canvas>`
    },
    buenaPractica: {
      label: "Canvas de firma con alternativa textual de teclado y modo de escritura por teclas",
      code: `<canvas id="firma" width="400" height="150"
        onmousedown="iniciarFirma(event)"
        onmousemove="dibujarFirma(event)"
        onmouseup="terminarFirma()"
        aria-label="Área de firma manual">
</canvas>
<p>¿No puedes usar el ratón?</p>
<label for="firma-texto">Escribe tu nombre completo como firma:</label>
<input type="text" id="firma-texto" name="firma-texto"
       autocomplete="name"
       aria-describedby="firma-aviso">
<p id="firma-aviso">Tu nombre escrito tendrá validez legal equivalente a la firma manual.</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html"
  },
  {
    id: "2.1.4",
    nombre: "Atajos de teclado con un solo carácter",
    quePide: "Si se implementa un atajo de teclado usando solo letras, signos de puntuación, números o símbolos, el usuario puede desactivarlo, remapearlo o activarlo solo cuando el componente tiene el foco.",
    nivel: "A",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Atajo de tecla única global que interfiere con lectores de pantalla",
      code: `<script>
  document.addEventListener("keydown", (e) => {
    if (e.key === "s") {
      // Atajo global: al pulsar "s" se abre la búsqueda
      // Interfiere con lectores de pantalla que usan "s" para navegar
      document.getElementById("buscador").focus();
    }
  });
</script>
<input type="search" id="buscador" placeholder="Buscar...">`
    },
    buenaPractica: {
      label: "Atajo con tecla modificadora y opción de desactivarlo en ajustes",
      code: `<fieldset>
  <legend>Configuración de atajos de teclado</legend>
  <label>
    <input type="checkbox" id="atajos-activos" checked>
    Activar atajos de teclado rápidos
  </label>
</fieldset>
<script>
  document.addEventListener("keydown", (e) => {
    const activos = document.getElementById("atajos-activos").checked;
    // Requiere Alt + S en lugar de solo "s"
    if (activos && e.altKey && e.key === "s") {
      document.getElementById("buscador").focus();
    }
  });
</script>
<input type="search" id="buscador" placeholder="Buscar... (Alt+S)"
       aria-keyshortcuts="Alt+S">`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html"
  },
  {
    id: "2.2.1",
    nombre: "Tiempo ajustable",
    quePide: "Para cada límite de tiempo establecido por el contenido, el usuario puede desactivarlo, ajustarlo o extenderlo, con excepciones para eventos en tiempo real o límites esenciales.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Sesión que expira automáticamente sin advertencia ni opción de extensión",
      code: `<script>
  // Cierra la sesión a los 5 minutos sin avisar al usuario
  setTimeout(() => {
    window.location.href = "/logout";
  }, 300000);
</script>`
    },
    buenaPractica: {
      label: "Sesión con aviso de expiración y diálogo para extender el tiempo",
      code: `<div id="aviso-sesion" role="alertdialog" aria-live="assertive"
     aria-labelledby="aviso-titulo" hidden>
  <h2 id="aviso-titulo">Tu sesión está a punto de expirar</h2>
  <p>La sesión expirará en <span id="cuenta-atras">120</span> segundos.</p>
  <button onclick="extenderSesion()">Extender sesión 20 minutos</button>
  <button onclick="cerrarSesion()">Cerrar sesión ahora</button>
</div>
<script>
  let tiempoRestante = 120;
  const aviso = document.getElementById("aviso-sesion");
  const contador = document.getElementById("cuenta-atras");

  setTimeout(() => {
    aviso.hidden = false;
    aviso.querySelector("button").focus();
    const intervalo = setInterval(() => {
      tiempoRestante--;
      contador.textContent = tiempoRestante;
      if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        window.location.href = "/logout";
      }
    }, 1000);
  }, 280000); // aviso 2 min antes

  function extenderSesion() {
    aviso.hidden = true;
    tiempoRestante = 120;
    // llamada al servidor para renovar token
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html"
  },
  {
    id: "2.2.2",
    nombre: "Pausar, detener, ocultar",
    quePide: "Para la información que se mueve, parpadea, desplaza o se actualiza automáticamente, el usuario puede pausarla, detenerla u ocultarla.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Carrusel con animación automática e infinita sin botón de pausa",
      code: `<style>
  @keyframes desplazar {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }
  .carrusel { animation: desplazar 10s linear infinite; }
</style>
<div class="carrusel">
  <img src="banner1.jpg" alt="Oferta 1">
  <img src="banner2.jpg" alt="Oferta 2">
</div>`
    },
    buenaPractica: {
      label: "Carrusel con controles de pausa, anterior y siguiente accesibles",
      code: `<section aria-label="Carrusel de ofertas" aria-roledescription="carrusel">
  <div id="slides" aria-live="off">
    <div role="group" aria-label="Diapositiva 1 de 2">
      <img src="banner1.jpg" alt="Oferta especial de verano: 30% de descuento">
    </div>
  </div>
  <div role="group" aria-label="Controles del carrusel">
    <button id="btn-pausa" aria-pressed="false" onclick="togglePausa()">
      ⏸ Pausar carrusel
    </button>
    <button onclick="anterior()" aria-label="Diapositiva anterior">‹</button>
    <button onclick="siguiente()" aria-label="Siguiente diapositiva">›</button>
  </div>
</section>
<script>
  let pausado = false;
  function togglePausa() {
    pausado = !pausado;
    const btn = document.getElementById("btn-pausa");
    btn.setAttribute("aria-pressed", pausado);
    btn.textContent = pausado ? "▶ Reanudar carrusel" : "⏸ Pausar carrusel";
    document.getElementById("slides").setAttribute("aria-live", pausado ? "polite" : "off");
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html"
  },
  {
    id: "2.2.3",
    nombre: "Sin tiempo",
    quePide: "El tiempo no es parte esencial del evento o la actividad presentada por el contenido, exceptuando los medios sincronizados no interactivos y los eventos en tiempo real.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Test de conocimientos con temporizador fijo sin opción de desactivarlo",
      code: `<p>Tiempo restante: <span id="timer">60</span>s</p>
<form>
  <fieldset>
    <legend>Pregunta 1: ¿Cuál es la capital de Francia?</legend>
    <label><input type="radio" name="q1" value="madrid"> Madrid</label>
    <label><input type="radio" name="q1" value="paris"> París</label>
  </fieldset>
  <!-- El formulario se envía automáticamente al llegar a 0 sin aviso -->
</form>`
    },
    buenaPractica: {
      label: "Test sin límite de tiempo con opción de envío manual cuando el usuario esté listo",
      code: `<p>Responde a tu propio ritmo. No hay límite de tiempo.</p>
<form id="test" onsubmit="enviarTest(event)">
  <fieldset>
    <legend>Pregunta 1: ¿Cuál es la capital de Francia?</legend>
    <label>
      <input type="radio" name="q1" value="madrid"> Madrid
    </label>
    <label>
      <input type="radio" name="q1" value="paris"> París
    </label>
  </fieldset>
  <button type="submit">Enviar respuestas cuando estés listo</button>
</form>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/no-timing.html"
  },
  {
    id: "2.2.4",
    nombre: "Interrupciones",
    quePide: "Las interrupciones pueden ser pospuestas o suprimidas por el usuario, excepto las interrupciones que involucren una emergencia.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Notificaciones push frecuentes que interrumpen sin opción de pausarlas",
      code: `<script>
  // Lanza notificaciones cada 30 segundos sin control del usuario
  setInterval(() => {
    const div = document.createElement("div");
    div.role = "alert";
    div.textContent = "Nueva actualización disponible";
    document.body.appendChild(div);
  }, 30000);
</script>`
    },
    buenaPractica: {
      label: "Notificaciones con opción de modo no molestar controlado por el usuario",
      code: `<label>
  <input type="checkbox" id="no-molestar">
  Activar modo «No molestar» (pausar notificaciones no urgentes)
</label>
<script>
  function mostrarNotificacion(mensaje, esEmergencia = false) {
    const noMolestar = document.getElementById("no-molestar").checked;
    if (noMolestar && !esEmergencia) return; // se pospone
    const div = document.createElement("div");
    div.setAttribute("role", "status");
    div.setAttribute("aria-live", "polite");
    div.textContent = mensaje;
    document.getElementById("zona-notificaciones").appendChild(div);
  }
</script>
<div id="zona-notificaciones" aria-label="Zona de notificaciones"></div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html"
  },
  {
    id: "2.2.5",
    nombre: "Re-autenticación",
    quePide: "Cuando expira una sesión autenticada, el usuario puede continuar la actividad sin pérdida de datos tras re-autenticarse.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Formulario largo que pierde todos los datos al expirar la sesión",
      code: `<form method="post" action="/guardar">
  <textarea name="contenido" rows="20" cols="60">
    El usuario lleva 30 minutos escribiendo...
  </textarea>
  <button type="submit">Guardar</button>
  <!-- Si la sesión expira, al enviar se pierde todo el contenido -->
</form>`
    },
    buenaPractica: {
      label: "Formulario con guardado automático local y recuperación tras re-autenticación",
      code: `<form id="formulario" method="post" action="/guardar">
  <textarea id="contenido" name="contenido" rows="20" cols="60"
            oninput="guardarBorrador()">
  </textarea>
  <button type="submit">Guardar definitivamente</button>
</form>
<script>
  function guardarBorrador() {
    const texto = document.getElementById("contenido").value;
    sessionStorage.setItem("borrador", texto);
  }

  // Al cargar, restaurar borrador si existe (incluso tras re-login)
  window.addEventListener("load", () => {
    const borrador = sessionStorage.getItem("borrador");
    if (borrador) {
      document.getElementById("contenido").value = borrador;
      const aviso = document.createElement("p");
      aviso.setAttribute("role", "status");
      aviso.textContent = "Se ha restaurado tu borrador guardado automáticamente.";
      document.getElementById("formulario").prepend(aviso);
    }
  });
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html"
  },
  {
    id: "2.2.6",
    nombre: "Tiempo de espera",
    quePide: "Se advierte a los usuarios sobre la duración de inactividad que podría causar pérdida de datos, a menos que los datos se conserven durante más de 20 horas de inactividad.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Formulario de compra que expira sin aviso previo de tiempo de inactividad",
      code: `<form id="checkout" method="post" action="/pagar">
  <input type="text" name="tarjeta" placeholder="Número de tarjeta">
  <input type="text" name="cvv" placeholder="CVV">
  <button type="submit">Pagar ahora</button>
  <!-- La sesión de pago expira en 10 minutos sin que el usuario lo sepa -->
</form>`
    },
    buenaPractica: {
      label: "Formulario con aviso explícito del tiempo de inactividad al inicio",
      code: `<div role="note" aria-label="Aviso de tiempo de sesión">
  <p>
    ⏱ Por razones de seguridad, esta sesión de pago expirará tras
    <strong>10 minutos de inactividad</strong>. Tus datos no se guardarán.
  </p>
</div>
<form id="checkout" method="post" action="/pagar">
  <label for="tarjeta">Número de tarjeta</label>
  <input type="text" id="tarjeta" name="tarjeta" autocomplete="cc-number">
  <label for="cvv">CVV</label>
  <input type="text" id="cvv" name="cvv" autocomplete="cc-csc">
  <button type="submit">Pagar ahora</button>
</form>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/timeouts.html"
  },
  {
    id: "2.3.1",
    nombre: "Tres destellos o por debajo del umbral",
    quePide: "Las páginas web no contienen nada que destelle más de tres veces en cualquier período de un segundo, o el destello está por debajo de los umbrales de destello general y de destello rojo.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Animación CSS con parpadeo rápido superior a 3 destellos por segundo",
      code: `<style>
  @keyframes parpadeo {
    0%, 100% { background-color: #ff0000; }
    50% { background-color: #ffffff; }
  }
  .alerta-parpadeo {
    animation: parpadeo 0.2s infinite; /* 5 destellos/seg — PELIGROSO */
    padding: 1rem;
    color: #000;
  }
</style>
<div class="alerta-parpadeo">¡ATENCIÓN! Oferta limitada</div>`
    },
    buenaPractica: {
      label: "Alerta destacada sin parpadeo, usando contraste y movimiento seguro",
      code: `<style>
  @keyframes pulso-suave {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); }
  }
  .alerta-segura {
    background-color: #d32f2f;
    color: #ffffff;
    padding: 1rem;
    border-radius: 4px;
    animation: pulso-suave 2s ease-in-out infinite;
    /* 0.5 ciclos/seg — muy por debajo del umbral de 3 destellos/seg */
  }
</style>
<div class="alerta-segura" role="alert">
  ⚠ ¡Oferta limitada! Solo quedan 3 unidades.
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html"
  },
  {
    id: "2.3.2",
    nombre: "Tres destellos",
    quePide: "Las páginas web no contienen nada que destelle más de tres veces en cualquier período de un segundo.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Vídeo con escenas de destellos de luz estroboscópica sin advertencia",
      code: `<video controls autoplay src="concierto-estroboscopio.mp4">
  <track kind="captions" src="subs.vtt" srclang="es" label="Español">
</video>`
    },
    buenaPractica: {
      label: "Vídeo con advertencia de destellos y posibilidad de no reproducirlo por defecto",
      code: `<div role="region" aria-label="Vídeo con advertencia de contenido sensible">
  <div id="aviso-destello" role="alertdialog"
       aria-labelledby="aviso-titulo" aria-describedby="aviso-desc">
    <h2 id="aviso-titulo">⚠ Advertencia de luz estroboscópica</h2>
    <p id="aviso-desc">
      Este vídeo contiene destellos de luz que pueden afectar a personas
      con epilepsia fotosensible u otras condiciones similares.
    </p>
    <button onclick="reproducirVideo()">Entendido, reproducir vídeo</button>
    <button onclick="document.getElementById('aviso-destello').hidden=true">
      Cancelar
    </button>
  </div>
  <video id="video-estroboscopio" controls src="concierto.mp4" hidden>
    <track kind="captions" src="subs.vtt" srclang="es" label="Español">
  </video>
</div>
<script>
  function reproducirVideo() {
    const aviso = document.getElementById("aviso-destello");
    const video = document.getElementById("video-estroboscopio");
    aviso.hidden = true;
    video.hidden = false;
    video.play();
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes.html"
  },
  {
    id: "2.3.3",
    nombre: "Animación desde interacciones",
    quePide: "El movimiento animado disparado por interacción puede ser desactivado, a menos que la animación sea esencial para la funcionalidad o la información.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Transiciones de página con animación intensa que ignora las preferencias del sistema",
      code: `<style>
  .pagina {
    animation: deslizar-entrar 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  @keyframes deslizar-entrar {
    from { transform: translateX(-100%) rotate(5deg); opacity: 0; }
    to { transform: translateX(0) rotate(0deg); opacity: 1; }
  }
  /* No respeta prefers-reduced-motion */
</style>`
    },
    buenaPractica: {
      label: "Transición que respeta prefers-reduced-motion y opción de desactivar en ajustes",
      code: `<style>
  .pagina {
    animation: deslizar-entrar 0.5s ease-out;
  }
  @keyframes deslizar-entrar {
    from { transform: translateX(-30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  /* Respeta la preferencia del sistema operativo */
  @media (prefers-reduced-motion: reduce) {
    .pagina { animation: none; }
  }
</style>
<label>
  <input type="checkbox" id="reducir-animacion"
         onchange="aplicarPreferencia()">
  Reducir animaciones en la interfaz
</label>
<script>
  function aplicarPreferencia() {
    const reducir = document.getElementById("reducir-animacion").checked;
    document.documentElement.style.setProperty(
      "--animacion-duracion", reducir ? "0s" : "0.5s"
    );
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html"
  },
  {
    id: "2.4.1",
    nombre: "Evitar bloques",
    quePide: "Hay un mecanismo disponible para saltar bloques de contenido que se repiten en múltiples páginas web.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Página sin enlace de salto al contenido principal que obliga a tabular toda la navegación",
      code: `<nav>
  <ul>
    <li><a href="/">Inicio</a></li>
    <li><a href="/productos">Productos</a></li>
    <li><a href="/contacto">Contacto</a></li>
    <!-- 40 enlaces de menú sin salto disponible -->
  </ul>
</nav>
<main>
  <h1>Bienvenido</h1>
</main>`
    },
    buenaPractica: {
      label: "Página con enlace de salto al contenido principal visible al recibir el foco",
      code: `<style>
  .skip-link {
    position: absolute;
    top: -100%;
    left: 1rem;
    background: #005fcc;
    color: #fff;
    padding: 0.75rem 1.25rem;
    border-radius: 0 0 4px 4px;
    font-weight: bold;
    z-index: 999;
    text-decoration: none;
  }
  .skip-link:focus {
    top: 0; /* visible solo al recibir foco por teclado */
  }
</style>
<a href="#contenido-principal" class="skip-link">
  Saltar al contenido principal
</a>
<nav aria-label="Navegación principal">
  <!-- enlaces del menú -->
</nav>
<main id="contenido-principal" tabindex="-1">
  <h1>Bienvenido</h1>
</main>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html"
  },
  {
    id: "2.4.2",
    nombre: "Página titulada",
    quePide: "Las páginas web tienen títulos que describen el tema o propósito de la página.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Título de página genérico o vacío que no describe el contenido",
      code: `<head>
  <title>Página</title>
  <!-- o peor: <title></title> -->
</head>`
    },
    buenaPractica: {
      label: "Título descriptivo con patrón: Nombre de página – Sección – Sitio web",
      code: `<head>
  <!-- Patrón recomendado: Página específica | Sección | Nombre del sitio -->
  <title>Carrito de compra (3 artículos) | Tienda | Empresa Ejemplo</title>
</head>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html"
  },
  {
    id: "2.4.3",
    nombre: "Orden del foco",
    quePide: "Si una página web puede navegarse secuencialmente y las secuencias de navegación afectan al significado o la operación, los componentes reciben el foco en un orden que preserva el significado y la operabilidad.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Modal con tabindex positivos que crean un orden de foco confuso e impredecible",
      code: `<div id="modal">
  <button tabindex="3">Cancelar</button>
  <input tabindex="1" type="text" placeholder="Nombre">
  <input tabindex="4" type="email" placeholder="Email">
  <button tabindex="2">Confirmar</button>
</div>`
    },
    buenaPractica: {
      label: "Modal con orden de foco DOM natural, sin tabindex positivos",
      code: `<div id="modal" role="dialog" aria-labelledby="modal-h"
     aria-modal="true">
  <h2 id="modal-h">Formulario de contacto</h2>
  <!-- El orden de foco sigue el orden visual y del DOM -->
  <label for="nombre">Nombre</label>
  <input id="nombre" type="text" autocomplete="name">

  <label for="email">Email</label>
  <input id="email" type="email" autocomplete="email">

  <div class="acciones">
    <button type="submit">Confirmar</button>
    <button type="button" onclick="cerrarModal()">Cancelar</button>
  </div>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html"
  },
  {
    id: "2.4.4",
    nombre: "Propósito de un enlace (en contexto)",
    quePide: "El propósito de cada enlace puede determinarse por el texto del enlace solo, o por el texto del enlace junto con su contexto de enlace determinado por software.",
    nivel: "A",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Múltiples enlaces con texto genérico 'Leer más' sin contexto diferenciador",
      code: `<article>
  <h2>Producto A</h2>
  <p>Descripción del producto A.</p>
  <a href="/producto-a">Leer más</a>
</article>
<article>
  <h2>Producto B</h2>
  <p>Descripción del producto B.</p>
  <a href="/producto-b">Leer más</a>
</article>`
    },
    buenaPractica: {
      label: "Enlaces con texto descriptivo único o aria-label que identifica el destino",
      code: `<article>
  <h2 id="titulo-a">Producto A</h2>
  <p>Descripción del producto A.</p>
  <a href="/producto-a" aria-labelledby="titulo-a enlace-a">
    <span id="enlace-a">Ver detalles de</span>
  </a>
</article>
<article>
  <h2>Producto B</h2>
  <p>Descripción del producto B.</p>
  <a href="/producto-b" aria-label="Ver detalles de Producto B">
    Ver detalles
  </a>
</article>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html"
  },
  {
    id: "2.4.5",
    nombre: "Múltiples vías",
    quePide: "Hay más de un modo de localizar una página web dentro de un conjunto de páginas web, excepto cuando la página es el resultado de un proceso o un paso dentro de este.",
    nivel: "AA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Sitio web con solo menú de navegación sin buscador, mapa del sitio ni migas de pan",
      code: `<nav aria-label="Navegación principal">
  <a href="/">Inicio</a>
  <a href="/productos">Productos</a>
  <a href="/contacto">Contacto</a>
  <!-- Sin buscador, sin mapa del sitio, sin breadcrumbs -->
</nav>`
    },
    buenaPractica: {
      label: "Sitio con navegación, buscador y mapa del sitio como múltiples vías de acceso",
      code: `<header>
  <nav aria-label="Navegación principal">
    <a href="/">Inicio</a>
    <a href="/productos">Productos</a>
    <a href="/contacto">Contacto</a>
  </nav>
  <form role="search" action="/buscar" method="get">
    <label for="busqueda">Buscar en el sitio</label>
    <input id="busqueda" type="search" name="q" autocomplete="off">
    <button type="submit">Buscar</button>
  </form>
</header>
<footer>
  <nav aria-label="Mapa del sitio">
    <a href="/mapa-del-sitio">Mapa del sitio completo</a>
  </nav>
</footer>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html"
  },
  {
    id: "2.4.6",
    nombre: "Encabezados y etiquetas",
    quePide: "Los encabezados y las etiquetas describen el tema o propósito del contenido.",
    nivel: "AA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Encabezados y etiquetas de formulario vagos que no describen su contenido",
      code: `<h2>Información</h2>
<form>
  <label for="campo1">Campo 1</label>
  <input id="campo1" type="text">

  <label for="campo2">Campo 2</label>
  <input id="campo2" type="email">
</form>
<h2>Más información</h2>`
    },
    buenaPractica: {
      label: "Encabezados y etiquetas descriptivos que comunican claramente el propósito",
      code: `<h2>Datos de facturación</h2>
<form>
  <label for="nombre-completo">Nombre completo del titular</label>
  <input id="nombre-completo" type="text" autocomplete="name">

  <label for="email-factura">Correo electrónico para recibir la factura</label>
  <input id="email-factura" type="email" autocomplete="email">
</form>
<h2>Dirección de envío</h2>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
  },
  {
    id: "2.4.7",
    nombre: "Foco visible",
    quePide: "Cualquier interfaz de usuario operable por teclado tiene un modo de operación en que el indicador de foco del teclado es visible.",
    nivel: "AA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "CSS que elimina el indicador de foco del teclado en todos los elementos interactivos",
      code: `<style>
  /* ❌ Elimina el foco del teclado — NUNCA hacer esto */
  * {
    outline: none;
  }
  button:focus,
  a:focus,
  input:focus {
    outline: 0;
  }
</style>`
    },
    buenaPractica: {
      label: "Indicador de foco visible y mejorado usando :focus-visible",
      code: `<style>
  /* Elimina outline solo para interacciones con ratón/táctil */
  :focus:not(:focus-visible) {
    outline: none;
  }
  /* Indicador de foco claro y contrastado para teclado */
  :focus-visible {
    outline: 3px solid #005fcc;
    outline-offset: 3px;
    border-radius: 2px;
  }
  /* Personalización adicional para botones */
  button:focus-visible {
    outline: 3px solid #005fcc;
    outline-offset: 4px;
    box-shadow: 0 0 0 6px rgba(0, 95, 204, 0.2);
  }
</style>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html"
  },
  {
    id: "2.4.8",
    nombre: "Ubicación",
    quePide: "Hay información disponible sobre la ubicación del usuario dentro de un conjunto de páginas web.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Sección profunda del sitio sin migas de pan ni indicación de ubicación actual",
      code: `<nav aria-label="Navegación principal">
  <a href="/">Inicio</a>
  <a href="/tienda">Tienda</a>
  <a href="/tienda/ropa">Ropa</a>
</nav>
<main>
  <h1>Camisetas de algodón orgánico</h1>
  <!-- El usuario no sabe en qué nivel del sitio está -->
</main>`
    },
    buenaPractica: {
      label: "Migas de pan semánticas con la página actual marcada con aria-current",
      code: `<nav aria-label="Ruta de navegación (breadcrumb)">
  <ol>
    <li><a href="/">Inicio</a></li>
    <li><a href="/tienda">Tienda</a></li>
    <li><a href="/tienda/ropa">Ropa</a></li>
    <li><span aria-current="page">Camisetas de algodón orgánico</span></li>
  </ol>
</nav>
<main>
  <h1>Camisetas de algodón orgánico</h1>
</main>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/location.html"
  },
  {
    id: "2.4.9",
    nombre: "Propósito de un enlace (solo enlace)",
    quePide: "Hay un mecanismo disponible para permitir identificar el propósito de cada enlace a partir del texto del enlace solo.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Enlace con texto ambiguo 'aquí' sin contexto ni aria-label",
      code: `<p>
  Para descargar el informe anual, haz clic
  <a href="/informe-2024.pdf">aquí</a>.
</p>`
    },
    buenaPractica: {
      label: "Enlace con texto autoexplicativo que comunica su destino sin contexto externo",
      code: `<p>
  <a href="/informe-2024.pdf"
     aria-label="Descargar informe anual 2024 en PDF (2,4 MB)">
    Descargar informe anual 2024 (PDF, 2,4 MB)
  </a>
</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html"
  },
  {
    id: "2.4.10",
    nombre: "Encabezados de sección",
    quePide: "Los encabezados de sección se usan para organizar el contenido.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.0",
    malaPractica: {
      label: "Página de artículo larga con texto continuo sin encabezados de sección",
      code: `<article>
  <h1>Guía completa de accesibilidad web</h1>
  <p>La accesibilidad web es fundamental para...</p>
  <p>Existen cuatro principios fundamentales...</p>
  <p>El principio Perceptible implica que...</p>
  <p>El principio Operable requiere que...</p>
  <!-- Todo el contenido sin separación por encabezados -->
</article>`
    },
    buenaPractica: {
      label: "Artículo largo estructurado con encabezados de sección jerárquicos",
      code: `<article>
  <h1>Guía completa de accesibilidad web</h1>
  <p>La accesibilidad web es fundamental para garantizar...</p>

  <h2>Los cuatro principios POUR</h2>
  <p>Las WCAG se organizan en torno a cuatro principios...</p>

  <h3>Principio 1: Perceptible</h3>
  <p>El contenido debe presentarse de forma que todos puedan percibirlo...</p>

  <h3>Principio 2: Operable</h3>
  <p>La interfaz debe poder operarse por cualquier usuario...</p>
</article>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/section-headings.html"
  },
  {
    id: "2.4.11",
    nombre: "Apariencia del foco (mínimo)",
    quePide: "Cuando un componente de interfaz de usuario recibe el foco del teclado, el indicador de foco tiene un área mínima igual al perímetro del componente no enfocado por 2 píxeles CSS, con una relación de contraste de al menos 3:1.",
    nivel: "AA",
    principio: "Operable",
    version: "2.2",
    malaPractica: {
      label: "Indicador de foco de 1px con bajo contraste que apenas es visible",
      code: `<style>
  button:focus {
    outline: 1px dotted #cccccc;
    /* contraste ~1.6:1 — insuficiente */
    /* área inferior al perímetro × 2px — insuficiente */
  }
</style>
<button>Suscribirse</button>`
    },
    buenaPractica: {
      label: "Indicador de foco de 2px mínimo con contraste 3:1 respecto al fondo",
      code: `<style>
  button {
    padding: 0.5rem 1.25rem;
    background: #ffffff;
    border: 2px solid #767676;
    border-radius: 4px;
    cursor: pointer;
  }
  /* :focus-visible garantiza que solo se muestra al navegar con teclado */
  button:focus-visible {
    outline: 3px solid #005fcc; /* contraste sobre #fff: ~8.59:1 ✓ */
    outline-offset: 2px;        /* área ≥ perímetro × 2px ✓ */
  }
</style>
<button>Suscribirse</button>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum.html"
  },
  {
    id: "2.4.12",
    nombre: "Apariencia del foco (mejorado)",
    quePide: "Cuando un componente de interfaz de usuario recibe el foco del teclado, todas las siguientes condiciones son verdaderas: el indicador de foco no está completamente oculto, tiene un área mínima de 4px, un contraste de 3:1 con el estado sin foco y de 3:1 contra los colores adyacentes.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.2",
    malaPractica: {
      label: "Foco con outline fino que no supera el área ni el contraste mejorado AAA",
      code: `<style>
  a:focus {
    outline: 2px solid #4a90d9;
    /* contraste #4a90d9 sobre #fff: ~3.1:1 — justo el mínimo AA,
       insuficiente para AAA que exige área mayor y mayor robustez */
  }
</style>
<a href="/siguiente">Siguiente artículo</a>`
    },
    buenaPractica: {
      label: "Indicador de foco mejorado: área amplia, contraste alto y visible en cualquier fondo",
      code: `<style>
  a {
    color: #005fcc;
    text-decoration: underline;
    border-radius: 2px;
  }
  a:focus-visible {
    outline: 4px solid #005fcc;   /* contraste #005fcc / #fff: ~8.59:1 ✓ */
    outline-offset: 3px;
    background-color: #e8f0fe;   /* fondo propio para máxima visibilidad */
    /* Área total del indicador muy superior al perímetro × 2px ✓ */
  }
</style>
<a href="/siguiente">Siguiente artículo</a>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced.html"
  },
  {
    id: "2.4.13",
    nombre: "Foco no oculto (mínimo)",
    quePide: "Cuando un componente de interfaz de usuario recibe el foco del teclado, el componente no está completamente oculto debido al contenido creado por el autor.",
    nivel: "AA",
    principio: "Operable",
    version: "2.2",
    malaPractica: {
      label: "Banner sticky que oculta completamente el elemento enfocado al navegar con teclado",
      code: `<style>
  .banner-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: #1a1a2e;
    z-index: 1000;
  }
  /* Al navegar con Tab, los elementos enfocados quedan ocultos detrás del banner */
</style>
<div class="banner-sticky">
  <nav>Menú principal</nav>
</div>
<main>
  <a href="/pagina-1">Enlace que puede quedar oculto</a>
</main>`
    },
    buenaPractica: {
      label: "Banner sticky con scroll-padding-top que mantiene el foco siempre visible",
      code: `<style>
  .banner-sticky {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 80px;
    background: #1a1a2e;
    z-index: 1000;
  }
  /* scroll-padding-top garantiza que el scroll deje el foco visible */
  html {
    scroll-padding-top: 96px; /* altura del banner + margen */
  }
  :focus-visible {
    scroll-margin-top: 96px;
  }
</style>
<div class="banner-sticky">
  <nav aria-label="Navegación principal">Menú</nav>
</div>
<main>
  <a href="/pagina-1">Enlace siempre visible al recibir el foco</a>
</main>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html"
  },
  {
    id: "2.4.14",
    nombre: "Foco no oculto (mejorado)",
    quePide: "Cuando un componente de interfaz de usuario recibe el foco del teclado, ninguna parte del componente está oculta por contenido creado por el autor.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.2",
    malaPractica: {
      label: "Elemento enfocado parcialmente oculto por una barra de herramientas flotante",
      code: `<style>
  .toolbar-flotante {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    height: 60px;
    background: #333;
    z-index: 999;
  }
  /* El último enlace de la página puede quedar a medias bajo la toolbar */
</style>
<div class="toolbar-flotante">Herramientas</div>
<footer>
  <a href="/legal">Aviso legal</a>
</footer>`
    },
    buenaPractica: {
      label: "Toolbar flotante con scroll-padding-bottom que mantiene el foco completamente visible",
      code: `<style>
  .toolbar-flotante {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    height: 60px;
    background: #1a1a2e;
    z-index: 999;
  }
  html {
    scroll-padding-bottom: 76px; /* altura toolbar + margen generoso */
  }
  :focus-visible {
    scroll-margin-bottom: 76px;
    /* Garantiza que NINGUNA parte del componente quede oculta ✓ */
  }
</style>
<div class="toolbar-flotante" role="toolbar" aria-label="Herramientas de edición">
  <!-- controles -->
</div>
<footer>
  <a href="/legal">Aviso legal</a>
</footer>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced.html"
  },
  {
    id: "2.5.1",
    nombre: "Gestos del puntero",
    quePide: "Toda la funcionalidad que usa gestos multipunto o basados en trayectoria puede operarse con un puntero único sin gesto basado en trayectoria, a menos que sea esencial.",
    nivel: "A",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Mapa interactivo que solo admite pellizco para zoom sin botones alternativos",
      code: `<div id="mapa"
     style="width:100%; height:400px; touch-action: none;"
     ontouchstart="iniciarGesto(event)"
     ontouchmove="gestionarPellizco(event)">
  <!-- El zoom solo funciona con gesto de pellizco (dos dedos) -->
  <!-- Sin alternativa de un solo puntero -->
</div>`
    },
    buenaPractica: {
      label: "Mapa con botones de zoom como alternativa al gesto de pellizco",
      code: `<div role="region" aria-label="Mapa interactivo">
  <div id="mapa"
       style="width:100%; height:400px; touch-action: none;"
       ontouchstart="iniciarGesto(event)"
       ontouchmove="gestionarPellizco(event)">
  </div>
  <div role="group" aria-label="Controles de zoom">
    <button onclick="zoomIn()" aria-label="Acercar el mapa">+</button>
    <button onclick="zoomOut()" aria-label="Alejar el mapa">−</button>
    <button onclick="resetZoom()" aria-label="Restablecer zoom">⟳</button>
  </div>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html"
  },
  {
    id: "2.5.2",
    nombre: "Cancelación del puntero",
    quePide: "Para la funcionalidad que puede operarse usando un puntero único, al menos una de las siguientes es verdadera: sin evento down, se puede abortar o deshacer, se revierte en up o es esencial.",
    nivel: "A",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Botón de compra que se activa en el evento mousedown sin posibilidad de cancelar",
      code: `<button onmousedown="comprarAhora()">
  Comprar ahora (1 clic)
</button>
<script>
  function comprarAhora() {
    // Se ejecuta INMEDIATAMENTE al presionar
    // No hay forma de cancelar si el usuario hizo clic por error
    procesarPago();
  }
</script>`
    },
    buenaPractica: {
      label: "Botón que se activa en mouseup permitiendo cancelar antes de soltar",
      code: `<button id="btn-comprar"
        onmousedown="prepararCompra()"
        onmouseup="confirmarCompra()"
        onmouseleave="cancelarCompra()">
  Comprar ahora
</button>
<script>
  let compraPendiente = false;

  function prepararCompra() {
    compraPendiente = true;
    // Solo prepara, no ejecuta
  }
  function confirmarCompra() {
    if (compraPendiente) {
      compraPendiente = false;
      procesarPago(); // Se ejecuta al SOLTAR el botón
    }
  }
  function cancelarCompra() {
    // Si el puntero sale del botón antes de soltar → cancelado
    compraPendiente = false;
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html"
  },
  {
    id: "2.5.3",
    nombre: "Etiqueta en el nombre",
    quePide: "Para los componentes de la interfaz de usuario con etiquetas que incluyen texto o imágenes de texto, el nombre accesible contiene el texto que se presenta visualmente.",
    nivel: "A",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Botón con texto visible 'Enviar' pero aria-label que no lo contiene",
      code: `<!-- El usuario de voz ve "Enviar" pero debe decir "Submit form" para activarlo -->
<button aria-label="Submit form">Enviar</button>

<!-- Otro ejemplo problemático: icono con aria-label distinto al texto visible -->
<button aria-label="Ir al inicio">
  🏠 Home
</button>`
    },
    buenaPractica: {
      label: "Nombre accesible que incluye el texto visible del componente",
      code: `<!-- El nombre accesible contiene "Enviar" — el usuario de voz puede decir "Enviar" -->
<button>Enviar formulario</button>

<!-- Si se necesita aria-label, debe incluir el texto visible -->
<button aria-label="Ir al inicio del sitio web">
  🏠 Inicio
</button>

<!-- Para iconos: el texto visible y el nombre accesible coinciden -->
<button aria-label="Buscar productos">
  <svg aria-hidden="true" focusable="false"><!-- icono lupa --></svg>
  Buscar
</button>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html"
  },
  {
    id: "2.5.4",
    nombre: "Actuación mediante movimiento",
    quePide: "La funcionalidad que puede operarse por movimiento del dispositivo o del usuario puede también operarse por componentes de interfaz de usuario, y la respuesta al movimiento puede desactivarse para evitar activación accidental.",
    nivel: "A",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Acción crítica activada exclusivamente por agitar el dispositivo sin alternativa",
      code: `<script>
  // Agitar el dispositivo borra todos los datos del formulario
  window.addEventListener("devicemotion", (e) => {
    const aceleracion = e.acceleration;
    if (Math.abs(aceleracion.x) > 15 || Math.abs(aceleracion.y) > 15) {
      borrarFormulario(); // Sin alternativa de UI ni forma de desactivarlo
    }
  });
</script>`
    },
    buenaPractica: {
      label: "Acción por movimiento con alternativa de botón y opción de desactivar el gesto",
      code: `<label>
  <input type="checkbox" id="gesto-agitar" checked
         onchange="toggleGestoAgitar()">
  Activar «agitar para deshacer» (movimiento del dispositivo)
</label>
<button onclick="deshacerUltimaAccion()">
  ↩ Deshacer última acción
</button>
<script>
  let gestoActivo = true;

  function toggleGestoAgitar() {
    gestoActivo = document.getElementById("gesto-agitar").checked;
  }

  window.addEventListener("devicemotion", (e) => {
    if (!gestoActivo) return;
    const { x, y } = e.acceleration;
    if (Math.abs(x) > 15 || Math.abs(y) > 15) {
      deshacerUltimaAccion();
    }
  });

  function deshacerUltimaAccion() {
    // lógica de deshacer
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html"
  },
  {
    id: "2.5.5",
    nombre: "Tamaño del objetivo (mejorado)",
    quePide: "El tamaño del objetivo para entradas de puntero tiene al menos 44 × 44 píxeles CSS, con excepciones para enlaces en línea, objetivos de tamaño determinado por el agente de usuario o que no puedan modificarse.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Botones de acción pequeños de 24×24px difíciles de pulsar en táctil",
      code: `<style>
  .btn-pequeño {
    width: 24px;
    height: 24px;
    padding: 0;
    font-size: 12px;
    /* Muy difícil de pulsar en dispositivos táctiles */
  }
</style>
<button class="btn-pequeño" aria-label="Eliminar elemento">✕</button>`
    },
    buenaPractica: {
      label: "Objetivos de al menos 44×44px para facilitar la interacción táctil",
      code: `<style>
  .btn-accion {
    min-width: 44px;
    min-height: 44px;
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
  }
  /* Alternativa: ampliar el área táctil con padding sin cambiar el visual */
  .btn-icono-pequeño {
    padding: 10px; /* 24px visual + 10px cada lado = 44px área táctil */
  }
</style>
<button class="btn-accion" aria-label="Eliminar elemento">✕</button>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html"
  },
  {
    id: "2.5.6",
    nombre: "Mecanismos de entrada simultáneos",
    quePide: "El contenido web no restringe el uso de las modalidades de entrada disponibles en una plataforma, excepto cuando la restricción es esencial, requerida por seguridad o respeta la preferencia del usuario.",
    nivel: "AAA",
    principio: "Operable",
    version: "2.1",
    malaPractica: {
      label: "Formulario que deshabilita el teclado cuando detecta entrada táctil",
      code: `<script>
  document.addEventListener("touchstart", () => {
    // Deshabilita todos los inputs de teclado al detectar toque
    document.querySelectorAll("input, button, select").forEach(el => {
      el.setAttribute("tabindex", "-1");
    });
  });
</script>`
    },
    buenaPractica: {
      label: "Interfaz que acepta simultáneamente teclado, ratón, táctil y voz sin restricciones",
      code: `<!-- Sin restricciones de modalidad de entrada.
     El navegador gestiona automáticamente las distintas modalidades. -->
<form>
  <label for="busqueda">Buscar productos</label>
  <input id="busqueda" type="search" name="q"
         autocomplete="on"
         inputmode="search"
         aria-label="Escribe o dicta tu búsqueda">
  <!-- Funciona con: teclado, táctil, ratón, dictado por voz,
       conmutador de acceso, lápiz stylus, etc. -->
  <button type="submit">Buscar</button>
</form>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html"
  },
  {
    id: "2.5.7",
    nombre: "Movimientos de arrastre",
    quePide: "Toda la funcionalidad que usa un movimiento de arrastre para operar puede lograrse con un puntero único sin arrastre, a menos que arrastrar sea esencial.",
    nivel: "AA",
    principio: "Operable",
    version: "2.2",
    malaPractica: {
      label: "Control deslizante que solo puede ajustarse arrastrando, sin alternativa de teclado ni clic",
      code: `<div id="slider-custom"
     style="width:300px; height:20px; background:#ddd; position:relative; cursor:grab;"
     onmousedown="iniciarArrastre(event)"
     ontouchstart="iniciarArrastre(event)">
  <div id="thumb"
       style="width:20px; height:20px; background:#005fcc;
              position:absolute; left:0; border-radius:50%;">
  </div>
  <!-- Sin alternativa para usuarios que no pueden arrastrar -->
</div>`
    },
    buenaPractica: {
      label: "Control deslizante con arrastre y alternativa mediante clics y teclado nativo",
      code: `<!-- input[type=range] nativo: soporta arrastre, clic en la pista y teclas de flecha -->
<label for="volumen">Volumen: <span id="valor-volumen">50</span>%</label>
<input type="range"
       id="volumen"
       name="volumen"
       min="0" max="100" value="50" step="5"
       aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"
       oninput="actualizarVolumen(this.value)">
<script>
  function actualizarVolumen(valor) {
    document.getElementById("valor-volumen").textContent = valor;
    document.getElementById("volumen").setAttribute("aria-valuenow", valor);
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html"
  },
  {
    id: "2.5.8",
    nombre: "Tamaño del objetivo (mínimo)",
    quePide: "El tamaño del objetivo para entradas de puntero tiene al menos 24 × 24 píxeles CSS, o el espaciado alrededor del objetivo garantiza un área de 24px de diámetro sin solapamiento con otros objetivos.",
    nivel: "AA",
    principio: "Operable",
    version: "2.2",
    malaPractica: {
      label: "Iconos de acción de 16px sin espaciado suficiente que incumplen el mínimo de 24px",
      code: `<style>
  .acciones-inline {
    display: flex;
    gap: 2px; /* gap insuficiente para compensar el tamaño pequeño */
  }
  .btn-mini {
    width: 16px;
    height: 16px;
    padding: 0;
    /* 16px < 24px mínimo y gap 2px no compensa — INCUMPLE 2.5.8 */
  }
</style>
<div class="acciones-inline">
  <button class="btn-mini" aria-label="Editar">✏</button>
  <button class="btn-mini" aria-label="Eliminar">🗑</button>
  <button class="btn-mini" aria-label="Compartir">⤴</button>
</div>`
    },
    buenaPractica: {
      label: "Botones de 24×24px mínimo o con espaciado que garantiza área de no solapamiento de 24px",
      code: `<style>
  .acciones-inline {
    display: flex;
    gap: 8px;
  }
  .btn-objetivo {
    /* Opción A: tamaño mínimo de 24×24px */
    min-width: 24px;
    min-height: 24px;
    padding: 4px; /* visual pequeño pero área táctil de 24px ✓ */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
  }
  /* Opción B para elementos aún más pequeños:
     usar padding para alcanzar el área de 24px
     y gap suficiente para evitar solapamiento */
</style>
<div class="acciones-inline" role="group" aria-label="Acciones del elemento">
  <button class="btn-objetivo" aria-label="Editar">✏</button>
  <button class="btn-objetivo" aria-label="Eliminar">🗑</button>
  <button class="btn-objetivo" aria-label="Compartir">⤴</button>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
  },
  {
    id: "3.1.1",
    nombre: "Idioma de la página",
    quePide: "El idioma predeterminado de cada página web puede ser determinado por software.",
    nivel: "A",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Página en español sin atributo lang en el elemento html",
      code: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Bienvenido a nuestro sitio</title>
  </head>
  <body>
    <h1>Bienvenido</h1>
    <p>El lector de pantalla no sabe en qué idioma pronunciar este texto.</p>
  </body>
</html>`
    },
    buenaPractica: {
      label: "Página en español con atributo lang='es' correcto en el elemento html",
      code: `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Bienvenido a nuestro sitio</title>
  </head>
  <body>
    <h1>Bienvenido</h1>
    <p>El lector de pantalla usa la voz y pronunciación correctas en español.</p>
  </body>
</html>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html"
  },
  {
    id: "3.1.2",
    nombre: "Idioma de las partes",
    quePide: "El idioma de cada pasaje o frase en el contenido puede ser determinado por software, excepto los nombres propios, términos técnicos, palabras de idioma indeterminado y palabras que formen parte del vernáculo del texto circundante.",
    nivel: "AA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Cita en inglés dentro de un documento en español sin indicar el cambio de idioma",
      code: `<html lang="es">
  <body>
    <p>
      Como decía Churchill: "We shall fight on the beaches, we shall fight
      on the landing grounds" — sin indicar el cambio de idioma al inglés,
      el lector de pantalla lo pronuncia con voz y reglas fonéticas en español.
    </p>
  </body>
</html>`
    },
    buenaPractica: {
      label: "Cita en inglés marcada con lang='en' para que el lector de pantalla cambie de voz",
      code: `<html lang="es">
  <body>
    <p>
      Como decía Churchill:
      <q lang="en">We shall fight on the beaches,
      we shall fight on the landing grounds.</q>
      El lector de pantalla cambia automáticamente a voz inglesa para la cita.
    </p>
  </body>
</html>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html"
  },
  {
    id: "3.1.3",
    nombre: "Palabras inusuales",
    quePide: "Hay un mecanismo disponible para identificar definiciones específicas de palabras usadas de manera inusual o restringida, incluyendo expresiones idiomáticas y jerga.",
    nivel: "AAA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Texto con jerga técnica y expresiones idiomáticas sin definición ni glosario",
      code: `<p>
  El sistema utiliza un enfoque de caja negra con retroalimentación
  de bucle cerrado para garantizar la idempotencia de las transacciones,
  evitando así efectos colaterales en los microservicios aguas abajo.
</p>
<!-- El usuario sin conocimientos técnicos no tiene forma de entender estos términos -->`
    },
    buenaPractica: {
      label: "Términos técnicos con definición inline mediante abbr, dfn y enlace a glosario",
      code: `<p>
  El sistema utiliza un enfoque de
  <dfn id="def-caja-negra">
    <abbr title="metodología donde solo se conocen entradas y salidas, no el funcionamiento interno">
      caja negra
    </abbr>
  </dfn>
  con retroalimentación de
  <a href="/glosario#bucle-cerrado" aria-describedby="def-bucle">bucle cerrado</a>
  <span id="def-bucle" role="tooltip" hidden>
    Sistema donde la salida se usa como entrada de control para autorregulación.
  </span>
  para garantizar la
  <abbr title="propiedad por la que una operación produce el mismo resultado aunque se ejecute varias veces">
    idempotencia
  </abbr>
  de las transacciones.
</p>
<p><a href="/glosario">Ver glosario completo de términos técnicos</a></p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html"
  },
  {
    id: "3.1.4",
    nombre: "Abreviaturas",
    quePide: "Hay un mecanismo disponible para identificar la forma expandida o el significado de las abreviaturas.",
    nivel: "AAA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Abreviaturas usadas sin expansión ni mecanismo de definición",
      code: `<p>
  El paciente presenta HTA, DM tipo 2 y EPOC.
  Se recomienda seguimiento con ECG y analítica con PCR y VSG cada 3 meses.
</p>
<!-- Un lector de pantalla o un usuario no médico no puede
     entender estas abreviaturas clínicas -->`
    },
    buenaPractica: {
      label: "Abreviaturas expandidas con abbr title en la primera aparición de cada término",
      code: `<p>
  El paciente presenta
  <abbr title="Hipertensión Arterial">HTA</abbr>,
  <abbr title="Diabetes Mellitus">DM</abbr> tipo 2 y
  <abbr title="Enfermedad Pulmonar Obstructiva Crónica">EPOC</abbr>.
  Se recomienda seguimiento con
  <abbr title="Electrocardiograma">ECG</abbr>
  y analítica con
  <abbr title="Proteína C Reactiva">PCR</abbr> y
  <abbr title="Velocidad de Sedimentación Globular">VSG</abbr>
  cada 3 meses.
</p>
<p><a href="/glosario-medico">Ver glosario de abreviaturas médicas</a></p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/abbreviations.html"
  },
  {
    id: "3.1.5",
    nombre: "Nivel de lectura",
    quePide: "Cuando el texto requiere una capacidad lectora más avanzada que el nivel de educación secundaria inferior, hay disponible una versión alternativa que no requiere tal capacidad lectora.",
    nivel: "AAA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Aviso legal con vocabulario complejo sin versión simplificada ni resumen",
      code: `<section>
  <h2>Política de privacidad</h2>
  <p>
    En virtud de lo estipulado en el Reglamento General de Protección de Datos
    (RGPD) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016,
    relativo a la protección de las personas físicas en lo que respecta al
    tratamiento de datos de carácter personal y a la libre circulación de estos
    datos, el responsable del fichero queda obligado a recabar el consentimiento
    inequívoco del interesado para el tratamiento lícito de sus datos...
  </p>
</section>`
    },
    buenaPractica: {
      label: "Texto complejo con resumen en lenguaje sencillo y enlace a versión simplificada",
      code: `<section>
  <h2>Política de privacidad</h2>

  <!-- Resumen en lenguaje sencillo (lectura fácil) -->
  <div role="note" aria-label="Resumen en lenguaje sencillo">
    <h3>¿Qué hacemos con tus datos? (versión sencilla)</h3>
    <ul>
      <li>Guardamos tu nombre y correo para enviarte tu pedido.</li>
      <li>No compartimos tus datos con otras empresas sin tu permiso.</li>
      <li>Puedes pedirnos que borremos tus datos cuando quieras.</li>
    </ul>
    <a href="/privacidad-lectura-facil">Leer versión completa en lenguaje sencillo</a>
  </div>

  <!-- Versión legal completa -->
  <details>
    <summary>Ver texto legal completo</summary>
    <p>
      En virtud de lo estipulado en el Reglamento General de Protección
      de Datos (RGPD) 2016/679...
    </p>
  </details>
</section>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html"
  },
  {
    id: "3.1.6",
    nombre: "Pronunciación",
    quePide: "Hay un mecanismo disponible para identificar la pronunciación específica de palabras donde el significado de las palabras, en contexto, es ambiguo sin conocer la pronunciación.",
    nivel: "AAA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Término con pronunciación ambigua en contexto médico o técnico sin indicación fonética",
      code: `<p>
  El médico indicó que el tratamiento con verapamilo es adecuado
  para este tipo de arritmia supraventricular.
</p>
<!-- "Verapamilo" puede pronunciarse de formas distintas;
     sin guía fonética un lector de pantalla puede pronunciarlo mal -->`
    },
    buenaPractica: {
      label: "Término con pronunciación indicada mediante ruby, IPA o audio de referencia",
      code: `<p>
  El médico indicó que el tratamiento con
  <!-- Opción 1: notación ruby para pronunciación silábica -->
  <ruby>
    verapamilo
    <rp>(</rp>
    <rt>ve·ra·pá·mi·lo</rt>
    <rp>)</rp>
  </ruby>
  es adecuado para este tipo de arritmia supraventricular.
</p>

<!-- Opción 2: enlace a audio de pronunciación -->
<p>
  Tratamiento con
  <span aria-describedby="pron-verapamilo">verapamilo</span>.
  <a id="pron-verapamilo" href="/audio/verapamilo.mp3"
     aria-label="Escuchar pronunciación de verapamilo">
    🔊 Pronunciación
  </a>
</p>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html"
  },
  {
    id: "3.2.1",
    nombre: "Al recibir el foco",
    quePide: "Cuando cualquier componente recibe el foco, no inicia ningún cambio de contexto.",
    nivel: "A",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Menú desplegable que navega automáticamente al primer ítem al recibir el foco",
      code: `<select onFocus="this.form.submit()">
  <option value="">Selecciona un país</option>
  <option value="es">España</option>
  <option value="mx">México</option>
  <option value="ar">Argentina</option>
</select>
<!-- Al tabular al select, se envía el formulario automáticamente —
     cambio de contexto inesperado -->`
    },
    buenaPractica: {
      label: "Selector que solo actúa al confirmar con un botón explícito, no al recibir el foco",
      code: `<form>
  <label for="pais">País de envío</label>
  <select id="pais" name="pais">
    <option value="">Selecciona un país</option>
    <option value="es">España</option>
    <option value="mx">México</option>
    <option value="ar">Argentina</option>
  </select>
  <!-- El cambio de contexto solo ocurre cuando el usuario envía el formulario -->
  <button type="submit">Confirmar país y continuar</button>
</form>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html"
  },
  {
    id: "3.2.2",
    nombre: "Al recibir entradas",
    quePide: "Cambiar la configuración de cualquier componente de la interfaz de usuario no provoca automáticamente un cambio de contexto, a menos que el usuario haya sido informado de ese comportamiento antes de usar el componente.",
    nivel: "A",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Checkbox que navega a otra página automáticamente al marcarse sin aviso previo",
      code: `<label>
  <input type="checkbox"
         onChange="window.location.href='/configuracion-avanzada'">
  Ver opciones avanzadas
</label>
<!-- El usuario no esperaba que marcar esta casilla lo llevara a otra página -->`
    },
    buenaPractica: {
      label: "Checkbox que muestra opciones inline sin cambio de contexto, o con aviso previo explícito",
      code: `<!-- Opción A: mostrar opciones adicionales sin navegar -->
<label>
  <input type="checkbox" id="opciones-avanzadas"
         aria-controls="panel-avanzado"
         aria-expanded="false"
         onChange="toggleOpciones(this)">
  Ver opciones avanzadas
</label>
<div id="panel-avanzado" hidden>
  <fieldset>
    <legend>Configuración avanzada</legend>
    <label><input type="checkbox" name="cache"> Activar caché</label>
    <label><input type="checkbox" name="logs"> Guardar logs</label>
  </fieldset>
</div>
<script>
  function toggleOpciones(cb) {
    const panel = document.getElementById("panel-avanzado");
    panel.hidden = !cb.checked;
    cb.setAttribute("aria-expanded", cb.checked);
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/on-input.html"
  },
  {
    id: "3.2.3",
    nombre: "Navegación consistente",
    quePide: "Los mecanismos de navegación que se repiten en múltiples páginas web aparecen en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio.",
    nivel: "AA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Menú principal con orden de enlaces diferente en distintas páginas del sitio",
      code: `<!-- Página de inicio -->
<nav>
  <a href="/">Inicio</a>
  <a href="/productos">Productos</a>
  <a href="/blog">Blog</a>
  <a href="/contacto">Contacto</a>
</nav>

<!-- Página de producto — orden inconsistente -->
<nav>
  <a href="/contacto">Contacto</a>
  <a href="/">Inicio</a>
  <a href="/blog">Blog</a>
  <a href="/productos">Productos</a>
</nav>`
    },
    buenaPractica: {
      label: "Componente de navegación reutilizable con orden idéntico en todas las páginas",
      code: `<!-- El mismo componente de navegación en todas las páginas.
     En React/Vue/etc., se importa un único componente <NavPrincipal> -->

<!-- Página de inicio -->
<nav aria-label="Navegación principal">
  <a href="/" aria-current="page">Inicio</a>
  <a href="/productos">Productos</a>
  <a href="/blog">Blog</a>
  <a href="/contacto">Contacto</a>
</nav>

<!-- Página de producto — mismo orden, solo cambia aria-current -->
<nav aria-label="Navegación principal">
  <a href="/">Inicio</a>
  <a href="/productos" aria-current="page">Productos</a>
  <a href="/blog">Blog</a>
  <a href="/contacto">Contacto</a>
</nav>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html"
  },
  {
    id: "3.2.4",
    nombre: "Identificación consistente",
    quePide: "Los componentes que tienen la misma funcionalidad dentro de un conjunto de páginas web son identificados de forma consistente.",
    nivel: "AA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Icono de búsqueda con etiquetas distintas en diferentes páginas del sitio",
      code: `<!-- Página de inicio -->
<button aria-label="Buscar">
  <svg aria-hidden="true"><!-- icono lupa --></svg>
</button>

<!-- Página de resultados — misma función, distinta etiqueta -->
<button aria-label="Realizar búsqueda">
  <svg aria-hidden="true"><!-- icono lupa --></svg>
</button>

<!-- Página de producto — otra etiqueta diferente -->
<button aria-label="Encontrar productos">
  <svg aria-hidden="true"><!-- icono lupa --></svg>
</button>`
    },
    buenaPractica: {
      label: "Mismo componente de búsqueda con etiqueta idéntica en todas las páginas",
      code: `<!-- La misma etiqueta "Buscar en el sitio" en todas las páginas.
     Centralizado en un componente reutilizable. -->

<!-- Página de inicio -->
<button aria-label="Buscar en el sitio">
  <svg aria-hidden="true" focusable="false"><!-- icono lupa --></svg>
  <span class="visually-hidden">Buscar</span>
</button>

<!-- Página de producto — etiqueta idéntica -->
<button aria-label="Buscar en el sitio">
  <svg aria-hidden="true" focusable="false"><!-- icono lupa --></svg>
  <span class="visually-hidden">Buscar</span>
</button>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html"
  },
  {
    id: "3.2.5",
    nombre: "Cambio a petición",
    quePide: "Los cambios de contexto son iniciados únicamente a petición del usuario, o hay un mecanismo disponible para desactivar estos cambios.",
    nivel: "AAA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Página que redirige automáticamente tras un tiempo sin acción del usuario",
      code: `<head>
  <!-- Redirige automáticamente a otra URL tras 5 segundos sin aviso -->
  <meta http-equiv="refresh" content="5; url=/nueva-pagina">
</head>
<body>
  <p>Esta página ha cambiado de dirección. Serás redirigido en 5 segundos.</p>
</body>`
    },
    buenaPractica: {
      label: "Aviso de redirección con cuenta atrás cancelable y botón de acción explícito",
      code: `<div role="alertdialog" aria-live="assertive"
     aria-labelledby="redir-titulo" aria-describedby="redir-desc">
  <h2 id="redir-titulo">Esta página ha cambiado de dirección</h2>
  <p id="redir-desc">
    Serás redirigido a la nueva ubicación en
    <span id="cuenta-atras">10</span> segundos.
  </p>
  <button onclick="irAhora()">Ir ahora a la nueva página</button>
  <button onclick="cancelarRedireccion()">Cancelar redirección</button>
</div>
<script>
  let segundos = 10;
  let temporizador = setInterval(() => {
    segundos--;
    document.getElementById("cuenta-atras").textContent = segundos;
    if (segundos <= 0) irAhora();
  }, 1000);

  function irAhora() {
    window.location.href = "/nueva-pagina";
  }
  function cancelarRedireccion() {
    clearInterval(temporizador);
    document.querySelector("[role='alertdialog']").hidden = true;
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html"
  },
  {
    id: "3.2.6",
    nombre: "Ayuda consistente",
    quePide: "Si una página web contiene alguno de los mecanismos de ayuda siguientes (datos de contacto humano, mecanismo de contacto humano, opción de autoayuda, mecanismo de contacto totalmente automatizado), estos aparecen en el mismo orden relativo en cada página donde se presentan.",
    nivel: "A",
    principio: "Comprensible",
    version: "2.2",
    malaPractica: {
      label: "Enlace de ayuda en posición diferente en cada página: header en unas, footer en otras",
      code: `<!-- Página de inicio: ayuda en el header -->
<header>
  <nav>
    <a href="/">Inicio</a>
    <a href="/ayuda">Ayuda</a>
  </nav>
</header>

<!-- Página de checkout: ayuda desaparece del header y solo está en footer -->
<header>
  <nav>
    <a href="/">Inicio</a>
    <!-- Sin enlace de ayuda aquí -->
  </nav>
</header>
<footer>
  <a href="/ayuda">Centro de ayuda</a>
</footer>`
    },
    buenaPractica: {
      label: "Mecanismos de ayuda en posición consistente en todas las páginas del sitio",
      code: `<!-- Misma posición y orden en TODAS las páginas -->
<header>
  <nav aria-label="Navegación principal">
    <a href="/">Inicio</a>
    <a href="/productos">Productos</a>
    <!-- La ayuda siempre aparece en la misma posición relativa -->
    <a href="/ayuda" aria-label="Centro de ayuda">
      ❓ Ayuda
    </a>
  </nav>
</header>

<!-- Footer también consistente en todas las páginas -->
<footer>
  <section aria-label="Soporte y contacto">
    <p>¿Necesitas ayuda?
      <a href="tel:+34900000000">📞 900 000 000</a> |
      <a href="/chat-soporte">💬 Chat en vivo</a> |
      <a href="/ayuda">❓ Centro de ayuda</a>
    </p>
  </section>
</footer>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html"
  },
  {
    id: "3.3.1",
    nombre: "Identificación de errores",
    quePide: "Si se detecta automáticamente un error de entrada, el elemento erróneo es identificado y el error se describe al usuario mediante texto.",
    nivel: "A",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Error de formulario indicado solo con color rojo sin descripción textual",
      code: `<style>
  .campo-error { border: 2px solid red; }
</style>
<form>
  <label for="email">Correo electrónico</label>
  <input type="email" id="email" class="campo-error" value="no-es-correo">
  <!-- Sin mensaje de error textual; el usuario no sabe qué ha fallado ni por qué -->
  <button type="submit">Enviar</button>
</form>`
    },
    buenaPractica: {
      label: "Error identificado con texto descriptivo, aria-invalid y aria-describedby",
      code: `<form novalidate onsubmit="validarFormulario(event)">
  <label for="email">Correo electrónico <abbr title="obligatorio">*</abbr></label>
  <input type="email" id="email" name="email"
         aria-required="true"
         aria-invalid="true"
         aria-describedby="email-error"
         value="no-es-correo"
         style="border: 2px solid #d32f2f;">
  <p id="email-error" role="alert" style="color: #d32f2f;">
    ⚠ Error: introduce un correo electrónico válido (ejemplo: nombre@dominio.com).
    El valor «no-es-correo» no tiene el formato correcto.
  </p>
  <button type="submit">Enviar</button>
</form>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html"
  },
  {
    id: "3.3.2",
    nombre: "Etiquetas o instrucciones",
    quePide: "Se proporcionan etiquetas o instrucciones cuando el contenido requiere la entrada de datos por parte del usuario.",
    nivel: "A",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Campos de formulario con solo placeholder como etiqueta, sin label visible",
      code: `<form>
  <!-- El placeholder desaparece al escribir y no es una etiqueta accesible -->
  <input type="text" placeholder="Nombre">
  <input type="text" placeholder="Apellidos">
  <input type="text" placeholder="DD/MM/AAAA">
  <input type="password" placeholder="Contraseña">
  <button type="submit">Crear cuenta</button>
</form>`
    },
    buenaPractica: {
      label: "Formulario con etiquetas visibles, instrucciones de formato y campos obligatorios marcados",
      code: `<form>
  <p>Los campos marcados con <abbr title="obligatorio">*</abbr> son obligatorios.</p>

  <div>
    <label for="nombre">Nombre <abbr title="obligatorio">*</abbr></label>
    <input type="text" id="nombre" name="nombre"
           autocomplete="given-name" aria-required="true">
  </div>

  <div>
    <label for="apellidos">Apellidos <abbr title="obligatorio">*</abbr></label>
    <input type="text" id="apellidos" name="apellidos"
           autocomplete="family-name" aria-required="true">
  </div>

  <div>
    <label for="fecha-nac">Fecha de nacimiento <abbr title="obligatorio">*</abbr></label>
    <input type="text" id="fecha-nac" name="fecha-nac"
           placeholder="DD/MM/AAAA"
           aria-required="true"
           aria-describedby="fecha-formato"
           inputmode="numeric">
    <p id="fecha-formato">Formato: día/mes/año. Ejemplo: 15/03/1990.</p>
  </div>

  <div>
    <label for="password">Contraseña <abbr title="obligatorio">*</abbr></label>
    <input type="password" id="password" name="password"
           aria-required="true"
           aria-describedby="password-requisitos"
           autocomplete="new-password">
    <p id="password-requisitos">
      Mínimo 8 caracteres, al menos una mayúscula, un número y un símbolo.
    </p>
  </div>

  <button type="submit">Crear cuenta</button>
</form>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"
  },
  {
    id: "3.3.3",
    nombre: "Sugerencia ante errores",
    quePide: "Si se detecta automáticamente un error de entrada y se conocen las sugerencias para la corrección, se proporcionan al usuario, a menos que esto ponga en riesgo la seguridad o la finalidad del contenido.",
    nivel: "AA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Mensaje de error vago que no indica cómo corregir el problema",
      code: `<form>
  <label for="fecha">Fecha de reserva</label>
  <input type="text" id="fecha" value="2024/31/13"
         aria-invalid="true" aria-describedby="fecha-err">
  <p id="fecha-err" role="alert" style="color:red;">
    ✗ Fecha incorrecta.
    <!-- No indica qué formato espera ni cuál es el error específico -->
  </p>
  <button type="submit">Reservar</button>
</form>`
    },
    buenaPractica: {
      label: "Mensaje de error con descripción del problema y sugerencia concreta de corrección",
      code: `<form>
  <label for="fecha">Fecha de reserva <abbr title="obligatorio">*</abbr></label>
  <input type="text" id="fecha" name="fecha"
         value="2024/31/13"
         aria-invalid="true"
         aria-describedby="fecha-error fecha-formato"
         inputmode="numeric">
  <p id="fecha-formato">Formato esperado: DD/MM/AAAA (ejemplo: 25/12/2024).</p>
  <p id="fecha-error" role="alert" style="color: #d32f2f;">
    ⚠ La fecha «2024/31/13» no es válida. Comprueba que:
    <ul>
      <li>El formato sea día/mes/año (DD/MM/AAAA).</li>
      <li>El día esté entre 01 y 31 y el mes entre 01 y 12.</li>
      <li>La fecha no sea anterior a hoy.</li>
    </ul>
    Sugerencia: escribe la fecha como <strong>31/12/2024</strong>.
  </p>
  <button type="submit">Reservar</button>
</form>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html"
  },
  {
    id: "3.3.4",
    nombre: "Prevención de errores (legales, financieros, de datos)",
    quePide: "Para las páginas web que causen compromisos legales o transacciones financieras, o que modifiquen o eliminen datos controlables por el usuario, las acciones son reversibles, verificables o confirmables.",
    nivel: "AA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Botón de compra que procesa el pago inmediatamente sin revisión ni confirmación",
      code: `<form method="post" action="/procesar-pago">
  <input type="hidden" name="importe" value="299.99">
  <input type="hidden" name="producto" value="plan-anual">
  <!-- Sin resumen del pedido, sin paso de confirmación, sin posibilidad de revisar -->
  <button type="submit">Comprar ahora</button>
</form>`
    },
    buenaPractica: {
      label: "Proceso de compra con resumen, confirmación explícita y opción de cancelar",
      code: `<!-- Paso 3 de 3: Confirmación -->
<section aria-labelledby="confirmar-titulo">
  <h2 id="confirmar-titulo">Confirma tu pedido (paso 3 de 3)</h2>

  <dl>
    <dt>Producto:</dt>  <dd>Plan Anual Premium</dd>
    <dt>Importe:</dt>   <dd><strong>299,99 €</strong> (IVA incluido)</dd>
    <dt>Facturación:</dt><dd>Tarjeta •••• •••• •••• 4242</dd>
    <dt>Entrega:</dt>   <dd>Descarga digital inmediata</dd>
  </dl>

  <p>
    Al pulsar «Confirmar y pagar» aceptas los
    <a href="/terminos" target="_blank" rel="noopener">
      términos y condiciones
    </a>.
  </p>

  <div role="group" aria-label="Acciones del pedido">
    <a href="/carrito">← Volver y modificar el pedido</a>
    <form method="post" action="/procesar-pago">
      <input type="hidden" name="token-pedido" value="abc123">
      <button type="submit">Confirmar y pagar 299,99 €</button>
    </form>
  </div>
</section>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html"
  },
  {
    id: "3.3.5",
    nombre: "Ayuda en contexto",
    quePide: "Hay disponible ayuda en contexto.",
    nivel: "AAA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Formulario técnico sin ayuda contextual que deja al usuario sin orientación",
      code: `<form>
  <label for="iban">IBAN</label>
  <input type="text" id="iban" name="iban"
         placeholder="IBAN">
  <!-- El usuario no sabe cuántos caracteres tiene un IBAN,
       qué formato usar ni dónde encontrarlo -->

  <label for="bic">BIC/SWIFT</label>
  <input type="text" id="bic" name="bic"
         placeholder="BIC">
  <button type="submit">Confirmar datos bancarios</button>
</form>`
    },
    buenaPractica: {
      label: "Formulario con ayuda contextual inline, tooltip y enlace a guía detallada",
      code: `<form>
  <div>
    <label for="iban">
      IBAN <abbr title="obligatorio">*</abbr>
    </label>
    <input type="text" id="iban" name="iban"
           aria-describedby="iban-ayuda"
           placeholder="ES00 0000 0000 0000 0000 0000"
           inputmode="text"
           autocomplete="off"
           maxlength="29">
    <p id="iban-ayuda">
      El IBAN español tiene 24 caracteres: «ES» seguido de 22 dígitos.
      Encuéntralo en tu libreta de banco o en la app de tu entidad.
      <a href="/ayuda/donde-encontrar-iban" target="_blank" rel="noopener">
        ¿Dónde encontrar mi IBAN? (abre en nueva pestaña)
      </a>
    </p>
  </div>

  <div>
    <label for="bic">
      Código BIC / SWIFT
      <button type="button"
              aria-label="Qué es el código BIC"
              aria-expanded="false"
              aria-controls="bic-tooltip"
              onclick="toggleTooltip()">?</button>
    </label>
    <div id="bic-tooltip" role="tooltip" hidden>
      El BIC es un código de 8 u 11 caracteres que identifica a tu banco
      a nivel internacional. Ejemplo: CAIXESBBXXX.
    </div>
    <input type="text" id="bic" name="bic"
           aria-describedby="bic-tooltip"
           placeholder="CAIXESBBXXX"
           maxlength="11">
  </div>

  <button type="submit">Confirmar datos bancarios</button>
</form>
<script>
  function toggleTooltip() {
    const tooltip = document.getElementById("bic-tooltip");
    const btn = tooltip.previousElementSibling;
    tooltip.hidden = !tooltip.hidden;
    btn.setAttribute("aria-expanded", !tooltip.hidden);
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/help.html"
  },
  {
    id: "3.3.6",
    nombre: "Prevención de errores (todos)",
    quePide: "Para las páginas web que requieran que el usuario envíe información, las acciones son reversibles, verificables o confirmables.",
    nivel: "AAA",
    principio: "Comprensible",
    version: "2.0",
    malaPractica: {
      label: "Formulario de encuesta que se envía sin confirmación ni posibilidad de revisar",
      code: `<form method="post" action="/enviar-encuesta">
  <label for="opinion">Tu opinión</label>
  <textarea id="opinion" name="opinion" rows="6"></textarea>
  <!-- Sin revisión, sin confirmación, sin posibilidad de editar tras enviar -->
  <button type="submit">Enviar</button>
</form>`
    },
    buenaPractica: {
      label: "Formulario con vista previa antes de enviar y opción de editar o cancelar",
      code: `<div id="paso-formulario">
  <h2>Tu opinión (paso 1 de 2)</h2>
  <form id="form-encuesta">
    <label for="opinion">Escribe tu valoración <abbr title="obligatorio">*</abbr></label>
    <textarea id="opinion" name="opinion" rows="6"
              aria-required="true"
              aria-describedby="opinion-ayuda"></textarea>
    <p id="opinion-ayuda">Máximo 500 caracteres. Tu respuesta será anónima.</p>
    <button type="button" onclick="mostrarVistaPrevia()">
      Revisar antes de enviar →
    </button>
  </form>
</div>

<div id="paso-confirmacion" hidden>
  <h2>Revisa tu respuesta (paso 2 de 2)</h2>
  <blockquote id="preview-texto" aria-live="polite"></blockquote>
  <div role="group" aria-label="Acciones de envío">
    <button onclick="editarRespuesta()">← Editar respuesta</button>
    <button onclick="enviarEncuesta()">Confirmar y enviar</button>
  </div>
</div>
<script>
  function mostrarVistaPrevia() {
    const texto = document.getElementById("opinion").value.trim();
    if (!texto) return;
    document.getElementById("preview-texto").textContent = texto;
    document.getElementById("paso-formulario").hidden = true;
    document.getElementById("paso-confirmacion").hidden = false;
  }
  function editarRespuesta() {
    document.getElementById("paso-formulario").hidden = false;
    document.getElementById("paso-confirmacion").hidden = true;
    document.getElementById("opinion").focus();
  }
  function enviarEncuesta() {
    document.getElementById("form-encuesta").submit();
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html"
  },
  {
    id: "3.3.7",
    nombre: "Entrada redundante",
    quePide: "La información requerida previamente en el mismo proceso no se vuelve a solicitar al usuario, a menos que sea necesario por seguridad o que los datos hayan caducado.",
    nivel: "A",
    principio: "Comprensible",
    version: "2.2",
    malaPractica: {
      label: "Proceso de checkout que pide el email dos veces en pasos distintos sin autocompletar",
      code: `<!-- Paso 1: Datos de contacto -->
<label for="email-paso1">Correo electrónico</label>
<input type="email" id="email-paso1" name="email">

<!-- Paso 2: Confirmación — pide el mismo email de nuevo -->
<label for="email-confirmacion">Confirma tu correo electrónico</label>
<input type="email" id="email-confirmacion" name="email_confirm">

<!-- Paso 3: Facturación — pide de nuevo el email -->
<label for="email-factura">Email para la factura</label>
<input type="email" id="email-factura" name="email_factura">
<!-- El usuario ya lo introdujo dos veces — tercera solicitud innecesaria -->`
    },
    buenaPractica: {
      label: "Proceso que recuerda los datos introducidos y los reutiliza automáticamente en pasos posteriores",
      code: `<!-- Paso 1: El usuario introduce su email -->
<label for="email">Correo electrónico <abbr title="obligatorio">*</abbr></label>
<input type="email" id="email" name="email"
       autocomplete="email" aria-required="true"
       oninput="guardarEmail(this.value)">

<!-- Paso 3: Facturación — el email se rellena automáticamente -->
<label for="email-factura">Email para recibir la factura</label>
<input type="email" id="email-factura" name="email_factura"
       autocomplete="email"
       aria-describedby="email-factura-nota">
<p id="email-factura-nota">
  Hemos rellenado este campo con el correo que indicaste anteriormente.
  Puedes cambiarlo si prefieres recibir la factura en otra dirección.
</p>
<script>
  function guardarEmail(valor) {
    sessionStorage.setItem("email-usuario", valor);
  }
  window.addEventListener("load", () => {
    const emailGuardado = sessionStorage.getItem("email-usuario");
    const campoFactura = document.getElementById("email-factura");
    if (emailGuardado && campoFactura) {
      campoFactura.value = emailGuardado;
    }
  });
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html"
  },
  {
    id: "3.3.8",
    nombre: "Accesibilidad de autenticación (mínimo)",
    quePide: "Un paso de autenticación que requiera una prueba cognitiva no depende únicamente de esa prueba, a menos que proporcione alternativa, asistencia o el test sea para reconocer objetos o contenido personal introducido previamente por el usuario.",
    nivel: "AA",
    principio: "Comprensible",
    version: "2.2",
    malaPractica: {
      label: "Login que exige resolver un CAPTCHA matemático sin ninguna alternativa accesible",
      code: `<form method="post" action="/login">
  <label for="usuario">Usuario</label>
  <input type="text" id="usuario" name="usuario" autocomplete="username">

  <label for="password">Contraseña</label>
  <input type="password" id="password" name="password" autocomplete="current-password">

  <!-- CAPTCHA cognitivo sin alternativa -->
  <p>Resuelve para demostrar que no eres un robot:</p>
  <label for="captcha">¿Cuánto es 17 × 8?</label>
  <input type="number" id="captcha" name="captcha">
  <!-- Sin opción de audio, sin alternativa, sin apoyo externo permitido -->

  <button type="submit">Iniciar sesión</button>
</form>`
    },
    buenaPractica: {
      label: "Login con passkey o enlace mágico que no exige prueba cognitiva",
      code: `<form method="post" action="/login">
  <label for="email-login">Correo electrónico</label>
  <input type="email" id="email-login" name="email"
         autocomplete="email" aria-required="true">

  <label for="password-login">Contraseña</label>
  <input type="password" id="password-login" name="password"
         autocomplete="current-password" aria-required="true">

  <button type="submit">Iniciar sesión</button>
</form>

<!-- Alternativas que no dependen de prueba cognitiva -->
<section aria-label="Otras formas de acceder">
  <h2>También puedes acceder con:</h2>

  <!-- Opción 1: passkey (WebAuthn) — sin prueba cognitiva -->
  <button type="button" onclick="autenticarConPasskey()">
    🔑 Usar passkey (huella o Face ID)
  </button>

  <!-- Opción 2: enlace mágico por email -->
  <form method="post" action="/enviar-enlace-magico">
    <label for="email-magico">
      Recibir un enlace de acceso por correo (sin contraseña)
    </label>
    <input type="email" id="email-magico" name="email"
           autocomplete="email">
    <button type="submit">Enviarme el enlace de acceso</button>
  </form>
</section>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html"
  },
  {
    id: "3.3.9",
    nombre: "Accesibilidad de autenticación (mejorado)",
    quePide: "Un paso de autenticación no depende de ninguna prueba cognitiva, a menos que la alternativa proporcionada también sea de reconocimiento de objetos o contenido personal.",
    nivel: "AAA",
    principio: "Comprensible",
    version: "2.2",
    malaPractica: {
      label: "Autenticación de dos factores basada únicamente en reconocimiento de imágenes sin alternativa",
      code: `<section aria-label="Verificación en dos pasos">
  <h2>Selecciona todas las imágenes que contengan semáforos</h2>
  <!-- CAPTCHA visual de imágenes sin alternativa de audio ni otro método -->
  <div class="grid-captcha">
    <img src="img1.jpg" alt="">
    <img src="img2.jpg" alt="">
    <img src="img3.jpg" alt="">
    <img src="img4.jpg" alt="">
  </div>
  <!-- Sin alternativa: no hay audio CAPTCHA, no hay OTP, no hay passkey -->
  <button type="submit">Verificar</button>
</section>`
    },
    buenaPractica: {
      label: "Autenticación multifactor sin prueba cognitiva: OTP por app, passkey o SMS",
      code: `<section aria-label="Verificación en dos pasos">
  <h2>Verifica tu identidad</h2>
  <p>Elige el método de verificación que prefieras. Ninguno requiere memorizar ni resolver puzzles.</p>

  <!-- Opción 1: OTP de app autenticadora (no cognitivo) -->
  <div role="group" aria-labelledby="otp-titulo">
    <h3 id="otp-titulo">Código de tu app autenticadora</h3>
    <label for="otp-code">
      Introduce el código de 6 dígitos de Google Authenticator o similar
    </label>
    <input type="text" id="otp-code" name="otp"
           inputmode="numeric" maxlength="6"
           autocomplete="one-time-code"
           aria-describedby="otp-ayuda">
    <p id="otp-ayuda">El código se renueva cada 30 segundos en tu app.</p>
    <button type="submit">Verificar con código OTP</button>
  </div>

  <!-- Opción 2: passkey biométrico -->
  <div role="group" aria-labelledby="passkey-titulo">
    <h3 id="passkey-titulo">Passkey (huella dactilar o reconocimiento facial)</h3>
    <button type="button" onclick="verificarConPasskey()">
      🔑 Verificar con passkey
    </button>
  </div>

  <!-- Opción 3: código por SMS -->
  <div role="group" aria-labelledby="sms-titulo">
    <h3 id="sms-titulo">Código por SMS</h3>
    <button type="button" onclick="enviarSMS()">
      📱 Enviar código SMS al +34 ••• ••• 789
    </button>
  </div>
</section>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced.html"
  },
  {
    id: "4.1.1",
    nombre: "Análisis sintáctico",
    quePide: "El contenido implementado en lenguajes de marcado debe poder ser analizado sin errores de especificación que afecten la interpretación, como etiquetas mal cerradas, atributos duplicados o IDs no únicos.",
    nivel: "A",
    principio: "Robusto",
    version: "2.0",
    malaPractica: {
      label: "HTML con errores de análisis: etiquetas mal cerradas e IDs duplicados",
      code: `<div id="principal">
  <h1>Bienvenido</h1>
  <p>Este es un párrafo sin cerrar
  <ul>
    <li id="item">Elemento 1</li>
    <li id="item">Elemento 2</li>
  </ul>
<div>
  <span>Texto <strong>importante</span></strong>
</div>`
    },
    buenaPractica: {
      label: "HTML bien formado: etiquetas correctamente cerradas e IDs únicos",
      code: `<div id="principal">
  <h1>Bienvenido</h1>
  <p>Este es un párrafo correctamente cerrado.</p>
  <ul>
    <li id="item-1">Elemento 1</li>
    <li id="item-2">Elemento 2</li>
  </ul>
  <div>
    <span>Texto <strong>importante</strong></span>
  </div>
</div>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/parsing"
  },
  {
    id: "4.1.2",
    nombre: "Nombre, función, valor",
    quePide: "Todos los componentes de la interfaz de usuario deben tener nombre y función determinables por software. Los estados, propiedades y valores que el usuario puede establecer deben ser configurables por software, y los cambios deben notificarse a los agentes de usuario, incluidas las tecnologías de apoyo.",
    nivel: "A",
    principio: "Robusto",
    version: "2.0",
    malaPractica: {
      label: "Botón personalizado sin nombre, rol ni estado accesible",
      code: `<!-- Botón personalizado sin semántica accesible -->
<div onclick="toggleMenu()" style="cursor:pointer;">
  <img src="hamburger.png">
</div>

<!-- Checkbox personalizado sin estado -->
<div onclick="toggle(this)" style="cursor:pointer;">
  <span>☐</span> Acepto los términos
</div>

<script>
  function toggle(el) {
    const span = el.querySelector('span');
    span.textContent = span.textContent === '☐' ? '☑' : '☐';
  }
</script>`
    },
    buenaPractica: {
      label: "Botón y checkbox con nombre, rol y estado correctamente expuestos",
      code: `<!-- Botón con aria-label y rol implícito -->
<button
  aria-label="Abrir menú de navegación"
  aria-expanded="false"
  aria-controls="menu-principal"
  onclick="toggleMenu(this)"
>
  <img src="hamburger.png" alt="">
</button>

<!-- Checkbox nativo con estado correcto -->
<label>
  <input type="checkbox" id="terminos" name="terminos">
  Acepto los términos y condiciones
</label>

<!-- O checkbox personalizado con ARIA -->
<div
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  onclick="toggleCheck(this)"
  onkeydown="handleKey(event, this)"
>
  Acepto los términos y condiciones
</div>

<script>
  function toggleMenu(btn) {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  }

  function toggleCheck(el) {
    const checked = el.getAttribute('aria-checked') === 'true';
    el.setAttribute('aria-checked', String(!checked));
  }

  function handleKey(e, el) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleCheck(el);
    }
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value"
  },
  {
    id: "4.1.3",
    nombre: "Mensajes de estado",
    quePide: "En el contenido implementado con lenguajes de marcado, los mensajes de estado deben poder ser determinados por software mediante rol o propiedades, de modo que puedan ser presentados al usuario por tecnologías de apoyo sin recibir el foco.",
    nivel: "AA",
    principio: "Robusto",
    version: "2.1",
    malaPractica: {
      label: "Mensajes de estado sin roles ARIA: invisibles para lectores de pantalla",
      code: `<!-- Mensaje de éxito sin rol live region -->
<div id="mensaje" style="display:none; color:green;">
  ¡Formulario enviado correctamente!
</div>

<!-- Contador de resultados sin anuncio accesible -->
<div id="resultados-info">
  Se encontraron 24 resultados.
</div>

<script>
  function enviarFormulario() {
    // Muestra el mensaje pero no lo anuncia a lectores de pantalla
    document.getElementById('mensaje').style.display = 'block';
  }

  function actualizarResultados(n) {
    document.getElementById('resultados-info').textContent =
      'Se encontraron ' + n + ' resultados.';
    // El lector de pantalla no detecta este cambio
  }
</script>`
    },
    buenaPractica: {
      label: "Mensajes de estado con roles ARIA live para anuncio automático",
      code: `<!-- Mensaje de éxito con role="status" -->
<div
  id="mensaje-exito"
  role="status"
  aria-live="polite"
  aria-atomic="true"
  style="display:none; color:green;"
>
</div>

<!-- Mensaje de error urgente con role="alert" -->
<div
  id="mensaje-error"
  role="alert"
  aria-live="assertive"
  aria-atomic="true"
  style="display:none; color:red;"
>
</div>

<!-- Contador de resultados como live region -->
<div
  id="resultados-info"
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
</div>

<!-- Barra de progreso accesible -->
<div aria-label="Cargando archivo">
  <progress
    id="barra-progreso"
    max="100"
    value="0"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="0"
    aria-valuetext="0% completado"
  ></progress>
</div>

<script>
  function mostrarExito() {
    const el = document.getElementById('mensaje-exito');
    el.style.display = 'block';
    el.textContent = '¡Formulario enviado correctamente!';
    // El lector de pantalla lo anuncia automáticamente
  }

  function mostrarError(msg) {
    const el = document.getElementById('mensaje-error');
    el.style.display = 'block';
    el.textContent = msg;
  }

  function actualizarResultados(n) {
    document.getElementById('resultados-info').textContent =
      'Se encontraron ' + n + ' resultados.';
  }

  function actualizarProgreso(valor) {
    const barra = document.getElementById('barra-progreso');
    barra.value = valor;
    barra.setAttribute('aria-valuenow', valor);
    barra.setAttribute('aria-valuetext', valor + '% completado');
  }
</script>`
    },
    recurso: "https://www.w3.org/WAI/WCAG22/Understanding/status-messages"
  }


  /* ──────────────────────────────────────────────
     AGREGA AQUÍ MÁS CRITERIOS
     Copia la estructura de arriba y pega debajo.
     Recuerda poner una coma después del cierre }
     del criterio anterior.
     ────────────────────────────────────────────── */

];

// Exporta para que filters.js y table-renderer.js lo usen
// (No es necesario con script tags clásicos, pero lo dejamos
//  documentado para si migras a módulos ES)
// export default WCAG_CRITERIA;
