import { Sparkles, Map, Brain } from "lucide-react";
import  TravelIcon  from "./TravelIcon";
import React from 'react'

const SecondarySection = () => {
  return (
   <section className="py-24 px-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Statement */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
            Powered by{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              AI + Google Maps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            WanderMind crafts personalized itineraries so you can focus on enjoying the journey.
          </p>
        </div>
        
        {/* Feature Icons */}
        <div className="flex justify-center items-center gap-12 md:gap-16">
          <div className="flex flex-col items-center">
            <div className="mb-2 p-2 rounded-full bg-white shadow-soft">
              <TravelIcon icon={Brain} size={40} />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Smart AI</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-2 p-2 rounded-full bg-white shadow-soft">
              <TravelIcon icon={Map} size={40} />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Live Maps</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-2 p-2 rounded-full bg-white shadow-soft">
              <TravelIcon icon={Sparkles} size={40} />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Hidden Gems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;
