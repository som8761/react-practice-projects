import React, { useState, useEffect } from "react";

const FetchApi = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    // API WEBSITE : pokeapi.co
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    setUser(data);
  }

  console.log(user);
  return (
    <>
      {/* <div className="main">
        {user && (
          <>
            {user.game_indices.map((item)=>{
              // console.log(item);
            })}
          </>
        )}
      </div> */}
    </>
  );
};

export default FetchApi;
