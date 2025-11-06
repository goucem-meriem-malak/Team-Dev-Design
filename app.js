<<<<<<< HEAD
(function(){
  // Lenis smooth scroll init
  const lenis = new Lenis({
    duration:1.2,
    easing: t => 1 - Math.pow(1 - t, 3),
    smooth: true,
    direction: 'vertical'
  });
  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('.hero h1',{
    y:40,opacity:0,duration:1.2,delay:0.2,ease:'power3.out'
  });
  gsap.from('.hero p',{
    y:20,opacity:0,duration:1,delay:0.4,ease:'power3.out'
  });

  // Service cards stagger
  gsap.utils.toArray('.service').forEach((el,i)=>{
    gsap.from(el,{y:30,opacity:0,duration:1,delay:0.15*i, ease:'power3.out',
      scrollTrigger:{trigger:el,start:'top 85%'}
    });
  });

  // Gallery cards
  gsap.utils.toArray('.card').forEach((c)=>{
    gsap.from(c,{y:24,opacity:0,duration:0.9,ease:'power3.out',
      scrollTrigger:{trigger:c,start:'top 90%'}
    });
  });

  // Floating micro motion on hero text (subtle)
  gsap.to('.hero h1',{y:-6,repeat:-1,yoyo:true,ease:'sine.inOut',duration:4,opacity:1});

=======
(function(){
  // Lenis smooth scroll init
  const lenis = new Lenis({
    duration:1.2,
    easing: t => 1 - Math.pow(1 - t, 3),
    smooth: true,
    direction: 'vertical'
  });
  function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('.hero h1',{
    y:40,opacity:0,duration:1.2,delay:0.2,ease:'power3.out'
  });
  gsap.from('.hero p',{
    y:20,opacity:0,duration:1,delay:0.4,ease:'power3.out'
  });

  // Service cards stagger
  gsap.utils.toArray('.service').forEach((el,i)=>{
    gsap.from(el,{y:30,opacity:0,duration:1,delay:0.15*i, ease:'power3.out',
      scrollTrigger:{trigger:el,start:'top 85%'}
    });
  });

  // Gallery cards
  gsap.utils.toArray('.card').forEach((c)=>{
    gsap.from(c,{y:24,opacity:0,duration:0.9,ease:'power3.out',
      scrollTrigger:{trigger:c,start:'top 90%'}
    });
  });

  // Floating micro motion on hero text (subtle)
  gsap.to('.hero h1',{y:-6,repeat:-1,yoyo:true,ease:'sine.inOut',duration:4,opacity:1});

>>>>>>> 84e13f8c34d3228d600c73f8e7b4b315fc5a4e01
})();