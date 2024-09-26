import HiddenMenu from "../../HiddenMenu/HiddenMenu"

const mockInfo = [ 
    {
        Title: 'Select Unit',
    },
    ]

    const SelectUnitButton = () => {
        return (
            mockInfo.map((info) => {
                return(
                    <article className="flex justify-center w-screen">
                        <h4 className="text-lg pb-2 font-semibold"></h4>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="text-slate-100 input px-3 input-bordered btn-wide flex items-center bg-base-100 gap-2 btn btn-neutral" 
                        onClick={()=>document.getElementById('my_modal_2').showModal()}>{info.Title}
                        </button>
                          <HiddenMenu />
                    </article>
                )
            })
        )
    }
    
    export default SelectUnitButton;