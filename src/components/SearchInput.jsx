import React from "react";
import { useUsers } from "../context/UsersContext";

const SearchInput = () => {
  const { search, setSearch } = useUsers();
  return (
    <>
      <input
        type="text"
        className="border p-2 rounded w-full mb-4"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
