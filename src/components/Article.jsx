import React from "react";
import { Link } from "react-router-dom";

// Destructuring the props of the API
export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <div>
      <Link to={`/${name.common}`}>
        <article className="overflow-hidden rounded-lg bg-white shadow transition-all duration-200 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            src={flags.svg}
            alt="flags"
            className="w-full object-cover md:h-72"
          />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
              {name.common}
            </h2>
            <ul className="flex flex-col items-start justify-start gap-2 dark:text-gray-400">
              <li>Population: {population}</li>
              <li>Region: {region}</li>
              <li>Subregion: {subregion}</li>
            </ul>
          </div>
        </article>
      </Link>
    </div>
  );
}
