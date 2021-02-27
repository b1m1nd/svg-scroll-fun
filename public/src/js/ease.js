import { gsap } from 'gsap'
import { MotionPathHelper } from 'gsap/MotionPathHelper'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { GSDevTools } from 'gsap/dist/GSDevTools'

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper, GSDevTools, CustomEase)

const car = document.querySelector('.easeBox .car')
const clouds = document.querySelectorAll('.clouds path')

CustomEase.create(
  'hill',
  'M-2,391 C-17.7663,326.46575 70.567,185.821 137.87,261.345 167.3732,294.4518 289.746,168.598 280.307,93.636 275.041,51.819 358,33 382,9 ',
)

const sceneTl = gsap
  .timeline({ defaults: { duration: 5 } })
  .from(clouds[0], { xPercent: 300 })
  .to(clouds[1], { xPercent: -200 }, 0)

const carTween = gsap.to(car, {
  id: 'easeBox',
  duration: 5,
  motionPath: {
    path: '.path',
    align: '.path',
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
})

GSDevTools.create()

// *** Build SVG Ease Visualizer *** //
/* 
function createVisualizer(x, y, size) {
  let svgNS = 'http://www.w3.org/2000/svg'
  let visualizer = document.createElementNS(svgNS, 'g')
  let rect = document.createElementNS(svgNS, 'rect')
  let path = document.createElementNS(svgNS, 'path')
  let dot = document.createElementNS(svgNS, 'circle')
  dot.setAttribute('cx', 0)
  dot.setAttribute('cy', 0)
  dot.setAttribute('r', 4)
  dot.setAttribute('opacity', 0)
  path.setAttribute('d', 'M0,' + size + ' ' + size + ', 0')
  path.setAttribute('id', 'vis-path')
  rect.setAttribute('width', size)
  rect.setAttribute('height', size)
  rect.setAttribute('fill', 'rgba(0, 0, 0, 0.1)')
  visualizer.append(rect)
  visualizer.appendChild(path)
  visualizer.appendChild(dot)
  document.querySelector('.easeBox').appendChild(visualizer)
  gsap.set(visualizer, { x: x, y: y })
  gsap.to(dot, {
    duration: 3,
    ease: 'none',
    motionPath: {
      path: '#vis-path',
    },
  })
  MotionPathHelper.create(dot)
}

window.addEventListener('click', () => {
  let path = document.querySelector('path.path-editor').getAttribute('d')
  CustomEase.create('ease', path)
  console.log(path)
  carTween.vars.ease = 'ease'
  carTween.invalidate().restart()
})
createVisualizer(440, 10, 400)
 */
