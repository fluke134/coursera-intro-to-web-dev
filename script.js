// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button element by its ID
    const button = document.getElementById('myButton');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Code to execute when the button is clicked
        alert('Button was clicked!');
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});