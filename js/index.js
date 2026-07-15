/*=================================
        PRELOADER
=================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});


/*=================================
        STICKY HEADER
=================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});


/*=================================
        MOBILE MENU
=================================*/

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

        if(nav.classList.contains("active")){

            menuToggle.innerHTML = '<i class="ri-close-line"></i>';

        }else{

            menuToggle.innerHTML = '<i class="ri-menu-3-line"></i>';

        }

    });

}


/*=================================
        CLOSE MENU ON CLICK
=================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if(nav){

            nav.classList.remove("active");

        }

        if(menuToggle){

            menuToggle.innerHTML = '<i class="ri-menu-3-line"></i>';

        }

    });

});


/*=================================
        SCROLL REVEAL
=================================*/

const reveals = document.querySelectorAll(
    ".fade-up,.fade-left,.fade-right"
);

function revealElements(){

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;

        const top = el.getBoundingClientRect().top;

        const visible = 120;

        if(top < windowHeight - visible){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealElements);
revealElements();


/*=================================
        ACTIVE NAV LINK
=================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


/*=================================
        SMOOTH SCROLL
=================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});


/*=================================
        HERO PARALLAX
=================================*/

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

    if(!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


/*=================================
        COUNTER ANIMATION
=================================*/

const counters = document.querySelectorAll(".counter");

function startCounter(){

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 150;

        function updateCounter(){

            if(count < target){

                count += speed;

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target;

            }

        }

        updateCounter();

    });

}

const counterSection = document.querySelector(".stats");

if(counterSection){

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                startCounter();

                observer.disconnect();

            }

        });

    });

    observer.observe(counterSection);

}


/*=================================
        CURSOR GLOW EFFECT
=================================*/

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/*=================================
        BUTTON RIPPLE EFFECT
=================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(
            rect.width,
            rect.height
        );

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            e.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*=================================
        CONSOLE MESSAGE
=================================*/

console.log(
"%cMad House Creations",
"color:#ff7b00;font-size:24px;font-weight:bold;"
);

console.log(
"Animation & VFX Institute Website Loaded Successfully 🚀"
);