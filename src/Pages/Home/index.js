import Bikes from "../../components/BikesList";

function Home({ bikes }) {
  return (
    <div>
      <Bikes bikes={bikes} />
    </div>
  );
}

export default Home;
