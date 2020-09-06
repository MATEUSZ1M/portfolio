gsap.registerPlugin(ScrollTrigger);

const hello = document.querySelector(".a");
const triggered = document.querySelector(".c")

gsap.from(hello, {duration: 1.2, x: '-100%', ease: "easeInOut",});

gsap.to(triggered, {y: 0, opacity: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
  trigger: triggered,
  start: 'bottom center',
  markers: true,
}});
