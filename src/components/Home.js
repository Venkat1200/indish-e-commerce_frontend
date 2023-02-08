import { useState, useEffect } from "react";
import React from "react";
import "./Home.css";

export default function Home({ user, selectedCategory, category }) {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3000/articles", {
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
    <div class="main-articles">
      {allArticles.length ? (
        filteredArticles?.map((article) => (
          <div className="articles" key={article._id}>
            <div className="article-container">
              <div class="container">
                <div className="article-title">
                  <h2 className="article.h2">{article.articleTitle}</h2>
                </div>
                <img className="article-photo" src={article.url} />
                <p className="article.p">$ {article.price}.00</p>
                <button className="addcart"> ADD TO CART</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No articles found </h1>
      )}
    </div>
  );
}
