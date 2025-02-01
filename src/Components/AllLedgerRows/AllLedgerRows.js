import LedgerRow from "../LedgerRow/LedgerRow";

const AllLedgerRow = ({ledgerDetails}) => {
    return (
        <div>
            {ledgerDetails.map((ledgerRow, index) => {
                <LedgerRow key={index} ledgerRow={ledgerRow}/>
            })}
        </div>
    );
}

export default AllLedgerRow;