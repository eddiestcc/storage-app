import { useContext, useState } from "react";
import NotesPagination from "../NotesPagination/NotesPagination";
import PostedNote from "../PostedNote/PostedNote";
import ReactPaginate from "react-paginate";
import { UserNoteContext } from "../../Pages/Account/Account";

const AllPostedNotes = ({currentNotes}) => {

const userNotes = useContext(UserNoteContext);
    
    return (
        <div>
            {currentNotes.map((note, index) => (
                 <PostedNote key={index} note={note} />
                )
            )}
        </div>
    )
}

export default AllPostedNotes;