import Logout from "../../Components/Buttons/Logout/Logout";
import Nav from "../../Components/Nav/Nav";

const Retail = () => {
    return(
        <div className="h-screen">
        {/* TOP  */}
            <div className="flex flex-row-reverse">
                <Logout />
                <Nav />
            </div>
            <div className="flex justify-center pt-5 h-96">
                <div className="justify-center items-center flex flex-wrap p-5 bg-base-200 w-11/12 rounded-2xl">
                    <h1 className="text-4xl">Retail</h1>
                </div>
            </div>
        </div>
    )
}

export default Retail;