"use client"
import React from "react";

const UiUx = () => {
  const first = () => {

  }
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-10/12 flex gap-4'>
        <div className='w-1/2 flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='w-s60 bg-red-500 h-64 rounded-2xl ' onClick={first}></div>
            <div className='w-s40 bg-red-500 h-64 rounded-2xl '>1</div>
          </div>
          <div className='flex gap-4'>
            <div className='w-1/2 bg-red-500 h-64 rounded-2xl '>1</div>
            <div className='w-1/2 bg-red-500 h-64 rounded-2xl '>1</div>
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='w-1/2 bg-red-500 h-96 rounded-2xl '>1</div>
            <div className='w-1/2 flex flex-col gap-4'>
              <div className='w-full bg-red-500 h-72 rounded-2xl '>1</div>
              <div className='w-full bg-red-500 h-20 rounded-2xl '>1</div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='w-full bg-red-500 h-32 rounded-2xl '>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUx;
