import Search from "../../components/Search";

function Home({ bikes }) {
  const stolenBike = bikes.filter((bike) => bike.stolen);

  return (
    <div className="w-full">
      <Search stolen={stolenBike} />
    </div>
  );
}

export default Home;
