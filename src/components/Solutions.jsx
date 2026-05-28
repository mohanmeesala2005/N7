import { ArrowRight } from 'lucide-react'
import cardImage from '../assets/mainPage.jpg'

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: 'Core Banking',
      description: 'Helps your financial institution automate and optimize banking operations, manage employees, improve customer experience, and ensure full regulatory compliance.',
    },
    {
      id: 2,
      title: 'Digital Payments',
      description: 'End-to-end payment processing solutions for secure, fast, and reliable digital transactions across all channels.',
    },
    {
      id: 3,
      title: 'Risk Management',
      description: 'Comprehensive fraud detection and risk mitigation tools to protect your organization and customers.',
    },
    {
      id: 4,
      title: 'Analytics & Insights',
      description: 'Advanced data analytics and business intelligence tools for informed decision-making.',
    },
    {
      id: 5,
      title: 'API Platform',
      description: 'Scalable API infrastructure for seamless integration with third-party systems and services.',
    },
    {
      id: 6,
      title: 'Compliance Suite',
      description: 'Automated compliance management to meet regulatory requirements across jurisdictions.',
    },
  ]

  return (
    <section id="solutions" className="py-20 md:py-32 bg-dark-bg">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] items-start">
          {/* Left Column: Section Header */}
          <div className="lg:sticky lg:top-24">
            <div className="max-w-sm lg:max-w-none">
              <h2 className="section-title mb-6">All of our solutions are tailor-made to your needs</h2>
              <button className="btn-primary inline-flex items-center mx-3 space-x-2">
                <span>REQUEST DEMO</span>
                <ArrowRight size={18} />
            </button>
            </div>
          </div>

          {/* Right Column: Solutions Grid */}
          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="group overflow-hidden rounded-3xl border border-[#0b2a38] bg-[#02131d] transition-shadow duration-300 hover:shadow-[0_25px_45px_-15px_rgba(0,191,255,0.25)]"
                >
                  

                  <div className="p-6 md:p-7">
                    <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                      {solution.description}
                    </p>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
