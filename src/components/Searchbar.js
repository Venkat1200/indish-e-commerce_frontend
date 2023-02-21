import "./searchbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar({ allArticles }) {
  console.log("All Articles", allArticles);

  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      allArticles.filter((data) => {
        console.log("data", data);
        return data.articleTitle.match(searchInput);
      });
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   navigate(`articles/${searchInput}`);
  // };

  return (
    <div className="search-conatainer">
      <div className="wrap">
        {/* <form className="search"> */}
        <input
          type="text"
          onChange={handleChange}
          className="searchTerm"
          placeholder="What are you looking for fucker?"
          value={searchInput}
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"> SEARCH</i>
        </button>
        {/* </form> */}
      </div>
      {allArticles?.map((article) => (
        <div className="all-articles" key={article._id}>
          <div className="articles">
            <img className="article-photo" src={article.url} />
            <center>
              <div className="article-title">
                <h4 className="article.h2">{article.articleTitle}</h4>
              </div>
            </center>
            <p className="article-p">$ {article.price}.00</p>
            <button className="addcart">
              <p>ADD TO CART </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
