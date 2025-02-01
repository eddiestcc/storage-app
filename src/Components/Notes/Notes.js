import React, { useContext, useState } from "react";
import { UserNoteContext } from "../../Pages/Account/Account";
import AddNote from "../AddNote/AddNote";
import PaginatedNotes from "../PaginatedNotes/PaginatedNotes";

const Notes = ({setUserNotes}) => {

    // Context
    // All notes of selected user
    const userNotes = useContext(UserNoteContext);

    // State 
    // Holds the current state of the note that will be send to server
    const [note, setNote] = useState([]);
    const [noNoteMsg, setNoNoteMsg] = useState('No Notes...');

    // Element
    const errorBanner = document.getElementById('error-banner');

    const handleNewNote = () => {

        setNoNoteMsg(null);

        const createNote = (setNoteState) => {
            const newNote = {
                title: '',
                textarea: '',
                category: '',
            };
            setNoteState([newNote]);
        };

        if (note.length < 1) {
            createNote(setNote) 
        }
    };

    const renderNotes = () => {
        return (
            <div className="flex justify-center rounded-lg bg-white">
                <article className="w-full rounded-lg">
                    <div className="grid grid-cols-10 h-24 p-4 bg-slate-100 rounded-lg">
                        <div className="col-span-2">
                            <button onClick={handleNewNote} className="btn btn-outline btn-info">Add Note</button>
                        </div>
                        <div className="flex items-center col-span-7">
                            <h1>Details</h1>
                        </div>
                        <div className="flex items-center col-span-1">
                            <h1>Category</h1>
                        </div>
                    </div>
                    <div id="note-body" className="grid gap-y-2 h-auto pt-4 pb-4">
                        {/* New note */}
                        {note.map((note, index) => (
                            <AddNote key={index} index={index} note={note} setNote={setNote} setUserNotes={setUserNotes}/>
                        ))}
                        {/* All posted notes */}
                        <PaginatedNotes itemsPerPage={4} />
                    </div>
                </article>
            </div>
        );
    };

    const renderNoNotesMessage = () => {
        return (
            <div className="flex justify-center rounded-lg bg-white">
                <article className="w-full h-auto">
                    <div className="grid grid-cols-10 h-auto p-4 bg-slate-100 rounded-lg">
                        <div className="col-span-2">
                            <button onClick={handleNewNote} className="btn btn-outline btn-info">Add Note</button>
                        </div>
                        <div className="flex items-center col-span-7">
                            <h1>Details</h1>
                        </div>
                        <div className="flex items-center col-span-1">
                            <h1>Category</h1>
                        </div>
                    </div>
                    <div id="note-body" className="text-lg grid grid-rows-2 gap-y-2 h-auto pt-4 pb-4 rounded">
                        {/* Message here */}
                        {noNoteMsg}
                        {/* New note */}
                        {note.map((note, index) => (
                            <AddNote 
                            key={index} 
                            index={index} 
                            note={note} 
                            setNote={setNote} 
                            setUserNotes={setUserNotes} 
                            setNoNoteMsg={setNoNoteMsg}
                            />
                        ))}
                    </div>
                </article>
            </div>
        );
    };
    return userNotes.length > 0 ? renderNotes() : renderNoNotesMessage();
};

export default Notes;