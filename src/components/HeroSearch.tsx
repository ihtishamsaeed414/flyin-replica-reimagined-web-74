
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowRight, 
  Calendar as CalendarIcon,
  Airplay,
  Building,
  Bed,
  MapPin
} from "lucide-react";

const HeroSearch = () => {
  const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [tripType, setTripType] = useState("roundtrip");
  const [nonStop, setNonStop] = useState(false);
  const [flexibleDates, setFlexibleDates] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[#2F3C7E] min-h-[400px]">
      <div className="absolute inset-0">
        <img 
          src="/src/assets/flight-pattern.svg" 
          alt="Background pattern" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative container mx-auto px-4 py-8">
        <Tabs defaultValue="flights" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-5 h-auto p-0 bg-transparent gap-1">
            <TabsTrigger 
              value="flights"
              className="flex items-center gap-2 py-3 text-white data-[state=active]:text-[#2F3C7E] data-[state=active]:bg-white"
            >
              <Airplay className="h-4 w-4" />
              <span>Flights</span>
            </TabsTrigger>
            <TabsTrigger 
              value="hotels"
              className="flex items-center gap-2 py-3 text-white data-[state=active]:text-[#2F3C7E] data-[state=active]:bg-white"
            >
              <Building className="h-4 w-4" />
              <span>Hotels</span>
            </TabsTrigger>
            <TabsTrigger 
              value="packages"
              className="flex items-center gap-2 py-3 text-white data-[state=active]:text-[#2F3C7E] data-[state=active]:bg-white"
            >
              <Bed className="h-4 w-4" />
              <span>Flight + Hotel</span>
            </TabsTrigger>
            <TabsTrigger 
              value="staycations"
              className="flex items-center gap-2 py-3 text-white data-[state=active]:text-[#2F3C7E] data-[state=active]:bg-white"
            >
              <Building className="h-4 w-4" />
              <span>Staycations</span>
            </TabsTrigger>
            <TabsTrigger 
              value="activities"
              className="flex items-center gap-2 py-3 text-white data-[state=active]:text-[#2F3C7E] data-[state=active]:bg-white"
            >
              <MapPin className="h-4 w-4" />
              <span>Activities</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flights" className="mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex gap-4 mb-6">
                <Button 
                  variant={tripType === "roundtrip" ? "default" : "outline"}
                  onClick={() => setTripType("roundtrip")}
                  className="text-white border-white hover:bg-white hover:text-[#2F3C7E]"
                >
                  Round Trip
                </Button>
                <Button 
                  variant={tripType === "oneway" ? "default" : "outline"}
                  onClick={() => setTripType("oneway")}
                  className="text-white border-white hover:bg-white hover:text-[#2F3C7E]"
                >
                  One Way
                </Button>
                <Button 
                  variant={tripType === "multi" ? "default" : "outline"}
                  onClick={() => setTripType("multi")}
                  className="text-white border-white hover:bg-white hover:text-[#2F3C7E]"
                >
                  Multi City
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2">
                  <Input 
                    placeholder="City or Airport"
                    className="bg-white h-12"
                  />
                </div>
                <div className="md:col-span-2">
                  <Input 
                    placeholder="City or Airport"
                    className="bg-white h-12"
                  />
                </div>
                <div>
                  <Button className="w-full h-12 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#2F3C7E]">
                    SEARCH
                  </Button>
                </div>
                <div className="md:col-span-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 bg-white justify-start"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Pick a date
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
                  <div className="md:col-span-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full h-12 bg-white justify-start"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          Pick a date
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

              <div className="flex items-center gap-6 mt-4 text-white">
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    checked={nonStop} 
                    onCheckedChange={(checked) => setNonStop(checked as boolean)}
                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#2F3C7E]"
                  />
                  <span>Non stop flight</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox 
                    checked={flexibleDates} 
                    onCheckedChange={(checked) => setFlexibleDates(checked as boolean)}
                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#2F3C7E]"
                  />
                  <span>Flexible dates ± 3 days</span>
                </label>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hotels" className="mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2">
                  <Input 
                    placeholder="City or specific hotel"
                    className="bg-white h-12"
                  />
                </div>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 bg-white justify-start"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Pick a date
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
                <div>
                  <Input 
                    value="00 Nights"
                    readOnly
                    className="bg-white h-12"
                  />
                </div>
                <div>
                  <Button className="w-full h-12 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#2F3C7E]">
                    SEARCH
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="packages" className="mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex gap-4 mb-6">
                <Button 
                  variant={tripType === "roundtrip" ? "default" : "outline"}
                  onClick={() => setTripType("roundtrip")}
                  className="text-white border-white hover:bg-white hover:text-[#2F3C7E]"
                >
                  Round Trip
                </Button>
                <Button 
                  variant={tripType === "oneway" ? "default" : "outline"}
                  onClick={() => setTripType("oneway")}
                  className="text-white border-white hover:bg-white hover:text-[#2F3C7E]"
                >
                  One Way
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2">
                  <Input 
                    placeholder="City or Airport"
                    className="bg-white h-12"
                  />
                </div>
                <div className="md:col-span-2">
                  <Input 
                    placeholder="City or Airport"
                    className="bg-white h-12"
                  />
                </div>
                <div>
                  <Button className="w-full h-12 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#2F3C7E]">
                    SEARCH
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <label className="flex items-center space-x-2 text-white">
                  <Checkbox 
                    className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#2F3C7E]"
                  />
                  <span>My hotel stay is on different dates</span>
                </label>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="staycations" className="mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center gap-4">
                <Input 
                  placeholder="Search By City Name"
                  className="bg-white h-12"
                />
                <Button className="h-12 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#2F3C7E]">
                  SEARCH
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activities" className="mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-center text-white">
                <p>Activities search coming soon</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HeroSearch;
