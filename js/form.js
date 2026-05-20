/**
 * FORM.JS
 * Maneja el formulario de contacto accesible:
 * - Validación inline con aria-invalid y aria-describedby
 * - Mensaje de éxito con aria-live="assertive"
 * - Reset limpio
 */

function initForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', handleSubmit);
  form.addEventListener('reset',  handleReset);

  // Validación en tiempo real al salir del campo
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  // Validar todos los campos requeridos
  const fields = form.querySelectorAll('[aria-required="true"]');
  let valid = true;

  fields.forEach(field => {
    if (!validateField(field)) valid = false;
  });

  if (!valid) {
    // Enfocar el primer campo inválido
    const first = form.querySelector('[aria-invalid="true"]');
    if (first) first.focus();
    return;
  }

  // Simular envío exitoso
  const success = document.getElementById('form-success');
  if (success) {
    success.classList.add('visible');
    success.focus();
    form.reset();
    // Ocultar después de 6s
    setTimeout(() => success.classList.remove('visible'), 6000);
  }
}

function handleReset() {
  // Limpiar todos los estados de error al hacer reset
  setTimeout(() => {
    document.querySelectorAll('[aria-invalid]').forEach(field => {
      field.setAttribute('aria-invalid', 'false');
      field.style.removeProperty('border-color');
    });
    document.querySelectorAll('.field-error').forEach(el => {
      el.classList.remove('visible');
    });
    const success = document.getElementById('form-success');
    if (success) success.classList.remove('visible');
  }, 0);
}

function validateField(field) {
  const value    = field.value.trim();
  const type     = field.type;
  const errorEl  = document.getElementById(field.getAttribute('aria-describedby')?.split(' ').find(id => id.endsWith('-error')));

  let errorMsg = '';

  if (field.hasAttribute('required') || field.getAttribute('aria-required') === 'true') {
    if (!value) {
      errorMsg = 'Este campo es obligatorio.';
    } else if (type === 'email' && !isValidEmail(value)) {
      errorMsg = 'Ingresa un correo electrónico válido.';
    } else if (field.tagName === 'TEXTAREA' && value.length < 10) {
      errorMsg = 'El mensaje debe tener al menos 10 caracteres.';
    }
  }

  if (errorMsg) {
    field.setAttribute('aria-invalid', 'true');
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.add('visible');
    }
    return false;
  } else {
    field.setAttribute('aria-invalid', 'false');
    if (errorEl) errorEl.classList.remove('visible');
    return true;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
