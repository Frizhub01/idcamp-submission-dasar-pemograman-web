// 1. Logika untuk Navbar saat scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.navbar-container');
  // Tambahkan kelas 'navbar-scrolled' jika scroll lebih dari 10px, jika tidak, hapus.
  if (window.scrollY > 10) {
    header.classList.add('navbar-scrolled');
  } else {
    header.classList.remove('navbar-scrolled');
  }
});

// 2. Logika untuk Hamburger Menu
const hamburger = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    // Toggle kelas 'active' pada hamburger dan nav-list
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

    // Toggle atribut aria-expanded untuk aksesibilitas
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
});