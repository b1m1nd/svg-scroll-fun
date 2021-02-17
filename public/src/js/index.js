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
const dot = document.querySelector('#dot')
const viewBox = document.querySelector('#viewBox')
const contentHeight = document.querySelector('.contentWrap').clientHeight
const PATH_TL = gsap.timeline()
const clientHeight = document.body.clientHeight

console.log(contentHeight)
gsap.to(dot, {
  scale: 0.5,
  transformOrigin: 'center',
  ease: 'none',
  motionPath: { path: '#path', align: '#dot' },
  scrollTrigger: {
    trigger: '#viewBox',
    pin: true,
    start: 'top top',
    end: `${contentHeight}`,
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
    start: 'center center',
    scrub: 1,
  },
})

dot.addEventListener('click', e => {
  console.dir(e.target)
  console.log()
  gsap.to(viewBox, { attr: { viewBox: '260 0 100 100' } })
  gsap.to(e.target, { scale: 1 })
})
