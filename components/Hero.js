import Image from "next/image"
import githublogolight from "../public/GitHub-Mark-Light-120px-plus.png"
import Link from "next/link";

export default function Hero() {
    return (<div
        className="min-h-[90vh] bg-opacity-70 md:min-h-screen  flex flex-col bg-gradient-to-br items-center  justify-center from-primary   to-secondary  bg-base-100">

        <div className="flex md:mr-auto flex-col  justify-center items-center gap-y-8 md:flex-row ">
            <div className="md:mr-auto   md:px-[4rem] text-center md:text-left text-primary-content">
                <h2 className="text-3xl md:text-5xl  lg:text-7xl  font-extrabold">Portfolio website</h2>
                <h3 className="text-2xl md:text-2xl lg:text-3xl font-extrabold">Here u can know about me better</h3>
                <div
                    className=" flex relative z-[60]  flex-row items-center justify-center md:justify-start   mt-6 space-x-2">
                    <Link href="https://github.com/nanaska">
                        <div className=" space-x-2 btn   md:btn-lg">
                            <Image src={githublogolight} height={30} width={30}/>
                            <span className=" pr-4">Github</span>
                        </div>
                    </Link>
                    <div className="btn  btn-active btn-ghost md:btn-lg">
                        My projects
                    </div>
                </div>
            </div>
            <div>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-title">Total Page Views</div>
                        <div className="stat-value">1,400</div>
                        <div className="stat-desc"></div>
                    </div>

                </div>
            </div>
        </div>
        <div className="custom-shape-divider-bottom-1651683654  fill-secondary">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                 preserveAspectRatio="none">
                <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    className="shape-fill"></path>
            </svg>
        </div>

    </div>)
}