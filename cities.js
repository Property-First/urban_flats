
    gsap.registerPlugin(ScrollTrigger);

    // ===== NAVIGATION =====
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.getElementById('site-nav');
    //  console.log(document.querySelectorAll("#mobile-menu").length);
    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);


    });
// console.log(hamburger);
//      console.log(mobileMenu);
    // Close mobile menu on link click
    document.querySelectorAll('#mobile-menu .dropdown-content a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Scroll nav condense
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('nav-condensed');
        } else {
            nav.classList.remove('nav-condensed');
        }
    });

    // ===== GSAP ANIMATIONS =====
    document.addEventListener('DOMContentLoaded', () => {
        // Hero fade-in
        gsap.from('.hero-content', {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out'
        });
        gsap.from('.hero-form', {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out'
        });
        
        // Stats stagger
        gsap.from('.hero-stat', {
            scrollTrigger: {
                trigger: '.hero-stats',
                start: 'top 85%',
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out'
        });

        // Property cards stagger
        gsap.from('.property-card', {
            scrollTrigger: {
                trigger: '#propertyGrid',
                start: 'top 90%',
            },
            opacity: 0,
            y: 30,
            stagger: 0.06,
            duration: 0.6,
            ease: 'power2.out'
        });

        // Contact rail
        gsap.from('#contact-rail .contact-fab', {
            opacity: 0,
            scale: 0.6,
            y: 20,
            stagger: 0.08,
            duration: 0.5,
            delay: 0.5,
            ease: 'back.out(1.7)'
        });
    });




    // ===== MOBILE DROPDOWN TOGGLE =====
// ===== NAVIGATION JAVASCRIPT =====
document.addEventListener('DOMContentLoaded', function() {
    // const hamburger = document.getElementById('hamburger');
    // const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.getElementById('site-nav');

    // Toggle mobile menu
    // hamburger.addEventListener('click', function() {
    //     const isOpen = mobileMenu.classList.toggle('open');
    //     this.classList.toggle('open');
    //     this.setAttribute('aria-expanded', isOpen);
    // });

    // Close mobile menu on link click
    // document.querySelectorAll('#mobile-menu a').forEach(link => {
    //     link.addEventListener('click', function() {
    //         mobileMenu.classList.remove('open');
    //         hamburger.classList.remove('open');
    //         hamburger.setAttribute('aria-expanded', 'false');
    //     });
    // });

    // Scroll nav condense
    window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
            nav.classList.add('nav-condensed');
        } else {
            nav.classList.remove('nav-condensed');
        }
    });

    // ===== MOBILE DROPDOWN TOGGLE =====
    const dropdowns = document.querySelectorAll('#mobile-menu .dropdown');
    // console.log(dropdowns);
    
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        // console.log(dropbtn);
        
        if (dropbtn) {
            dropbtn.addEventListener('click', function(e) {
                // Only for mobile (screen width <= 768px)
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    // Close other dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown && other.classList.contains('active')) {
                            other.classList.remove('active');
                        }
                    });
                    dropdown.classList.toggle('active');
                }
            });
        }
        
        // Close dropdown when clicking a link inside
        const links = dropdown.querySelectorAll('.dropdown-content a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                dropdown.classList.remove('active');
                // Close mobile menu
                const mobileMenu = document.getElementById('mobile-menu');
                const hamburger = document.getElementById('hamburger');
                if (window.innerWidth <= 768) {
                    mobileMenu.classList.remove('open');
                    hamburger.classList.remove('open');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(e.target) && dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
