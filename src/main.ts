import './style.css'
import Experience from './Experience/Experience'


const canvas: HTMLElement = document.querySelector('canvas.webgl')!

const experience = Experience.getInstance(canvas)
console.log(experience)
