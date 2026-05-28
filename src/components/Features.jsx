import { CheckCircle } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Scalable Architecture',
      description: 'Built to handle millions of transactions with enterprise-grade reliability and performance',
    },
    {
      title: 'Cloud-Native',
      description: 'Deploy anywhere with our flexible cloud infrastructure and hybrid solutions',
    },
    {
      title: 'API-First Design',
      description: 'Open APIs for seamless integration with your existing systems and third-party services',
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team available round the clock to assist your operations',
    },
    {
      title: 'Security First',
      description: 'Multi-layer security with encryption, fraud detection, and compliance tools',
    },
    {
      title: 'Real-Time Analytics',
      description: 'Live dashboards and insights for data-driven decision making',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-dark-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image Placeholder */}
          <div className="relative h-full min-h-96">
            <div className="w-full aspect-square bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <p className="text-gray-400">Features Image</p>
                <p className="text-sm text-gray-500">Place your features image here</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="section-title">Why Choose N7?</h2>
              <p className="section-subtitle">
                Experience the difference with our market-leading solutions
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="text-accent-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
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
