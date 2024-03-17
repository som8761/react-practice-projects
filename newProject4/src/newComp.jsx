import React from 'react'
import './newComp.css'

const NewComp = ({boxName}) => {
  return (
      <div>
        <div className="container">
            <div className="box">{boxName}</div>
        </div>
    </div>
  )
}

export default NewComp