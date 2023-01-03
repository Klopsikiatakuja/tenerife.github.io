let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline

.to(".header", 5,{ x: -200},{y:230},"-=4")
.fromTo(".share", 5,{opacity:0},{ opacity: 1, duration:4},"-=4")
.fromTo(".lorem",10, {opacity:0},{opacity:1, duration:9},"-=8"   )
.to(".logo",10, {x: 1400},"-=8"   )

  

  
 
 .fromTo(".bg1", 5,{ y: -50 }, { y: 0, duration: 10 }, "-=10")

 .to('tenerife',7,{top:'10%'} )

  .fromTo(".", -3, {opacity:1},{ opacity: 0.6, duration:4})
  .fromTo(".img",-3, { opacity: 1}, {opacity:0.6, duration: 4 });

  
  
 
  
let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "600%",
  triggerHook: 0 ,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);