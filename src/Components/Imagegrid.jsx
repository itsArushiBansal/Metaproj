import React from 'react';
 
const Imagegrid = () => {
  return (
<>
<div className="grid grid-cols-2 gap-24 relative">
      
<div className="relative">
<img
            src="/Smiling Woman On Phone 1 (1).png"
            className="w-full h-auto mt-40 ms-10"
            style={{
              clipPath: 'polygon(0% 10%, 92% 0%, 100% 100%, 0% 100%)',
            }}
          />
         
<div
            className="absolute -bottom-6 left-0 w-64 h-24 bg-blue-700 "
            style={{
                clipPath: 'polygon(0% 10%, 92% 0%, 100% 100%, 0% 100%)',
              }}
><h1 class="text-white font-bold text-center mt-10 text-xl">Guides and tutorials</h1></div>
</div>
 
<div className="relative">
<img
            src="/Smiling Woman On Phone 1 (1).png"
            className="w-full h-auto mt-40"
            style={{
              clipPath: 'polygon(0% 10%, 92% 0%, 100% 100%, 0% 100%)',
            }}
          />
          
<div
            className="absolute -bottom-6 left-0 w-64 h-24 bg-blue-700 "
            style={{
                clipPath: 'polygon(0% 10%, 92% 0%, 100% 100%, 0% 100%)',
              }}
><h1 class="text-white font-bold text-center mt-8 me-10 text-xl">Frequently Asked <br/>Questions</h1></div>
</div>
 
        
<div className="relative">
<img
            src="/Smiling Woman On Phone 1 (1).png"
            className="w-full h-auto ms-10"
            style={{
              clipPath: 'polygon(0% 10%, 95% 0%, 100% 100%, 0% 100%)',
            }}
          />
          
<div
            className="absolute -bottom-6 left-0 w-64 h-24 bg-blue-700"
            style={{
                clipPath: 'polygon(0% 10%, 95% 0%, 100% 100%, 0% 100%)',
              }}
>
    <h1 class="text-white font-bold text-center mt-8 me-10 text-xl">Privacy and security</h1>
</div>
</div>
 
        {/* Image and Patch Container */}
<div className="relative">
<img
            src="/Smiling Woman On Phone 1 (1).png"
            className="w-full h-auto"
            style={{
              clipPath: 'polygon(0% 10%, 95% 0%, 100% 100%, 0% 100%)',
            }}
          />
          {/* Blue Patch */}
<div
            className="absolute -bottom-6 left-0 w-64 h-24 bg-blue-700 "
            style={{
                clipPath: 'polygon(0% 10%, 89% 0%, 100% 100%, 0% 100%)',
              }}
><h1 class="text-white font-bold text-xl text-center mt-8 me-20" >Contact us</h1></div>
</div>
 
      </div>
</>
  );
};
 
export default Imagegrid;