import React, { useState } from 'react';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import HeaderMain from '../components/header';
import FooterMain from '../components/footer';

const Homepage = () => {
    
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedCourtType, setSelectedCourtType] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    return (
        <div >
            <div className="min-h-screen bg-gray-900 relative overflow-hidden">
                {/* Background Image nto working at first xd */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/Bg-HP.png')]"
                >
                    <div className="absolute inset-0  bg-opacity-40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Used for the Header component */}
                    <HeaderMain />

                    {/* Main Content of the home page */}
                    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-8 lg:py-16 min-h-[calc(100vh-80px)] container mx-auto">
                        {/* Left Section */}
                        <div className="flex-1 max-w-2xl mb-8 lg:mb-0">

                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                    Choose Your Turf<br />
                                    Play Your Game.
                                </h1>

                                <p className="text-gray-300 text-lg mb-8 max-w-md">
                                    Book premium sports turfs across the city for Football, Cricket,
                                    Hockey, and more — with just a few clicks.
                                </p>
                            </div>

                        </div>

                        {/* Right Section - Booking Form */}
                        <div className="w-full max-w-md bg-white/15 backdrop-blur-lg rounded-3xl p-1 shadow-2xl">
                            <div className=" rounded-2xl p-6 shadow-2xl">
                                <div className="text-right mb-6">
                                    <span className="text-white text-lg">
                                        Discover and book top quality<br />
                                        courts effortlessly with <span className="text-lime-400 font-semibold">Turfhub.</span>
                                    </span>
                                </div>
                                {/* Location */}
                                <div className='bg-white p-4 rounded-2xl mb-6'>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Location
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={selectedLocation}
                                                onChange={(e) => setSelectedLocation(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                            >
                                                <option value="">Select your perfect location</option>
                                                <option value="downtown">Downtown</option>
                                                <option value="suburb">Suburb</option>
                                                <option value="north">North Side</option>
                                            </select>
                                            <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Court Type */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Court Type
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={selectedCourtType}
                                                onChange={(e) => setSelectedCourtType(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                            >
                                                <option value="">Court type (e.g. clay, grass, hard)</option>
                                                <option value="grass">Grass</option>
                                                <option value="clay">Clay</option>
                                                <option value="hard">Hard Court</option>
                                            </select>
                                            <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Duration
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={selectedDuration}
                                                onChange={(e) => setSelectedDuration(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                            >
                                                <option value="">Select Duration</option>
                                                <option value="1h">1 Hour</option>
                                                <option value="2h">2 Hours</option>
                                                <option value="3h">3 Hours</option>
                                            </select>
                                            <ChevronDown size={20} className="absolute right-3 top-3 text-gray-400" />
                                        </div>
                                    </div>

                                    {/* Date and Time */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                                Time
                                            </label>
                                            <input
                                                type="time"
                                                value={selectedTime}
                                                onChange={(e) => setSelectedTime(e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Book Button */}
                                <button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-lime-400 transition-colors">
                                    Book Court Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between bottom-8 right-8 container mx-auto px-4">
                        {/* Left side: Avatars + membership */}
                        <div className="space-x-4">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">A</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">B</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">C</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">D</span>
                                </div>
                            </div>

                            <div className="text-white">
                                <div className="text-2xl font-bold">12k + Membership</div>
                                <div className="text-gray-300">Enjoy our facilities</div>
                            </div>
                        </div>

                        {/* Right side: Ground info + arrows */}
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <div className="text-white text-lg font-medium">1/2 Baseline Grounds</div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                                    <ArrowLeft size={20} className="text-white" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center hover:bg-lime-400 transition-colors">
                                    <ArrowRight size={20} className="text-black" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container mx-auto'>
                    <FooterMain />
                </div>
            </div>

        </div>

    );

};

export default Homepage;
