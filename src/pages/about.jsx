import React from 'react'
import HeaderMain from '../components/header'
import FooterMain from '../components/footer'


export default function About() {
    return (
        <section className="container mx-auto">
            <div>
                <HeaderMain 
                textColorButton='text-black'
                buttonUlA='underline'
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 px-2">
                    <small className="text-2xl text-gray-500">About Us</small>
                    {/* messed up at his point xd  */}
                    <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Empowering Sports Through<br />Innovation and Convenience</h1>



                    <div className="mt-8">
                        <div className="rounded-2xl overflow-hidden  bg-[url('/about/about-1.jpg')] bg-cover h-120 flex flex-col justify-between p-6">
                            
                            {/* <img src='/about/about-1.jpg' alt="hero" className="w-full h-150 object-cover" /> */}
                            <div className=" ">
                                <span className="text-gray-300 hover:text-lime-400 transition-colors bg-amber-50/25 rounded-3xl py-2 px-4 text-xl">
                                outdoor
                                </span>
                            </div>


                            <div className="  text-white">
                                <p className="text-3xl">Our mission is to make access to sports easier, more organized, and more exciting than ever</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-4 mt-6">
                            <button className="w-15 h-15 rounded-full border flex items-center justify-center text-3xl">←</button>
                            <button className="w-15 h-15 rounded-full bg-primary text-white flex items-center justify-center bg-green-900 text-3xl">→</button>
                        </div>
                    </div>
                </div>


                <aside className="lg:col-span-5 px-2 py-2">
                    <p className="mt-16 mb-8 text-gray-600">We are more than just a platform — we are a community built for athletes, trainers, event organizers, and sports enthusiasts. Our mission is to make access to sports easier, more organized, and more exciting than ever before.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden">
                            <img src='/about/about-2.jpg' alt="indoor" className="w-full h-100 object-cover rounded-2xl" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src='/about/about-3.jpg ' alt="pool" className="w-full h-100 object-cover rounded-2xl" />
                        </div>
                    </div>


                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="text-left">
                            <div className="text-2xl font-bold ">10,00+</div>
                            <div className="text-xl text-black-500 font-semibold">Athletes Trained</div>
                            <div className="text-xs text-gray-500">Proven Track record: 8 years, <br /> 10,000+ success stories</div>
                        </div>
                        <div className="text-left">
                            <div className="text-2xl font-bold">97%</div>
                            <div className="text-xl text-black-500 font-semibold ">Satisfaction Rate</div>
                            <div className="text-xs text-gray-500">Physical and meantal gains-- <br /> backend by our participants.</div>
                        </div>
                        <div className="text-left">
                            <div className="text-2xl font-bold">10+</div>
                            <div className="text-xl text-black-500 font-semibold">Professional Experience</div>
                            <div className="text-xs text-gray-500">Decades of expertise,one <br /> powerful team.</div>
                        </div>
                    </div>
                </aside>
            </div>

            <div>
                <FooterMain/>
            </div>
        </section>
    )
}