// JavaScript
window.addEventListener('DOMContentLoaded', (event) => {
    const icons = document.querySelectorAll('.skill-container');
    icons.forEach((icon, index) => {
        const duration = 20; 
        icon.style.animationDuration = `${duration}s`;
    });
});