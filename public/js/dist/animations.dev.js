"use strict";

var headerAnimate = function headerAnimate() {
  var headerAnim = gsap.timeline();
  headerAnim.fromTo('.main-header', {
    width: 0
  }, {
    width: '100%',
    duration: 1
  }).fromTo('.navbar', {
    width: 0
  }, {
    width: '100%',
    duration: 1
  }, "-=1").to('.main-header', {
    duration: 1
  }, "-=1").fromTo('h1', {
    y: 20,
    opacity: 0,
    ease: Sine.easeOut
  }, {
    duration: 0.5,
    y: 0,
    opacity: 1,
    ease: Sine.easeIn
  }, "-=0.1").fromTo('.main-heading-two', {
    y: 20,
    opacity: 0,
    ease: Sine.easeOut
  }, {
    duration: 0.5,
    y: 0,
    delay: 1.2,
    opacity: 1,
    ease: Sine.easeIn
  }, "0").fromTo('.main-subheading', {
    y: 20,
    opacity: 0,
    ease: Sine.easeOut
  }, {
    duration: 0.5,
    y: 0,
    delay: 1.4,
    opacity: 1,
    ease: Sine.easeIn
  }, "0").fromTo('.main-button', {
    y: 20,
    opacity: 0,
    ease: Sine.easeOut
  }, {
    duration: 0.5,
    y: 0,
    delay: 1.6,
    opacity: 1,
    ease: Sine.easeIn
  }, "0").fromTo('.main--icons a', {
    opacity: 0
  }, {
    opacity: 1,
    delay: 1.8
  }, "0").fromTo('.main--icon', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.7,
    stagger: .3,
    delay: 2
  }, "0").fromTo('.main--verticle-line', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.7,
    delay: 2.2
  }, "0").fromTo('.logo', {
    ease: Power1.easeIn,
    x: -150
  }, {
    x: 0,
    duration: 0.5,
    delay: 2.4
  }, "0").fromTo('.navbar__line', {
    ease: Power1.easeIn,
    x: 150,
    opacity: 0
  }, {
    x: 0,
    duration: 0.5,
    delay: 2.4,
    opacity: 1
  }, "0");
};

headerAnimate(); // Scroll Animations

var homeController = new ScrollMagic.Controller(); // About Me Section

var aboutAnimation = gsap.timeline();
aboutAnimation.fromTo('.about-me--animate', {
  opacity: 0,
  y: -20
}, {
  opacity: 1,
  y: 0,
  stagger: .3
}, "3");
var aboutElement = document.querySelector('.about-me--container');
var aboutScene = new ScrollMagic.Scene({
  triggerElement: '.about-me--container',
  triggerHook: 0.85,
  duration: aboutElement.offsetHeight
}).setTween(aboutAnimation).addTo(homeController); // Skills and Tools 

var skillsAnimation = gsap.timeline();
skillsAnimation.fromTo('.about-me--skills', {
  opacity: 0,
  y: -20
}, {
  opacity: 1,
  y: 0,
  stagger: .1
}, "0");
var skillsElement = document.querySelector('.my-skills--row');
var skillsScene = new ScrollMagic.Scene({
  triggerElement: '.my-skills--row',
  triggerHook: 0.85,
  duration: skillsElement.offsetHeight
}).setTween(skillsAnimation).addTo(homeController); // Featured Projects Section

var featuredProjects = document.querySelectorAll('.featured-work--project');
featuredProjects.forEach(function (project) {
  new ScrollMagic.Scene({
    triggerElement: project,
    offset: 300,
    triggerHook: 1.5,
    duration: project.offsetHeight
  }).setClassToggle(project, 'visible').addIndicators(project).addTo(homeController);
});