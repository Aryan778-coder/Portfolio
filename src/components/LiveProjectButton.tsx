import { ExternalLink } from 'lucide-react'

interface LiveProjectButtonProps {
  className?: string
  href?: string
}

export default function LiveProjectButton({ className = '', href }: LiveProjectButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
          px-5 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3.5
          text-xs sm:text-sm md:text-base
          transition-all duration-300 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] cursor-pointer group shadow-md hover:shadow-purple-500/20 ${className}`}
      >
        <span>Live Project</span>
        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    )
  }

  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
        px-5 py-2 sm:px-8 sm:py-3 md:px-10 md:py-3.5
        text-xs sm:text-sm md:text-base
        transition-all duration-200 hover:bg-[#D7E2EA]/10 cursor-pointer ${className}`}
    >
      Live Project
    </button>
  )
}
