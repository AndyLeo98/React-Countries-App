import React from "react";

// Destructuting the props of the API
export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <div>
      <article>
        <img src={flags.svg} alt="flags" />
        <h2 className="mb-2 text-lg font-bold text-gray-900">{name.common}</h2>
        <ul className="flex flex-col items-start justify-start gap-2">
          <li>Population: {population.toLocalString}</li>
          <li>Region: {region}</li>
          <li>Subregion: {subregion}</li>
        </ul>
      </article>
    </div>
  );
}
