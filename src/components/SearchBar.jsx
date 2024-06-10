import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="relative">
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <input
        type="text"
        name="search-input"
        id="search-input"
        className="block w-full px-3 py-2 text-sm border shadow-sm border-neutral-300 rounded-xl ps-11 focus:outline-none focus:ring-primary-300/90 focus:ring focus:z-10"
        placeholder="Cari Produk"
      />
      <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
        <FiSearch className="text-2xl text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
