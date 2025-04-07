import React from 'react';
import { AiFillMail } from "react-icons/ai"; 
import { MapPin, Star, Shield, Clock, Phone, Check } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';

const RescueCenterCard = () => {
  // Sample data for rescue centers
  const rescueCenters = [
    {
      name: "People For Animals (PFA) Ludhiana",
      rating: 4.5,
      reviews: 120,
      verified: true,
      location: "2696/1A, Near King Palace, Sunder Nagar, Ludhiana-141007, Punjab",
      distance: "Approximately 5 km away",
      openNow: true,
      hours: "24/7",
      phone: "08146566551",
      specialties: ["Wildlife Rescue", "Animal Rehabilitation"],
      capacity: "Information not available",
      lastUpdated: "Updated recently"
    },
    {
      name: "Animals Red Cross",
      rating: 4.2,
      reviews: 85,
      verified: true,
      location: "Save the Birds, Local Bus Stand, Ludhiana, 141008, Punjab, India",
      distance: "Approximately 6 km away",
      openNow: true,
      hours: "9:00 AM - 6:00 PM",
      phone: "9646050550",
      specialties: ["Bird Rescue", "Animal Welfare"],
      capacity: "Information not available",
      lastUpdated: "Updated recently"
    },
    {
      name: "J B Animal Co.",
      rating: 4.0,
      reviews: 60,
      verified: true,
      location: "3711, Ab 18, Gali No 1, Model Gram, Ludhiana, 141002, Punjab, India",
      distance: "Approximately 4 km away",
      openNow: false,
      hours: "10:00 AM - 5:00 PM",
      phone: "9814030014",
      specialties: ["Animal Welfare"],
      capacity: "Information not available",
      lastUpdated: "Updated recently"
    }
  ];
  

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mt-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nearby Rescue Centers 
          </h1>
          <p className="text-lg text-gray-600">
            Find trusted animal rescue centers in your area
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rescueCenters.map((center, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition duration-300">
                <CardContent className="p-6">
                {/* Header Info */}
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900">{center.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-700">{center.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{center.reviews} reviews</p>
                </div>

                {/* Location and Distance */}
                <div className="flex items-start mb-4">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div className="ml-2">
                    <p className="text-gray-700">{center.location}</p>
                    <p className="text-sm text-gray-500">{center.distance}</p>
                  </div>
                </div>

                {/* Hours and Status */}
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div className="ml-2">
                    <span className={`text-sm ${center.openNow ? 'text-green-600' : 'text-red-600'}`}>
                      {center.openNow ? 'Open Now' : 'Closed'}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">• {center.hours}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {center.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capacity and Last Updated */}
                <div className="text-sm text-gray-500 border-t pt-4 mt-4">
                  <div className="flex justify-between">
                    <span>{center.capacity}</span>
                    <span>{center.lastUpdated}</span>
                  </div>
                </div>

                {/* Contact Button */}
                <div className='flex  justify-between gap-2'>
                <button className="w-1/2 mt-4 bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-300 flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Center
                </button>
                <button className="w-1/2 mt-4 bg-white py-2 px-4 rounded-lg text-pink-700 transition duration-300 flex items-center justify-center" >
                  <AiFillMail className="w-4 h-4 mr-2" />
                  Mail them
                </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RescueCenterCard;