import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

function Models(props) {
    
    const model = useLoader(
        GLTFLoader,
        props.path
    )

    // console.log('model ', model );

    model.scene.traverse(child => {
      if( child.isMesh ){
        child.castShadow = true
        child.receiveShadow = true
        child.material.side = THREE.FrontSide
      }
    })
    
    return (
    <primitive 
    object={model.scene} 
    {...props}
    />
    // null
  )
}

export default Models