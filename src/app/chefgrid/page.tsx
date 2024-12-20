import React from "react";
import Image from "next/image"

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/Tahmina Rumi.png" },
  { name: "Jorina Begum", role: "Chef", image: "/Jorina Begum.png" },
  { name: "M. Mohammad", role: "Chef", image: "/M. Mohammad.png" },
  { name: "Munna Kathy", role: "Chef", image: "/Munna Kathy.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/Tahmina Ru.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/Bisnu Devgon.png" },
  { name: "Motin Molladst", role: "Chef", image: "/Motin Molladst.png" },
  { name: "William Rumi", role: "Chef", image: "/William Rumi.png" },
  { name: "Kets William Roy", role: "Chef", image: "/Kets William Roy.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/Mahmud Kholil.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/Ataur Rahman.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/Monalisa Holly.png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20 w-[80vw] mx-auto"> {/* Adding mt-20 for margin top */}
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600" // Complete purple border for the 7th box
                : "border-4 border-transparent hover:border-purple-600" // Hover effect for other boxes
            }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;