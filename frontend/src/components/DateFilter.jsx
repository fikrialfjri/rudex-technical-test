import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const DateFilter = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const isSubmitDisabled = !startDate || !endDate || startDate > endDate;

  return (
    <form
      className="flex items-center gap-3 p-2 border ps-4 border-neutral-300 rounded-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ start_date: startDate, end_date: endDate });
      }}
    >
      <div className="w-full">
        <label htmlFor="filter-start-date" className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Start Date
        </label>
        <input
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          id="filter-start-date"
          type="date"
          max={endDate}
          className="w-full pb-0.5 border-b outline-none border-neutral-300 hover:border-primary-300 duration-200 focus:outline-none active:outline-none"
        />
      </div>
      <FaArrowRightLong className="text-2xl text-gray-500" />
      <div className="w-full">
        <label htmlFor="filter-end-date" className="mb-2 text-sm font-medium text-gray-900 sr-only">
          End Date
        </label>
        <input
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          id="filter-end-date"
          type="date"
          min={startDate}
          className="w-full pb-0.5 border-b outline-none border-neutral-300 hover:border-primary-300 duration-200 focus:outline-none active:outline-none"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-primary-300 hover:bg-primary-300/90 focus:ring-4 focus:outline-none focus:ring-primary-300/50 rounded-xl disabled:bg-neutral-300 disabled:text-neutral-600"
        disabled={isSubmitDisabled}
      >
        Submit
      </button>
    </form>
  );
};

export default DateFilter;
