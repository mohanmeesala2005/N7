import { CheckCircle, ArrowRight } from 'lucide-react'

export default function Features() {

  return (
    <section className="py-20 md:py-32 bg-dark-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="section-title">A complete cloud-based core banking.</h2>
              <p className="section-subtitle">
               Faster time to market with our cloud-based core banking services
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>REQUEST DEMO</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#"
                className="inline-flex items-center gap-3 text-[#00bfff] uppercase tracking-[2px] text-sm font-medium relative group/link"
              >
                <span className="relative">
                  Learn More
                  <span className="absolute left-0 -bottom-2 h-[2px] w-10 bg-[#00bfff] transition-all duration-300 group-hover/link:w-full"></span>
                </span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </a>
            </div>
          </div>


          <div className="relative h-full min-h-96">
            <div className="w-full aspect-square bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <p className="text-gray-400">Features Image</p>
                <p className="text-sm text-gray-500">Place your features image here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
