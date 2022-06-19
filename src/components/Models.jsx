import React from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

function Models(props) {
    
    const model = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + props.path
    )

    // console.log( 'model path', props.path, 'model ', model );

      let mixer ;
      if( model.animations.length > 0 ){
        mixer = new THREE.AnimationMixer(model.scene)
        model.animations.forEach( clip => {
          const action = mixer.clipAction(clip)
          action.play()
        } )
      }

      useFrame((scene, delta) => {
        // console.log('scene ', scene , 'delta ', delta );
        mixer?.update(delta)
      })

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