// Aggiunge una classe al menu di navigazione per abilitare il menu "hamburger" su schermi più piccoli
const toggleMenu = () => {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('show');
  }
  
  // Aggiunge un listener per il click sul menu "hamburger"
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', toggleMenu);