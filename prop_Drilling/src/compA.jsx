import React from 'react'
import CompB from './compB'

const CompA = ({name,image}) => {
  return (
    <CompB name = {name} image = {image}/>
  )
}

export default CompA