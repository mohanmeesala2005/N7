import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 border-t border-b border-gray-700">
      <div className="container-wide text-center">
        <h2 className="section-title mb-6">Take the full advantage of going paper-less now.</h2>
        <p className="section-subtitle max-w-2xl mx-auto mb-12">
          CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations 
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn-primary inline-flex items-center justify-center space-x-2">
            <span>REQUEST DEMO</span>
            <ArrowRight size={18} />
          </button>
          <button className="btn-secondary inline-flex items-center justify-center space-x-2">
            <span>CONTACT US</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <p className="text-gray-400 mt-8 text-sm">
          No credit card required • 30-day free trial • Full feature access
        </p>
      </div>
    </section>
  )
}
