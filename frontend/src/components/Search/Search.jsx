import React, { useState } from 'react';

const Search = () => {
    // Initial value of the state is this array that is a constant will change below
    const fruits = [
        "Apple",
        "Apricot",
        "Banana",
        "Blueberry",
        "Cherry",
        "Cranberry",
        "Date",
        "Dragonfruit",
        "Elderberry",
        "Fig",
        "Grape",
        "Grapefruit",
    ];
    
    // states 1
    const [fruitsData, setFruitsData] = useState(fruits);
    // states 1
    const [searchTerm, setSearchTerm] = useState("");
    
    // Handle input change
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        {/* console.log(searchTerm); */}
    };

    // Filter the fruits based on the search term
    const fruitsDataFiltered = fruitsData.filter((fruit) => 
        fruit.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    // Function to bold the search term in the displayed fruits
    const boldSearchTerm = (text, searchTerm) => {
        if (!searchTerm) return text;
        const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
        return parts.map((part, index) => 
            part.toLowerCase() === searchTerm.toLowerCase() ? <b key={index}>{part}</b> : part
        );
    };

    return (
        <>
            <div className="container flex justify-between py-4 sm:py-3">
                <input 
                    type="text" 
                    placeholder="Search here..." 
                    className="rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                    onChange={handleInputChange}
                />
              
                {/* Display all the fruits */}
                {fruitsDataFiltered.length > 0 ? (
                    fruitsDataFiltered.map((fruit) => {
                        return <p key={fruit}>{boldSearchTerm(fruit, searchTerm)}</p>;
                    })
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </>
    );
};

export default Search;
