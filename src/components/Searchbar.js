import "./searchbar.css";

export default function Searchbar() {
  return (
    <div className="search-conatainer">
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for fucker?"
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"> SEARCH</i>
          </button>
        </div>
      </div>
    </div>
  );
}
