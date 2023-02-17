import { useState, useEffect } from "react";
import React from "react";
import "./Home.css";

export default function Home({ user, selectedCategory, category }) {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  console.log("FA", filteredArticles);

  const url1 = "https://indish-e-commerce.onrender.com";
  const url2 = "http://localhost:3000";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url2 + "/articles", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();
        setAllArticles(data);
        console.log("Articles", allArticles);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [user]);

  const filterByCategory = (filteredData) => {
    if (!category) {
      console.log("THERE IS NO CATEGORY");
      return filteredData;
    }
    console.log("THE CATEGORY IS: ", category);
    const filteredArticles = filteredData.filter(
      (article) => article.category === category
    );
    return filteredArticles;
  };

  useEffect(() => {
    let filteredArticles = filterByCategory(allArticles);
    setFilteredArticles(filteredArticles);
  }, [category, allArticles]);

  return (
    <div className="home-container">
      <div className="article-card">
        {allArticles.length ? (
          filteredArticles?.map((article) => (
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
          ))
        ) : (
          <h1>No articles found </h1>
        )}
      </div>
    </div>
  );
}
