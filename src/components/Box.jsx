import {  useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import * as THREE from 'three'; 
import { useBox } from '@react-three/cannon';

const Box = (props) => {

    // const ref = useRef()
    const texture = useLoader( THREE.TextureLoader, '/colorchecker.png' )

    const [ref, api] = useBox(() => ({ mass: 1, ...props }) )

    useFrame((state, delta, xrframe) =>{
        // console.log('ref ', ref.current );
        // console.log('state ', state, 'delta ', delta, 'xrframe ', xrframe );
        ref.current.rotation.x += .01
        ref.current.rotation.y += -.01
    })

    const handleClick = e => {
      // console.log('click ', e );
      e.object.active = true
      if( window.activeMesh ) {
        window.activeMesh.scale.x = 1
        window.activeMesh.scale.y = 1
        window.activeMesh.scale.z = 1
      }
      window.activeMesh = e.object
    }

    const handleEnter = e => {
      // console.log('enter ', e );
      scaleUp(e.object)
    }

    const handleLeave = e => {
      // console.log('leave ', e );
      if( !e.object.active ){
        e.object.scale.x = 1
        e.object.scale.y = 1
        e.object.scale.z = 1
      }
    }

    const scaleUp = (obj) => {
      obj.scale.x = 1.5
      obj.scale.y = 1.5
      obj.scale.z = 1.5

    }

    return(
      <mesh {...props}  
      ref={ref} 
      api={api} 
      castShadow 
      onDoubleClick={handleClick}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      >
        <sphereGeometry args={[1, 40, 40]}  />
        <meshPhysicalMaterial 
        map={texture}
        metalness={.3}
        roughness={.5}
        
        />
      </mesh>
    )
}

export default Box ;