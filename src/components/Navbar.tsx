
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Globe, Phone, Tag } from "lucide-react";
import LogoSVG from "../assets/logo.svg";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Flights", href: "#flights" },
  { name: "Hotels", href: "#hotels" },
  { name: "Flight + Hotel", href: "#packages" },
  { name: "Staycations", href: "#staycations" },
  { name: "Activities", href: "#activities" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2F3C7E] text-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={LogoSVG} alt="Flyin Logo" className="h-8 w-auto" />
            </a>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-white/80 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Deals Button with Badge */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-white hover:text-white/80"
            >
              <Tag className="mr-2 h-4 w-4" />
              <span>Deals</span>
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                7
              </span>
            </Button>

            {/* Sign In */}
            <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
              Sign In
            </Button>

            {/* My Bookings */}
            <Button variant="ghost" size="sm" className="text-white hover:text-white/80">
              My Bookings
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-white hover:text-white/80">
                  <Globe className="h-4 w-4" />
                  <span>عربي | SAR</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <DropdownMenuItem>English | USD</DropdownMenuItem>
                <DropdownMenuItem>عربي | SAR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Phone Number */}
            <div className="flex items-center text-white">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+966112246333</span>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:text-white/80"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2F3C7E] px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10 shadow-lg animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-3 border-t border-white/10">
            <div className="space-y-2 px-3">
              <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:text-white/80">
                <Tag className="mr-2 h-4 w-4" />
                Deals
                <span className="ml-2 bg-secondary text-white text-xs rounded-full px-2">7</span>
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:text-white/80">
                Sign In
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start text-white hover:text-white/80">
                My Bookings
              </Button>
              <div className="flex items-center text-white py-2">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+966112246333</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
