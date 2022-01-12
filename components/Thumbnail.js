import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";
import { useState } from "react";

const Thumbnail = ({ result }) => {
  const [showText, setShowText] = useState(false);

  const onClick = () => {
    showText ? setShowText(false) : setShowText(true);
  };
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  console.log(result, "is result");
  return (
    <div className="p-3 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 group  ">
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
        {showText ? (
          <>
            <p className="text-black max-w-md">{result.overview}</p>
            <button
              className="text-red-900 rounded-md p-0.5 bg-opacity-20 bg-green-100 hover:font-bold"
              onClick={onClick}
            >
              Read Less
            </button>
          </>
        ) : (
          <>
            {" "}
            <p className="text-black truncate max-w-md">
              {result.overview}
            </p>{" "}
            <button
              className="text-red-900 bg-green-300 bg-opacity-20 rounded-md p-0.5 hover:font-bold"
              onClick={onClick}
            >
              Read More
            </button>
          </>
        )}
        <h2 className="text-black mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold text-white">
          {result.vote_average}/10
        </h2>
        <p className="flex items-center  group-hover:opacity:100 text-red-900">
          {result.media_type && `Type: ${result.media_type}`} Released On:{" "}
          {result.release_date || result.first_air_date}
        </p>
        <div className="flex">
          <p className="text-red-900">
            👍🏾 {result.vote_count} people liked this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
