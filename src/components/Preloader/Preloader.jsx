import React from 'react'

const Preloader = () => {
    const Loading = {
        width:"100%",
        height:"100dvh",
        display: "flex" ,
        justifyContent:'center',
        alignItems : 'center',
        color:"dodgerblue"
    }
  return (
    <div style={Loading}>
      <h1>Loaading...</h1>
    </div>
  )
}

export default Preloader
