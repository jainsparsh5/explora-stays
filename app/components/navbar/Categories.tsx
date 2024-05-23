"use client";

import Container from "../Container";

import { FaHouseFloodWater } from "react-icons/fa6";
import { MdOutlineVilla } from "react-icons/md";
import { PiWindmill } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import { VscFlame } from "react-icons/vsc";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Trending",
    icon: VscFlame,
    description: "This property is most popular",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is near a beach",
  },
  {
    label: "Windmills",
    icon: PiWindmill,
    description: "This property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern and luxurious",
  },
  {
    label: "Lakefront",
    icon: FaHouseFloodWater,
    description: "This is a lake view property",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
