import React, { useEffect, useState } from "react";
import NewsSHow from "./NewsSHow";
import Marquee from "react-fast-marquee";

const MovieNews = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  return (
    <div>
      <div className="py-10 text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-[#37f51e] font-medium">
          Latest Movie News
        </h1>
      </div>
      <Marquee>
        <div className="flex flex-row">
          {allNews.map((news) => (
            <NewsSHow key={news.id} news={news} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MovieNews;
