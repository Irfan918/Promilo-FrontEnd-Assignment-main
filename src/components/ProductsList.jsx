import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const ProductsList = () => {


    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make API request using Axios
                const response = await axios.get('https://api.kalpav.com/api/v1/product/category/retail');
                setData(response.data.response);
                console.log(response.data.response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once on component mount


    const handleSearchChange = (query) => {
        // Update the searchQuery state
        setSearchQuery(query);

        // If there is a search query, filter data; otherwise, show all data
        const updatedData = query
            ? data.filter(
                (item) =>
                    item.productCategory.productCategoryName.toLowerCase().includes(query.toLowerCase())
            )
            : data;

        setFilteredData(updatedData);
    };


    const displayData = searchQuery ? filteredData : data;

    return (
        <section class="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col items-center py-10 bg-gray-100">
            <div className='w-full pb-10'>
                <SearchBar onSearchChange={handleSearchChange} />
            </div>
            <div class=" gap-4 px-10 mx-auto max-w-7xl">
                <div className='grid grid-cols-4 gap-4' >
                    {displayData.map((item, index) => (
                        <ProductCard
                            key={index}
                            index={index}
                            imageUrl={item.productCategory.productCategoryImage}
                            productName={item.productCategory.productCategoryName}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsList