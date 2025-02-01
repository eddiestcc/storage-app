const LedgerRow = ({ledgerRow}) => {

    const {date, details, amount, balance} = ledgerRow

    return (
        <article className="grid grid-cols-11 rounded-lg bg-white note-row pt-2">
            <div className="grid col-span-11 bg-none pl-2 pr-2">
                    <div className="grid grid-cols-11 rounded-lg bg-base-100 w-full shadow-xl pt-6 pb-6">
                        <div className="flex items-center col-span-2 pl-2">
                            <h1>{date}</h1>
                        </div>
                        <div className="flex items-center col-span-6">
                            <h1>{details}</h1>
                        </div>
                        <div className="flex items-center col-span-1">
                            <h1>{amount}</h1>
                        </div>
                        <div className="flex items-center col-span-1">
                            <h1>{balance}</h1>
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