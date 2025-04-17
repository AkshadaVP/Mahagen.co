import React from 'react';

const BODcard = ({ name, title, image }) => {
  return (
    <div className="flex flex-col items-center p-[20px] bg-[#F5F5F5] rounded-lg w-50 h-70 justify-center align-middle">
      <img src={image} alt={name} className="w-32 h-32 mb-4 rounded-full" />
      <p className="text-lg font-bold text-center">{name}</p>
      <p className="mt-2 text-xs text-center text-black">{title}</p>
    </div>
  );
};

export default BODcard;
