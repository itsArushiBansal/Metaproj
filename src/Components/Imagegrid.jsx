import React from 'react';
 
const Imagegrid = ({cardd}) => {
  return (
<>
<div className="grid grid-cols-2 gap-24 relative">
      
{cardd.map((card, index) => (
        <div className="relative" key={index}>
          <img
            src={card.src}
            className="w-full h-auto mt-40"
            style={{
              clipPath: 'polygon(0% 10%, 92% 0%, 100% 100%, 0% 100%)',
            }}
          />
          <div
            className="absolute -bottom-6 left-0 w-64 h-24 bg-blue-700"
            style={{
              clipPath: 'polygon(0% 10%, 92% 0%, 100% 100%, 0% 100%)',
            }}
          >
            <h1 className="text-white font-bold text-center mt-10 text-xl">{card.title}</h1>
          </div>
        </div>
      ))}
 
      </div>
</>
  );
};
 
export default Imagegrid;