import Bikes from "../../components/BikesList";
import Search from "../../components/Search";

function Home({ bikes }) {
  return (
    <div className="w-full">
      <Search />
      <Bikes bikes={bikes} />
    </div>
  );
}

export default Home;
