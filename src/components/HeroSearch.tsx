
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon, Search, ArrowRight, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const HeroSearch = () => {
  const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [tripType, setTripType] = useState("roundtrip");
  
  return (
    <div className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img 
          src="/src/assets/flight-pattern.svg" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Book Flights & Hotels at the Best Prices
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find and compare the best travel deals all in one place
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-0">
              <Tabs defaultValue="flights" className="w-full">
                <TabsList className="w-full h-auto p-0 bg-gray-100">
                  <TabsTrigger 
                    value="flights"
                    className="flex-1 py-4 data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none"
                  >
                    Flights
                  </TabsTrigger>
                  <TabsTrigger 
                    value="hotels"
                    className="flex-1 py-4 data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none"
                  >
                    Hotels
                  </TabsTrigger>
                  <TabsTrigger 
                    value="packages"
                    className="flex-1 py-4 data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none"
                  >
                    Flight + Hotel
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="flights" className="m-0">
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Button 
                        variant={tripType === "roundtrip" ? "default" : "outline"}
                        onClick={() => setTripType("roundtrip")}
                        className="flex-1"
                      >
                        Round Trip
                      </Button>
                      <Button 
                        variant={tripType === "oneway" ? "default" : "outline"}
                        onClick={() => setTripType("oneway")}
                        className="flex-1"
                      >
                        One Way
                      </Button>
                      <Button 
                        variant={tripType === "multi" ? "default" : "outline"}
                        onClick={() => setTripType("multi")}
                        className="flex-1"
                      >
                        Multi-City
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                          <Input placeholder="City or Airport" />
                        </div>
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !departureDate && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={departureDate}
                                  onSelect={setDepartureDate}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                          {tripType === "roundtrip" && (
                            <div className="flex-1">
                              <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full justify-start text-left font-normal",
                                      !returnDate && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={returnDate}
                                    onSelect={setReturnDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-end gap-2">
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                            <Input placeholder="City or Airport" />
                          </div>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-10 w-10 shrink-0 rounded-full"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Travelers & Class</label>
                          <Button variant="outline" className="w-full justify-start">
                            <Users className="mr-2 h-4 w-4" />
                            <span>1 Adult, Economy</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full bg-secondary hover:bg-secondary-dark text-white py-6">
                        <Search className="mr-2 h-5 w-5" />
                        Search Flights
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="hotels" className="m-0">
                  <div className="p-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium">Hotel Search Coming Soon</h3>
                      <p className="text-gray-500">Please use the flights tab for now</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="packages" className="m-0">
                  <div className="p-6">
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium">Package Search Coming Soon</h3>
                      <p className="text-gray-500">Please use the flights tab for now</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
