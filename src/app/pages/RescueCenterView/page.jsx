import React from 'react';
import { MapPin, Star, Shield, Clock, Phone, Check } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';

const RescueCenterCard = () => {
  // Sample data for rescue centers
  const rescueCenters = [
    {
      name: "Helping Paws Sanctuary",
      rating: 4.8,
      reviews: 238,
      verified: true,
      location: "123 Care Lane, Pawsville",
      distance: "2.5 miles away",
      openNow: true,
      hours: "8:00 AM - 8:00 PM",
      phone: "(555) 123-4567",
      specialties: ["Dogs", "Cats", "Emergency Care"],
      capacity: "Current: 45/50 animals",
      lastUpdated: "Updated 2 hours ago"
    },
    {
      name: "Second Chance Animal Haven",
      rating: 4.6,
      reviews: 186,
      verified: true,
      location: "456 Hope Street, Pawsville",
      distance: "3.8 miles away",
      openNow: true,
      hours: "9:00 AM - 7:00 PM",
      phone: "(555) 987-6543",
      specialties: ["Exotic Pets", "Wildlife", "Rehabilitation"],
      capacity: "Current: 28/35 animals",
      lastUpdated: "Updated 5 hours ago"
    },
    {
      name: "Furry Friends Rescue",
      rating: 4.9,
      reviews: 312,
      verified: true,
      location: "789 Rescue Road, Pawsville",
      distance: "1.2 miles away",
      openNow: false,
      hours: "8:30 AM - 6:30 PM",
      phone: "(555) 246-8135",
      specialties: ["Senior Pets", "Medical Care", "Foster Program"],
      capacity: "Current: 32/40 animals",
      lastUpdated: "Updated 1 hour ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
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
              {/* Image Section */}
              <div className="relative h-48 w-full">
                <img
                  src={`https://picsum.photos/seed/${index}/800/400`}
                  alt={center.name}
                  className="w-full h-full object-cover"
                />
                {center.verified && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>

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
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
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
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Center
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RescueCenterCard;