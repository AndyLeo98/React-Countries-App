import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  return (
    <>
      <div className="mx-auto max-w-7xl p-8 md:py-0">
        {country.map((item) => (
          <div
            key={item.population}
            className="grid grid-cols-1 gap-8 md:h-screen md:grid-cols-2 md:place-items-center"
          >
            <article>
              <img src={item.flags.svg} alt={item.name.common} />
            </article>

            <article>
              <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white lg:text-6xl">
                {item.name.official}
              </h1>
              <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
              </ul>

              {item.borders && (
                <>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    Borders:
                  </h3>
                  <ul className="flex flex-wrap items-start justify-start gap-2">
                    {item.borders.map((border, index) => (
                      <li
                        key={index}
                        className="rounded bg-white p-2 text-xs tracking-wide text-gray-700 shadow dark:bg-gray-800 dark:text-gray-400"
                      >
                        {border}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link
                to="/"
                className="mt-8 inline-block rounded bg-white py-2 px-8 text-gray-700 shadow transition-all duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
