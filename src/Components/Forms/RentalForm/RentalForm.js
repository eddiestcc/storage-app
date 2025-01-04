const RentalForm = () => {


    return (
        <div className="flex flex-row">
            <div>
                <article className="p-10 w-96">
                    <h4 className="text-lg pb-2 font-semibold text-base-100">Value of Goods</h4>
                    <label className="input px-3 input-bordered flex items-center text-slate-400 font-bold bg-slate-200 gap-2">
                        <input defaultValue={'$ '}></input>
                    </label>
                </article>
            </div>
            <div>
                <article className="p-10 w-96">
                    <h4 className="text-lg pb-2 font-semibold text-base-100">Insurance</h4>
                    <label className="input px-3 input-bordered flex items-center bg-slate-200 gap-2">
                        <select className=" w-96 px-3 bg-slate-200 text-slate-400 font-bold gap-2" name="insurnace">
                            <option value={''}></option>
                            <option value={'2000'}>$2,000</option>
                            <option value={'5000'}>$5,000</option>
                            <option value={'10000'}>$10,000</option>
                        </select>
                    </label>
                </article>
            </div>
        </div>

    )
}

export default RentalForm;