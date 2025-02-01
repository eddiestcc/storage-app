import { useContext } from "react";
import { UserDataContext, UserNoteContext } from "../../Pages/Account/Account";
import { tempBanner } from "../../utils";

const AddNote = ({note, index, setNote, setUserNotes,setNoNoteMsg }) => {

     // Context
     const userData = useContext(UserDataContext); 
     const userNotes = useContext(UserNoteContext);

    // Destructure the note into its parts
    let { title , textarea, category } = note;

    const {unit_number, id} = userData;

    const updateNote = (e) => {

        // Current text being typed
        const currentText = e.target.value;
        const target = e.target;

        // Elements
        const noteTitle = document.getElementById(`note-title-${index}`);
        const noteTextarea = document.getElementById(`note-text-area-${index}`);
        const noteCategory = document.getElementById(`note-category-${index}`);
       


        if (target.id === noteTitle.id) {
            title = currentText;
            noteTitle.textContent = currentText;
        } else if (target.id === noteTextarea.id) {
            textarea = currentText;
            noteTextarea.textContent = currentText;
        } else if (target.id === noteCategory.id) {
            category = currentText;
        }
    }

    const handlePostNote = async (e) => {

            const cancelBtnContent = document.getElementById('cancel-note-btn').textContent;
            const eventContent = e.target.textContent;

            const postNote = async () => {
                // Elements
                const noteErrorBanner = document.getElementById('error-note-banner');
                const noteSuccessBanner = document.getElementById('note-success-banner');
                
                const url = "http://localhost:3001/notes"

                const timestamp = new Date();

                try {
                    const response = await fetch(url, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify({
                            unit: unit_number,
                            title: title,
                            textarea: textarea,
                            category: category,
                            timestamp: timestamp
                        })
                    });

                    if (!response.ok) {
                        console.error('Trouble with response');
                    } else {
                        await response.json()
                        .then((res) => {
                            if(res.status === 'failed') {
                                setNote([])
                                tempBanner(noteErrorBanner);
                            } else {
                                // clear the new note, then set all notes to the servers response of the updated notes list
                                setNote([]);
                                setUserNotes(res.updatedNotes);
                                tempBanner(noteSuccessBanner);
                            }

                        });
                    }      
                } catch (error) {
                    tempBanner(noteErrorBanner);
                    console.error('Operation failed');
                }
            }

            const cancelNote = () => {
                setNote([]);
                if (userNotes.length < 1) {
                    setNoNoteMsg('No Notes...');
                }
            }

            eventContent === cancelBtnContent ? cancelNote() : postNote();
    }
    

    return (
        <article onChange={updateNote} className="grid grid-cols-10 row-span-3 pt-4 pb-4 rounded-lg bg-slate-200 note-row">
            <div className="grid grid-rows-6 col-span-8 bg-none pl-5 pb-4">
                <div className="grid col-span-4 flex items-center row-span-3">
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </div>
                    <input id={`note-title-${index}`} placeholder="Title Here" className="bg-slate-100 input input-bordered input-md w-full max-w-xs text-black"></input>
                    </div>
                <div className="grid col-span-6 flex items-center row-span-3">
                    <textarea id={`note-text-area-${index}`}  placeholder="Note Here" className="bg-slate-100 textarea textarea-bordered text-black"></textarea>
                </div>
            </div>
            <div className="col-span-2 flex flex-col justify-start items-center pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <div className="pt-8">
                <select id={`note-category-${index}`}className="py-3 px-4 pe-9 block w-48 bg-slate-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600">
                    <option>Select Category</option>
                    <option>General</option>
                    <option>Warning</option>
                    <option>Maintenance</option>
                </select>
                </div>
                <div className="flex flex-row pt-4 ">
                    <div className="flex pr-4">
                        <button onClick={handlePostNote} className="btn btn-outline btn-success">Save</button>
                    </div>
                    <div>
                        <button onClick={handlePostNote} id="cancel-note-btn" className="btn btn-outline btn-error">Cancel</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default AddNote;