
import React from "react";
import Navbar from "../components/Navbar";
import HeroSearch from "../components/HeroSearch";
import DestinationCard from "../components/DestinationCard";
import OffersSection from "../components/OffersSection";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: "from $299",
    description: "Explore the city of luxury",
  },
  {
    id: 2,
    name: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: "from $499",
    description: "Visit iconic landmarks",
  },
  {
    id: 3,
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: "from $459",
    description: "The city of romance",
  },
  {
    id: 4,
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: "from $899",
    description: "Experience Japanese culture",
  },
  {
    id: 5,
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: "from $549",
    description: "The city that never sleeps",
  },
  {
    id: 6,
    name: "Sydney",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: "from $779",
    description: "Beaches and iconic opera house",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSearch />
        
        {/* Popular Destinations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Popular Destinations</h2>
              <Button variant="ghost" className="text-primary hover:text-primary-dark">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  name={destination.name}
                  image={destination.image}
                  price={destination.price}
                  description={destination.description}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Flyin</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                We offer the best travel experience with great deals and excellent customer service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
                <p className="text-white/70">
                  Find a lower price? We'll match it and give you an additional discount.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 8h2v2h-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                <p className="text-white/70">
                  Our support team is available around the clock to assist you with any queries.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10v4h2v-4h3l-4-4-4 4h3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Booking Process</h3>
                <p className="text-white/70">
                  Book flights and hotels in just a few clicks with our user-friendly platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Special Offers Section */}
        <OffersSection />
        
        {/* App Download Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
                <p className="text-gray-600 mb-6">
                  Get exclusive mobile-only deals and manage your bookings on-the-go with our easy-to-use app.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="block">
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-12"
                    />
                  </a>
                  <a href="#" className="block">
                    <img
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                      alt="Download on the App Store"
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="bg-primary rounded-3xl shadow-xl overflow-hidden transform -rotate-6">
                    <div className="p-4 h-96 w-64"></div>
                  </div>
                  <div className="absolute inset-0 bg-white rounded-3xl shadow-lg overflow-hidden">
                    <div className="p-4 flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                          <img src="/src/assets/logo.svg" alt="Flyin App" className="h-12" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Flyin App</h3>
                        <p className="text-gray-600 mb-4">Book and manage your trips easily</p>
                        <div className="w-32 h-4 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <div className="w-40 h-4 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <div className="w-36 h-4 bg-gray-200 rounded-full mx-auto"></div>
                        <div className="mt-8">
                          <Button className="bg-secondary hover:bg-secondary-dark text-white">
                            Download Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
