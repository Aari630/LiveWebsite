import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Product Detail</h1>
        <p className="text-lg text-gray-700 mb-4">
          This is the detail page for the product with ID: <span className="font-mono text-blue-600">{id}</span>
        </p>
        <p className="text-gray-500">You can enhance this page to show product info, images, etc.</p>
      </div>
    </div>
  );
}
