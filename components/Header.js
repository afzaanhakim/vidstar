/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Vidstar from "../assets/Vidstar.png"
import HeaderItem from "./HeaderItem";
import { BeakerIcon, HomeIcon, BadgeCheckIcon, LightningBoltIcon, UserIcon, CollectionIcon, LightBulbIcon, SearchIcon, UsersIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="">
      <div>
        <HeaderItem title='home' Icon={HomeIcon}/>
        </div>
      <Image
        className="object-contain"
        src={Vidstar}
        width={400}
        height={400}
        padding={0}
      />
    </header>
  );
};

export default Header;
