import { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";

export default function Countries() {
  // Fetching data from an API within React
  const [countries, setCountries] = useState([]);
  // Asynchronus function method
  // useEffect(() => {
  //   const getCountries = async () => {
  //     try {
  //       const res = await fetch("https://restcountries.com/v3.1/all");
  //       const data = await res.json();
  //       setCountries(data.slice(0, 10));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getCountries();
  // }, []);

  // AXIOS METHOD TO FETCH API
  const fetchCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data.slice(0, 10)));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      {!countries ? (
        <h1 className="flex h-screen items-center justify-center text-center text-4xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
          Loading...
        </h1>
      ) : (
        <div className="container mx-auto p-8">
          {/* {form} */}

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
