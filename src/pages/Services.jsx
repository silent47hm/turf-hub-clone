import React from 'react';
import { Calendar, Users, Trophy, ShoppingBag } from 'lucide-react';
import HeaderMain from '../components/header';
import FooterMain from '../components/footer';

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
    
    <section className="relative min-h-screen overflow-hidden bg-[url('/services/s-1.jpg')] bg-cover bg-center bg-green-900/50">
      <div>
        <HeaderMain/>
      </div>
      {/* Background Image - Football Field */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
      >
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      </div>

      {/* Player silhouette overlay */}
      {/* <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-transparent to-black opacity-30"></div> */}
      
      {/* Content */}
      <div className="relative z-10 px-6 py-12 lg:px-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16">
            <div className="mb-8 lg:mb-0 max-w-3xl">
              {/* Service Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 rounded-full border border-white border-opacity-20 backdrop-blur-sm mb-6">
                <span className="text-black text-2xl font-medium">Service</span>
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
      <FooterMain/>
    </section>
  );
};

export default Services;

// completed on sunday