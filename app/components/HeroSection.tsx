'use client'

import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80&fit=crop)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary-950/75" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-950 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-24">
        {/* Decorative accent line */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-wide leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-stone-300 mb-8 max-w-3xl mx-auto font-light tracking-wide">
            {subtitle}
          </p>
        )}

        {description && (
          <div className="text-base text-stone-400 max-w-2xl mx-auto font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        )}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a href="/projects" className="inline-flex items-center justify-center px-8 py-3 bg-stone-200 text-primary-950 font-semibold tracking-wide hover:bg-white transition-colors">
            View Projects
          </a>
          <a href="/about" className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white hover:bg-white/10 transition-colors tracking-wide">
            Our Philosophy
          </a>
        </div>
      </div>
    </section>
  )
}
