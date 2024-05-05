import { Fragment } from "react/jsx-runtime";
import { searchSuggestions } from "../../definations/constants";
import { SearchBarProps } from "../../definations/types";
import Icon from "../../shared/Icon";
import "./index.scss";

export const SearchBar = ({
  searchTerm,
  onChange,
  clearSearchTerm,
  handleSearch,
  setSuggestionQuery,
}: SearchBarProps) => {
  return (
    <div className="searchBar">
      <div className="searchBox">
        <div className="inputBox">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={onChange}
          />
          {searchTerm.length > 0 && (
            <span onClick={clearSearchTerm}>
              <Icon name="x" />
            </span>
          )}
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="searchSuggestions">
        {searchSuggestions.map((suggestion, index) => {
          return (
            <Fragment key={index}>
              <button onClick={() => setSuggestionQuery(suggestion)}>
                {suggestion}
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
