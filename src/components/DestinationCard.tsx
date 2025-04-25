
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  name,
  price,
  description,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-lg font-bold text-white">{name}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-sm">{description}</span>
          <span className="font-bold text-secondary">{price}</span>
        </div>
        <Button variant="outline" className="w-full mt-2 hover:bg-primary hover:text-white">
          View Deals
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
