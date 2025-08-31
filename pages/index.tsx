import FilterItems from "@/components/common/FilterItems";
import Pill from "@/components/common/Pill";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";



const Home:React.FC = () => {

  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProperties = async() => {
    try {
      const resp = await axios.get('/api/properties');
      setProperties(resp.data);
      
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally { 
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchProperties();
  }, []);


  return (
    <main className="container mx-auto px-5 lg:px-10">
      <FilterItems />
      <Pill />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {
          loading ? (
            <div className="col-span-4 text-center">
              Loading...
            </div>
          ) : (
            properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))
          )
        }
      </div>
      
    </main>
  )
}


export default Home;