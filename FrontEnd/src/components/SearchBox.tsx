type SearchBoxProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBox({ search, setSearch }: SearchBoxProps) {
  return (
    <input
      className="search-box"
      type="text"
      placeholder="Search by Name, Company, Role or Country"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBox;
