const navCheckbox = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks.contains(event.target) || navCheckbox.contains(event.target);

    if (!isClickInsideNav) {
        navCheckbox.checked = false; 
    }
});