import React from "react";
import { Star } from "lucide-react";

export default function CourtCard({
  img,
  rating,
  courtType,
  cardsHeading,
  cardsText,
  openingDays,
  time,
  price,
  details,
}) {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white flex flex-col">
      {/* Image Section */}
      <div className="relative">
        <img
          src={img}
          alt={cardsHeading}
          className="w-full h-100 object-cover"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center shadow">
          <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
          <span className="text-sm font-medium">{rating}</span>
        </div>

        {/* Court Type */}
        <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow">
          {courtType}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h1 className="text-lg font-semibold">{cardsHeading}</h1>
          <p className="text-sm text-gray-600 mt-1">{cardsText}</p>

          <div className="flex justify-between gap-4 text-sm text-gray-700 mt-3">
            <span className="flex items-center gap-1">
               {openingDays}
            </span>
            <span className="flex items-center gap-1"> {time}</span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold">{price} <span className="text-sm font-normal text-gray-600">Per hour</span></span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition">
            {details}
          </button>
        </div>
      </div>
    </div>
  );
}
