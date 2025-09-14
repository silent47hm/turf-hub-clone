import React from 'react';
import { Calendar, Users, Trophy, ShoppingBag } from 'lucide-react';
import HeaderMain from '../components/header';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Slot Booking",
      description: "Book training sessions, events, gym hours, or personal coaching with just a few clicks."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      // started the code at sunday
      title: "Training Sessions",
      description: "Level up your game or start your fitness journey with our expert-led training ..."
    },
    {
      icon: <Trophy className="w-8 h-8 text-green-600" />,
      title: "Event Management",
      description: "Planning a sports tournament, fitness workshop, or wellness event? Leave the..."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-green-600" />,
      title: "Sports Online Shop",
      description: "Find the best sportswear, fitness gear, and accessories — all in one place."
    }
  ];

  return (
    
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      <div>
        <HeaderMain/>
      </div>
      {/* Background Image - Football Field */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800"><defs><linearGradient id="field" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23166534"/><stop offset="50%" stop-color="%23064e3b"/><stop offset="100%" stop-color="%23022c22"/></linearGradient></defs><rect width="1400" height="800" fill="url(%23field)"/><rect x="0" y="200" width="1400" height="2" fill="%23ffffff" opacity="0.3"/><rect x="0" y="400" width="1400" height="2" fill="%23ffffff" opacity="0.3"/><rect x="0" y="600" width="1400" height="2" fill="%23ffffff" opacity="0.3"/><rect x="200" y="0" width="2" height="800" fill="%23ffffff" opacity="0.2"/><rect x="600" y="0" width="2" height="800" fill="%23ffffff" opacity="0.2"/><rect x="1000" y="0" width="2" height="800" fill="%23ffffff" opacity="0.2"/><circle cx="1100" cy="400" r="80" fill="%2322c55e" opacity="0.1"/></svg>')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Player silhouette overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-transparent to-black opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 px-6 py-12 lg:px-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16">
            <div className="mb-8 lg:mb-0 max-w-3xl">
              {/* Service Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 rounded-full border border-white border-opacity-20 backdrop-blur-sm mb-6">
                <span className="text-white text-sm font-medium">Service</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fuel Your Passion with Our Full
                <br />
                Service Experience
              </h1>
              
              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
                We are more than just a platform — we are a community built for athletes, trainers, 
                event organizers, and sports enthusiasts. Our mission is to make access to sports 
                easier, more organized, and more exciting than ever before.
              </p>
            </div>

            {/* View All Services Button */}
            <div className="flex-shrink-0">
              <button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105">
                View all Service
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Player Figure (positioned absolutely) */}
      <div className="hidden lg:block absolute right-20 xl:right-32 top-1/2 transform -translate-y-1/2">
        <div className="w-32 h-48 bg-gradient-to-b from-gray-700 to-gray-900 rounded-t-full opacity-70"></div>
        <div className="w-32 h-24 bg-gradient-to-b from-gray-800 to-black rounded-b-lg opacity-70 -mt-2"></div>
      </div>
    </section>
  );
};

export default Services;

// completed on sunday