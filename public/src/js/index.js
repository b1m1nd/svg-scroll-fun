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
const clientHeight = document.body.clientHeight

console.log(contentHeight)

const pathTl = gsap
  .timeline()
  .from(dot, {
    duration: 0.03,
    scale: 0.2,
    autoAlpha: 0,
    transformOrigin: 'center',
  })
  .to(dot, { motionPath: { path: '#path', align: '#dot' } })
  .to(dot, { duration: 0.2, scale: 5 }, '<')
  .to(viewBox, { attr: { viewBox: '0 400 332 514' } }, '<')
  .to(dot, { duration: 0.2, scale: 1 }, '-=0.2')

ScrollTrigger.create({
  trigger: viewBox,
  animation: pathTl,
  start: 'top top',
  end: contentHeight,
  pin: viewBox,
  scrub: 1,
})

const welcomeTl = gsap
  .timeline()
  .from('.welcome p', { autoAlpha: 0, x: 100, stagger: 0.3 })

ScrollTrigger.create({
  trigger: '.welcome',
  animation: welcomeTl,
  start: 'center center',
  end: 'bottom top',
  pin: true,
  scrub: 1,
})
