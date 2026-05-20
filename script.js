window.addEventListener("load", () => {

  gsap.registerPlugin(ScrollTrigger);

  /* HERO IMAGE ZOOM */

  gsap.to(".hero-image", {
    scale: 1,
    ease: "none",

    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  /* HERO TEXT REVEAL */

  gsap.from(".hero-overlay-text", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
  });

  /* SECTION REVEALS */

  gsap.utils.toArray(".section").forEach((section) => {

    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

  });

  /* REFRESH */

  ScrollTrigger.refresh();

});

/* HEADER SLIDE*/
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});
/* =========================
   PROPERTY SLIDER
========================= */

const slider = document.querySelector(".property-slider");

/* =========================
   CINEMATIC AUTO SCROLL
========================= */

gsap.to(slider, {

  scrollLeft: 800,

  ease: "none",

  scrollTrigger: {
    trigger: ".properties",
    start: "top bottom",
    end: "bottom top",
    scrub: 1
  }

});


/* =========================
   DRAG / SWIPE
========================= */

let isDown = false;

let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {

  isDown = true;

  slider.style.cursor = "grabbing";

  startX = e.pageX - slider.offsetLeft;

  scrollLeft = slider.scrollLeft;

});


slider.addEventListener("mouseleave", () => {

  isDown = false;

  slider.style.cursor = "grab";

});


slider.addEventListener("mouseup", () => {

  isDown = false;

  slider.style.cursor = "grab";

});


slider.addEventListener("mousemove", (e) => {

  if(!isDown) return;

  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;

  const walk = (x - startX) * 2;

  slider.scrollLeft = scrollLeft - walk;

});
/* =========================
   CATEGORY REVEALS
========================= */

gsap.utils.toArray(".project-card").forEach((card)=>{

  gsap.from(card,{

    opacity:0,
    y:80,

    duration:1.2,
    ease:"power3.out",

    scrollTrigger:{
      trigger:card,
      start:"top 85%"
    }

  });

});