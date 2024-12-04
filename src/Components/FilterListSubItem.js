
const FilterListSubItem = ({ subTitleList , filterUnitType  }) => {
    
        console.log(subTitleList ,'sublist')
        return (
            <li onClick={filterUnitType} className="filter-name btn btn-outline w-48 overflow-hidden">{}</li>                
        )
    
}

export default FilterListSubItem;