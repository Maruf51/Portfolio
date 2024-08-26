import Title from "@/components/shared/Title"
import { useState } from "react"
import { IoPaperPlane } from "react-icons/io5"
import { twMerge } from "tailwind-merge"

const Contact = ({ selected }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emptyField, setEmptyField] = useState(false)

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (name, email, message) {
      console.log(name, email, message)
      setName('')
      setEmail('')
      setMessage('')
      setEmptyField(false)
    } else {
      setEmptyField(true)
    }
  }

  return (
    <div className={`duration-300 hidden gap-7 ${selected === 'Contact' && 'nav-active'}`}>
      <Title text="Contact Me" />
      <div className="w-full h-[300px] md:h-[350px] secondary-bg border primary-border rounded-xl overflow-hidden">
        <div className=" grayscale dark:invert duration-300 w-full h-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34102.14609506913!2d89.00594645611415!3d22.59573777698065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1722097835487!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <form onSubmit={handleSendMessage} className="grid grid-cols-2 gap-4">
        <h1 className="text-xl font-medium col-span-2 primary-text">Contact Form</h1>
        <div className="col-span-2 md:col-span-1 w-full h-10 relative">
          <div className={twMerge('rounded-md w-full h-10 p-[1px] flex justify-center items-center overflow-hidden relative duration-300', emptyField ? (name ? 'primary-border-bg' : 'bg-red-500') : 'primary-border-bg')}>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={twMerge('bg-white dark:bg-primary-bg-dark w-full h-full px-3 text-sm primary-text border-none primary-border rounded-md z-[1] peer outline-none', emptyField && !name && 'invalid-placeholder')} />
            <div className={twMerge('duration-300 w-0 h-[300%] absolute highlight-bg peer-focus:w-full pointer-events-none rotate-12', name && 'w-full')}></div>
          </div>
          <label htmlFor="name" className={twMerge("cursor-text pointer-events-none absolute left-2.5 px-1 top-[11px] z-[2] text-sm bg-transparent secondary-text rounded-md", emptyField && !name && ' !text-red-500 dark:text-red-500', name && 'top-[-10px] primary-bg')}>Full name*</label>
        </div>

        <div className="col-span-2 md:col-span-1 w-full h-10 relative">
          <div className={twMerge('rounded-md w-full h-10 p-[1px] flex justify-center items-center overflow-hidden relative duration-300', emptyField ? (email ? 'primary-border-bg' : 'bg-red-500') : 'primary-border-bg')}>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={twMerge('bg-white dark:bg-primary-bg-dark w-full h-full px-3 text-sm primary-text border-none primary-border rounded-md z-[1] peer outline-none', emptyField && !email && 'invalid-placeholder')} />
            <div className={twMerge('duration-300 w-0 h-[300%] absolute highlight-bg peer-focus:w-full pointer-events-none rotate-12', email && 'w-full')}></div>
          </div>
          <label htmlFor="email" className={twMerge("cursor-text pointer-events-none absolute left-2.5 px-1 top-[11px] z-[2] text-sm bg-transparent secondary-text rounded-md", emptyField && !email && ' !text-red-500 dark:text-red-500', email && 'top-[-10px] primary-bg')}>Email address*</label>
        </div>

        <div className="col-span-2 w-full h-20 relative">
          <div className={twMerge('rounded-md w-full h-20 p-[1px] flex justify-center items-center overflow-hidden relative duration-300', emptyField ? (message ? 'primary-border-bg' : 'bg-red-500') : 'primary-border-bg')}>
            <textarea id="message" type="email" value={message} onChange={(e) => setMessage(e.target.value)} className={twMerge('bg-white dark:bg-primary-bg-dark w-full h-full px-3 py-2 text-sm primary-text border-none primary-border rounded-md z-[1] peer outline-none resize-none', emptyField && !email && 'invalid-placeholder')} />
            <div className={twMerge('duration-300 w-0 h-[300%] absolute highlight-bg peer-focus:w-[110%] pointer-events-none rotate-12', message && 'w-[110%]')}></div>
          </div>
          <label htmlFor="message" className={twMerge("cursor-text pointer-events-none absolute left-2.5 px-1 top-[11px] z-[2] text-sm bg-transparent secondary-text rounded-md", emptyField && !message && ' !text-red-500 dark:text-red-500', message && 'top-[-10px] primary-bg')}>Your Message*</label>
        </div>

        {/* <div className={twMerge('col-span-2 rounded-md w-full h-20 p-[1px] flex justify-center items-center overflow-hidden relative duration-300', emptyField ? (message ? 'primary-border-bg' : 'bg-red-500') : 'primary-border-bg')}>
          <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} className={twMerge('bg-white dark:bg-primary-bg-dark w-full h-full px-3 py-2 text-sm primary-text border-none primary-border rounded-md z-[1] peer outline-none ', emptyField && 'invalid-placeholder')} placeholder="Your message*" />
          <div className={twMerge('duration-300 w-0 h-[300%] absolute highlight-bg peer-focus:w-[110%] pointer-events-none rotate-12', message && 'w-[110%]')}></div>
        </div> */}
        <div className="col-span-2 w-full flex justify-end">
          <button type="submit" className="w-full md:w-44 h-12 xl:h-10 relative secondary-border-design rounded-md cursor-pointer">
            <span className="z-[1] highlight-text md:text-sm flex items-center gap-2"><IoPaperPlane className="text-lg" />Send Message</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact