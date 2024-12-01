
const FilterListItem = ({ tableList, setVisibleTable }) => {

    const filterMenu = [
        {
            menuList: ['Unit Type'],
            subMenuLists: ['FCC', 'ECC', 'Clear']
        },
        {
            menuList: ['Delinquency Status'],
            subMenuLists: ['Current', 'Past Due', 'Clear']
        },
        {
            menuList: ['Sort By'],
            subMenuLists: ['Unit Number', 'Account Name', 'Paid Thru Date', 'Clear']
        }
    ]
    
    const filterUnitType = (e) => {

        let selectedButtonName = e.target.textContent;

        const filteredList = [];

        tableList.filter((unit) => {
            const unitType = unit.unit_type;
            if(unitType === selectedButtonName) {
                filteredList.push(unit);
            } 
         })

        if(selectedButtonName !== 'Clear') {
            setVisibleTable(filteredList);
        } else {
            setVisibleTable(tableList);
        }
    }

    return (
        <div className="flex flex-wrap justify-evenly">
        {/* {   I left off here. What I need to do is figure out a way to iterate over filtermenu */}
        {/* so that i can autoname all buttons  */}
            {
                filterMenu.forEach((menuName, i) => {
                console.log(menuName.menuList, i)
                return (
                <div>
                    <details className="dropdown">
                        <summary className="btn btn-wide btn-outline">{menuName}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
                            <div>
                                {filterMenu[0].subMenuLists.map((button) => {
                                    return (
                                        <div className="p-5 w-min">
                                            <li onClick={filterUnitType} className="filter-name btn btn-outline w-48 overflow-hidden">{button}</li>
                                        </div>
                                    )
                                })}
                            </div>
                        </ul>
                    </details>
                </div>
                )
            })}
        </div>
    )

    // return (
    //     <div className="flex flex-wrap justify-evenly">
    //         {filterMenu[0].menuList.map((menuName) => {
    //             return (
    //             <div>
    //                 <details className="dropdown">
    //                     <summary className="btn btn-wide btn-outline">{menuName}</summary>
    //                     <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
    //                         <div>
    //                             {filterMenu[0].subMenuLists.map((button) => {
    //                                 return (
    //                                     <div className="p-5 w-min">
    //                                         <li onClick={filterUnitType} className="filter-name btn btn-outline w-48 overflow-hidden">{button}</li>
    //                                     </div>
    //                                 )
    //                             })}
    //                         </div>
    //                     </ul>
    //                 </details>
    //             </div>
    //             )
    //         })}
    //     </div>
    // )
}

export default FilterListItem;