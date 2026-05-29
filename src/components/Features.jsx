import { CheckCircle, ArrowRight, Check } from 'lucide-react'
import featureImage from '../assets/features.jpg'
import featureImage2 from '../assets/features2.jpg'

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


          <div className="relative h-full min-h-96 ">
            <div className="w-full  from-accent-purple/20 to-accent-blue/20 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <img src={featureImage} alt="Hero visual" className="w-full h-full object-cover " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide my-36">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-full min-h-96 ">
            <div className="w-full  from-accent-purple/20 to-accent-blue/20 rounded-2xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <img src={featureImage2} alt="Hero visual" className="w-full h-full object-cover " />
              </div>
            </div>
          </div>
          <div className="space-y-8 lg:pl-6">            
            <div className="space-y-6">
              <h2 className="section-title text-white">
                Run a more efficient, flexible, and digitally connected corebanking system
              </h2>
              <p className="text-base text-accent-blue font-semibold tracking-wider uppercase">
                What you will get:
              </p>

              {/* Two-Column Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
                
                {/* Column 1 */}
                <div className="space-y-5">
                  
                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                        Customer-On Boarding
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                        Managing deposits and withdrawals
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                        Transaction management
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                        Interest Calculation
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300 leading-snug">
                        Payments processing
                      </h4>
                      <p className="text-xs text-gray-400">
                        (cash, cheques, mandates, NEFT, RTGS etc)
                      </p>
                    </div>
                  </div>

                </div>

                {/* Column 2 */}
                <div className="space-y-5">

                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300">
                        CRM Activities
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300 leading-snug">
                        Configuring New Banking Products
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300 leading-snug">
                        Loan disbursal and Loan management
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Check size={11} strokeWidth={3.5} />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-accent-blue transition-colors duration-300 leading-snug">
                        Establishing criteria
                      </h4>
                      <p className="text-xs text-gray-400 font-normal">
                        for minimum balances, interest rates, number of withdrawals allowed and so on.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
