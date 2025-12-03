    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const backdrop = document.querySelector('.menu-backdrop');
    const body = document.body;

    function closeMenu() {
        nav.classList.remove('open');
        backdrop.classList.remove('open');
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu() {
        const isOpen = nav.classList.toggle('open');
        backdrop.classList.toggle('open', isOpen);
        body.classList.toggle('menu-open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
    }

    menuToggle.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', closeMenu);