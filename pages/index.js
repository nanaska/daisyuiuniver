import Head from 'next/head'
import Hero from "../components/Hero";
import Second from "../components/Second";
import Image from "next/image";
import githublogolight from "../public/GitHub-Mark-Light-120px-plus.png";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import themepic from "../public/theme.png"
import Features from "../components/Features";
import Skills from "../components/Skills";


export default function Home() {
    let themes = ["light", "dark", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
    const [theme, setTheme] = useState("night")
    const [hovered, setHovered] = useState(false)
    const [h, setH] = useState(true)

    function check() {
        if (window.scrollY >= "200") {
            setH(false)
        } else {
            setH(true)
        }
    }

    if (typeof window != "undefined") {
        window.addEventListener("scroll", check)

    }
    //loadscreen
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, 2000)


    }, [])
    return (

        <div data-theme={theme}>

            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {load ? <div>
                <div onScroll={check}
                     className={h ? "z-[100] text-primary-content navbar backdrop-opacity-0 md:px-12 fixed duration-400" : "duration-400  z-[100] navbar backdrop-opacity-100 bg-base-300 px-12 fixed"}>
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case font-extrabold md:text-2xl">DS PORTFOLIO</a>
                    </div>
                    <div className="flex-none ">
                        <ul className=" menu menu-horizontal  p-0">

                            <li tabIndex="0" onMouseEnter={() => {
                                setHovered(true)
                            }} onMouseLeave={() => {
                                setHovered(false)
                            }}>
                                <a> <Image src={themepic} height={30} width={30}/>
                                    Theme
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                         height="20"
                                         viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                    </svg>
                                </a>
                                <motion.ul

                                    animate={{
                                        opacity: hovered ? 1 : 0

                                    }}
                                    transition={{
                                        duration: 0.2
                                    }}
                                    className="p-2 dropdown-content shadow-2xl   overflow-auto h-[400px] bg-base-100">

                                    {themes.map((themes, index) => {

                                        return (
                                            <li data-theme={themes}
                                                className=" flex  flex-row text-base-content rounded-t-box rounded-b-box top-px mt-4"
                                                key={index}>
                                                <a className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2 outline"
                                                   onClick={(e) => {
                                                       setTheme(e.target.innerText)
                                                   }}>{themes}


                                                </a>

                                            </li>)
                                    })}
                                </motion.ul>
                            </li>
                            <li className="p-2 hover:scale-95">
                                <Image src={githublogolight} height={20} width={35}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <Hero/>
                <Second/>
                <Features/>
                <Skills/>
            </div> : <div className="min-h-screen animate-spin flex flex-col items-center justify-center">
                <div className="radial-progress" style={{"--value":"40"}}></div>
            </div>}

        </div>
    )
}
