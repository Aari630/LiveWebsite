import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shopProducts } from '../data/shopProducts';
import {
  ExternalLink,
  ArrowLeft,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X
} from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = shopProducts.find(p => String(p.id) === id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  if (!product) {
    return <div className="p-8 text-center">Product not found.</div>;
  }

  const handleZoomIn = () => setZoom(prev => prev + 0.2);
  const handleZoomOut = () => setZoom(prev => Math.max(1, prev - 0.2));
  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-5xl mx-auto my-10 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Back to Shop */}
        <div className="p-4 border-b">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Shop</span>
          </Link>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row items-stretch p-8 gap-10">
          {/* Image */}
          <div className="flex justify-center items-center md:w-1/2 mb-8 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              loading="eager"
              decoding="async"
              onClick={() => setIsModalOpen(true)}
              className="w-full max-w-xs md:max-w-sm h-[300px] md:h-[400px] object-contain bg-gray-100 rounded-xl shadow-lg cursor-pointer"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Product Description</h3>
            <p className="text-gray-600 mb-6 whitespace-pre-line">{product.description}</p>
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

      {/* Modal for zoom */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="relative">
            {/* Zoom & Close Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button
                onClick={handleZoomIn}
                className="p-2 bg-black/70 rounded-full text-white hover:bg-black/90 shadow-lg"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-black/70 rounded-full text-white hover:bg-black/90 shadow-lg"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={resetZoom}
                className="p-2 bg-black/70 rounded-full text-white hover:bg-black/90 shadow-lg"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  resetZoom();
                }}
                className="p-2 bg-black/70 rounded-full text-white hover:bg-black/90 shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Zoomable Image */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                transition: dragging ? 'none' : 'transform 0.2s ease',
                cursor: dragging ? 'grabbing' : 'grab'
              }}
              onMouseDown={handleMouseDown}
              className="max-h-[90vh] max-w-[90vw] object-contain select-none"
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
