import Title from "../Title"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaCode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiReactrouter } from "react-icons/si";
import type { IconType } from "react-icons";

gsap.registerPlugin(ScrollTrigger);

interface Technology {
  name: string;
  icon: IconType;
}

interface TechCategory {
  category: string;
  technologies: Technology[];
}

const techStack: TechCategory[] = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React-Router", icon: SiReactrouter}
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql }
    ]
  },
  {
    category: "Tools",
    technologies: [
      { name: "Git", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "VS Code", icon: FaCode },
      { name: "Figma", icon: FaFigma }
    ]
  }
];

const TechStack = () => {
  useGSAP(() => {
    // Анимация для категорий
    gsap.utils.toArray<HTMLElement>(".tech-category").forEach((category, index) => {
      gsap.from(category, {
        xPercent: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        transformOrigin: index % 2 === 0 ? "left left" : "right right",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: category,
          start: "top 80%",
        },
      });
    });

    // Анимация для технологий
    gsap.utils.toArray<HTMLElement>(".tech-item").forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      });
    });

    // Анимация линии таймлайна
    gsap.to(".timeline-line", {
      scaleY: 1,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top center",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <div className="py-16" id="mystack">
      <Title text="Tech Stack"/>
      <div className="timeline-container relative mt-20">
        <div className="timeline-line absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-mintpaper to-darkzinc scale-y-0 origin-top" />
        
        <div className="space-y-32">
          {techStack.map((tech, index) => (
            <div key={tech.category} className="tech-category relative">
              <div className="flex items-center gap-8">
                {index % 2 === 0 ? (
                  <>
                    <div className="w-1/2 text-right">
                      <div className="inline-block bg-darkzinc p-6 rounded-2xl shadow-lg w-1/2">
                        <h3 className="text-2xl font-semibold text-white mb-4">{tech.category}</h3>
                        <ul className="space-y-3">
                          {tech.technologies.map((techItem) => {
                            const Icon = techItem.icon;
                            return (
                              <li 
                                key={techItem.name} 
                                className="tech-item text-gray-300 hover:text-mintpaper transition-colors duration-300 flex items-center gap-2"
                              >
                                <Icon className="text-xl" />
                                <span>{techItem.name}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-mintpaper rounded-full" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2">
                      <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-mintpaper rounded-full" />
                    </div>
                    <div className="w-1/2">
                      <div className="flex flex-col bg-darkzinc p-6 rounded-2xl shadow-lg w-1/2">
                        <h3 className="text-2xl font-semibold text-white mb-4">{tech.category}</h3>
                        <ul className="space-y-3">
                          {tech.technologies.map((techItem) => {
                            const Icon = techItem.icon;
                            return (
                              <li 
                                key={techItem.name} 
                                className="tech-item text-gray-300 hover:text-mintpaper transition-colors duration-300 flex items-center gap-2"
                              >
                                <Icon className="text-xl" />
                                <span>{techItem.name}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack