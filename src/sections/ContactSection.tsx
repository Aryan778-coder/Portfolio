import { useState } from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import { Phone, Mail, Copy, Check, ArrowUpRight, Code2 } from 'lucide-react'

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-32 pb-24 border-t border-[#D7E2EA]/15"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <FadeIn delay={0} y={40}>
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-400 mb-2 block">
            05 Contact
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}
          >
            Let&apos;s Work Together
          </h2>
          <p className="text-base sm:text-xl text-[#D7E2EA]/80 font-light max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16">
            Available for freelance projects and open to full-time opportunities. I reply within a day.
          </p>
        </FadeIn>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <FadeIn delay={0.1} y={20}>
            <div className="bg-[#141416] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between h-full hover:border-purple-500/40 transition-all duration-300 group relative">
              <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-semibold mb-1">
                Phone / WhatsApp
              </span>
              <a
                href="tel:+918949611528"
                className="text-lg font-bold text-white hover:text-purple-300 transition-colors mb-4 flex items-center gap-1"
              >
                +91 89496 11528
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <button
                onClick={() => copyToClipboard('+918949611528', 'phone')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0C0C0C] border border-[#D7E2EA]/15 text-xs uppercase tracking-wider text-[#D7E2EA] font-medium flex items-center justify-center gap-2 hover:bg-purple-950/40 hover:border-purple-500/40 transition-all"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>
          </FadeIn>

          {/* Email */}
          <FadeIn delay={0.2} y={20}>
            <div className="bg-[#141416] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between h-full hover:border-purple-500/40 transition-all duration-300 group relative">
              <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-semibold mb-1">
                Email
              </span>
              <a
                href="mailto:aryandadhich18@gmail.com"
                className="text-base sm:text-lg font-bold text-white hover:text-purple-300 transition-colors mb-4 break-all flex items-center gap-1"
              >
                aryandadhich18@gmail.com
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <button
                onClick={() => copyToClipboard('aryandadhich18@gmail.com', 'email')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0C0C0C] border border-[#D7E2EA]/15 text-xs uppercase tracking-wider text-[#D7E2EA] font-medium flex items-center justify-center gap-2 hover:bg-purple-950/40 hover:border-purple-500/40 transition-all"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </FadeIn>

          {/* GitHub */}
          <FadeIn delay={0.3} y={20}>
            <div className="bg-[#141416] border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between h-full hover:border-purple-500/40 transition-all duration-300 group relative">
              <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-semibold mb-1">
                GitHub
              </span>
              <a
                href="https://github.com/Aryan778-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-white hover:text-purple-300 transition-colors mb-4 flex items-center gap-1"
              >
                Aryan778-coder
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/Aryan778-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#0C0C0C] border border-[#D7E2EA]/15 text-xs uppercase tracking-wider text-[#D7E2EA] font-medium flex items-center justify-center gap-2 hover:bg-purple-950/40 hover:border-purple-500/40 transition-all"
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Bottom CTA Button */}
        <FadeIn delay={0.4} y={20}>
          <div className="flex flex-col items-center gap-6">
            <ContactButton />
            <p className="text-xs text-[#D7E2EA]/40 uppercase tracking-widest font-medium pt-8 border-t border-[#D7E2EA]/10 w-full">
              © {new Date().getFullYear()} Aryan Dadhich. Designed & Developed with React & Tailwind CSS.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
