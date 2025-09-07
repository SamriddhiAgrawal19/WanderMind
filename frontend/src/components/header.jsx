import Button from "./Button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-200 via-blue-500 to-purple-400">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              WanderMind
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-foreground hover:text-travel-blue transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#destinations"
              className="text-foreground hover:text-travel-blue transition-colors font-medium"
            >
              Destinations
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-travel-blue transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-travel-blue transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

           {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to = "/signin">
            <button className="font-medium">Sign In</button>
            </Link>
            <button
  className="text-white px-6 py-2 rounded-md 
             bg-gradient-to-r from-blue-200 via-blue-500 to-purple-400
             font-semibold shadow-md hover:opacity-90 transition-opacity"
>
  Get Started
</button>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
  

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-foreground hover:text-travel-blue transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#destinations"
                className="text-foreground hover:text-travel-blue transition-colors font-medium"
              >
                Destinations
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-travel-blue transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-travel-blue transition-colors font-medium"
              >
                Contact
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="ghost" className="font-medium justify-start">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="text-sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
