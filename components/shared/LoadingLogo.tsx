import React from "react";
import Image from "next/image";

type Props = {
  size?: number;
};

const LoadingLogo = ({ size = 200 }: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src="logo-black.svg"
        alt="logo"
        width={size}
        height={size}
        className="animate-bounce duration-700"
      />
    </div>
  );
};

export default LoadingLogo