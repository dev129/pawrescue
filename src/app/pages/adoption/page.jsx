'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DogIcon, CatIcon,  
  RabbitIcon, HeartHandshake 
} from 'lucide-react';
import Button from "../../../components/ui/Button";
import Footer from '../../../components/Footer';
const animals = [
  {
    id: 1,
    name: "Luna",
    species: "Dog",
    breed: "Golden Retriever Mix",
    age: "2 years",
    personality: "Playful and friendly",
    health: "Fully vaccinated",
    specialNeeds: false,
    image: "https://www.thesprucepets.com/thmb/6xy_Tf4mfpkCnkXX6sb3_bquIz8=/4000x0/filters:no_upscale():strip_icc()/spruce-pets-golden-shepherd-dog-profile-0422121ca60341e9bdb903f8aabde1c5.jpg"
  },
  {
    id: 2,
    name: "Whiskers",
    species: "Cat",
    breed: "Tabby",
    age: "3 years",
    personality: "Independent and calm",
    health: "Spayed/Neutered",
    specialNeeds: false,
    image: "https://pethelpful.com/.image/w_3840,q_auto:good,c_limit/NDowMDAwMDAwMDAwMDcwMDQ1/cute-tabby-cat.png"
  },
  {
    id: 3,
    name: "Hoppy",
    species: "Rabbit",
    breed: "Lop Eared",
    age: "1 year",
    personality: "Gentle and curious",
    health: "Healthy",
    specialNeeds: false,
    image: "https://www.havahart.com/media/wysiwyg/hh/cms/lc/rabbits/hh-animals-rabbit-1.png"
  },
  {
    id: 4,
    name: "Charlie",
    species: "Dog",
    breed: "Beagle",
    age: "5 years",
    personality: "Loyal and loving",
    health: "Senior care needed",
    specialNeeds: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXhnIlGUdrapEHGIW_-k_7iGC45JYwZw2cw&s"
  },
  {
    id: 5,
    name: "Tweety",
    species: "Bird",
    breed: "Parakeet",
    age: "6 months",
    personality: "Chirpy and social",
    health: "Excellent",
    specialNeeds: false,
    image: "https://static.wixstatic.com/media/nsplsh_7a4f4b724e67755a774b6f~mv2_d_6165_4110_s_4_2.jpg/v1/fill/w_2500,h_1666,al_c/nsplsh_7a4f4b724e67755a774b6f~mv2_d_6165_4110_s_4_2.jpg"
  },
  {
    id: 6,
    name: "Hammy",
    species: "Hamster",
    breed: "Syrian Hamster",
    age: "1 year",
    personality: "Active and playful",
    health: "Healthy",
    specialNeeds: false,
    image: "https://nplimages.infradoxxs.com/cache/pcache2/01138363.jpg"
  }
];

const page = () => {
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const filteredAnimals = selectedSpecies 
    ? selectedSpecies === "Misc."
      ? animals.filter(animal => !["Dog", "Cat"].includes(animal.species))
      : animals.filter(animal => animal.species === selectedSpecies)
    : animals;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 relative overflow-hidden ">
      {/* Header */}
      <div className="bg-pink-700 text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mt-4">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Every adoption is a second chance. Give a loving home to an animal in need.
          </p>
        </motion.div>
      </div>

      

      {/* Species Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          {[
            { icon: DogIcon, species: "Dog" },
            { icon: CatIcon, species: "Cat" },
            { icon: RabbitIcon, species: "Misc." }
          ].map((filter) => (
            <Button
              key={filter.species}
              variant={selectedSpecies === filter.species ? "default" : "outline"}
              className={`
                ${selectedSpecies === filter.species 
                  ? 'bg-pink-600 text-white' 
                  : 'border-pink-600 text-pink-600 hover:bg-pink-50'
                } flex items-center gap-2
              `}
              onClick={() => setSelectedSpecies(
                selectedSpecies === filter.species ? null : filter.species
              )}
            >
              <filter.icon className="w-5 h-5" />
              {filter.species}
            </Button>
          ))}
        </div>

        {/* Animal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredAnimals.map((animal) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img 
                src={animal.image} 
                alt={animal.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-pink-800">{animal.name}</h3>
                  {animal.specialNeeds && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                      Special Needs
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Species:</strong> {animal.species}</p>
                  <p><strong>Breed:</strong> {animal.breed}</p>
                  <p><strong>Age:</strong> {animal.age}</p>
                  <p><strong>Personality:</strong> {animal.personality}</p>
                  <p><strong>Health:</strong> {animal.health}</p>
                </div>
                <div className="mt-6">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center">
                    <HeartHandshake className="mr-2" /> Adopt Me
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      

      {/* Footer */}
      
    </div>
  );
};

export default page;