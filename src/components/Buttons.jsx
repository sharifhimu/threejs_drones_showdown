import React from 'react'
import '../App.css'
import state from '../State'
import * as THREE from 'three'

export default function Buttons() {

    const states = {
        1: {
            cameraPos: new THREE.Vector3(1,2,6),
            target: new THREE.Vector3(6,4,0),
            name: "Drone_Body_body_0"
        },
        2: {
            cameraPos: new THREE.Vector3(-3,2,6),
            target: new THREE.Vector3(-7,1,0),
            name: "Object_2"
        }
    }

    const handleSubmit = (num) => {
        console.log('num ', num );
        state.cameraPos.set( ...states[num].cameraPos )
        state.target.set( ...states[num].target )
        state.activemeshName = states[num].name
        state.shouldUpdate = true
    }
  
  return (
    <div  
    style={{
        position: 'absolute',
        left: '45vw',
        top: '20vh',
        zIndex: 1
    }}
    >
        <button  className='button-style' onClick={() => handleSubmit(2) } >
            {'<'}
        </button>

        <button className='button-style'  onClick={() => handleSubmit(1) } >
            {'>'}
        </button>

    </div>
  )
}
