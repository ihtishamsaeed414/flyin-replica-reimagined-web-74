
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const offers = [
  {
    id: 1,
    title: "Summer Special",
    description: "Get up to 30% off on summer flights to popular destinations",
    badge: "Limited Time",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Hotel Deals",
    description: "Book 3 nights and get the 4th night free at select hotels",
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Early Bird Discount",
    description: "Book 60 days in advance and save up to 25% on flights",
    badge: "New",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
];

const OffersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Special Offers</h2>
          <Button variant="ghost" className="text-primary hover:text-primary-dark">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                {offer.badge && (
                  <Badge className="absolute top-3 right-3 bg-secondary hover:bg-secondary-dark">
                    {offer.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-primary hover:bg-primary-light">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
