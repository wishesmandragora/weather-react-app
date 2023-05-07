import React from "react";

interface Props {
  searchTerm: string;
  changeSeachTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = ({
  searchTerm,
  changeSeachTerm,
}) => {
  return (
    <>
      <input
        type="text"
        autoComplete="off"
        value={searchTerm}
        onChange={changeSeachTerm}
        className="search-box"
        placeholder="Search for a city..."
      />
    </>
  );
};

export default SearchInput;
