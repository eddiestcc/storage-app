const LedgerRow = ({ledgerRow}) => {
    
    const {date, details, amount} = ledgerRow;

    const formatAmount = Number(amount).toFixed(2)

    const formatDate = new Intl.DateTimeFormat('en-US', {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }).format(Date.parse(date))


    return (
        <article className="grid grid-cols-11 rounded-lg bg-white note-row pt-2">
            <div className="grid col-span-11 bg-none pl-2 pr-2">
                <div className="grid grid-cols-11 rounded-lg bg-base-100 w-full shadow-xl pt-6 pb-6">
                    <div className="flex items-center col-span-2 pl-2">
                        <h1>{formatDate}</h1>
                    </div>
                    <div className="flex items-center col-span-6">
                        <h1>{details}</h1>
                    </div>
                    <div className="flex items-center col-span-1">
                        <h1>$ {formatAmount}</h1>
                    </div>
                    <div className="flex items-center col-span-1">
                        <h1></h1>
                    </div>
                    <div className="flex items-center col-span-1">
                        <div className="dropdown dropdown-top">
                        <div tabIndex={0} role="button" className="btn btn-xs btn-info">More</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Receipt</a></li>
                            <li><a>Refund</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default LedgerRow;