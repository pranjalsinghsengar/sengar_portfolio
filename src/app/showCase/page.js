import React from "react";

const page = () => {
  return (
    <div className='p-10 w-screen h-screen'>
      <div className=' bg-primaryColor overflow-hidden h-full rounded-2xl flex justify-center p-5 pb-5'>
        <div className='flex flex-col gap-3 w-full h-full'>
          <div className='w-full h-1/2'>
            <div className='h-full w-9/12 bg-red-400 rounded-2xl'> </div>
          </div>
          <div className='w-full h-1/2 flex '>
            <div className='h-full w-5/12 bg-red-400 rounded-2xl'> </div>

            <div className='p-20 '>
              <h1 className='text-4xl font-semibold'>Project Name</h1>
              <p className='mt-5'>Discription</p>
              <div className="w-14 h-14 mt-10 rounded-xl bg-teal-300">B</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
