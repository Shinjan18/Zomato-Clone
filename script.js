// Add smooth scrolling effect for anchor links (if applicable)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search input animation on focus
const searchInput = document.querySelector('main input');

searchInput.addEventListener('focus', () => {
    searchInput.style.transition = '0.3s';
    searchInput.style.width = '50%';
    searchInput.style.boxShadow = '0px 4px 10px rgba(255, 77, 77, 0.5)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.transition = '0.3s';
    searchInput.style.width = '40%';
    searchInput.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';
});

// Add fade-in animation for main text
document.addEventListener('DOMContentLoaded', () => {
    const mainText = document.querySelector('main p');
    mainText.style.opacity = '0';
    mainText.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
        mainText.style.opacity = '1';
    }, 500);
});
// Simple slider for testimonials
const slider = document.querySelector('.testimonial-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});