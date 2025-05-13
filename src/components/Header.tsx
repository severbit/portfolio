import { headerLinks } from "../constants"
import  { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    gsap.from("header", {
      y: -10,
      opacity: 0,
      ease: "expo.inOut",
      duration: 1
    })
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    // Наблюдаем за секцией About Me
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    // Блокируем скролл при открытом меню
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Функция для плавного скролла
  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4 md:py-6">
          <div className="text-base sm:text-lg md:text-xl font-bold flex items-center flex-wrap gap-1 sm:gap-2">
            <span className="text-creampaper">NASAN YERNUR</span>
            <span className="text-mintpaper hidden sm:inline">&nbsp;-&nbsp;</span>
            <span className="text-mintpaper text-sm sm:text-base md:text-lg">
              WEB DEVELOPER & MIDDLE FRONT
            </span>
          </div>

          {/* Бургер меню */}
          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-[100]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute w-6 h-0.5 bg-creampaper transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}`} 
              />
              <span 
                className={`absolute w-6 h-0.5 bg-creampaper transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'opacity-0' : 'top-3'}`} 
              />
              <span 
                className={`absolute w-6 h-0.5 bg-creampaper transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`} 
              />
            </div>
          </button>

          {/* Оверлей */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Мобильное меню */}
          {/* <div 
            ref={menuRef}
            className={`fixed top-0 right-0 h-screen w-[280px] sm:w-[320px] bg-neutral-900/95 backdrop-blur-md p-6 transform transition-all duration-300 ease-in-out md:hidden z-[95]
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex flex-col gap-8 mt-20">
              {headerLinks.map((item) => (
                <div 
                  key={item.text} 
                  className="group"
                >
                  <a 
                    href={`#${item.text.toLowerCase().replace(/\s+/g, '')}`}
                    onClick={() => handleMenuClick(item.text.toLowerCase().replace(/\s+/g, ''))}
                    className={`text-lg font-medium transition-colors duration-200 flex items-center gap-2
                      ${activeSection === item.text.toLowerCase().replace(/\s+/g, '') ? 'text-mintpaper' : 'text-creampaper hover:text-mintpaper'}`}
                  >
                    <span className={`w-2 h-2 rounded-full bg-mintpaper transition-opacity duration-200
                      ${activeSection === item.text.toLowerCase().replace(/\s+/g, '') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
                    />
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div> */}

          {/* Десктопное меню */}
          <div className="hidden md:flex items-center gap-8 lg:gap-14">
            {headerLinks.map((item, index) => (
              <div key={item.text} className="flex items-center">
                <div className="p-1">
                  <a 
                    href={`#${item.text.toLowerCase().replace(/\s+/g, '')}`}
                    onClick={e => {
                      e.preventDefault();
                      handleMenuClick(item.text.toLowerCase().replace(/\s+/g, ''));
                    }}
                    className={`text-md transition-colors duration-200
                      ${activeSection === item.text.toLowerCase().replace(/\s+/g, '') ? 'text-mintpaper' : 'text-creampaper hover:text-mintpaper'}`}
                  >
                    {item.text}
                  </a>
                </div>
                {index < headerLinks.length - 1 && (
                  <div className="w-1 h-1 rounded-full bg-mintpaper ml-8 lg:ml-14" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header