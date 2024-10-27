import React from 'react';
import Link from 'next/link';

const Calendar = () => {
  return (
    <div className="flex flex-wrap sm:flex-row flex-col justify-center sm:space-x-4 bg-gray-100 min-h-screen p-6">
      {/* Calendar Expanded (Light) */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:w-64 w-full h-[450px] mb-4 sm:mb-[10px] border-4 border-red-500 border-solid box-border hover:scale-125">
        <h2 className="text-xl font-semibold text-black mb-4 text-center">October 2024</h2>
        <div className="grid grid-cols-7 gap-2 text-center text-black font-bold">
          <span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span><span>Mo</span>
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`${
                i + 1 === 27 ? 'text-red-500' : ''
              } rounded-full font-bold ${i + 1 === 27 ? 'bg-red-100' : ''}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-black">
          <p><strong>8 AM</strong> - Breakfast</p>
          <p><strong>10 AM</strong> - Travel to venue</p>
          <p><strong>10:30 AM</strong> - Ceremony</p>
        </div>
      </div>

      {/* Calendar Expanded (Dark) */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4 sm:w-64 w-full h-[450px] mb-4 sm:mb-[10px] border-4 border-green-400 border-solid box-border hover:scale-125">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">November 2024</h2>
        <div className="grid grid-cols-7 gap-2 text-center text-white font-bold">
          <span>Fr</span><span>Sa</span><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span>
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`${
                i + 1 === 9 ? 'text-green-500' : 'text-white'
              } rounded-full font-bold ${i + 1 === 9 ? 'bg-green-100' : ''}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-white">
          <p><strong>8:30 AM</strong> - Iqbal Day</p>
          <p><strong>9:30 AM</strong> - Ceremony</p>
        </div>
      </div>

      {/* Calendar Collapsed (Light) */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:w-64 w-full h-[450px] mb-4 sm:mb-[10px] border-4 border-red-400 border-solid hover:scale-125">
        <h2 className="text-xl font-semibold text-black mb-4 text-center">December 2024</h2>
        <div className="grid grid-cols-7 gap-2 text-center text-black font-bold">
          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`${
                i + 1 === 25 ? 'text-red-500' : ''
              } rounded-full font-bold ${i + 1 === 25 ? 'bg-red-100' : ''}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-black">
          <p><strong>9:30 AM</strong> - Quaid E Azam Day</p>
          <p><strong>10 AM</strong> - Ceremony</p>
        </div>
      </div>

      {/* Calendar Collapsed (Dark) */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6 sm:w-64 w-full h-[450px] mb-4 sm:mb-[10px] border-4 border-green-400 border-solid hover:scale-125">
        <h2 className="text-xl font-semibold text-white mb-4 text-center">January 2025</h2>
        <div className="grid grid-cols-7 gap-2 text-center text-white font-bold">
          <span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span><span>Mo</span><span>Tu</span>
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`${
                i + 1 === 1 ? 'text-green-500' : 'text-white'
              } rounded-full font-bold ${i + 1 === 1 ? 'bg-green-100' : ''}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-white">
          <p><strong>9:30 AM</strong> - Happy New Year</p>
          <p><strong>11 AM</strong> - Ceremony</p>
        </div>
        </div>
        <div className="flex justify-center mt-4 mb-4">
        <Link href="./">
          <button className="bg-orange-400 px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:scale-110 text-sm sm:text-base">
            Go back to home page
          </button>
        </Link>
      </div>

      <h1 className="text-blue-600 font-bold text-3xl text-center w-full hover:scale-125"><u>4 Month&apos;s Calendar</u></h1>
      <h4 className="text-center text-gray-400">Author: Azmat Ali</h4>
    </div>
  );
};

export default Calendar;
