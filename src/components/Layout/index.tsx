import React, { useEffect } from "react";
import { Snow } from "../Snow";
interface Props {
  children: NonNullable<React.ReactNode>;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='relative h-screen w-full bg-black'>
      <div className='flex flex-col justify-center items-center absolute left-0 top-0 right-0 bottom-0'>
        {children}
      </div>
      <Snow />
    </div>
  );
};
