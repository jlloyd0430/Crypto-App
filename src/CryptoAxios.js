import React, { useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import useAxios from "./hooks/useAxios";
import ShowCryptoDetails from "./components/ShowCryptoDetails";
import "./App.css";

function CryptoAxios() {
  const [crypto, setCrypto] = useState("bitcoin");

  const [setUrl, data, loading, setLoading, error] = useAxios();

  function handleOnSubmit(e) {
    e.preventDefault();

    setUrl(`https://api.coincap.io/v2/assets/${crypto}`);
    setLoading(true);
  }

  return (
    <div className="App">
      <h1>A Cryptocurrency and Exchange Search app!</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={(e) => setCrypto(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>Cryptocurrency: {crypto}</p>

      {/* Only shows is loading is true */}
      {loading && <Spinner />}
      {/* if loading is set to false, and the data exists, then it renders the ShowCryptoDetails component */}
      {!loading && data && <ShowCryptoDetails data={data} />}

      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default CryptoAxios;
