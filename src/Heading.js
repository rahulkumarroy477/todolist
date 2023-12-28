import React from 'react'

function Heading(props) {
  return (
    <h1 style={{color:"black",textAlign:"center",borderBottom:"2px solid black",fontSize:`${props.size}px`}}>{props.txt}</h1>
  )
}

export default Heading