import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Study', href: '#casestudy' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close on window resize if viewport expands to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="w-full flex items-center px-6 md:px-10 pt-6 md:pt-8 relative z-30">
      {/* Desktop view (>= 768px) */}
      <div className="hidden md:flex justify-between items-center w-full">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile view (< 768px) */}
      <div className="flex md:hidden justify-between items-center w-full">
        <a
          href="#hero"
          className="flex items-center gap-2 group text-[#D7E2EA] hover:text-white transition-colors"
        >
          <span className="font-bold uppercase tracking-wider text-lg">
            Aryan<span className="text-purple-400">.</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Available
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA] hover:text-white hover:bg-white/10 active:scale-95 transition-all focus:outline-none"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Drawer (Portaled to document.body) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] bg-[#0C0C0C]/95 backdrop-blur-2xl flex flex-col justify-between px-6 py-6 sm:px-8"
              >
                {/* Drawer Header */}
                <div className="flex justify-between items-center w-full border-b border-white/10 pb-5">
                  <a
                    href="#hero"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('#hero')
                    }}
                    className="flex items-center gap-2 group text-[#D7E2EA]"
                  >
                    <span className="font-bold uppercase tracking-wider text-lg">
                      Aryan<span className="text-purple-400">.</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Available
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-[#D7E2EA] hover:text-white hover:bg-white/20 active:scale-95 transition-all focus:outline-none"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2 py-6 my-auto">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: 0.04 * index, duration: 0.2 }}
                      className="group flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-purple-400 tracking-wider">
                          0{index + 1}
                        </span>
                        <span className="text-2xl font-bold uppercase tracking-wider text-[#D7E2EA] group-hover:text-white group-hover:translate-x-1 transition-all">
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.a>
                  ))}
                </div>

                {/* Drawer Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div className="text-center sm:text-left">
                    <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/50">
                      Get in touch
                    </p>
                    <a
                      href="mailto:aryandadhich18@gmail.com"
                      className="text-sm font-medium text-white hover:text-purple-300 transition-colors"
                    >
                      aryandadhich18@gmail.com
                    </a>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('#contact')
                    }}
                    className="w-full sm:w-auto text-center py-2.5 px-6 rounded-full text-xs uppercase tracking-widest font-semibold text-white transition-opacity hover:opacity-90"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow:
                        '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                  >
                    Contact Me
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  )
}
