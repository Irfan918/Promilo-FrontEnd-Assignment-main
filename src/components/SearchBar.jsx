import React, { useState } from 'react';

const SearchBar = ({ onSearchChange }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const   handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearchChange(query); // Notify the parent component about the search query change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };



  return (
    <div className='px-32 py-5'>
      <form onSubmit={handleSubmit} class="flex items-center justify-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-1/2">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>

          </div>
          <input type="text" id="simple-search" value={searchQuery}
            onChange={handleInputChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"   placeholder="Search products name..."  />
        </div>
        <button type="submit" class="font-poppins py-2.5 px-6 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          SEARCH
        </button>
      </form>

    </div>

  )
}

export default SearchBar