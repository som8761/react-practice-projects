import React from 'react'

const CompC = ({name,image}) => {
  return (
   <>
    <div>My name is {name}</div>
    <img src={image} alt="image" />
   </>
  )
}

export default CompC