import {useRef} from "react";
import {useFrame} from "@react-three/fiber";

export default function Box(props){
    const ref = useRef()
    useFrame((state, delta)=> {ref.current.x += 0.01})
    return(<>

    <mesh {...props} ref={ref}>
        <boxGeometry args={[2,2,2]}/>
        <meshBasicMaterial color ="orange"/>
    </mesh>

    </>)
}