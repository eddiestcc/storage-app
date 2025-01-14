import { useContext } from "react";
import HiddenMenu from "../../HiddenMenu/HiddenMenu"
import { UnitDisplayContext } from "../../../Pages/Rental/Rental";

    const SelectUnitButton = ({setDisplayUnitInfo}) => {

        const displayUnitInfo = useContext(UnitDisplayContext);
        console.log(displayUnitInfo,'display')

        // let { number, size, type } = displayUnitInfo;

        return (
            <article className="flex justify-center w-screen">
                <div className="flex-col">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div className="flex justify-center pb-10">
                        <button className="text-slate-100 input px-3 input-bordered btn-wide flex items-center bg-base-100 gap-2 btn btn-neutral" 
                        onClick={()=>document.getElementById('my_modal_2').showModal()}>Select Unit
                        </button>
                    </div>
                    <HiddenMenu setDisplayUnitInfo={setDisplayUnitInfo} />
                    {/* show selected unit here */}
                    <div className="flex justify-center">
                        <h1 className="text-xl font-black text-base-200 p-5">
                            Unit number:
                        </h1>
                        <h2 className="text-xl font-bold text-slate-500 p-5">
                            {displayUnitInfo.number} 
                        </h2>
                        <h1 className="text-xl font-black text-base-200 p-5">
                            Size:
                        </h1>
                        <h2 className="text-xl font-bold text-slate-500 p-5">
                            {displayUnitInfo.size}
                        </h2>
                        <h1 className="text-xl font-black text-base-200 p-5">
                            Type:
                        </h1> 
                        <h2 className="text-xl font-bold text-slate-500 p-5">
                            {displayUnitInfo.type}
                        </h2> 
                    </div>
                </div>
            </article>
        )
    }
    
    export default SelectUnitButton;