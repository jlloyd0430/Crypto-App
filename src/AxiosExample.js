import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner/Spinner";
import useAxios from "./hooks/useAxios";
import "./App.css";

// This is to display the search results. This can be refactored to be it's own component
function ShowUserDetails({ data: { id, name } }) {
  return (
    <div>
      <div> id: {id}</div>
      <div> name: {name}</div>
    </div>
  );
}


function App() {
    // the input field onChange constantly sets the state variable `user` to what the input is.
  const [user, setUser] = useState(0);

//   This brings in all the necessary state variables from the useAxios custom hook
  const [setUrl, data, loading, setLoading, error] = useAxios();

//   This function is for submitting the input by clicking the button. It sets the URL and loading status, and sends it to the useAxios custom hook
  function getUser() {
    setUrl(`https://jsonplaceholder.typicode.com/users/${user}`);
    setLoading(true);
  }

//   This function is for submitting the input by hitting the Enter key. When you hit enter, it sets the URL and loading status, and sends it to the useAxios custom hook
  function handleOnKeyPress(e) {
    if (e.key === "Enter") {
      setUrl(`https://jsonplaceholder.typicode.com/users/${user}`);
      setLoading(true);
    }
  }

  return (
    <div className="App">
      <p>Fetch User</p>
      <input
        onKeyDown={handleOnKeyPress}
        type="number"
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={getUser}>Search User</button>

        {/* if loading is set to true, the loading screen shows */}
      {loading && <Spinner />}
        {/* if loading is set to false, and the data exists, then it renders the ShowUserDetails component */}
      {!loading && data && <ShowUserDetails data={data} />}
        {/* if error exists, it renders an error message */}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default App;