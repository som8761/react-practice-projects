import React, { useState, useEffect } from "react";
import "./FetchApi.css";
import Loading from "./loading";
import FetchTheDataInUi from "./fetchTheDataInUi";

const FetchApi = () => {
  const [user, setUser] = useState([]);
  const [loading, setLogin] =  useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      setLogin(false) // state ta uodate holo r loading lekha ta chole galo.
      setUser(await response.json()); // data json a convert holo and state update holo.

    } catch (error) {
      console.error("Data is able to fetch",error);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);


  if(loading){
    return (<Loading/>)
  } // jatokhn amader state gulo update hote somoy lagachilo tatokhn ai loading lekha ta dekhachilo..trpor jakhn e amader data ta fecth hoye ui te show krlo takhn e oi loading lekha ta chole galo r niche else er modhe thaka component ta render holo mane puro data ta ui te render holo.
  // first a loading lekha ta dekhachilo ,then jakhn e state update hoye component ta re-render holo thik takhn e loading lekha ta chole galo r ui te data ta show krlo....
  else{
    return (<FetchTheDataInUi user={user}/>)
    
  }
};

export default FetchApi;

/*
  HOW IT WORKS:

  first a useState er initial value ta update hoche then useEffect ta cholche .so useEffect er vatorer j function ta ache sekhane API sever k request pathiye data anche and data ashe gale setake json a convert kore useState er modhe update korache..atokhone user namok variable er modhe (useState tar update er fole) data server thake chole asche..

  abar jahatu state ta update hoyeche tai component ta re-render hobe ..and j data ta aschilo seta user.map er dara ui te show hobe.


  pore aro akta state banalam user name er..initial value dilam true..mane jadi loading er initial value true hoye thake then loading lekha ta show korbe r jadi state ta update (mane loa  ding = false) hoye jay then component ta re-render hobe r loading ta chole giye ui te sudhu data ta show korbe.
  
  
  ***aksathe multiple states update hoy r aksathe ak barei whole component ta re-render hoy ,"bare bare akta state update r componewnt ta re-render hoyna..orm kre hoyna "...

  */

/*summery
// the theory of [] blank array in useState and how it works:
When the component first renders, the fetchData function is called immediately due to the useEffect hook with an empty dependency array []. This means that the fetchData function will execute once when the component mounts.

Inside the fetchData function, you're making an asynchronous request to fetch data from an API using fetch. Once*+ the data is fetched successfully (await response.json()), you're updating the user state with the fetched data using setUser(await response.json()).

*****So, when the component first renders, the initial value of user state is an empty array []. After the data is fetched and the user state is updated with the fetched data, React will trigger a re-render, and the component will render again with the updated state containing the fetched data. This is how the UI gets updated with the fetched data once it's available.




// why i am using user.map instead of data.map:

If you had used data.map instead of user.map, it wouldn't work as expected. Here's why:

When the component first renders, the data variable would initially be an empty array because you haven't fetched any data yet. So, if you used data.map, it would try to map over an empty array, resulting in an error because map is a method that works on arrays.

By using user.map, you're mapping over the user state, which is initially an empty array as well, but it gets updated with the fetched data once the fetchData function is called and data is received from the API. So, when the component re-renders after the state update, user.map will correctly map over the fetched data stored in the user state, ensuring that the UI renders the data dynamically.


When you try to map over the initial data variable, which is an empty array initially, it won't contain any data until the API response is received and processed. This is why mapping over data directly would result in rendering a blank array initially.

By using the user state, you ensure that you're mapping over the data that has been fetched and stored in the state after the API response is received. This ensures that you render the actual fetched data rather than an empty array. Using the state (user in this case) ensures that your UI updates dynamically based on the fetched data.

**meanwhile data nijer initial value kr update korte parchena..kintu user nijer state take update kore diche..eventually sei updated state ta render hoche ui te..

*/
