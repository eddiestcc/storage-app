import { useContext, useState } from "react";
import HiddenMenu from "../../HiddenMenu/HiddenMenu"
import { UnitDisplayContext } from "../../../Pages/Rental/Rental";

    const SelectUnitButton = ({setDisplayUnitInfo}) => {

        const displayUnitInfo = useContext(UnitDisplayContext);

        let { number, size, type } = displayUnitInfo;

        return (
            <article className="flex justify-center w-screen">
                <div className="flex-col">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* show selected unit here */}
                    <div className="flex justify-center">
                        <h1 className="text-xl text-base-200 p-5">Unit number: {number}  Size: {size}  Type: {type}</h1>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-slate-100 input px-3 input-bordered btn-wide flex items-center bg-base-100 gap-2 btn btn-neutral" 
                        onClick={()=>document.getElementById('my_modal_2').showModal()}>Select Unit
                        </button>
                    </div>
                    <HiddenMenu setDisplayUnitInfo={setDisplayUnitInfo} />
                </div>
            </article>
        )
    }
    
    export default SelectUnitButton;