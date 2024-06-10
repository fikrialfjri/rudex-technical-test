import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const SearchBar = ({ value, onChange, withButton = false }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (!withButton) {
      onChange(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(inputValue);
  };

  return (
    <form className="w-full" onSubmit={withButton ? handleSubmit : (e) => e.preventDefault()}>
      <label htmlFor="search-input" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <FiSearch className="text-2xl text-gray-500" />
        </div>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="search"
          id="search-input"
          className="block w-full p-4 text-sm text-gray-900 bg-white border border-neutral-300 ps-10 rounded-2xl focus:outline-primary-300"
          placeholder="Cari produk"
          required
        />
        {withButton && (
          <button
            type="submit"
            disabled={inputValue?.length <= 0}
            className="text-white absolute end-2.5 bottom-2.5 bg-primary-300 hover:bg-primary-300/90 focus:ring-4 focus:outline-none focus:ring-primary-300/50 font-medium rounded-xl text-sm px-4 py-2 disabled:bg-neutral-300 disabled:text-neutral-600"
          >
            Search
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
