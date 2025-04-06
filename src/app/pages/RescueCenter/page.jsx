'use client';
import { useState } from 'react';
import { AlertCircle, Upload, CheckCircle } from 'lucide-react';
import Button from "../../../components/ui/Button";
import { Card, CardContent, CardTitle, CardFooter } from "../../../components/ui/Card";
import { Alert, AlertTitle, AlertDescription } from "../../../components/ui/alert";
import axios from 'axios';

const RescueCenterRegistration = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    role: 'rescue_center', // Default role
  });

  const [rescueCenterDetails, setRescueCenterDetails] = useState({
    name: '',
    reg_num: '',
    address_line_1: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
    facilities: [],
  });

  const [files, setFiles] = useState({
    form_12a: null,
    form_13a: null
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle user data input changes
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle rescue center details input changes
  const handleRescueCenterInputChange = (e) => {
    const { name, value } = e.target;
    setRescueCenterDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file uploads
  const handleFileUpload = (e) => {
    const { name, files: uploadedFiles } = e.target;
    if (uploadedFiles[0]) {
      // Validate file type
      if (!uploadedFiles[0].type.includes('pdf')) {
        setError('Please upload PDF files only');
        return;
      }
      // Validate file size (5MB limit)
      if (uploadedFiles[0].size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      setFiles(prev => ({
        ...prev,
        [name]: uploadedFiles[0]
      }));
      setError('');
    }
  };

  // Handle checkbox changes for facilities
  const handleFacilityChange = (facility) => {
    setRescueCenterDetails(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      // Create FormData object for file upload
      const formData = new FormData();
      
      // Append user data
      Object.keys(userData).forEach(key => {
        formData.append(key, userData[key]);
      });
      
      // Append rescue center details as JSON string
      formData.append('rescueCenterDetails', JSON.stringify(rescueCenterDetails));
      
      // Append files
      if (files.form_12a) {
        formData.append('form_12a', files.form_12a);
      } else {
        throw new Error('Form 12A is required');
      }
      
      if (files.form_13a) {
        formData.append('form_13a', files.form_13a);
      } else {
        throw new Error('Form 13A is required');
      }
      
      // API call to register user with rescue center details
      const response = await axios.post('https://pawrescue-hok2.onrender.com/user',formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // return console.log(response.data);
    
      
      setSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSuccess(false);
        setUserData({
          name: '',
          email: '',
          password: '',
          contact: '',
          role: 'rescue_center',
        });
        setRescueCenterDetails({
          name: '',
          reg_num: '',
          address_line_1: '',
          city: '',
          state: '',
          pincode: '',
          landmark: '',
          facilities: [],
        });
        setFiles({
          form_12a: null,
          form_13a: null
        });
      }, 3000);
    } catch (err) {
      console.log(err);
      setError(err.message || 'Something went wrong');
    } finally {
    
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 to-red-500 py-12 text-black">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardTitle>
            <CardTitle className="text-3xl font-bold text-center p-4">
              Rescue Center Registration
            </CardTitle>
          </CardTitle>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* User Information */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">User Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleUserInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleUserInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={userData.password}
                      onChange={handleUserInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      value={userData.contact}
                      onChange={handleUserInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                </div>
              </section>

              {/* Center Information */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Rescue Center Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Center Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={rescueCenterDetails.name}
                      onChange={handleRescueCenterInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Registration Number *
                    </label>
                    <input
                      type="text"
                      name="reg_num"
                      value={rescueCenterDetails.reg_num}
                      onChange={handleRescueCenterInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                </div>
              </section>

              {/* Address Information */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Address Line 1 *
                    </label>
                    <input
                      type="text"
                      name="address_line_1"
                      value={rescueCenterDetails.address_line_1}
                      onChange={handleRescueCenterInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={rescueCenterDetails.city}
                        onChange={handleRescueCenterInputChange}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={rescueCenterDetails.state}
                        onChange={handleRescueCenterInputChange}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={rescueCenterDetails.pincode}
                        onChange={handleRescueCenterInputChange}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Landmark
                    </label>
                    <input
                      type="text"
                      name="landmark"
                      value={rescueCenterDetails.landmark}
                      onChange={handleRescueCenterInputChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                </div>
              </section>

              {/* Facilities */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Facilities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Surgery Room',
                    'Isolation Ward',
                    'Recovery Room',
                    'Emergency Care',
                    'Laboratory',
                    'Pharmacy'
                  ].map(facility => (
                    <label key={facility} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={rescueCenterDetails.facilities.includes(facility) || false}
                        onChange={() => handleFacilityChange(facility)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">{facility}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Document Upload */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Required Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Form 12A Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Form 12A *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name="form_12a"
                        onChange={handleFileUpload}
                        accept=".pdf"
                        required
                        className="hidden"
                        id="form_12a"
                      />
                      <label
                        htmlFor="form_12a"
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        {files.form_12a ? files.form_12a.name : 'Upload Form 12A'}
                      </label>
                    </div>
                  </div>

                  {/* Form 13A Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Form 13A *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name="form_13a"
                        onChange={handleFileUpload}
                        accept=".pdf"
                        required
                        className="hidden"
                        id="form_13a"
                      />
                      <label
                        htmlFor="form_13a"
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        {files.form_13a ? files.form_13a.name : 'Upload Form 13A'}
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Success Message */}
              {success && (
                <Alert variant="default" className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>Your rescue center has been successfully registered!</AlertDescription>
                </Alert>
              )}

              <CardFooter className="pt-6">
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-full'
                >
                  {loading ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RescueCenterRegistration;