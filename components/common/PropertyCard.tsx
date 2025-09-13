import Image from "next/image";


const PropertyCard:React.FC = ({ index, property}) => {
    return (
        <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <Image
                src={property.image}
                alt={property.name}
                width={400}
                height={300}    
                className="w-full h-48 object-cover group:hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{property.name}</h2>
                <p className="text-sm text-gray-600 mb-1">{`${property.address.city}, ${property.address.state}, ${property.address.country}`}</p>
                <p className="text-sm text-yellow-500 mb-1">Rating: {property.rating} ★</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {property.category.map((cat, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <p className="text-lg font-bold mb-2">${property.price} / night</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>🛏 {property.offers.bed} Beds</span >
                  <span>🚿 {property.offers.shower} Showers</span>
                  <span>👥 {property.offers.occupants} Guests</span>
                </div>
                {property.discount && (
                  <div className="mt-2 text-sm text-red-500 font-semibold">
                    {property.discount}% off
                  </div>
                )}
              </div>
            </div>
    )
}


export default PropertyCard;