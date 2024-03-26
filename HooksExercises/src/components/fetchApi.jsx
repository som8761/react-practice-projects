import React, { useState, useEffect } from 'react'

const FetchApi = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
      fetchApi()
    },[])
    
    async function fetchApi(){
        // API WEBSITE : pokeapi.co
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto') 
        const data = await response.json()
        setUser(data)
    }

    console.log(user);
  return (
    <>
      {
        user.length > 0 &&  // Check if user array is not empty
        user.map((item, index) => (
            <div key={index}>fgzd{item.abilities[0]}</div>
        ))
    }
    
    </>
  )
}

export default FetchApi