const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

// NAVBAR INTERSECTION OBSERVER
const sectionOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
       if(!entry.isIntersecting){
           header.classList.add("nav-scrolled");
       }
       else{
           header.classList.remove("nav-scrolled");
       }
    })
}, sectionOptions);
sectionObserver.observe(sectionOne);

//FADE IN ANIMATIONS INTERSECTION OBSERVER
const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -250px 0px'
};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
   entries.forEach(entry => {
       if(!entry.isIntersecting){
          return; 
       }
       else{
           entry.target.classList.add('appear');
           appearOnScroll.unobserve(entry.target);
       }
   })
},appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

