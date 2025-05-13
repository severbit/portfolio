import heroImg from "/hero.png"
import HeroSlider from "../HeroSlider"
import {useRef} from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Начальные анимации
    gsap.from(imgRef.current, {
      opacity: 0, 
      x: -20, 
      ease: "back.inOut", 
      duration: 1
    })
    
    gsap.from(titleRef.current, {
      opacity: 0, 
      x: 20, 
      ease: "back.inOut", 
      duration: 1
    })

    // Анимация слайдера при скролле
    gsap.from(sliderRef.current, {
      opacity: 0,
      y: 50,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none reverse",
      }
    })
  }, [])

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* hero img */}
        <div className="w-full md:w-1/2">
          <img 
            ref={imgRef}
            src={heroImg} 
            alt="hero image" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left" ref={titleRef}>
          <h1 className="text-creampaper text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, i am Yernur.
          </h1>
          <h1 className="text-mintpaper text-4xl sm:text-5xl md:text-6xl font-bold mt-2">
            Frontend Developer
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-creampaper/80 mt-4 max-w-xl mx-auto md:mx-0">
            I focus on writing clean, efficient code that solves real problems.
            Simplicity isn't a limitation — it's a strategy.
          </p>
        </div>
      </div>
      
      <div ref={sliderRef} className="mt-12">
        <HeroSlider/>
      </div>
    </div>
  )
}

export default Hero