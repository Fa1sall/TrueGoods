import { IoSearch } from "react-icons/io5";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="bg-secondary/50 flex items-center justify-between rounded-4xl border-2 border-black p-3">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        className="font-body w-full appearance-none font-bold text-black outline-none"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <IoSearch size={30} className="shrink-0 cursor-pointer text-black" />
    </div>
  );
};

export default SearchBar;
