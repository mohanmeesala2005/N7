import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/hero-image.svg'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card pt-20 flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="section-title">
                All of our solutions are tailor-made to your needs
              </h1>
              <p className="section-subtitle">
                Comprehensive banking and financial technology solutions designed for modern enterprises
              </p>
            </div>

            <button className="btn-primary inline-flex items-center space-x-2">
              <span>REQUEST DEMO</span>
              <ArrowRight size={18} />
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-accent-blue">500+</div>
                <p className="text-sm text-gray-400">Enterprise Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-blue">50+</div>
                <p className="text-sm text-gray-400">Countries</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-blue">15+</div>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-full min-h-96 lg:min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-gray-700 shadow-xl shadow-accent-blue/10 bg-slate-950">
              <img
                src={heroImage}
                alt="Hero visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
