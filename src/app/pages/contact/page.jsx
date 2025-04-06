"use client";
import Image from "next/image";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Page = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission removed
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mt-16">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-pink-500">
                        Connect with Us 
                    </h1>
                    <p className="text-xl md:text-2xl text-pink-400">
                        Got questions? Ideas? Or just want to say hi? We're all ears!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-900 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img
                            src="https://www.shutterstock.com/image-vector/pets-adoption-animal-shelter-people-600nw-2217568789.jpg"
                            alt="Contact Image"
                            width={800}
                            height={600}
                            className="relative z-10 transform hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>

                    <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-white mb-2"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-2 bg-pink-900 bg-opacity-50 border border-pink-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-white mb-2"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-2 bg-pink-900 bg-opacity-50 border border-pink-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 bg-pink-900 bg-opacity-50 border border-pink-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                    type="email"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="text-white block text-sm font-medium mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-2 bg-pink-900 bg-opacity-50 border border-pink-700 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg hover:from-pink-300 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300"
                            >
                                <FaPaperPlane className="inline mr-2" /> Post It
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
