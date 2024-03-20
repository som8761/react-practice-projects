import  {useState, useEffect} from 'react'


/*Dynamic Title Change: Make a component that changes the title of the webpage dynamically using useEffect. For example, when a user enters a specific page, the title of the webpage changes accordingly.*/

const DynamicTitleChange = () => {
    const [count, setcount] = useState(0);

    // jakh e a,i button er modhe click korlam takhn e amar usestate ta update holo then component re-render holo ,re-render manei useEffect call holo r jaja useEffect er vatore lekha chilo run holo.
    useEffect(() => {
        console.log('count has changed!');
        document.title = count > 0?  `Chats: ${count}` : `Chats`;
    }, [count]) 
    
  return (
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>{setcount(count + 1)}}>click me</button>
    </>
  )
}

export default DynamicTitleChange