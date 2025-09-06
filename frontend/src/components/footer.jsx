import { Globe, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              WanderMind
            </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Your AI-powered travel companion that makes exploring the world smarter, easier, and more personalized than ever before.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Facebook className="w-5 h-5 text-gradient-to-br from-blue-300 via-blue-500 to-purple-400" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Twitter className="w-5 h-5 text-travel-blue" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Instagram className="w-5 h-5 text-travel-blue" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-travel-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-blue transition-colors">Destinations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-travel-blue transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@wandermind.ai</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 WanderMind. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-travel-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-travel-blue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-travel-blue transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
