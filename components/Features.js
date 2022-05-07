import {Canvas} from "@react-three/fiber";
import Box from "../components/Box"




export default function Features(){

    return(<div className="min-h-screen flex flex-col justify-center items-center mt-16 bg-base-300">

       <div className="">
           <Canvas camera={{position: [0,0,5]}}>

               <Box position={[-4,0,0]}/>
               <Box position={[0,0,0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}/>
               <Box position={[4,0,0]}/>
           </Canvas>
       </div>

    </div>)
}