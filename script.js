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