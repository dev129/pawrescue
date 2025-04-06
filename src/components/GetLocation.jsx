'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import {GetLocationDetails} from '../components/GetLocationDetails';

const GetLocation = () => {
  // Create a function to fetch the geolocation coordinates
  const [location, setLocation] = useState({ latitude: null, longitude: null }); // Temporary state to hold the coordinates before passing
  const [postcode, setPostcode] = useState(null); // Temporary state to hold the postcode 
  const [rescueCenters, setRescueCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  
  setPostcode(GetLocationDetails(location.latitude, location.longitude)); // Call the function to get the location details
  // Function to call OpenCage API with latitude and longitude

  // Function to get the position and pass the coordinates to OpenCageLoc
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Set location once coordinates are obtained
    setLocation({ latitude, longitude });

    // Call OpenCage API with the fetched coordinates
    OpenCageLoc(latitude, longitude);
  }

  // Function to get the current geolocation
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, (err) => {
        console.log('Error getting location:', err);
        setLoading(false);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }

  // Use useEffect to get location once when component mounts
  useEffect(() => {
    getLocation();
  }, []);

  //Nearest Rescue Center API call
  const getNearestRescueCenters = async () => {
    try {
      const response = await axios.get(`https://pawrescue-hok2.onrender.com/rescue-center/nearest/${postcode}`);
      console.log(response.data.rescueCenters?.[0] || response.data); // Handle the response data as needed
      
      // Check if response has rescueCenters property or is directly an array
      if (response.data.rescueCenters) {
        setRescueCenters(response.data.rescueCenters);
      } else if (Array.isArray(response.data)) {
        setRescueCenters(response.data);
      } else {
        // If it's a single object, put it in an array
        setRescueCenters([response.data]);
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching rescue centers:', error);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    if (postcode !== null) {
      getNearestRescueCenters(); // Call the function to get nearest rescue centers when postcode is available
    }
  }, [postcode]);

  // Format address details for display
  const formatAddress = (center) => {
    return `${center.address_line_1}, ${center.city}, ${center.state}`;
  };

  // Conditional rendering for loading state
  if (loading || location.latitude === null || location.longitude === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Finding nearby rescue centers...</p>
        </div>
      </div>
    );
  }

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
        {rescueCenters && rescueCenters.length > 0 ? (
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
                        <span className="ml-1 text-gray-700">4.5</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Registration: {center.reg_num}</p>
                  </div>

                  {/* Location and Distance */}
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div className="ml-2">
                      <p className="text-gray-700">{formatAddress(center)}</p>
                      {center.distance === 0 ? (
                        <p className="text-sm text-green-600 font-medium">Nearest Center</p>
                      ) : (
                        <p className="text-sm text-gray-500">{center.distance} km away</p>
                      )}
                    </div>
                  </div>

                  {/* Hours and Status */}
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div className="ml-2">
                      <span className="text-sm text-green-600">
                        Open Now
                      </span>
                      <span className="text-gray-500 text-sm ml-2">• 9:00 AM - 5:00 PM</span>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {center.facilities && center.facilities.map((facility, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {facility}
                        </span>
                      ))}
                      {center.specializations && center.specializations.map((spec, idx) => (
                        <span 
                          key={`spec-${idx}`}
                          className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capacity and Last Updated */}
                  <div className="text-sm text-gray-500 border-t pt-4 mt-4">
                    <div className="flex justify-between">
                      <span>Pincode: {center.pincode}</span>
                      {center.landmark && (
                        <span className="truncate">Landmark: {center.landmark}</span>
                      )}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="flex justify-between gap-2">
                    <button className="w-1/2 mt-4 bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-300 flex items-center justify-center" onClick={()=>window.location.href='tel:+916376689096'}>
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Center
                    </button>
                    <button
  onClick={() => window.location.href = 'mailto:devanshvishwa2004@gmail.com'}
  className="w-1/2 mt-4 bg-white py-2 px-4 rounded-lg text-pink-700 border border-pink-300 hover:bg-pink-50 transition duration-300 flex items-center justify-center"
>
  <span className="mr-2">📩</span>
  Mail them
</button>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-600">No rescue centers found near your location.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetLocation;