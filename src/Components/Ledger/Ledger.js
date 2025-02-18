import AllLedgerRows from "../AllLedgerRows/AllLedgerRows";



const Ledger = () => {

    

    return (
        <div className="flex justify-center rounded-lg bg-white">
            <article className="w-full rounded-lg">
                <div className="grid grid-cols-11 h-24 p-4 bg-slate-100 rounded-lg">
                    <div className="flex items-center col-span-2 pl-2">
                        <h1>Date</h1>
                    </div>
                    <div className="flex items-center col-span-6">
                        <h1>Details</h1>
                    </div>
                    <div className="flex items-center col-span-1">
                        <h1>Amount</h1>
                    </div>
                </div>
                <div id="note-body" className="grid gap-y-2 h-auto pt-4 pb-4">
                    <AllLedgerRows />
                </div>
            </article>
        </div>
    );
}

export default Ledger;