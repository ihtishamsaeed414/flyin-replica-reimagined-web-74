
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Globe, User } from "lucide-react";
import LogoSVG from "../assets/logo.svg";

const NAV_LINKS = [
  { name: "Flights", href: "#flights" },
  { name: "Hotels", href: "#hotels" },
  { name: "Flight + Hotel", href: "#packages" },
  { name: "Activities", href: "#activities" },
  { name: "Offers", href: "#offers" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={LogoSVG} alt="Flyin Logo" className="h-8 w-auto" />
            </a>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4 text-gray-600" />
              <span className="text-gray-600 text-sm">EN</span>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t shadow-lg animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center space-x-4 px-3">
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600 text-sm">EN</span>
              </div>
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center space-x-1">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
