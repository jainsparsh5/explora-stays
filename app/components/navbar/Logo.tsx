"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <Image
          onClick={() => {
            router.push("/");
            router.refresh();
          }}
          src="/images/logo.svg"
          alt="Logo"
          height="35"
          width="35"
          className="hidden md:block cursor-pointer h-auto w-auto"
        />
        <span
          className="text-lg font-bold cursor-pointer"
          onClick={() => {
            router.push("/");
            router.refresh();
          }}
        >
          Explora Stays
        </span>
      </div>
    </>
  );
};

export default Logo;
