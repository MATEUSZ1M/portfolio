
const hamburgerTrigger = document.getElementById("nav-icon1");

hamburgerTrigger.addEventListener("click", function () {
  this.classList.toggle("open");

  if(this.classList.contains('open')){
    gsap.to('.navbar-menu', { duration: .8, x: '100%', ease: "easeInOut"})
  }
  else {gsap.to('.navbar-menu', {x: '-100%'})}
});

