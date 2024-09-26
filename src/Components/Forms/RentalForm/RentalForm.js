const mockInfo = [
{
    Title: 'Value of Goods',
}, 
{
    Title: 'Insurance',
},    
{
    Title: 'Unit Number',
},
{
    Title: 'Unit Size',
},
{
    Title: 'Unit Type',
}, 
]

const RentalForm = () => {

    return (
        mockInfo.map((info) => {
            return(
                <div>
                    <div>
                        <article className="p-10 w-96">
                            <h4 className="text-lg pb-2 font-semibold text-base-100">{info.Title}</h4>
                            <label className="input px-3 input-bordered  flex items-center bg-slate-200 gap-2">
                                <input type="text" className="text-base-100" placeholder="..." />
                            </label>
                        </article>
                    </div>
                </div>
            )
        })
    )
}

export default RentalForm;