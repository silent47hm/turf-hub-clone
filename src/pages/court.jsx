import React from "react";
import FilterButton from "../components/FilterButton.jsx";
import CourtCard from "../components/courtcard.jsx";
import HeaderMain from "../components/header.jsx";
import FooterMain from "../components/footer.jsx";

export default function Courts() {
  const items = [
    {
      img: "/court/court1.jpg",
      rating: "4.5",
      courtType: "Hard Court",
      cardsHeading: "Grand slam Arena,Downtown",
      cardsText:
        "We are more than just a platform — we are a community built for athletes, trainers, event organizers, and sports enthusiasts.",
      openingDays: "Open 7 days a week",
      time: "5 AM to 10 PM",
      price: "$10.32",
      details: "View Details",
    },
    {
      img: "/court/court2.jpg",
      rating: "4.2",
      courtType: "Clay Court",
      cardsHeading: "Premier Tennis Grounds",
      cardsText:
        "Premium clay courts maintained daily for a professional experience.",
      openingDays: "Open 6 days a week",
      time: "6 AM to 9 PM",
      price: "$12.00",
      details: "View Details",
    },
    {
      img: "/court/court3.jpg",
      rating: "4.8",
      courtType: "Artificial Turf",
      cardsHeading: "Soccer Field",
      cardsText:
        "Ideal artificial turf field for soccer matches and training sessions.",
      openingDays: "Open 6 days a week",
      time: "7 AM to 11 PM",
      price: "$9.00",
      details: "View Details",
    },
  ];

  return (
    <section className="container mx-auto">
        <div>
            <HeaderMain
                textColorButton='text-black'
                buttonUlC='underline'
            />
        </div>
        <div className="p-4 lg:py-4">
      <div className="text-center">
        <small className="bg-white/60 px-3 py-1 rounded-full text-xs">
          Featured Courts
        </small>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Discover top tennis courts with great
          <br /> facilities and prime locations.
        </h2>
      </div>

      <div className="mt-8 flex items-center justify-between flex-wrap gap-3">
        <div className="flex gap-3 flex-wrap">
          <FilterButton active>All Courts</FilterButton>
          <FilterButton>Clay Court</FilterButton>
          <FilterButton>Hard Courts</FilterButton>
          <FilterButton>Artificial Courts</FilterButton>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full border flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
            →
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <CourtCard key={idx} {...it} />
        ))}
      </div>
      </div>
      <div>
        <FooterMain/>
      </div>
    </section>
  );
}
