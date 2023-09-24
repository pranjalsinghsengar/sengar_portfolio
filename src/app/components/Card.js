import React from "react";

const Card = ({ Content }) => {
  return (
    <div className='w-56 h-80 relative rounded-lg overflow-hidden bg-zinc-600 flex flex-col items-center'>
      <img className='h-full' src='/ic_launcher.png' />
      <div className='w-11/12 px-10 py-2 rounded-lg bg-secondaryColor absolute bottom-4'>
        <p className='cursor-pointer'>GOsasasdfdgdsg</p>
      </div>
    </div>
  );
};

export default Card;
