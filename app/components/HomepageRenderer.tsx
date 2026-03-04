'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Building2, Ruler, Compass, Layers, PenTool, Eye } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const services = [
  { icon: Building2, title: 'Architecture', desc: 'Iconic structures that define skylines' },
  { icon: Ruler, title: 'Master Planning', desc: 'Comprehensive urban design solutions' },
  { icon: Compass, title: 'Interior Design', desc: 'Spaces that inspire and delight' },
  { icon: Layers, title: 'Sustainable Design', desc: 'Responsible building for the future' },
  { icon: PenTool, title: 'Renovation', desc: 'Breathing new life into existing spaces' },
  { icon: Eye, title: 'Design Review', desc: 'Expert evaluation and consultation' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&fit=crop', alt: 'Modern Architecture' },
  { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80&fit=crop', alt: 'Interior Design' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop', alt: 'Building Facade' },
  { src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=600&q=80&fit=crop', alt: 'Architectural Detail' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-950">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Services Showcase */}
      <section className="py-20 bg-primary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-4">Our Services</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">Comprehensive architectural solutions from concept to completion</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary-700 group-hover:border-stone-500/50 flex items-center justify-center transition-colors">
                  <item.icon className="w-6 h-6 text-stone-300" />
                </div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-4">Portfolio</h2>
            <p className="text-stone-400">A glimpse into our architectural vision</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <div key={img.alt} className="relative aspect-[4/3] overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-950/20 group-hover:bg-primary-950/0 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-primary-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-light">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-primary-950 border-t border-primary-800/50 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl text-white mb-4 tracking-wide">Arden & Cole</h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                A design-led architecture practice dedicated to creating spaces that inspire, endure, and respond to their environment. Established in 2001.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-stone-300 mb-4 font-medium">Explore</h4>
              <nav className="flex flex-col gap-2">
                <a href="/projects" className="text-sm text-stone-400 hover:text-white transition-colors">Projects</a>
                <a href="/team" className="text-sm text-stone-400 hover:text-white transition-colors">Team Members</a>
                <a href="/awards" className="text-sm text-stone-400 hover:text-white transition-colors">Awards</a>
                <a href="/news" className="text-sm text-stone-400 hover:text-white transition-colors">News</a>
              </nav>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-stone-300 mb-4 font-medium">Contact</h4>
              <div className="text-sm text-stone-400 space-y-2">
                <p>742 Evergreen Terrace</p>
                <p>New York, NY 10001</p>
                <p className="text-stone-300">(555) 234-5617</p>
                <p>studio@ardenandcole.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-800/50 pt-8 text-center text-xs text-stone-600">
            <p>&copy; {new Date().getFullYear()} Arden & Cole Architects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
