import React from 'react'
import HeaderMain from '../components/header'


export default function About() {
    return (
        <section className="container-center mx-auto">
            <div>
                <HeaderMain/>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                    <small className="text-sm text-gray-500">About Us</small>
                    {/* messed up at his point xd */}
                    <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Empowering Sports Through<br />Innovation and Convenience</h1>
                    <p className="mt-6 text-gray-600">We are more than just a platform — we are a community built for athletes, trainers, event organizers, and sports enthusiasts. Our mission is to make access to sports easier, more organized, and more exciting than ever before.</p>


                    <div className="mt-8">
                        <div className="rounded-2xl overflow-hidden relative">
                            <img src='Hero' alt="hero" className="w-full h-80 object-cover" />
                            <div className="absolute bottom-4 left-6 text-white max-w-lg">
                                <p className="text-lg">Our mission is to make access to sports easier, more organized, and more exciting than ever</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-4 mt-6">
                            <button className="w-10 h-10 rounded-full border flex items-center justify-center">←</button>
                            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">→</button>
                        </div>
                    </div>
                </div>


                <aside className="lg:col-span-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden">
                            <img src='{court1}' alt="indoor" className="w-full h-40 object-cover rounded-2xl" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src='{court2} 'alt="pool" className="w-full h-40 object-cover rounded-2xl" />
                        </div>
                    </div>


                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold">10,00+</div>
                            <div className="text-xs text-gray-500">Athletes Trained</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">97%</div>
                            <div className="text-xs text-gray-500">Satisfaction Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">10+</div>
                            <div className="text-xs text-gray-500">Professional Experience</div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}