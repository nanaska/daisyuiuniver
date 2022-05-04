import {useState} from "react";

import Image from "next/image";
import githublogolight from "../public/GitHub-Mark-Light-120px-plus.png"

export default function Navbar() {
    const [h, setH] = useState(false)

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
    return (<div onScroll={check} className={h? "z-[100] navbar backdrop-opacity-0 px-12 fixed duration-400":"duration-400 z-[100] navbar backdrop-opacity-100 bg-base-300 px-12 fixed"}>
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none ">
            <ul className="menu menu-horizontal p-0">

                <li tabIndex="0">
                    <a>Theme
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                             viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                        </svg>
                    </a>
                    <ul className="p-2 bg-base-100">
                        <li>
                            <a>Submenu 1</a>
                        </li>
                        <li>
                            <a>Submenu 2</a>
                        </li>
                    </ul>
                </li>
                <li className="p-2 hover:scale-95">
                    <Image src={githublogolight} height={20} width={30}/>
                </li>
            </ul>
        </div>
    </div>)
}