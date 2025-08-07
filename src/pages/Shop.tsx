import React, { useState, useEffect } from 'react';
import { Star, Eye, ArrowLeft, ExternalLink } from 'lucide-react';
import { shopProducts } from '../data/shopProducts';
import { Link } from 'react-router-dom';

const categories = [
  'All Saddles',
  'Western Saddles',
  'Western Show Saddles',
  'Australian Saddles',
  'Endurance Saddles',
  'English Saddles',
  'Brazilian Saddles',
];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Saddles');

  const filteredProducts = selectedCategory === 'All Saddles'
    ? shopProducts
    : shopProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Home */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Saddles
          </h1>
          <div className="w-20 h-1 bg-amber-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our exceptional collection of handcrafted saddles, each piece designed
            with meticulous attention to detail and superior craftsmanship.
          </p>
        </div>

        {/* Category Dropdown */}
        <div className="flex justify-end mb-8">
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-600"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <div className="relative cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-96 object-contain bg-gray-100 rounded-xl group-hover:scale-110 transition-transform duration-700"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>

                {/* Quick View Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <Eye className="h-4 w-4 text-gray-700" />
                  </button>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

               {/* Product Info */}
                <div className="p-6 group">
                  <h3
                    className="text-xl font-bold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors duration-300 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.name}
                  </h3>
                        {/* Amazon Button */}
                        {product.amazonLink && (
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex space-x-2">
                            <a
                              href={product.amazonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-sm"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span>Amazon</span>
                            </a>
                          </div>
                        </div>
                      )} 
                </div>
              </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={e => {
              if (e.target === e.currentTarget) setSelectedProduct(null);
            }}
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative flex-shrink-0 flex justify-center items-center md:w-1/2 p-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    loading="eager"
                    decoding="async"
                    className="w-full max-w-xs h-[300px] md:h-[400px] object-contain bg-gray-100 rounded-xl"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300"
                    aria-label="Close"
                  >
                    <span className="text-xl font-bold text-gray-700">&times;</span>
                  </button>
                </div>
                {/* Info Section */}
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                  {selectedProduct.information && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Information:</h4>
                      <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                        {selectedProduct.information
                          .split(/\n|\r/)
                          .filter(line => line.trim().startsWith('*'))
                          .map((line, idx) => (
                            <li key={idx}>{line.replace(/^\*\s*/, '')}</li>
                          ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {selectedProduct.amazonLink && (
                        <a
                          href={selectedProduct.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>View on Amazon</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}