const headerAnimate = () => {
    let headerAnim = gsap.timeline();
    headerAnim.fromTo('.main-header', {
        width: 0
    },{
        width:'100%', 
        duration: 1
    })
    .fromTo('.navbar', {
        width: 0
    }, {
        width:'100%', 
        duration: 1
    }, "-=1")
    .to('.main-header', {
        duration: 1
    }, "-=1")
    .fromTo('h1', {
        y:20, 
        opacity: 0, 
        ease: Sine.easeOut
    },{
        duration: 0.5,
        y:0,
        opacity: 1,
        ease: Sine.easeIn
    },"-=0.1")
    .fromTo('.main-heading-two', {
        y:20,
        opacity: 0,
        ease: Sine.easeOut
    }, {
        duration: 0.5,
        y:0,
        delay: 1.2,
        opacity: 1,
        ease: Sine.easeIn    
    },"0")
    .fromTo('.main-subheading', {
        y:20,
        opacity: 0,
        ease: Sine.easeOut
    }, {
        duration: 0.5, 
        y:0, 
        delay: 1.4, 
        opacity: 1,  
        ease: Sine.easeIn
    }, "0")
    .fromTo('.main-header--btn-animate', {
        y:20,
        opacity: 0,
        ease: Sine.easeOut
    }, {
        duration: 0.5,
        y:0,
        delay: 1.6,
        opacity: 1, 
        ease: Sine.easeIn
    }, "0")
    .fromTo('.main--icons a', {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1.8 
    },"0")
    .fromTo('.main--icon', {
        opacity: 0   
    }, {
        opacity: 1,
        duration: 0.7,
        stagger: .3,
        delay: 2 
    },"0")
    .fromTo('.main--verticle-line', {
        opacity: 0    
    },{
        opacity: 1,
        duration: 0.7,
        delay: 2.2
    },"0")
    .fromTo('.logo', {
        ease: Power1.easeIn, 
        x: -150
    },{
        x: 0,
        duration: 0.5,
        delay: 2.4
    },"0")
    .fromTo('.navbar__line', {
        ease: Power1.easeIn,
        x: 150,
        opacity: 0   
    },{
        x: 0,
        duration: 0.5,
        delay: 2.4,
        opacity: 1
    },"0");    
}; 

headerAnimate();

// Scroll Animations
let homeController = new ScrollMagic.Controller();

// About Me Section
let aboutAnimation = gsap.timeline(); 
aboutAnimation.fromTo('.about-me--animate', {
    opacity: 0,
    y: -20
},{
    opacity: 1,
    y: 0,
    stagger: .3
},"3");

const aboutElement = document.querySelector('.about-me--container'); 

let aboutScene = new ScrollMagic.Scene({
    triggerElement: '.about-me--container',
    triggerHook: 0.85, 
    duration: aboutElement.offsetHeight
})
.setTween(aboutAnimation)
.addTo(homeController);

// Skills and Tools 
let skillsAnimation = gsap.timeline(); 
skillsAnimation.fromTo('.about-me--skills', {
    opacity: 0,
    y: -20
},{
    opacity: 1,
    y: 0,
    stagger: .3
},"0");

const skillsElement = document.querySelector('.my-skills--row'); 

let skillsScene = new ScrollMagic.Scene({
    triggerElement: '.my-skills--row',
    triggerHook: 0.85, 
    duration: skillsElement.offsetHeight
})
.setTween(skillsAnimation)
.addTo(homeController);

// Featured Projects Section
const featuredProjects = document.querySelectorAll('.featured-work--project'); 
featuredProjects.forEach(project => {
    new ScrollMagic.Scene({
        triggerElement: project,
        offset: 300,
        triggerHook: 1.5, 
        duration: project.offsetHeight
    })
    .setClassToggle(project, 'visible')
    .addIndicators(project) 
    .addTo(homeController)
})

// Noteworthy Projects Section
let noteworthyProjectsAnimation = gsap.timeline(); 
noteworthyProjectsAnimation.fromTo('.more-projects--project', {
    opacity: 0,
    y: -50
},{
    opacity: 1,
    y: 0,
    stagger: .2
},"0");

const moreProjects = document.querySelector('.more-projects--contain'); 

let noteworthyProjects = new ScrollMagic.Scene({
    triggerElement: '.more-projects--contain',
    triggerHook: 0.99, 
    duration: moreProjects.offsetHeight
})
.setTween(noteworthyProjectsAnimation)
.addTo(homeController);

// Contact Me Animation
let contactMeAnimation = gsap.timeline(); 
contactMeAnimation.fromTo('.contact-me--animate', {
    opacity: 0,
    y: -20
},{
    opacity: 1,
    y: 0,
    stagger: .3
},"1");

const contactMe = document.querySelector('.contact-me .container div'); 

let contactScene = new ScrollMagic.Scene({
    triggerElement: '.contact-me--animate',
    triggerHook: 0.85, 
    duration: contactMe.offsetHeight
})
.setTween(contactMeAnimation)
.addTo(homeController);