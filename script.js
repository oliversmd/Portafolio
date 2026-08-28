// Función para copiar el texto del correo.
const btnCopiar = document.getElementById('copiar-email');
const ventanaEmergente = document.getElementById('toast');

btnCopiar.addEventListener('click', async () => {
  try {
    // Copia el texto al portapapeles
    await navigator.clipboard.writeText('martinezd.olivers@gmail.com');
    
    // Agrega la clase CSS para que la ventana aparezca y suba
    ventanaEmergente.classList.add('mostrar');
    
    // Cuentas 3 segundos (3000 ms) y remueves la clase para que se oculte sola
    setTimeout(() => {
      ventanaEmergente.classList.remove('mostrar');
    }, 3000);

  } catch (err) {
    console.error('Error al intentar copiar: ', err);
  }
});

const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('activo');
        burgerBtn.classList.toggle('abierto'); // Agrega/quita clase al botón
    });

    const enlaces = navMenu.querySelectorAll('a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            navMenu.classList.remove('activo');
            burgerBtn.classList.remove('abierto');
        });
    });
}
