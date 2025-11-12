// Mostrar secciones
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));
    document.getElementById(targetId).classList.add('activa');
  });
});

// Submenu hover fix para que no desaparezcan al pasar rápido
document.querySelectorAll('.submenu').forEach(menu => {
  menu.addEventListener('mouseenter', () => menu.classList.add('hover'));
  menu.addEventListener('mouseleave', () => menu.classList.remove('hover'));
});