"use strict";var headerAnimate=function(){gsap.timeline().fromTo(".main-header",{width:0},{width:"100%",duration:1}).fromTo(".navbar",{width:0},{width:"100%",duration:1},"-=1").to(".main-header",{height:"82vh",duration:1},"-=1").fromTo("h1",{y:20,opacity:0,ease:Sine.easeOut},{duration:.5,y:0,opacity:1,ease:Sine.easeIn},"-=0.1").fromTo("h2",{y:20,opacity:0,ease:Sine.easeOut},{duration:.5,y:0,delay:1.2,opacity:1,ease:Sine.easeIn},"0").fromTo(".main-subheading",{y:20,opacity:0,ease:Sine.easeOut},{duration:.5,y:0,delay:1.4,opacity:1,ease:Sine.easeIn},"0").fromTo(".main-button",{y:20,opacity:0,ease:Sine.easeOut},{duration:.5,y:0,delay:1.6,opacity:1,ease:Sine.easeIn},"0").fromTo(".fab",{opacity:0},{opacity:1,duration:.7,stagger:.2,delay:1.8},"0").fromTo(".main--verticle-line",{opacity:0},{opacity:1,duration:.7,delay:2.2},"0").fromTo(".logo",{ease:Power1.easeIn,x:-150},{x:0,duration:.5,delay:2.4},"0").fromTo(".navbar__line",{ease:Power1.easeIn,x:150,opacity:0},{x:0,duration:.5,delay:2.4,opacity:1},"0")};headerAnimate();var aboutAnimation=gsap.timeline();aboutAnimation.fromTo(".about-me--skill",{opacity:0},{opacity:1,stagger:1},"3");var aboutElement=document.querySelector(".about-me--container"),homeController=new ScrollMagic.Controller,aboutScene=new ScrollMagic.Scene({triggerElement:".about-me--container",triggerHook:.6,duration:aboutElement.offsetHeight}).setTween(aboutAnimation).addTo(homeController);