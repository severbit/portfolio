import { serviceInfo } from "../../constants";
import Card from "../Card"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Title from "../Title";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    // Анимация заголовка
    gsap.from(".services-title", {
      scrollTrigger: {
        trigger: ".services-title",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Анимация карточек
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <div className="py-16" id="services">
      <Title text="Services"/>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full justify-items-center">
        {serviceInfo.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            iconPath={service.iconPath}
            list={service.list}
            className={`service-card ${index === 0 ? 'col-span-2 w-full': ""}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Services