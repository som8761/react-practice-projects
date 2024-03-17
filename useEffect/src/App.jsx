import { useState, useEffect } from "react";
import "./App.css";
import WindowResize from "./windowResize";
function App() {
  const [count, setCount] = useState(0);


  /********************************************************/
  /*first*/
  useEffect(() => {
    alert("i have done my dinner!");
  }); // The useEffect hook you provided will run after every render of the component. Since it doesn't specify any dependencies, it doesn't have any conditions to decide whether to run or not. Therefore, it will execute the alert message "i have done my dinner!" after every render of the component, including the initial render.
  // So, whenever the component re-renders, whether due to state or props changes, this effect will be triggered, and the alert message "i have done my dinner!" will be shown.

  /********************************************************/

  /*second*/
  useEffect(() => {
    alert("hey i am a developer!");
    document.title = count > 0? `Chats(${count})` : "Count" // ata ekhnae kaj korbena karon ekhane "count" er dependency dewa nai..

  }, []); // When you use an empty dependency array [] in a useEffect hook, it means that the effect will only run once "after the initial render of the component"(after karon useeffect sobar pore a chole). This initial render happens when the component is first loaded onto the screen. After this initial execution, the effect will not run again for the lifetime of the component unless the component is unmounted and then mounted again, such as by refreshing the page. So, any code inside this useEffect with an empty dependency array will only execute once, right after the component is first rendered on the screen.

  // it will only run when component will land for the first time and The useEffect hook provided with an empty dependency array [] will only run once after the initial render of the component. {{{"It will not run again for subsequent re-renders of the component because it does not have any dependencies specified".}}}

  /********************************************************/

  /*third*/
  useEffect(() => {
    // if(count >= 1){
    //   document.title = `Chats(${count})`
    // }
    // else{
    //   document.title = `Chats`
    // }
    document.title = count > 0? `Chats(${count})` : "Count"
    
    console.log("this value has changed");
    alert("count has changed.");
  }, [count]); // r ata jakhn jakhn ai count ta update hobe takhn e cholbe.ekhane ami janachi ai function take j count er state ta uodate hoche ai [] er dara..but upore ami oi function take janachi na j count ta update hoche tai oi condition ta kaj korchena.

   // r ata takhn cholche jakhn kichu ghotche..ekhane jamn count er satet ta update hoche proti bar tar porei cholche ai useEffect ta.ata uporer tar moto noi..ekhane count ta update hoche even jakhn 0 mane initial value tao update hoche first time takhn o ai eddect ta cholche..pore jakhn abar count er state 0 theke 1 update hoche takhn abar cholche..and so on.

  /********************************************************/


  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>click me</button>

      <WindowResize/>
    </>
  );
}

export default App;


/*useEffect :
useEffect er pati kotha holo page render holei cholbe..seta normally first time page ta render holo naki state chnage houye page ta render holo that doesnt matter..just page ta render howa niye kotha..


uporer example a ami ata bujhte pari j jadi amar kono useEffect function ta kono kichu chara first time render hoy (mane initial value) taoo cholbe..r state er darao render hoche..state ta jakhn first time alo 0 (initial value) takhn first time render holo . er manei useEffect kaj korbe..r jakhn seta ke abar click btn a click kore update kora holo tokhn o state update holo r kono state er updation manei full component er re-render,,r re-render manei useEffect er call punorai(not only useEffect re-render mane ja ja component ta te ache seta abar render hobe as same previous)..

mane modda kotha holo render holei useEffect call hobe seta j bhbei render  hok na kano. 


****useEffect er kaj ta component er sob kaj complete howar por kaj korbe.like upore console.log.

***we are not able to call any hooks inside any if or any condition.but we can use condition inside our hooks..thats why hooks must be called on top of the component.


[] = jadi blank thake then sudhu first time jakhn render hobe page takhn e sudhu akbar er jonno or vetorer code ta run hobe..

[count] = something is inside.it means jakhn e kichu thakbe vetore takhn seta jadi state hoy tahole state initially update holei code run hobe r ami jadi manually nijer thake state update korai taholeo run hobe.
*/
