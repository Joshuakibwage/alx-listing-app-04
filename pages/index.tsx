import FilterItems from "@/components/common/FilterItems";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/types";
import React, { useState} from "react";
import Card from "@/components/common/Card";
import Image from "next/image";
import PropertyCard from "@/components/common/PropertyCard";


const Home:React.FC = () => {

  const [ activeCategory, setActiveCategory ] = useState<string>("All");

  const categories: string[] = ["All", "Luxury Villa", "Pool", "Free Parking", "Mountain View", "Fireplace", "Self Checkin", "City Center", "Pet Friendly", "City View", "Free WiFi", "24h Checkin", "Beachfront", "Ocean View", "Breakfast Included", "Ski-in/Ski-out", "Golf Course", "Spa", "Family Friendly"];

  const filteredCategories = PROPERTYLISTINGSAMPLE.filter((category) => activeCategory === "All" || category.category === activeCategory);

  return (
    <main className="container mx-auto px-5 lg:px-10 min-h-screen">
      <FilterItems />

      <div className="w-full relative">
        <Image 
          src="/assets/Image1.png" 
          alt="Background Image" 
          width={1200} 
          height={300} 
          className="w-full h-96 object-cover object-bottom rounded-lg mt-5"
        />

        <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-black/20 rounded-lg">
          <h1 className="text-3xl lg:text-6xl font-bold text-white mb-2 text-center drop-shadow-lg max-w-lg">
            Find your favorite place here!
          </h1>
          <p className="text-white text-xs md:text-sm max-w-sm text-center drop-shadow-lg">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 my-10">
        {
          categories.map((category, index) => (
            <button 
              key={index}
              onclick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer ${
                  activeCategory === category ? "bg-green-400 text-white font-semibold" : "bg-gray-200 text-black hover:bg-green-700 hover:text-white`"
                }`}
            >
              {category}
            </button>
          ))
        }
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {
          PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard 
              key={index} 
              property={property} 
            />
          ))
        }
      </div>     
    </main>
  )
}


export default Home;