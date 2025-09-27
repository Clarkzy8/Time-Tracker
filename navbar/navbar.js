document.addEventListener("DOMContentLoaded", () => {
  fetch('/navbar/navbar.html')
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById('navbar-container'); // fixed ID
      container.innerHTML = html;

      // Highlight the current menu item
      const current = window.location.pathname;
      const links = container.querySelectorAll('a');

      links.forEach(link => {
        if (link.getAttribute('href') === current || link.getAttribute('href') === '.' + current) {
          link.classList.add('active');
        }
      });
    });
});
