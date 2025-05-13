import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import aboutImg from "/aboutme.jpg"
import kz from "/kazakhstan.png"
import { useRef } from "react"
import Title from "../Title"
const AboutMe = () => {
  const imageRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const parrentRef = useRef<HTMLDivElement>(null)

  useGSAP(()=>{
    gsap.from(imageRef.current, {
      opacity: 0,
      x: -20,
      ease: "back.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: parrentRef.current,
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none reverse",
      }
    })
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -20,
      ease: "back.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: parrentRef.current,
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none reverse",
      }
    })
    gsap.from(textRef.current, {
      opacity: 0,
      x: 20,
      ease: "back.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: parrentRef.current,
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none reverse",
      }
    })
  }, [])

  return (
    <section className="w-full overflow-x-hidden" id="aboutme" ref={parrentRef}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        <Title text="About me"/>
        {/* about me img */}
        <div className="mt-10 flex flex-col md:flex-row gap-8 md:gap-20" ref={textRef}>
          <div className="flex justify-center md:justify-start">
            <img src={aboutImg} className="rounded-4xl w-80 max-w-full" alt="aboutimg" ref={imageRef}/>
          </div>
          <div className="flex-1">
            <p className="defoultp">
              I'm a web developer based in Kazakhstan <img src={kz} className="inline w-5" />, passionate about building clean, responsive, and user-friendly websites.
            </p>
            <p className="defoultp">
              I focus on writing efficient code, creating elegant UI, and solving real-world problems with practical solutions
            </p>
            <p className="defoultp">
              Whether it's a simple landing page or a complex web app — I enjoy turning ideas into functional products.
            </p>
            <p className="defoultp">
              I am currently expanding my skills in modern JavaScript frameworks and am always looking for new challenges to grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe