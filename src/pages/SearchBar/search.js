import React , {useState} from 'react';
import './search.css';

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

	  //create and input of type search inside the return statement of the searchBar which the user will type in.
	//   <input type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />

  return (
    <div>
      <input className='search_handle' type="text" placeholder="Recherche ici" onChange={handleChange} value={searchInput} />
        <table>
          <tr>
            {/* <th>Country</th>
            <th>Continent</th> */}
          </tr>
          {countries.map((country, index) => {
            <tr>
              <td>{countries.name}</td>
              <td>{countries.continent}</td>
            </tr>
          })}
          </table>
    </div>
  )
}

export default Search