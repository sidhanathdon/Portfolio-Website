document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        // Remove 'active' class from all anchor tags
        document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
        
        // Add 'active' class to the clicked anchor tag
        this.classList.add('active');
        
        // Remove the 'active' class after 1 second
        setTimeout(() => {
            this.classList.remove('active');
        }, 1000); // 1000 milliseconds = 1 second
    });
});

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.addEventListener('click',function(){
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark');
});

const sections = document.querySelectorAll('section'); // Ensure `sections` is defined
    const navLinks = document.querySelectorAll('.navbar a'); // Ensure `navLinks` is defined
    const header = document.querySelector('header'); // Ensure `header` is defined


window.onscroll = () => {

    // Highlight navigation links based on scroll position
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 10; // Offset for slight adjustment
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                if (navLink.getAttribute('href').slice(1) === section.getAttribute('id')) {
                    navLink.classList.add('active');
                }
            });
        }
    });

    // Add sticky class to the header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the menu on scroll
    menuIcon?.classList.remove('fa-xmark'); // Use optional chaining to handle undefined `menuIcon`
    navbar?.classList.remove('active'); // Use optional chaining to handle undefined `navbar`
};

//Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
})

ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.projects-box,.contact form',{origin:'button'});
ScrollReveal().reveal('.about-container,.services-box',{origin:'left'});
ScrollReveal().reveal('.projects-container',{origin:'right'});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the Typed.js instance after DOM is fully loaded
    const typed = new Typed('.multiple-text', {
        strings: ['Web Developer', 'UI/UX Designer', 'App Developer'], // Strings to type
        typeSpeed: 100, // Speed of typing
        backSpeed: 60, // Speed of deleting
        backDelay: 2000, // Delay before backspacing
        loop: true, // Loop infinitely
    });
});
