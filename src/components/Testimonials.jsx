import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO, Global Bank Co.',
      content: 'N7 transformed our banking operations. The seamless integration and reliability are unmatched.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'VP Operations, FinTech Inc.',
      content: 'Outstanding support team and cutting-edge technology. Highly recommended for any institution.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'CEO, Digital Banking Solutions',
      content: 'The scalability and security features give us peace of mind. Best investment we made.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-dark-bg">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <h2 className="section-title mb-6">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by leading financial institutions worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-dark-card p-8 rounded-lg border border-gray-700 hover:border-accent-blue transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent-blue text-accent-blue" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="border-t border-gray-700 pt-6">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
