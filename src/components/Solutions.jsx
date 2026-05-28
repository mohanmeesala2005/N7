import { ArrowRight } from 'lucide-react'

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: 'Core Banking',
      description: 'Helps your financial institution automate and optimize banking operations, manage employees, improve customer experience, and ensure full regulatory compliance.',
      icon: '🏦',
    },
    {
      id: 2,
      title: 'Digital Payments',
      description: 'End-to-end payment processing solutions for secure, fast, and reliable digital transactions across all channels.',
      icon: '💳',
    },
    {
      id: 3,
      title: 'Risk Management',
      description: 'Comprehensive fraud detection and risk mitigation tools to protect your organization and customers.',
      icon: '🛡️',
    },
    {
      id: 4,
      title: 'Analytics & Insights',
      description: 'Advanced data analytics and business intelligence tools for informed decision-making.',
      icon: '📊',
    },
    {
      id: 5,
      title: 'API Platform',
      description: 'Scalable API infrastructure for seamless integration with third-party systems and services.',
      icon: '🔌',
    },
    {
      id: 6,
      title: 'Compliance Suite',
      description: 'Automated compliance management to meet regulatory requirements across jurisdictions.',
      icon: '✅',
    },
  ]

  return (
    <section id="solutions" className="py-20 md:py-32 bg-dark-bg">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="section-title mb-6">Our Solutions</h2>
          <p className="section-subtitle">
            Explore our comprehensive suite of banking and financial technology solutions
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-dark-card p-8 rounded-lg border border-gray-700 hover:border-accent-blue transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/20 group"
            >
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
              <a href="#" className="inline-flex items-center text-accent-blue hover:text-accent-purple transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
