function ShowCryptoDetails({ data }) {
  return (
    <div>
      <h1>About {data.data.id}</h1>
      <h2>ranking {data.data.rank}</h2>
      <h3>supply {data.data.supply}</h3>
      <p>price {data.data.priceUsd}</p>
    </div>
  );
}

export default ShowCryptoDetails;
