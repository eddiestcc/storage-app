import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import AllPostedNotes from "../AllPostedNotes/AllPostedNotes";
import { UserNoteContext } from "../../Pages/Account/Account";

const PaginatedNotes = ({itemsPerPage}) => {

const userNotes = useContext(UserNoteContext);

// Here we use item offsets; we could also use page offsets
// following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentNotes = userNotes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userNotes.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userNotes.length;
    
    setItemOffset(newOffset);
  };
    
    return (
        <>
            <AllPostedNotes currentNotes={currentNotes} />
            <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            nextClassName="join-item btn btn-outline text-xl"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageClassName="join-item btn btn-outline text-xl"
            pageCount={pageCount}
            activeClassName="btn-active"
            previousLabel="Prev"
            previousClassName="join-item btn btn-outline text-xl"
            renderOnZeroPageCount={null}
            className="flex justify-center join pt-5"
            /> 
        </>
    )
}

export default PaginatedNotes;