export default function Skills() {
    return (<div
        className="min-h-screen flex flex-col justify-center items-center md:items-start p-2 md:px-12 bg-gradient-to-tl from-secondary to-primary">
        <div className="flex text-primary-content flex-col">
            <h2 className="text-3xl md:text-5xl  lg:text-7xl  font-extrabold ">My soft skills</h2>
            <div className="mt-8 overflow-x-auto">
                <table className="table text-neutral-content w-full">

                    <thead>
                    <tr>

                        <th>Skill</th>
                        <th>Assest</th>

                    </tr>
                    </thead>
                    <tbody>

                    <tr>

                        <td>English speaking skills</td>
                        <td><input type="range" min="0" max="100" value="30" className="range range-md"/></td>

                    </tr>

                    <tr>

                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>

                    </tr>


                    </tbody>
                </table>
            </div>

        </div>


    </div>)
}