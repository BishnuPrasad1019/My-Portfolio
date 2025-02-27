// Header Toggle
// let menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle("mobile-nav-active");
    this.classList.toggle("fa-xmark")
})


// Typping Effecet
let typed = new Typed('.auto-input',{
    strings: ['Fresher!','Front-End-Developer!','Coder!',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});

// Active link State On Scroll

// Get All Links
let navlink = document.querySelectorAll("nav ul li a")
// Get All Selector
let Sections = document.querySelectorAll("section")
// console.log(sections)
window.addEventListener("scroll",function(){
    const scrollPos = this.window.scrollY
    Sections.forEach(Sections =>{
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop * Section.offsetHeight)) {
            navlink.forEach(link =>{
                link.classList.remove("active");
                if(section.getAtribute("id") === link.getAtribute("href").substring(1)) {
                    link.classList.add("active")

                }
            });
        
            
        }
    });
});