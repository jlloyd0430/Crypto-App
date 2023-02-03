function ShowCryptoDetails({ data }) {
  return (
    <div>
      <h1>About: {data.data.id}</h1>
      <h2>Global ranking: {data.data.rank}</h2>
      <h3>Total Supply: {data.data.supply}</h3>
      <p> Price: ${data.data.priceUsd}</p>
    </div>
  );
}

export default ShowCryptoDetails;
