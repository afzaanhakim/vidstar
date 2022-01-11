import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter()
  const itemLooper = (requests) => {
    console.log(requests);
    const items = Object.entries(requests).map(([key, { title, url }]) => (
      <h2 key={key} onClick={() => router.push(`/?genre=${key}`)} className='last:pr-1 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-black active:text-red-900 text-pink-900 '>{title}</h2>
    ));
    return items;
  };

  const list = itemLooper(requests);

  return <nav className="relative"> <div className="flex px-10 sm:px-20 space-x-10 text-2xl whitespace-nowrap sm:space-x-20 overflow-x-scroll scrollbar-hide">{list}</div> <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-400 h-10 w-1/12"/></nav>;
};

export default Nav;
