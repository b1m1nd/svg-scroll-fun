import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GSDevTools } from 'gsap/dist/GSDevTools'

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, GSDevTools)

const nav = document.querySelector('.navMain')
const canHazBurger = document.querySelector('.canHazBurger')

canHazBurger.addEventListener('click', e => {
  nav.classList.toggle('hidden')
})

const circles = document.querySelector('.circles').children
const dot = document.querySelector('#dot')
const viewBox = document.querySelector('#viewBox')
const viewBox2 = document.querySelector('#viewBox2')
const contentHeight = document.querySelector('.contentWrap').clientHeight
const contentHeight2 = viewBox2.nextElementSibling.clientHeight

console.log(contentHeight)
console.log(contentHeight2)

const pathTl = gsap
  .timeline()
  .from(dot, {
    duration: 0.03,
    scale: 0.2,
    autoAlpha: 0,
    transformOrigin: 'center',
  })
  .to(dot, { motionPath: { path: '#path', align: '#dot' } })
  .to(dot, { duration: 0.2, scale: 0.25 }, '<')
  .to(viewBox, { attr: { viewBox: '-200 400 334 514' } }, '<')
  .to(dot, { duration: 0.5, scale: 1 }, '-=0.2')

const welcomeTl = gsap
  .timeline()
  .from('.welcome p', { autoAlpha: 0, x: 100, stagger: 0.3 })

const circle2 = document.querySelector('#viewBox2 circle')
const square = document.querySelector('#viewBox2 rect')

const comboTl = gsap
  .timeline()
  .from(circle2, { scale: 0.5 }, 0)
  .from(square, { scale: 0 }, '<')
  .to(viewBox2, { attr: { viewBox: '0 100 334 514' } })
  .to(circle2, { scale: 5, fill: 'green' }, '<')
  .to(square, { scaleX: 3 }, '<')
  .to(circle2, { scale: 1, fill: 'blue' })

ScrollTrigger.create({
  trigger: viewBox,
  animation: pathTl,
  start: 'top top',
  end: `${contentHeight + viewBox.clientHeight}`,
  pin: true,
  scrub: 1,
  // markers: true,
})

ScrollTrigger.create({
  trigger: '.last',
  animation: gsap.to(circles[1], { scale: 10, transformOrigin: 'center' }),
  start: 'bottom center',
  end: `+=${viewBox.clientHeight} top`,
  scrub: 1,
  // markers: true,
})

ScrollTrigger.create({
  trigger: 'article',
  animation: welcomeTl,
  start: 'center center',
  end: 'bottom center',
  pin: true,
  scrub: 1,
})

ScrollTrigger.create({
  trigger: viewBox2,
  start: 'top top',
  end: `${contentHeight2}`,
  pin: true,
})

ScrollTrigger.create({
  trigger: '[data-scene]',
  animation: comboTl,
  start: 'center center',
  end: `${contentHeight2} center`,
  scrub: true,
})

let isZoomed = false

dot.addEventListener('click', (e, test) => {
  console.dir(e.target)
  console.log(test)

  if (!isZoomed) {
    gsap.to(viewBox, { attr: { viewBox: '0 0 334 514' } })

    isZoomed = !isZoomed
  } else {
    gsap.to(viewBox, { attr: { viewBox: '-200 400 334 514' } })

    isZoomed = !isZoomed
  }
})

circles[0].addEventListener('click', e => {
  console.log(e.target)
  if (isZoomed) {
    gsap.to(viewBox, { attr: { viewBox: '-200 400 334 514' } })
    isZoomed = !isZoomed
  }
})
