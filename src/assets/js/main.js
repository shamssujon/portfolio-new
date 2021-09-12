import Alpine from 'alpinejs'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Headroom from "headroom.js";
import lax from 'lax.js';
import '../css/style.css';

(function () {
    window.Alpine = Alpine;
    Alpine.start();
})();

// body padding top of fixed header
(function () {
    // grab an element
    const header = document.querySelector(".navbar.fixed");
    const headerHeight = header.offsetHeight;
    const htmlBody = document.querySelector("html, body");
    htmlBody.style.paddingTop = headerHeight + 'px';
    htmlBody.style.scrollPaddingTop = headerHeight + 'px';
})();


// Hide navbar on scroll
const headroomHeader = document.querySelector(".navbar");
const options = {
    // vertical offset in px before element is first unpinned
    offset: 0,
    // or you can specify offset individually for up/down scroll
    offset: {
        up: 100,
        down: 50
    },
    // scroll tolerance in px before state changes
    tolerance: 0,
    // or you can specify tolerance individually for up/down scroll
    tolerance: {
        up: 5,
        down: 0
    },
    // css classes to apply
    classes: {
        // when element is initialised
        initial: "headroom",
        // when scrolling up
        pinned: "headroom--pinned",
        // when scrolling down
        unpinned: "headroom--unpinned",
        // when above offset
        top: "headroom--top",
        // when below offset
        notTop: "headroom--not-top",
        // when at bottom of scroll area
        bottom: "headroom--bottom",
        // when not at bottom of scroll area
        notBottom: "headroom--not-bottom",
        // when frozen method has been called
        frozen: "headroom--frozen",
        // multiple classes are also supported with a space-separated list
        pinned: "headroom--pinned foo bar"
    },
};
const headroom = new Headroom(headroomHeader, options);
headroom.init();


// Service carousel
const serviceCarousel = new Swiper('.service-list', {
    speed: 600,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    pagination: {
        el: '.service-list .swiper-pagination',
        clickable: true,
    },
    watchOverflow: true,
    grabCursor: true,
    centeredSlides: false,
    breakpoints: {
        320: {
            slidesPerView: 1.15,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        640: {
            slidesPerView: 2.15,
            slidesPerGroup: 2,
            spaceBetween: 30,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            centeredSlides: false,
        }
    }
});

// Portfolio list carousel
const portfolioCarousel = new Swiper('.work-list', {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 50,
    speed: 600,
    centeredSlides: true,
    loop: false,
    allowTouchMove: true,
    grabCursor: true,
    freeMode: true,
    freeModeSticky: true,
    freeModeMomentumBounce: false,
    freeModeMomentumVelocityRatio: 0.1,
    scrollbar: {
        el: '.portfolio-scrollbar',
        draggable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 25
        },
        768: {
            slidesPerView: 1.2,
            spaceBetween: 40
        },
        1280: {
            slidesPerView: 1.2,
            spaceBetween: 50
        }
    }
});

// Testimonial carousel
const testimonialCarousel = new Swiper('.testimonial-items', {
    speed: 600,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    pagination: {
        el: '.testimonial-items .swiper-pagination',
        clickable: true,
    },
    watchOverflow: true,
    grabCursor: true,
    centeredSlides: false,
    breakpoints: {
        320: {
            centeredSlides: true,
            slidesPerView: 1.15,
            slidesPerGroup: 1,
            spaceBetween: 20
        },
        640: {
            centeredSlides: false,
            slidesPerView: 2.15,
            slidesPerGroup: 2,
            spaceBetween: 30
        },
        1024: {
            centeredSlides: false,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
        }
    }
});

// Contact carousel
const contactCarousel = new Swiper('.contact-list', {
    speed: 600,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 40,
    pagination: {
        el: '.contact-list .swiper-pagination',
        clickable: true,
    },
    watchOverflow: true,
    grabCursor: true,
    breakpoints: {
        320: {
            slidesPerView: 1.15,
            slidesPerGroup: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2.2,
            slidesPerGroup: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40
        }
    }
});

// Tools scrolling effect
window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.tools', {
        scrollY: {
            translateX: [           // CSS property
                ['elInY', 'elOutY'],  // Driver value map
                ['index+300', '-screenHeight-300'],   // Animation value map
                {
                    inertia: 10        // Options
                }
            ],
        }
    })
};