import React, {useState, useEffect, useRef } from 'react'
import { useThree, extend } from 'react-three-fiber';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
extend({ DragControls })

export default function Dragger(props) {

    const { gl, camera, scene } = useThree();
    const ref = useRef()
    const dragref = useRef()
    const [children, setChildren ] = useState([])

    useEffect(() => {
        // console.log('child ', ref.current );
        setChildren(ref.current.children)
    }, [])

    useEffect(() => {
        // console.log('scene ', scene, 'gl ', gl  );
        dragref.current.addEventListener("hoveron", e => {
            props.setControlOrbitByDragger(false)
        })

        dragref.current.addEventListener("hoveroff", e => {
            props.setControlOrbitByDragger(true)
        })

        dragref.current.addEventListener("drag", e => {
            // console.log('on drag ', e );
            e.object.api?.position.copy(e.object.position)
            e.object.api?.velocity.set(0,0,0)
        })

        dragref.current.addEventListener("dragstart", e => {
            // console.log('on drag ', e );
            e.object.api?.mass.set(0)
        })

        dragref.current.addEventListener("dragend", e => {
            // console.log('on drag ', e );
            e.object.api?.mass.set(1)
        })

    }, [children])

  return (
    <group ref={ref} >
        <dragControls 
        transformGroup={props.transformGroup}
        args={[ children, camera, gl.domElement ]} 
        ref={dragref}
        />
        {props.children}
    </group>
  )
}
