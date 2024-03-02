
document.addEventListener("DOMContentLoaded", function() {
 

   var tl= gsap.timeline(
    {
      repeat:-1 //-1  reat it infinite time
    }
   );

   tl
   .to('.imgcontainer', {
    ease: Expo.easeInOut,
    width: '100%', 
    duration: 2,
    stagger: 2
  },'a')
  
  .to('.text h1 ', {
    ease: Expo.easeInOut,
  
   
    stagger: 2,
    top:0
  },'a')
   .to('.text h1 ', {
    ease: Expo.easeInOut,
  
 delay:2,
    stagger: 2,
    top:"-100%"
  },'a')
 
});