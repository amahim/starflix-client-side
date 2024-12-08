import Banner from "./Banner";
import MovieNews from "./MovieNews";
import FetchReview from "./FetchReview";
import FetchFetMov from "./FetchFetMov";

const HomeMain = () => {
  return (
    <div>
      <Banner />
      <FetchFetMov />
      <MovieNews />
      <FetchReview />
    </div>
  );
};

export default HomeMain;
