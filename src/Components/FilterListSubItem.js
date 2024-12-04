
const FilterListSubItem = ({ subTitleList , filterUnitType  }) => {
        return(
        subTitleList.map((listItem) => {
            const result = listItem.subTitle;
            return (
                <li onClick={filterUnitType} className="filter-name btn btn-outline w-48 overflow-hidden">{}</li>                
            )
        })
    )
}

export default FilterListSubItem;