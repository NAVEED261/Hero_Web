"use client"
import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/hero';
import Cards from './component/card';
import PurchaseButton from './component/purchase button';





const Home = () => {
  return (
    <div className='bg-blue-100 min-h-[500] gap-0 '>
      <div className="container mx-auto py-10 px-4">
        <Navbar />
        <Hero />
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Books</h2>
          <Cards />
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-full md:w-auto pt-4">
            <div className="bg-blue-200 p-4 rounded-md">
              <PurchaseButton />
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
