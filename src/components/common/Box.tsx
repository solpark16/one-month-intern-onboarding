import { ReactNode } from "react";

interface Box {
  children: ReactNode;
}

function Box({ children }: Box) {
  return (
    <div className="w-[600px] mt-[100px] mx-auto p-5 bg-white rounded">
      {children}
    </div>
  );
}

export default Box;
