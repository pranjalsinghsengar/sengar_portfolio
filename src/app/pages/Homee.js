"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Homee = () => {
  const router = useRouter();
  const UploadData = () => {
    console.log("Upload Page Open By Click on SENGAR");
    router.push("/upload");
  };
  const ProjectHandler = () => {
    router.push("/projects");
  };
  return (
    <div className='p-10 w-screen h-screen'>
      <div className='bg-primaryColor overflow-hidden h-full rounded-2xl flex justify-center pt-5 pb-5'>
        <div className='w-11/12 h-full'>
          {/* logo */}
          <div className='text-3xl' onClick={UploadData}>
            SENGAR
          </div>

          <div className='flex h-full'>
            {/* left */}
            <div className='w-1/2 relative flex flex-col justify-center '>
              <div className='flex flex-col justify-center gap-10 mb-52'>
                <div>
                  <h1 className='text-6xl font-semibold'>HEADING SSTATUS</h1>
                  <p className='text-3xl'>HEADING SSTATUS</p>
                </div>

                <div className='flex'>
                  <p className=' px-10 py-2 rounded-lg bg-secondaryColor cursor-pointer'>
                    GO
                  </p>
                </div>
              </div>
              {/* Hire me if yoouo can */}
              <div className='w-48 rounded-xl p-5 text-center bg-thirdColor flex flex-col items-center gap-2 absolute bottom-10'>
                <div>
                  <p className='text-sm'>HIRE ME</p>{" "}
                  <h2 className='text-base font-semibold'>IF YOU CAN</h2>
                </div>

                <div className='flex'>
                  <p className='p-2 py-1 text-xs rounded-lg bg-secondaryColor cursor-pointer'>
                    Hire me
                  </p>
                </div>
              </div>
            </div>
            {/* right */}
            <div className='w-1/2 h-full flex justify-center items-center'>
              <div className='flex gap-2'>
                <div className='flex flex-col gap-2 mt-16'>
                  <div className='bg-red-300 w-72 h-60 rounded-2xl cursor-pointer' onClick={ProjectHandler}></div>
                  <div className='bg-black w-72 h-60 rounded-2xl cursor-pointer'></div>
                </div>
                <div className='bg-black w-72 h-ll rounded-2xl cursor-pointer'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homee;
