import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <div className="Search mb-4">
            <input
                ref={searchInput}
                className="border border-primary text-center p-2"
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search"
            />
        </div>
    );
};

export default Search;
