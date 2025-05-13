import {useRef, useState, useEffect} from 'react'
import Title from '../Title'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const formContainerRef = useRef<HTMLDivElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Анимация появления контейнера формы
      gsap.fromTo(
        formContainerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Анимация появления полей ввода
      gsap.fromTo(
        [nameInputRef.current, emailInputRef.current, messageInputRef.current, buttonRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.3
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing')
      setStatus('error')
      return
    }

    setStatus('sending')
    
    if(!form.current) return

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      setStatus('success')
      form.current.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" id="contacts">
      <Title text="Contacts" />
      <div ref={formContainerRef} className='max-w-xl mx-auto mt-12'>
        <form onSubmit={sendEmail} className='flex flex-col gap-8 bg-darkzinc/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl' ref={form}>
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input 
              ref={nameInputRef}
              type="text" 
              id="name"
              name="user_name"
              required
              className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-700 
                text-white focus:border-mintpaper focus:outline-none transition-colors
                placeholder:text-gray-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input 
              ref={emailInputRef}
              type="email" 
              id="email"
              name="user_email"
              required
              className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-700 
                text-white focus:border-mintpaper focus:outline-none transition-colors
                placeholder:text-gray-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea 
              ref={messageInputRef}
              id="message"
              name="message"
              required
              className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-700 
                text-white focus:border-mintpaper focus:outline-none transition-colors
                placeholder:text-gray-500 resize-none min-h-[120px]"
              placeholder="Write your message here..."
            />
          </div>

          <button 
            ref={buttonRef}
            type="submit"
            disabled={status === 'sending'}
            className="mt-4 px-8 py-3 bg-mintpaper text-darkzinc font-medium
              hover:bg-opacity-90 transition-all duration-300 self-start
              border border-mintpaper hover:bg-transparent hover:text-mintpaper
              disabled:opacity-50 disabled:cursor-not-allowed
              transform hover:scale-105 active:scale-95"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg
              animate-fade-in-up z-50">
              Message sent successfully! 🎉
            </div>
          )}
          {status === 'error' && (
            <div className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg
              animate-fade-in-up z-50">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact