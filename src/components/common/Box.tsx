import React, { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

function Box({ children }: BoxProps) {
  return (
    <div className="w-[600px] mt-[100px] mx-auto p-5 bg-white rounded">
      {children}
    </div>
  );
}

export default Box;
