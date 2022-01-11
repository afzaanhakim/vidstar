import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div  className="p-3 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 group cursor-pointer ">
      <Image
      className="rounded-t-lg rounded-b-lg"
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt="img-name"
      />
      <div>
        <p className="text-black truncate max-w-md">{result.overview}</p>
        <h2 className="text-black mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0.7 group-hover:opacity:100 text-red-900">
          {result.media_type && `${result.media_type}`}{" "}
         Released On: {result.release_date || result.first_air_date} 
         <ThumbUpIcon className="h-5 mx-2 text-red-900"/>{result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
