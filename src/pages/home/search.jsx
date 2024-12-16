import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
  ];

  //   function handler that will read changes in the search bar and country if statement to return the country that match what entered in the search bar
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    countries.filter((country) => {
      return country.name.match(searchInput);
    });
  }

  return (
    <div className="search-bar mt-4 d-flex align-items-center position-relative">
      <IoMdSearch className="fas fa-search search-icon mx-2" />
      <input
        className="form-control ng-valid ng-dirty ng-touched"
        type="text"
        placeholder="Search here..."
        onChange={handleChange}
        value={searchInput}
      />
      <table>
        {/* {countries.map((country, index) => {
          return (
            <tr>
              <td>{country.name}</td>
              <td>{countries.continent}</td>
            </tr>
          );
        })} */}
      </table>
    </div>
  );
};

export default Search;
