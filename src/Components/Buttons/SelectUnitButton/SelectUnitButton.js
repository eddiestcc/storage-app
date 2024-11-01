import HiddenMenu from "../../HiddenMenu/HiddenMenu"

    const SelectUnitButton = () => {
        return (
            <article className="flex justify-center w-screen">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="text-slate-100 input px-3 input-bordered btn-wide flex items-center bg-base-100 gap-2 btn btn-neutral" 
                onClick={()=>document.getElementById('my_modal_2').showModal()}>Select Unit
                </button>
                <HiddenMenu />
            </article>
        )
    }
    
    export default SelectUnitButton;