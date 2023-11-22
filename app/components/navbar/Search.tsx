"use client";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="search">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="week">Anyweek</div>
        <div className="guests">
          <div className="hidden sm:block">Add Guests</div>
          <div className="search_icon_container">
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
