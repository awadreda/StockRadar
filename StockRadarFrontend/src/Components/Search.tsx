// import { Button } from "@mui/material";
import React from "react";

interface SearchProps {
  onSearchSubmit: (e: React.SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Search({ search, handleSearchChange, onSearchSubmit }: SearchProps) {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl  bg-blue-700 mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full  p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 text-3xl p-3 text-black border-2 bg-white  rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  );
};
