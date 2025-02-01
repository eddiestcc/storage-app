import { useContext } from "react";

import { LedgerDetailsContext } from "../../Pages/Account/Account";
import LedgerRow from "../LedgerRow/LedgerRow";

const AllLedgerRows = () => {

    // Context
    const ledgerDetails = useContext(LedgerDetailsContext);

    console.log(ledgerDetails,'ld')

    const renderNoLedger = () => {
        return (
            <div className="card-body">
                <h1 className="flex justify-center items-center card-title">Please wait...</h1>
            </div>
        );
    }

    const renderLedger = () => {
        return (
            <div>
                {ledgerDetails.map((ledgerRow, index) => (
                    <LedgerRow key={index} ledgerRow={ledgerRow}/>
                    ))}
            </div>
        );
    }

    return ledgerDetails.length > 0 ? renderLedger() : renderNoLedger();
}

export default AllLedgerRows;