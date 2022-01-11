/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Vidstar from "../assets/Vidstar.png"
import HeaderItem from "./HeaderItem";
import {
  BeakerIcon,
  HomeIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  UserIcon,
  CollectionIcon,
  LightBulbIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row mr-5 ml-5 mt-1  justify-between items-center h-auto">
      <div className="flex  flex-grow justify-evely max-w-2xl  ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src={Vidstar}
        width={200}
        height={200}
        padding={0}
      />
    </header>
  );
};

export default Header;
