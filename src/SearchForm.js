import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="search-form"
    >
      <input
        type="text"
        className="form-input"
        onChange={(e) => handleSearch(e.target.value)}
        value={query}
      />
    </form>
  );
};

export default SearchForm;
