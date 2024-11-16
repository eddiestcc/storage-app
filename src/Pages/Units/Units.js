import UnitTable from "../../Components/UnitTable/UnitTable";
import TableSidebar from "../../Components/TableSidebar/TableSidebar";

const Units = () => {
    return(
        <div className="h-screen">
            {/* LEFT  */}
            <div className="flex space-between">
                <div className="h-screen overflow-auto container">
                   <UnitTable />
                </div>
                {/* RIGHT  */}
                <div className="flex justify-center">
                    <TableSidebar />
                </div>
            </div>
          
        </div>
       
    )
}

export default Units;