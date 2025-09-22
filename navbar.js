// Load the shared menu and highlight the current page
fetch('/navbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar-containter').innerHTML = html;

    // Highlight the current menu item
    const current = window.location.pathname;
    const links = document.querySelectorAll('#menu-bar a');

    links.forEach(link => {
      if (link.getAttribute('href') === current || link.getAttribute('href') === '.' + current) {
        link.classList.add('active');
      }
    });
  });
