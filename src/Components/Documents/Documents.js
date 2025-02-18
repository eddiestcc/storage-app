import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import DocumentItem from "../DocumentItem/DocumentItem";
import { DocsDataContext } from "../../Pages/Account/Account";

const Documents = ({setDocsData}) => {

    // State
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');

    // Context
    const docsData = useContext(DocsDataContext);

    // Params
    const { userID } = useParams();

    // Handles the selection of the file to upload to server
    const handleSelectFile = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    }

    const handleFileUpload = async () => {
        const fileInput = document.getElementById('file-input')
        // Create a new form
        const formData = new FormData();
        // Modify the form with the selected file
        formData.append('userID', userID);
        formData.append('myFile', selectedFile);
        // Url where request will be made
        const url = "http://localhost:3001/upload"
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: formData
                });
                // Clear file input
                fileInput.value = null;
                setSelectedFile(null);
                if (!response.ok) {
                    console.error('Trouble with response');
                } else {
                    await response.json()
                    .then((res) => {
                        if (res.msg === 'No file selected!') {
                            setMessage(res.msg);
                            setTimeout(() => {
                                setMessage('') 
                             }, 3000);
                            return;
                        } else {
                            setMessage(res.msg);
                            setDocsData(res.documents)
                            setTimeout(() => {
                               setMessage('') 
                            }, 3000);
                            console.log(res, 'server response')
                        }
                    });
                }  
            } catch (error) {
                console.error('Operation failed');
            }
    }

    const renderFiles = () => {
        return (
            <div className="flex justify-center rounded-lg bg-white">
                <article className="w-full rounded-lg">
                    <div className="grid grid-cols-11 h-24 p-4 bg-slate-100 rounded-lg">
                        <div className="flex items-center col-span-3 pl-2">
                            <h1>Date</h1>
                        </div>
                        <div className="flex items-center col-span-2">
                            <h1>File Name</h1>
                        </div>
                         <div className="flex items-center justify-end col-span-2 pr-2">
                            <button onClick={handleFileUpload} className="btn btn-responsive btn-info">Upload</button>                    
                        </div>
                        <div className="flex items-center col-span-4">
                            {message}
                            <input id="file-input" type="file" name='myFile' formEncType="multipart/form-data" onChange={handleSelectFile} className="file-input file-input-bordered file-input-info w-full text-sm max-w-xs" />
                        </div>
                    </div>
                    <div id="note-body" className="grid gap-y-2 h-auto pt-4 pb-4">
                        {/* Document uploaded */}
                        <DocumentItem userID={userID}/>
                    </div>
                </article>
            </div>
        );
    }

    const renderNoFiles = () => {
        return (
            <div className="flex justify-center rounded-lg bg-white">
                <article className="w-full rounded-lg">
                    <div className="grid grid-cols-11 h-24 p-4 bg-slate-100 rounded-lg">
                        <div className="flex items-center col-span-3 pl-2">
                            <h1>Date</h1>
                        </div>
                        <div className="flex items-center col-span-2">
                            <h1>File Name</h1>
                        </div>
                         <div className="flex items-center justify-end col-span-2 pr-2">
                            <button onClick={handleFileUpload} className="btn btn-responsive btn-info">Upload</button>                    
                        </div>
                        <div className="flex items-center col-span-4">
                            {message}
                            <input type="file" name='myFile' formEncType="multipart/form-data" onChange={handleSelectFile} className="file-input file-input-bordered file-input-info w-full text-sm max-w-xs" />
                        </div>
                    </div>
                    <div id="note-body" className="flex justify-center items-center text-xl grid gap-y-2 h-auto pt-4 pb-4">
                        {/* Document uploaded */}
                       <h1>No Files Yet.</h1>
                    </div>
                </article>
            </div>
        );
    }

    return docsData.length === 0 ? renderNoFiles() : renderFiles();

}

export default Documents;