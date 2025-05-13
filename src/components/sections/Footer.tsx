import { FaTelegramPlane, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Анимация появления футера
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Анимация появления ссылок
      if (linksRef.current) {
        gsap.fromTo(
          Array.from(linksRef.current.children),
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            delay: 0.3
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={footerRef}
      className="bg-darkzinc/90 backdrop-blur-sm text-white w-full rounded-t-3xl p-12 mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контактная информация */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-mintpaper mb-4">Contact Info</h3>
            <ul ref={linksRef} className="space-y-4">
              <li className="flex items-center gap-3 group">
                <FaLocationDot className="text-mintpaper text-lg group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">Kazakhstan, Aqtobe Altyn-orda 1g 90</span>
              </li>
              <li className="flex items-center gap-3 group">
                <FaTelegramPlane className="text-mintpaper text-lg group-hover:scale-110 transition-transform" />
                <a 
                  href="https://t.me/severbit64" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-mintpaper transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <FaWhatsapp className="text-mintpaper text-lg group-hover:scale-110 transition-transform" />
                <a 
                  href="https://wa.me/77756294621" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-mintpaper transition-colors"
                >
                  Whatsup
                </a>
              </li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-mintpaper mb-4">Social Links</h3>
            <ul className="flex gap-6">
              <li>
                <a 
                  href="https://github.com/severbit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-mintpaper transition-colors"
                >
                  <FaGithub className="text-2xl hover:scale-110 transition-transform" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/%D0%B5%D1%80%D0%BD%D1%83%D1%80-%D0%BD%D0%B0%D1%81%D0%B0%D0%BD-7a1037345/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-mintpaper transition-colors"
                >
                  <FaLinkedin className="text-2xl hover:scale-110 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Копирайт */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-mintpaper mb-4">About</h3>
            <p className="text-gray-300">
              © 2025 Nassan Yernur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;