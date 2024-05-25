"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const [resource, setResource] = useState();
  const handleUpload = useCallback(
    //@ts-ignore
    (result: any, { widget }) => {
      setResource(result?.info.secure_url);
      onChange(result?.info.secure_url);
      widget.close();
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset="kqbjtsd9"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        function handleOnClick() {
          setResource(undefined);
          open();
        }
        return (
          <div
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
            onClick={handleOnClick}
          >
            <TbPhotoPlus size={25} />
            <div className="font-semibold text-md">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
