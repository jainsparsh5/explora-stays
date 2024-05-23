"use client";

import Container from "../Container";

import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { PiWindmill } from "react-icons/pi";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
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
    description: "This property is near a ski resort",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This is a castle property",
  },
  {
    label: "Luxe",
    icon: IoDiamond,
    description: "This is a luxury property",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in the arctic",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This is a cave property",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert",
  },
  {
    label: "Barn",
    icon: GiBarn,
    description: "This is a property with a barn",
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
