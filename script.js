let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal configuration
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

// Typed.js configuration
const typed = new Typed('.multiple-text', {
    strings: ['ISE Graduated', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Load More Button Functionality
const loadMoreBtns = document.querySelectorAll('.btn#loadMoreBtn');
const showLessBtns = document.querySelectorAll('.btn#showLessBtn');
const additionalTexts = document.querySelectorAll('.additional-text');

loadMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        additionalTexts[index].style.display = 'block'; // Show the additional text
        btn.style.display = 'none'; // Hide the Load More button
        showLessBtns[index].style.display = 'inline-block'; // Show the Show Less button
    });
});

showLessBtns.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        additionalTexts[index].style.display = 'none'; // Hide the additional text
        btn.style.display = 'none'; // Hide the Show Less button
        loadMoreBtns[index].style.display = 'inline-block'; // Show the Load More button
    });
});
