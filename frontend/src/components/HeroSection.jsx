import React from "react";
import  Button  from "./Button"; 
import travelLandmarksBg from "../assets/travel-landmarks-bg.jpg";
import { Globe, MapPin, Plane, Compass } from "lucide-react";
import { TravelIcon } from './TravelIcon';
import { Link } from "react-router-dom";




const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${travelLandmarksBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-white/65" />
      </div>
      
      {/* Floating Travel Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 animate-float">
          <TravelIcon icon={Globe} size={32} className="opacity-60" />
        </div>
        <div className="absolute top-32 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <TravelIcon icon={MapPin} size={28} className="opacity-50" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float" style={{ animationDelay: '2s' }}>
          <TravelIcon icon={Plane} size={36} className="opacity-70" />
        </div>
        <div className="absolute bottom-20 right-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
          <TravelIcon icon={Compass} size={30} className="opacity-60" />
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent">
  Wander Smarter
</span>


          <br />
          <span className="text-foreground">with AI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay">
          Your personal AI-powered travel companion that curates trips, discovers hidden gems, and makes travel effortless.
        </p>
        
        <div className="animate-fade-in-up-delay" style={{ animationDelay: '0.6s' }}>
          <Link to = '/signin'>
          <Button size="lg" className="text-xl px-12 py-6 border-none">
            Start Planning
          </Button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};


export default HeroSection

