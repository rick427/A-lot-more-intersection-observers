const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
       if(!entry.isIntersecting){
           header.classList.add("nav-scrolled");
           console.log(entry)
       }
       else{
           header.classList.remove("nav-scrolled");
       }
    })
}, sectionOptions);

sectionObserver.observe(sectionOne);