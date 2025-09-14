import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FooterMain = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-green-600 to-green-800 text-white relative overflow-hidden rounded-3xl mx-4 my-4 lg:mx-8 lg:my-8">
      {/* Large TURFHUB Text Background */}
      <div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none">
        <div className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] 2xl:text-[28rem] font-black leading-none text-green-500 opacity-20 whitespace-nowrap transform translate-y-8 lg:translate-y-12">
          TURFHUB
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 lg:mb-16">
            
            {/* Newsletter Section */}
            <div className="lg:col-span-5 mb-6 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 leading-tight">
                Get Exclusive Updates Offers
              </h2>
              <p className="text-green-100 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                Be the first to know about upcoming training sessions, special events,
              </p>
              
              <div className="relative max-w-lg">
                <div className="flex rounded-full overflow-hidden shadow-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email Address..."
                    className="flex-1 bg-lime-400 text-black placeholder-green-800 placeholder-opacity-70 px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-lime-300 text-sm sm:text-base"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-green-800 hover:bg-green-900 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300 hover:shadow-lg"
                  >
                    <ArrowRight size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-3 lg:ml-8">
              <div className="space-y-6">
                <div>
                  <p className="text-green-200 text-sm mb-2 leading-relaxed">
                    Have a question or feedback?
                  </p>
                  <a 
                    href="mailto:hello@turfhub.com" 
                    className="text-white hover:text-lime-400 transition-colors text-lg font-medium"
                  >
                    hello@turfhub.Com
                  </a>
                </div>
                <div>
                  <p className="text-green-200 text-sm mb-2 leading-relaxed">
                    Give us a call
                  </p>
                  <a 
                    href="tel:+123445566789" 
                    className="text-white hover:text-lime-400 transition-colors text-lg font-medium"
                  >
                    +123445566789
                  </a>
                </div>
              </div>
            </div>

            {/* Facilities Section */}
            <div className="lg:col-span-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6">Facilities</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors text-sm sm:text-base leading-relaxed">
                    Tennis Courts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors text-sm sm:text-base leading-relaxed">
                    Basketball Courts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors text-sm sm:text-base leading-relaxed">
                    Swimming Pool
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors text-sm sm:text-base leading-relaxed">
                    Gym & Fitness Center
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="lg:col-span-2">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors text-sm sm:text-base leading-relaxed">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors text-sm sm:text-base leading-relaxed">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors text-sm sm:text-base leading-relaxed">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-green-100 hover:text-white transition-colors text-sm sm:text-base leading-relaxed">
                    Live Chat Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-green-500 border-opacity-30 pt-6 lg:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="text-green-200 text-sm sm:text-base">
                Riverside Turfhub© 2024 All right reserved
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-sm sm:text-base">
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Privacy & Policy
                </a>
                <a href="#" className="text-green-200 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;