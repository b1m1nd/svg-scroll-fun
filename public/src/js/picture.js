import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sun = document.querySelector('.sun')
const front = document.querySelector('.front')
const mid = document.querySelector('.mid')
const far = document.querySelector('.far')

gsap.set(sun, { transformOrigin: 'center center' })
gsap.to(sun, { duration: 10, rotation: 360, repeat: -1, ease: 'none' })

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
  .to(sun, { scale: 0.25, x: -45, y: 15 }, 0)
  .to(far, { scale: 0.25, x: 850, y: 165 }, 0)
  .to(mid, { scale: 1.35, x: -175, y: -150 }, 0)
  .to(front, { scale: 1, x: -100 }, 0)

ScrollTrigger.create({
  trigger: '.picture-grid',
  animation: zoomTl,
  start: 'top top',
  end: 'bottom+=1000 top',
  pin: true,
  scrub: 1,
  markers: true,
})
