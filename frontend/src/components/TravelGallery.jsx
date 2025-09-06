import React from "react";
import beachImage from "../assets/beach-travel.jpg";
import cityImage from "../assets/city-travel.jpg";
import mountainImage from "../assets/mountain-travel.jpg";
import templeImage from "../assets/temple-image.jpg";
import villageImage from "../assets/village-image.jpg";
import foodImage from "../assets/food-image.jpg";
import festivalImage from "../assets/festivals-image.jpg";
import safariImage from "../assets/safari-image.jpg";
import historyImage from "../assets/history-image.jpg";




const TravelGallery = () => {
    const destinations = [
  {
    image: beachImage,
    title: "Tropical Paradise",
    description: "Discover pristine beaches and crystal-clear waters"
  },
  {
    image: mountainImage,
    title: "Mountain Adventures",
    description: "Explore breathtaking peaks and scenic trails"
  },
  {
    image: cityImage,
    title: "Urban Exploration", 
    description: "Experience vibrant cities and modern architecture"
  },
  {
    image: templeImage,
    title: "Spiritual Journeys",
    description: "Visit ancient temples and immerse in local traditions"
  },
  {
    image: villageImage,
    title: "Rural Escapes",
    description: "Experience authentic village life and cultural heritage"
  },

  {
    image: foodImage,
    title: "Culinary Trails",
    description: "Taste diverse cuisines and discover local flavors"
  },
  {
    image: festivalImage,
    title: "Cultural Festivals",
    description: "Celebrate colors, music, and traditions worldwide"
  },
  {
    image: safariImage,
    title: "Wildlife Safaris",
    description: "Witness majestic animals in their natural habitats"
  },
  {
    image: historyImage,
    title: "Historical Landmarks",
    description: "Explore ancient ruins and UNESCO World Heritage Sites"
  },

];

  return (
    <section className="py-24 px-6" id="destinations">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Amazing{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           From serene shores to sacred shrines, from rural escapes to lively festivals — WanderMind helps you discover the soul of every journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-travel transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                <p className="text-white/90 text-sm">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default TravelGallery
