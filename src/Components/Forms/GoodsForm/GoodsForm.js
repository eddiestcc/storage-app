import { readInputField } from "../../../utils"

const mockInfo = [
    {
        Title: 'Description of Goods',
    },
    ]
    
    
    const GoodsForm = () => {
        return (
            mockInfo.map((info, index) => {
                return(                        
                    <article key={index} className="p-10 w-screen">
                        <h4 className="text-lg pb-2 font-semibold text-base-100">{info.Title}</h4>
                        <label className="input px-3 input-bordered  flex items-center bg-slate-200 gap-2">
                            <input onChange={readInputField} type="text" className="text-base-100" placeholder="..." />
                        </label>
                    </article>
                )
            })
        )
    }
    
    export default GoodsForm;