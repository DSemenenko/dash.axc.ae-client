const tl = gsap.timeline();

tl
.to(".line",{
  width: "0%",
  duration: 1,
  delay: 0.1,
  ease: Power4.easeInOut
})
.to("h1",{
  y: 100,
  duration: 1,
  delay: -0.5,
  opacity: 1,
  ease: Power4.easeInOut
})
.to(".loader",{
  height: 0,
  top: "100%",
  duration: 0.8,
  delay: -0.6,
  ease: Circ.easeInOut
})
.to("h2",{
  y: 0,
  duration: 0.8,
  delay: -0.6,
  ease: Power3.easeInOut
})
