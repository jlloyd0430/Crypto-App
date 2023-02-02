import useFetch from "./hooks/useFetch";
import "./App.css";

function Crypto() {
  const [data, isLoading] = useFetch("api.coincap.io/v2/assets");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {/*console.log(data)*/}
      <h1>All about {data.id}:</h1>
      {data.rank}
      {data.priceUsd}
      {data.explorer}
    </div>
  );
}

export default Crypto;
