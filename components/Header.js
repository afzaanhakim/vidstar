/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Vidstar from "../assets/Vidstar.png";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";
import Results from "./Results";
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
import { useState } from "react";
import SearchResult from "./SearchResult.js";
import Nav from "./Nav";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Header = ({ request }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([]);
  const [allResult, setAllResult] = useState([]);
  const [input, setInput] = useState("");
  const onChange = (event) => {
    event.preventDefault();
    const query = event.target.value;
    setQuery(query);
    setInput(query);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (query) {
      const request = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
      ).then((result) => result.json());
      setShow(true);
      setResult(request.results);
      setQuery("");
      return request.results;
    }
  };

  const onCloseSearch = () => {
    setShow(false);
  };

  return (
    <div className="flex flex-col">
      <header className="flex flex-col sm:flex-row mr-5 ml-5 mt-0  justify-between items-center h-auto">
        <div
          className="flex flex-grow justify-evely max-w-2xl"
          onClick={onCloseSearch}
        >
          <HeaderItem title="HOME" Icon={HomeIcon} data={"fetchTopRated"} />
          <HeaderItem
            title="TRENDING"
            Icon={LightningBoltIcon}
            data={"fetchTrending"}
          />
          <HeaderItem
            title="VERIFIED HITS"
            Icon={BadgeCheckIcon}
            data={"fetchTopRated"}
          />
        </div>
        <Image
          className="object-contain"
          src={Vidstar}
          width={200}
          height={200}
          padding={0}
        />
      </header>
      <div className="flex flex-col">
        <div onClick={onCloseSearch}>
          <Nav />
        </div>
        <form onSubmit={onSubmit} className="ml-20 mt-5 pt-2">
          <input
            className="border-bold-text focus:outline-none border border-solid
        box-border rounded-lg pr-8 pt-1
        text-black text-sm w-180 m-3
        dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
            placeholder="Search Movies"
            type="text"
            onChange={onChange}
            value={query}
          />
          <button
            type="submit"
            className="transition duration-100 transform hover:scale-125 hover:text-black active:text-white text-pink-900"
          >
            {" "}
            🔍 Search
          </button>
        </form>
      </div>
      <div>
        {show && (
          <div className="flex flex-col">
            <button
              onClick={onCloseSearch}
              className="transition duration-120 transform hover:scale-125 hover:text-black active:text-white text-pink-900 "
            >
              ❌ Close Search Results for {input}❌
            </button>
            <SearchResult results={result}></SearchResult>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
