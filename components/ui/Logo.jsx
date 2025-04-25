import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <a className="flex items-center gap-x-2"> {/* anchor tag wraps both children */}
        <Image
          src="/images/logo.png" // Make sure this image exists in public/images
          alt="CampusDine Logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-[2rem] font-dancing font-bold cursor-pointer">
          CampusDine
        </span>
      </a>
    </Link>
  );
};

export default Logo;
