const mockInfo = [ 
    {
        size: '5 x 5',
        type: 'Climate-Controlled',
        number: '1000',
    },
    {
        size: '5 x 10',
        type: 'Climate-Controlled',
        number:'1001',
    },
    {
        size: '5 x 15',
        type: 'Climate-Controlled',
        number: '1002',
    }
]

    
    const HiddenMenu = () => {
        return (
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    {/* HIDDEN MENU HERE */}
                    {mockInfo.map((info, index) => {
                        return(
                            <div key={index} className="collapse collapse-arrow bg-sale-200">
                        <input type="radio" name="my-accordion-2" />
                    <div className="text-slate-100 collapse-title text-xl font-medium">{info.size} - {info.type}</div>
                        <div className="collapse-content">
                            <button className="text-slate-200 btn btn-neutral">{info.number}</button>
                        </div>
                    </div>
                        )
                    })
                } 
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        )
    }
    
    export default HiddenMenu;