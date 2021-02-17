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
  scale: 0.5,
  transformOrigin: 'center',
  ease: 'none',
  motionPath: { path: '#path', align: '#dot' },
  scrollTrigger: {
    target: '#path',
    trigger: '#viewBox',
    start: 'top top',
    end: '2500px bottom',
    pin: true,
    scrub: 1,
    markers: true,
  },
})

gsap.from('.welcome p', {
  autoAlpha: 0,
  x: 100,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.welcome',
    pin: true,
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
    trigger: '.second',
    pin: true,
    pinSpacing: false,
    start: 'center center',
    scrub: 1,
  },
})
