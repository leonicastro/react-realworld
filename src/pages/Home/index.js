import React, { useEffect, useState } from "react";
import "./styles.scss";
import Article from "../../components/Article";
import PopularTags from "../../components/PopularTags";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [feedType, setFeedType] = useState("global");

  useEffect(() => {
    function selectFeed() {
      if (feedType === "global") {
        setArticles([
          { a: 2 },
          { a: 3 },
          { a: 4 },
          { a: 5 },
          { a: 6 },
          { a: 7 },
          { a: 8 },
          { a: 9 },
          { a: 10 }
        ]);
      } else if (feedType === "your") {
        setArticles([
          { a: 12 },
          { a: 13 },
          { a: 14 },
          { a: 15 },
          { a: 16 },
          { a: 17 },
          { a: 18 },
          { a: 19 },
          { a: 20 }
        ]);
      }
    }
    selectFeed();
  }, [feedType]);

  return (
    <section className="container">
      <header className="banner">
        <h1>conduit</h1>
        <p>A place to share your knowledge.</p>
      </header>
      <section className="main">
        <section>
          <nav className="feed-menu">
            <ul>
              <li className={feedType === "your" ? "active" : ""}>
                <button onClick={() => setFeedType("your")}>Your Feed</button>
              </li>
              <li className={feedType === "global" ? "active" : ""}>
                <button onClick={() => setFeedType("global")}>
                  Global Feed
                </button>
              </li>
            </ul>
          </nav>
          {articles.map(article => (
            <Article key={article.a} article={article} />
          ))}
        </section>
        <aside>
          <PopularTags />
        </aside>
      </section>
    </section>
  );
}
