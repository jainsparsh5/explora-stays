"use client";

import Container from "../Container";

import { FaHouseFloodWater } from "react-icons/fa6";
import { MdOutlineVilla } from "react-icons/md";
import { PiWindmill } from "react-icons/pi";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { VscFlame } from "react-icons/vsc";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { GiBoatFishing, GiIsland } from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";

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
    icon: GiBoatFishing,
    description: "This is a lake view property",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a amazing pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has a amazing pool",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
