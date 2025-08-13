import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { shopProducts } from '../data/shopProducts';
import { ExternalLink, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = shopProducts.find(p => String(p.id) === id);

  if (!product) {
    return <div className="p-8 text-center">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-5xl mx-auto my-10 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Back to Shop */}
        <div className="p-4 border-b">
          <Link to="/shop" className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-300">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Shop</span>
          </Link>
        </div>
        {/* Main Flex Layout */}
        <div className="flex flex-col md:flex-row items-stretch p-8 gap-10">
          {/* Image on the left */}
          <div className="flex justify-center items-center md:w-1/2 mb-8 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              loading="eager"
              decoding="async"
              className="w-full max-w-xs md:max-w-sm h-[300px] md:h-[400px] object-contain bg-gray-100 rounded-xl shadow-lg"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          {/* Details on the right */}
          <div className="flex-1 flex flex-col ">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 mt-0 text-left">{product.name}</h1>
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-left">Product Description</h3>
            <p className="text-gray-600 mb-6 whitespace-pre-line text-left">{product.description}</p>
            {product.amazonLink && (
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 items-center space-x-2"
              >
                <ExternalLink className="h-5 w-5" />
                <span>View on Amazon</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
