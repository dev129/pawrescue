'use client';
import { useState } from 'react';
import { AlertCircle, Upload, CheckCircle } from 'lucide-react';
import  Button  from "../../../components/ui/Button";
import { Card, CardContent, CardTitle, CardFooter } from "../../../components/ui/Card";
import { Alert,AlertTitle, AlertDescription } from "../../../components/ui/alert";

const RescueCenterRegistration = () => {
  const [formData, setFormData] = useState({
    // Basic Information
    centerName: '',
    registrationNumber: '',
    yearEstablished: '',
    
    // Contact Information
    email: '',
    phone: '',
    alternatePhone: '',
    
    // Address Information
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
    
    // Operational Details
    operatingHours: '',
    emergencyService: false,
    capacity: '',
    
    // Staff Information
    veterinarians: '',
    staffCount: '',
    
    // Facilities
    facilities: [],
    specializations: [],
    
    // Documents
    form12A: null,
    form13A: null
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file uploads
  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      // Validate file type
      if (!files[0].type.includes('pdf')) {
        setError('Please upload PDF files only');
        return;
      }
      // Validate file size (5MB limit)
      if (files[0].size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
      setError('');
    }
  };

  // Handle checkbox changes for facilities
  const handleFacilityChange = (facility) => {
    setFormData(prev => ({
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
      const submitData = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'form12A' || key === 'form13A') {
          if (formData[key]) {
            submitData.append(key, formData[key]);
          }
        } else {
          submitData.append(key, 
            Array.isArray(formData[key]) 
              ? JSON.stringify(formData[key]) 
              : formData[key]
          );
        }
      });

      // Example API call - replace with your actual endpoint
      const response = await fetch('http://127.0.0.1:8000/api/rescue/', {
        method: 'POST',
        body: submitData
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setSuccess(true);
      // Reset form after successful submission
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          centerName: '',
          registrationNumber: '',
          yearEstablished: '',
          email: '',
          phone: '',
          alternatePhone: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          pincode: '',
          landmark: '',
          operatingHours: '',
          emergencyService: false,
          capacity: '',
          veterinarians: '',
          staffCount: '',
          facilities: [],
          specializations: [],
          form12A: null,
          form13A: null
        });
      }, 3000);

    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 text-black">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardTitle>
            <CardTitle className="text-3xl font-bold text-center">
              Rescue Center Registration
            </CardTitle>
          </CardTitle>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Center Name *
                    </label>
                    <input
                      type="text"
                      name="centerName"
                      value={formData.centerName}
                      onChange={handleInputChange}
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
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
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
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleInputChange}
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
                        value={formData.city}
                        onChange={handleInputChange}
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
                        value={formData.state}
                        onChange={handleInputChange}
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
                        value={formData.pincode}
                        onChange={handleInputChange}
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
                      value={formData.landmark}
                      onChange={handleInputChange}
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
                        checked={formData.facilities.includes(facility)}
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
                        name="form12A"
                        onChange={handleFileUpload}
                        accept=".pdf"
                        required
                        className="hidden"
                        id="form12A"
                      />
                      <label
                        htmlFor="form12A"
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        {formData.form12A ? formData.form12A.name : 'Upload Form 12A'}
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
                        name="form13A"
                        onChange={handleFileUpload}
                        accept=".pdf"
                        required
                        className="hidden"
                        id="form13A"
                      />
                      <label
                        htmlFor="form13A"
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        {formData.form13A ? formData.form13A.name : 'Upload Form 13A'}
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              {/* Success Message */}
              {success && (
                <Alert className="bg-green-50 text-green-700 border-green-200">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Registration submitted successfully!
                  </AlertDescription>
                </Alert>
              )}

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {loading ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RescueCenterRegistration;
