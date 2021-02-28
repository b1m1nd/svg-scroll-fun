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
      attr: { viewBox: '250 250 200 260' },
    },
    0,
  )
  .to(sun, { scale: 0.25, x: -25, y: 125 }, 0)
  .to(far, { scale: 0.35, x: 270, y: 50 }, 0)
  .to(mid, { scale: 1.35, x: 50, y: -150 }, 0)
  .to(front, { scale: 1, x: -100 }, 0)

ScrollTrigger.create({
  trigger: '.picture-grid',
  animation: zoomTl,
  start: 'top top',
  end: 'bottom top',
  pin: true,
  scrub: 1,
})
