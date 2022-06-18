import * as THREE from 'three'

// one : "Drone_Body_body_0"
// two ; "Object_2"

const state = {
    activeMesh: {},
    activemeshName: "Drone_Body_body_0",
    cameraPos: new THREE.Vector3(1,2,6),
    target: new THREE.Vector3(6,4,0),
    shouldUpdate : true
}

export default state;