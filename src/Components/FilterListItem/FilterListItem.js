import FilterListSubItem from "../FilterListSubItem";

const FilterListItem = ({ tableList, setVisibleTable }) => {

    const filterMenu = [
        {
            menuList:{
                title: ['Unit Type'],
                subTitle: ['FCC', 'ECC', 'Clear']
            } 
        },
        {
            menuList:{
                title: ['Delinquency Status'],
                subTitle: ['Current', 'Past Due', 'Clear']
            } 
        },
        {
            menuList:{
                title: ['Sort By'],
                subTitle: ['Unit Number', 'Account Name', 'Paid Thru Date', 'Clear']
            } 
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

    const tileList = filterMenu.map(item => {return item.menuList})
    const subTitleList = filterMenu.map(item => {return item.menuList})


    return (
        <div className="flex flex-wrap justify-evenly">
            {filterMenu.map((menuName, i) => {
                let menuTitle = menuName.menuList.title;
                return(
                    <div key={i}>
                    <details className="dropdown">
                        <summary className="btn btn-wide btn-outline">{menuTitle}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] p-2 shadow">
                            <div>
                                    {/* <div className="p-5 w-min">
                                        <li onClick={filterUnitType} className="filter-name btn btn-outline w-48 overflow-hidden">{}</li>
                                    </div>     */}
                                
                                    {subTitleList.map((menuName, i) => {
                                        return(
                                            <div className="p-5 w-min">
                                             <li onClick={filterUnitType}  className="filter-name btn btn-outline w-48 overflow-hidden">{menuName.subTitle}</li>
                                            </div>     
                                        )
                                    })}  
                                    {/* <FilterListSubItem filterUnitType={filterUnitType} subTitleList={subTitleList}/> */}
                               
                            </div>
                        </ul>
                    </details>
                </div>
                )
            })}
        </div>
    )
}

export default FilterListItem;