import Search from "../../components/Search";

function Home({ bikes }) {
  const stolenBike = bikes.filter((bike) => bike.stolen);
  const colors = stolenBike.filter((item) => item.frame_colors !== null);
  const model = stolenBike.filter((item) => item.frame_model !== null);
  const location = stolenBike.filter((item) => item.stolen_location !== null);
  const name = stolenBike.filter((item) => item.title !== null);

  return (
    <div className="w-full">
      <Search
        colors={colors}
        model={model}
        location={location}
        name={name}
        stolen={stolenBike}
      />
    </div>
  );
}

export default Home;
