import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  // const [data, setData] = React.useState(null);

  let [articles, setArticles] = useState([]);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  useEffect(() => {
    fetch("/gfg")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setArticles(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);



  return (
    <div>
      <Navbar />

      <ol className="m-2 pt-5" type="1">
        {articles.map((article) => (
          <li>
            <h4>
              <a target="_blank" href={article.articleLink}>
                {article.articleTitle}
              </a>
            </h4>
            <br />
          </li>
        ))}
      </ol>

    </div>
  );
}

export default App;