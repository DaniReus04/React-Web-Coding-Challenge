import Bikes from "../../components/BikesList";
import Search from "../../components/Search";

function Home({ bikes }) {
  return (
    <div>
      <Search />
      <Bikes bikes={bikes} />
    </div>
  );
}

export default Home;
