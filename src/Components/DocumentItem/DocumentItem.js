import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DocsDataContext} from "../../Pages/Account/Account";

const DocumentItem = ({userID}) => {

    const docsData = useContext(DocsDataContext);


    const fetchDocument = async (e) => {

        const input = e.target.textContent;
        console.log(input)

        const filename = e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].textContent;
        const fileURL = `http://localhost:3001/download`
        try {
            const response = await fetch(fileURL , {
                headers: {
                    'Content-Type': 'application/json',
                  },
                method: 'POST',
                body: JSON.stringify({
                    filename: filename,
                    userID: userID
                })
            })
            if (!response) {
                console.error('no response');
            } else {
                if(input === 'View') {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.target = "_blank"
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                } else if (input === 'Download') {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename; 
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                }
            }
        } catch (error) {
            console.error(error, 'problem fetching document')
        }
    }

    return (
        docsData.map((document, index) => {
            const { filename, createdDate } = document;
            const date = new Date(createdDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: 'numeric'
            })
            return (
                <article key={index} className="grid grid-cols-11 rounded-lg bg-white note-row pt-2">
                    <div className="grid col-span-11 bg-none pl-2 pr-2">
                        <div className="grid grid-cols-11 rounded-lg bg-base-100 w-full shadow-xl pt-6 pb-6">
                            <div className="flex items-center col-span-3 pl-2">
                                <h1>{date}</h1>
                            </div>
                            <div className="flex items-center col-span-7">
                                <h1>{filename}</h1>
                            </div>
                            <div className="flex items-center col-span-1">
                                <div className="dropdown dropdown-left">
                                <div tabIndex={0} role="button" className="btn btn-xs btn-info">View</div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-slate-200 rounded-box z-[1] w-52 p-2 shadow">
                                        <li onClick={fetchDocument} className="w-full cursor-pointer btn-link btn pt-4 pb-4 no-underline">View</li>
                                        <li onClick={fetchDocument} className="w-full cursor-pointer btn-link btn pt-4 pb-4 no-underline">Download</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            );
        })
    )
}

export default DocumentItem;