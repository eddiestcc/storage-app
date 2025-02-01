import { useContext, useState } from "react";
import { UserNoteContext } from "../../Pages/Account/Account";
import ReactPaginate from "react-paginate";

// Installed react-paginate so that notes can have a pagination componenet

const NotesPagination = () => {

    return (
        <div  className="flex justify-center join pt-5">
            <button className="join-item btn btn-outline btn-active">1</button>
            <button className="join-item btn  btn-outline">2</button>
            <button className="join-item btn  btn-outline">3</button>
            <button className="join-item btn  btn-outline">4</button>
        </div>
    )
}

export default NotesPagination;