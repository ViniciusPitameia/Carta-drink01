document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
});
