import React from 'react';

const ToolBar = () => (
  <nav className="flex ">
    {/* colors */}
    <button className="bg-black py-4 px-4 w-full max-w-full" onClick={() => window.color = 'black'}></button>
    <button className="bg-white py-4 px-4 w-full max-w-full" onClick={() => window.color = 'white'}></button>
    <button className="bg-gray-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'gray'}></button>
    <button className="bg-red-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'red'}></button>
    <button className="bg-orange-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'orange'}></button>
    <button className="bg-yellow-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'yellow'}></button>
    <button className="bg-green-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'green'}></button>
    <button className="bg-teal-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'teal'}></button>
    <button className="bg-blue-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'blue'}></button>
    <button className="bg-indigo-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'indigo'}></button>
    <button className="bg-purple-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'purple'}></button>
    <button className="bg-pink-500 py-4 px-4 w-full max-w-full" onClick={() => window.color = 'pink'}></button>
  </nav>
);


export default ToolBar;
