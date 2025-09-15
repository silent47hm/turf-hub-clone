import React from 'react'
import BlurButton from './blurButton'


export default function Card({ img, title, subtitle, price, badge, heightCard }) {
    return (
        <div
            className={`rounded-2xl shadow-sm overflow-hidden bg-cover flex flex-col ${heightCard}`}
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="flex-1"></div> {/* This pushes the content down */}
            <div className="p-4 ">
                <h3 className="font-semibold text-2xl text-white">{title}</h3>
                {subtitle && <p className="text-sm text-gray-600 ">{subtitle}</p>}
                <div className="mt-2 flex items-center justify-between">
                    <div className="text-xl font-bold text-white">{price}</div>
                    <BlurButton
                    anyText='Shop Now'
                    />
                </div>
            </div>
        </div>
    )
}