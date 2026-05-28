import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Enterprise'],
    Resources: ['Documentation', 'API Reference', 'Support', 'Blog'],
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Compliance', 'Cookies'],
  }

  return (
    <footer className="bg-dark-card border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4">N7</h3>
            <p className="text-gray-400 mb-6">
              Leading provider of banking and financial technology solutions for enterprises worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-dark-bg p-8 rounded-lg mb-12">
          <h3 className="font-semibold text-lg mb-6">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Mail className="text-accent-blue flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:hello@n7.com" className="text-white hover:text-accent-blue transition-colors">
                  hello@n7.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-accent-blue flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <a href="tel:+1234567890" className="text-white hover:text-accent-blue transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="text-accent-blue flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-gray-400 mb-1">Address</p>
                <p className="text-white">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} N7 Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
