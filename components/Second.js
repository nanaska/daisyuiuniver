
import React from "react";
import { Canvas } from "@react-three/fiber";

import {Suspense} from "react";
import Da from "./model/Da"

import {OrbitControls} from "@react-three/drei"

export default function Second() {
    return (<div className="min-h-content relative z-90 ">
        <div
            className="mx-10 -mt-20 mb-10 px-24 py-14 h-full rounded-[48px]   backdrop-blur-lg  bg-[rgba(255,255,255,0.2)]">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="card bg-base-100 px-0 py-0 md:py-4 md:px-6 text-2xl w-full md:w-full font-extrabold "><div className="">Hi there im
                    trying to make some projects and this project one of that. In this site i use daisy ui and next js +
                    tailwind css thats not enough but im trying.</div>
                </div>
                {/*<div>*/}
                {/*    <Canvas>*/}
                {/*        <directionalLight intensity={0.5} />*/}
                {/*        /!*<Suspense fallback={null}><Da /></Suspense>*!/*/}
                {/*    </Canvas>*/}
                {/*</div>*/}
            </div>
        </div>

    </div>)
}