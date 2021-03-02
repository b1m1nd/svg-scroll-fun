import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sun = document.querySelector('.sun')
const front = document.querySelector('.front')
const mid = document.querySelector('.mid')
const far = document.querySelector('.far')

const zoomTl = gsap
  .timeline({
    defaults: {
      ease: 'none',
    },
  })

  .to(
    '.pictureBox',
    {
      attr: { viewBox: '250 150 200 260' },
    },
    0,
  )

  .to(sun, { scale: 0.25, x: -15, y: 15 }, '<')
  .to(far, { scale: 0.25, x: 850, y: 90 }, '<')
  .to(mid, { scale: 1.55, x: -450, y: -70 }, '<')
  .to(front, { scale: 1.25, x: -500 }, '<')

ScrollTrigger.create({
  trigger: '.picture-grid',
  animation: zoomTl,
  start: 'top top',
  end: 'bottom+=2500 top',
  pin: true,
  scrub: 1,
  // markers: true,
})
