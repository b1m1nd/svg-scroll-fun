import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GSDevTools } from 'gsap/dist/GSDevTools'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, GSDevTools)

/* const nav = document.querySelector('.navMain')
const canHazBurger = document.querySelector('.canHazBurger')

canHazBurger.addEventListener('click', e => {
  nav.classList.toggle('hidden')
}) */

const circles = document.querySelector('.circles').children
const PATH_TL = gsap.timeline()
gsap.to('#dot', {
  ease: 'none',
  motionPath: { path: '#path', align: '#dot' },
  scrollTrigger: {
    target: '#path',
    scrub: 1,
  },
})

gsap.from('.welcome p', {
  autoAlpha: 0,
  x: 100,
  stagger: 0.5,
  scrollTrigger: {
    trigger: circles[1],
    pin: '.welcome',
    pinSpacing: false,
    start: 'center center',
    scrub: 1,
  },
})

gsap.from('.second p', {
  autoAlpha: 0,
  x: -100,
  stagger: 0.5,
  scrollTrigger: {
    trigger: circles[2],
    pin: '.second',
    pinSpacing: false,
    start: 'center center',
    scrub: 1,
  },
})
