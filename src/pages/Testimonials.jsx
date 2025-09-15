import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import HeaderMain from '../components/header';
import FooterMain from '../components/footer';

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2322c55e'/%3E%3Cpath d='M150 120 L170 100 L190 120 L210 140 L230 120 L250 140 L270 160 L290 140 L310 160 L330 180' stroke='%23ffffff' stroke-width='2' fill='none' opacity='0.3'/%3E%3Ccircle cx='200' cy='200' r='40' fill='%23ffffff' opacity='0.2'/%3E%3Cpath d='M160 240 Q200 220 240 240' stroke='%23ffffff' stroke-width='3' fill='none'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%23ffffff' font-size='12' opacity='0.5'%3EGolf%3C/text%3E%3C/svg%3E",
      quote: "Best courts in the city",
      text: "I absolutely love playing here! The courts are always in excellent condition, and the location is super convenient It's the perfect spot to unwind and enjoy a great game every weekend.",
      name: "Samantha L.",
      role: "Business man",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23f3f4f6'/%3E%3Ccircle cx='20' cy='15' r='6' fill='%236b7280'/%3E%3Cpath d='M8 32 Q8 24 20 24 Q32 24 32 32' fill='%236b7280'/%3E%3C/svg%3E"
    },
    {
      id: 2,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2316a34a'/%3E%3Cpath d='M50 150 L100 120 L150 140 L200 110 L250 130 L300 100 L350 120' stroke='%23ffffff' stroke-width='2' fill='none' opacity='0.4'/%3E%3Ccircle cx='100' cy='180' r='30' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='300' cy='200' r='25' fill='%23ffffff' opacity='0.2'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%23ffffff' font-size='12' opacity='0.5'%3ETennis%3C/text%3E%3C/svg%3E",
      quote: "Amazing training facilities",
      text: "The training sessions here are top-notch! Professional coaches, excellent equipment, and a great atmosphere. I've improved my game significantly since joining this facility.",
      name: "Michael R.",
      role: "Professional Athlete",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23ddd6fe'/%3E%3Ccircle cx='20' cy='15' r='6' fill='%237c3aed'/%3E%3Cpath d='M8 32 Q8 24 20 24 Q32 24 32 32' fill='%237c3aed'/%3E%3C/svg%3E"
    },
    {
      id: 3,
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23059669'/%3E%3Crect x='50' y='100' width='300' height='100' stroke='%23ffffff' stroke-width='2' fill='none' opacity='0.4'/%3E%3Ccircle cx='200' cy='150' r='40' stroke='%23ffffff' stroke-width='2' fill='none' opacity='0.5'/%3E%3Cline x1='200' y1='100' x2='200' y2='200' stroke='%23ffffff' stroke-width='1' opacity='0.3'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%23ffffff' font-size='12' opacity='0.5'%3EFootball%3C/text%3E%3C/svg%3E",
      quote: "Perfect event management",
      text: "Organized our company tournament here and it was flawless! The staff handled everything perfectly, from booking to event coordination. Highly recommend for any sports event.",
      name: "Jennifer K.",
      role: "Event Coordinator",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23fed7d7'/%3E%3Ccircle cx='20' cy='15' r='6' fill='%23e53e3e'/%3E%3Cpath d='M8 32 Q8 24 20 24 Q32 24 32 32' fill='%23e53e3e'/%3E%3C/svg%3E"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="">
      <div>
        <HeaderMain
                textColorButton='text-black'
                buttonUlT='underline'
        />
      </div>
      <div className='bg-gray-50 py-16 lg:py-24 px-6 lg:px-16'>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 lg:mb-16">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gray-200 rounded-full mb-4">
              <span className="text-gray-600 text-sm font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What Our Players Say
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2 mt-6 sm:mt-0">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Main Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={currentData.image}
                alt="Sports facility"
                className="w-full h-80 sm:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Small image in corner - only visible on larger screens */}
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-32 h-32">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Crect width='120' height='120' fill='%2322c55e' rx='20'/%3E%3Cpath d='M30 60 L40 50 L50 60 L60 70 L70 60 L80 70 L90 80' stroke='%23ffffff' stroke-width='2' fill='none'/%3E%3Ccircle cx='60' cy='60' r='20' fill='%23ffffff' opacity='0.3'/%3E%3C/svg%3E"
                  alt="Tennis court"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Large Quote Mark */}
              <div className="absolute -top-4 -left-2 text-6xl text-gray-200 font-serif leading-none">
                "
              </div>
              
              {/* Quote Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 relative z-10">
                {currentData.quote}
              </h3>
              
              {/* Quote Text */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {currentData.text}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={currentData.avatar}
                  alt={currentData.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {currentData.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {currentData.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      </div>
      <div>
        <FooterMain/>
      </div>
    </section>
  );
};

export default Testimonial;