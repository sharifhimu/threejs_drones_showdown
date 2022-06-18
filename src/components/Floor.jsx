import { useBox } from "@react-three/cannon";


const Floor = (props) => {

    const [ref, api ] = useBox(() => ({ ...props, args: [18,.1,15] }) )

    return(
      <mesh {...props}  receiveShadow ref={ref} >
        <boxGeometry args={[18,.1,15]} />
        <meshPhysicalMaterial />
      </mesh>
    )
}

  export default Floor ;