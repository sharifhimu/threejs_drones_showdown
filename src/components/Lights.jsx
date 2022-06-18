import React from 'react'
import Bulb from './Bulb'

export default function Lights() {
  
 return (
    <>
        <directionalLight position={[5,3,0]} intensity={.1}   />
        <ambientLight intensity={.2} />
        <Bulb position={[0,3,0]} />
        <Bulb position={[-5,3,0]} />
        <Bulb position={[5,3,0]} />
    </>
 )
}
