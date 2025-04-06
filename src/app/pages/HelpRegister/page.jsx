'use client'
import { useState, useRef } from 'react'
import { Camera, Upload, MapPin, Phone, User, PawPrint, Home, Building, Send, X } from 'lucide-react'
import Image from 'next/image'

const RescueForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    animalType: '',
    phoneNumber: '',
    address: '',
    pincode: '',
    city: '',
    image: null
  })
  
  const [previewImage, setPreviewImage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [tempFormData, setTempFormData] = useState(null)
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({
        ...formData,
        image: file
      })
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearImage = () => {
    setPreviewImage(null)
    setFormData({
      ...formData,
      image: null
    })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    if (cameraInputRef.current) {
      cameraInputRef.current.value = ''
    }
  }

  const triggerCameraInput = () => {
    if (cameraInputRef.current) {
      cameraInputRef.current.click()
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setTempFormData(formData)
    setShowConfirmation(true)
  }

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true)
    setShowConfirmation(false)
    
    try {
      const dataToSubmit = new FormData()
      for (const key in tempFormData) {
        if (tempFormData[key]) {
          dataToSubmit.append(key, tempFormData[key])
        }
      }
      
      const response = await fetch('/api/rescue-request', {
        method: 'POST',
        body: dataToSubmit
      })
      
      if (response.ok) {
        setFormData({
          name: '',
          animalType: '',
          phoneNumber: '',
          address: '',
          pincode: '',
          city: '',
          image: null
        })
        setPreviewImage(null)
        setSubmitSuccess(true)
        
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 3000)
      } else {
        throw new Error('Failed to submit the rescue request')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white text-black rounded-xl shadow-md overflow-hidden">
        <div className="bg-pink-600 py-6 px-6">
          <h2 className="text-2xl font-bold text-white text-center">Animal Rescue Request</h2>
          <p className="text-pink-100 text-center mt-2">Please provide details about the animal in need</p>
        </div>
        
        {submitSuccess && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 mx-6 mt-6 rounded">
            <p className="font-medium">Request submitted successfully!</p>
            <p>Our rescue team will contact you shortly.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="py-6 px-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Your Information</h3>
            
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm py-2 border px-3"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            
            <div className="relative">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm py-2 border px-3"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>
          </div>
          
          {/* Animal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Animal Information</h3>
            
            <div>
              <label htmlFor="animalType" className="block text-sm font-medium text-gray-700 mb-1">Type of Animal</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PawPrint className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="animalType"
                  name="animalType"
                  value={formData.animalType}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm py-2 border px-3"
                  required
                >
                  <option value="">Select animal type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="rabbit">Rabbit</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            {/* Image Upload Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image of Injured Animal</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                {previewImage ? (
                  <div className="w-full relative">
                    <button 
                      type="button" 
                      onClick={clearImage} 
                      className="absolute top-0 right-0 bg-red-500 rounded-full p-1 text-white shadow-sm hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                    <img 
                      src={previewImage} 
                      alt="Preview" 
                      className="mx-auto h-48 object-contain rounded" 
                    />
                  </div>
                ) : (
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex justify-center text-sm text-gray-600">
                      <div className="flex flex-col items-center">
                        <p className="text-xs text-gray-500 mb-2">Upload a photo of the injured animal</p>
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            onClick={triggerCameraInput}
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs font-medium rounded text-white bg-pink-600 hover:bg-pink-700"
                          >
                            <Camera className="h-4 w-4 mr-1" />
                            Camera
                          </button>
                          <button
                            type="button"
                            onClick={triggerFileInput}
                            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700"
                          >
                            <Upload className="h-4 w-4 mr-1" />
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="sr-only"
                />
                <input
                  ref={cameraInputRef}
                  id="camera-upload"
                  name="camera-upload"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImageChange}
                  className="sr-only"
                />
              </div>
            </div>
          </div>
          
          {/* Location Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Location Details</h3>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Home className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm py-2 border px-3"
                  placeholder="Street address where the animal is located"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm py-2 border px-3"
                    placeholder="123456"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm py-2 border px-3"
                    placeholder="City name"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                isSubmitting ? 'bg-pink-400' : 'bg-pink-600 hover:bg-pink-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit Rescue Request
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black text-black  bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-lg font-bold mb-4">Confirm Submission</h3>
            <p className="mb-4">Please review your details before submitting:</p>
            
            <div className="space-y-2">
              <p><strong>Name:</strong> {tempFormData.name}</p>
              <p><strong>Animal Type:</strong> {tempFormData.animalType}</p>
              <p><strong>Phone Number:</strong> {tempFormData.phoneNumber}</p>
              <p><strong>Address:</strong> {tempFormData.address}</p>
              <p><strong>Pincode:</strong> {tempFormData.pincode}</p>
              <p><strong>City:</strong> {tempFormData.city}</p>
              {tempFormData.image && (
                <div>
                  <strong>Image:</strong>
                  <img src={previewImage} alt="Preview" className="h-24 mt-2" />
                </div>
              )}
            </div>
            
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmit}
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RescueForm