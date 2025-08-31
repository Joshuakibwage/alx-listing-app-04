

const PropertyCard: React.FC<{ property: any }> = ({ property }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200">
      {/* <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-t-lg" /> */}
      <h3 className="text-lg font-semibold mt-2">{property.title}</h3>
      <p className="text-gray-600 mt-1">{property.description}</p>
      <p className="text-green-600 font-bold mt-2">${property.price}</p>
    </div>
  );
};

export default PropertyCard;