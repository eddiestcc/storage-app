import PostedNote from "../PostedNote/PostedNote";

const AllPostedNotes = ({currentNotes}) => {
    
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