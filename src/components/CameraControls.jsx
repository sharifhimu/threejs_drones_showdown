import { useFrame } from 'react-three-fiber'
import state from '../State'
// import * as THREE from 'three'

export default function CameraControls() {

    useFrame(({ camera, scene }) => {
        // console.log( 'scene ', scene );
        // console.log('diff ', diff );
        if( state.activeMesh.name !== state.activemeshName ){
          let selectedobj = scene.getObjectByName(state.activemeshName)
          // console.log('selected obj ', selectedobj );
          state.activeMesh = selectedobj || {}
        }

        if( state.shouldUpdate ){
            camera.position.lerp( state.cameraPos, .2 )
            scene?.orbitControls?.target?.lerp( state.target, .1 )
            scene?.orbitControls?.update()        
            
            let diff = camera.position.clone().sub(state.cameraPos).length()
            if ( diff < 0.1 ) state.shouldUpdate = false
        }

        
    })

  return (
    null
  )
}
