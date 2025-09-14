import React from 'react'


export default function Card({img, title, subtitle, price, badge}){
return (
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="relative">
<img src={img} alt="" className="w-full h-52 object-cover rounded-t-2xl" />
{badge && (
<div className="absolute top-3 left-3 bg-white/80 px-3 py-1 rounded-full text-xs">{badge}</div>
)}
</div>
<div className="p-4">
<h3 className="font-semibold text-lg">{title}</h3>
{subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
<div className="mt-4 flex items-center justify-between">
<div className="text-lg font-bold">{price}</div>
<button className="px-4 py-2 rounded-full bg-primary text-white text-sm">View Details</button>
</div>
</div>
</div>
)
}