export default function Skills() {
    return (<div
        className="min-h-screen flex flex-col justify-center items-center md:items-start p-2 md:px-12 bg-gradient-to-tl from-secondary to-primary">
        <div className="flex text-primary-content flex-col">
            <h2 className="text-3xl md:text-5xl  lg:text-7xl  font-extrabold ">My soft skills</h2>
            <div className="mt-8 flex flex-col ">
                <div>
                    <h2>interpersonal skills :</h2>
                    <input type="range" min="0" max="100" value="60" className="range range-md"/>
                </div>
                <div>
                   <h2>English speaking skills :</h2>
                   <input type="range" min="0" max="100" value="30" className="range range-md"/>
               </div>
                <div>
                    <h2>Personal integrity :</h2>
                    <input type="range" min="0" max="100" value="70" className="range range-md"/>
                </div>

            </div>

        </div>


    </div>)
}