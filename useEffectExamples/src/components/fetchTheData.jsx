import React, { useEffect, useState } from "react";
import "./fetchTheData.css";

const FetchTheData = () => {
  const [user, setuser] = useState([]);

  async function getTheData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setuser(data);
  }

  useEffect(() => {
    getTheData();
  },[]);

  return (
    <>
      <div className="main">
        {user.map((userItem) => {
          const { image, title, description, price,id } = userItem;

          return (
            <div className="container" key={id}>
              <div className="image">
                <img src={image} alt="image" />
              </div>
              <h3>{title}</h3> 
              <h5>{description.slice(0,30)}</h5>
              <h6>{price}</h6>
            
              {/* {console.log(userItem)} */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchTheData;
