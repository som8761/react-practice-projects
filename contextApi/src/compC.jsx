import React from 'react'
import { value,value1 } from './App'

const CompC = () => {
  return (
    <value.Consumer>
        {
            (name) =>{
                return (
                    <>
                    <h3>My name is : {name}</h3>
                    <value1.Consumer>
                        {
                            (image) =>{
                                return (
                                    <img src={image} alt="" />
                                    // <h3>My gender is : {gender}</h3>
                                )
                            }
                        }
                    </value1.Consumer>
                    </>
                )
            }
        }
    </value.Consumer>
  )
}

export default CompC


/*SUMMERY
//// why i need to use contextApi instead of propDrilling////

as previous i have used the prop drilling where i used to pass the value/data to every component .so if i had to do like , as for example i need a value in compc from app.jsx comp..so if i use prop derilling then i needed to pass the value each and every child component to convey the data in compC..so the code will be very complex ,thats why instead of using prop Drilling we can use "contextApi"..


// CONS:
while using contextApi i have seen that i have to use the function for using the context Api in that perticular component where i need to pass the value...its ok to do this ,,but whenever we have so much data we have to use a function inside that function and if i have more than 1 or 2 or 3 or 5    then it shows like a call back helll..  so ,

for releif from this situation we need to understand the "USECONTEXT HOOK" where the call back hell will not be shown.

*/
