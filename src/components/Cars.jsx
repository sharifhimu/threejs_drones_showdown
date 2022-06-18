import React, { Suspense } from 'react'
import BoundaryBox from './BoundaryBox'
import Models from './Models'
import Dragger from './Dragger'

export default function Cars({ setControlOrbitByDragger }) {
  return (
        <Suspense fallback={null} >
            <Dragger setControlOrbitByDragger={setControlOrbitByDragger} transformGroup={true} >
               <BoundaryBox  
                position={[4,4,0]}
                // visible={true}
                dims = { [2.5,1.5,2] }
                offset={[0,.5,0]}
               >
                  <Models 
                  path="/buster_drone/scene.gltf" 
                  />
               </BoundaryBox>
            </Dragger>

            <Dragger setControlOrbitByDragger={setControlOrbitByDragger}  transformGroup={true} >
            <BoundaryBox  
                position={[-5,1,0]}
                // visible={true}
                dims = { [3.4,1.6,2] }
                offset={[.2,0,0]}
            >
                <Models 
                path="/steampunk_underwater_explorer/scene.gltf" 
                scale={new Array(3).fill(.08)}
                />
            </BoundaryBox>
            </Dragger>
        </Suspense>
  )
}
