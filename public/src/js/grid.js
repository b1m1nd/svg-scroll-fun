import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const gridTL = gsap
  .timeline()
  .to('.mask rect', {
    duration: 0.25,
    x: -800,
    stagger: {
      amount: 0.3,
      from: 'center',
    },
  })
  .from('.parallax', { y: 900 }, '<')

ScrollTrigger.create({
  trigger: '.simmons-grid',
  animation: gridTL,
  start: 'top top',
  end: '+=1800 bottom',
  pin: true,
  scrub: 1,
  // toggleActions: 'play none reverse none',
  markers: true,
})
