// Wait for the DOM to be fully loaded
function contact() {
    // Code to execute when the button is clicked
    alert('Thanks for contacting me!');
};

document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block' || navMenu.style.display === '') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});