import { useState, useEffect } from "react";
// import axios from "axios";
import Article from "./Article";

export default function Countries() {
  // Fetching data from an API within React
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Americas",
    },
    {
      name: "Oceania",
    },
    {
      name: "Antarctica",
    },
  ];

  // Asynchronus function method
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  // AXIOS METHOD TO FETCH API
  // const fetchCountries = () => {
  //   axios
  //     .get("https://restcountries.com/v3.1/all")
  //     .then((response) => setCountries(response.data.slice(0, 10)));
  // };

  // useEffect(() => {
  //   fetchCountries();
  // }, []);

  return (
    <>
      {!countries ? (
        <h1 className="flex h-screen items-center justify-center text-center text-4xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
          Loading...
        </h1>
      ) : (
        <div className="container mx-auto p-8">
          {/* {form} */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className="max-w-4xl md:flex-1"
            >
              <input
                type="text"
                name="search"
                id="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for a country by its name"
                required
                className="w-full rounded py-3 px-4 text-gray-600 placeholder-gray-600 shadow outline-none transition-all duration-200 dark:bg-gray-800 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:bg-gray-700"
              />
            </form>

            <form>
              <select
                name="filter-by-region"
                id="filter-by-region"
                className="w-52 rounded py-3 px-4 text-gray-600 shadow outline-none dark:bg-gray-800 dark:text-gray-400 dark:focus:bg-gray-700"
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
