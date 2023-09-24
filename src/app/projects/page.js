import React from "react";
import UiUx from "../pages/UiUx";

const page = () => {
  return (
    <div className='p-10 w-screen h-screen'>
      <div className='bg-primaryColor overflow-hidden h-full rounded-2xl flex justify-center pt-5 pb-5'>
        <UiUx />
      </div>
    </div>
  );
};

export default page;
