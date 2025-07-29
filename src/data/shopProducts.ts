import React, { useState } from 'react';

interface ProductProps {
  name: string;
  image: string;
  description: string;
}

export default function ShopProduct({ name, image, description }: ProductProps) {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className="w-full md:w-1/4 p-4 relative group cursor-pointer"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={toggleHover}
    >
      <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 ease-in-out transform group-hover:scale-105">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover rounded-t-2xl"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p
            className={`text-gray-700 text-sm transition-all duration-300 ease-in-out ${
              hovered ? 'max-h-96 opacity-100' : 'max-h-12 overflow-hidden opacity-80'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
