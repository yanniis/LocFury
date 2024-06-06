// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Menu';
    toggleButton.classList.add('toggle-button');
    
    document.querySelector('.navbar').insertBefore(toggleButton, navLinks);

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
