import { useState } from "react";
import Ledger from "../Ledger/Ledger";
import Notes from "../Notes/Notes";
import Documents from "../Documents/Documents";


const TabSection = ({setUserNotes, setDocsData}) => {

    const updateTab = (e) => {
        const selectedTab = e.target.ariaLabel;
        const tablist = e.target.parentNode.children

        for (let i = 0; i < tablist.length; i++) {
            const element = tablist[i];
            const tabName = element.ariaLabel;
            const tabClassList = element.classList;
            if (element.role === "tab") {
            // Each tab will be returned here
                if (tabName === selectedTab) {
                   tabClassList.add('text-slate-100');
                   tabClassList.remove('text-base-100');
                } else {
                    tabClassList.remove('text-slate-100');
                    tabClassList.add('text-base-100')
                }
            }
        }

    }

    return (
        <div className="pt-5 bg-white">
                <div role="tablist" className="tabs w-max tabs-lifted"  data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-red-600">
                    <input 
                    type="radio" 
                    name="section-tab" 
                    role="tab" 
                    className="tab text-slate-100" 
                    aria-label="Notes"
                    onClick={updateTab}
                    defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 h-auto w-screen pt-5 pt-8 p-6 overflow-auto">
                        <Notes setUserNotes={setUserNotes}/>
                    </div>
                    <input
                    type="radio"
                    name="section-tab"
                    role="tab"
                    className="tab text-base-100"
                    aria-label="Rental Ledger"
                    onClick={updateTab}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 h-screen w-screen pt-8  p-6">
                       <Ledger />
                    </div>
                    <input 
                    type="radio" 
                    name="section-tab" 
                    role="tab" className="tab text-base-100" 
                    aria-label="Documents"
                    onClick={updateTab}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 h-screen w-screen pt-8  p-6">
                        <Documents setDocsData={setDocsData} />
                    </div>
                    {/* <input 
                    type="radio" 
                    name="section-tab" 
                    role="tab" 
                    className="tab text-slate-100" 
                    aria-label="Rental Details" />
                    <div role="tabpanel" className="tab-content  bg-base-100 border-base-300 h-screen w-screen pt-5  p-6">
                        <Details />
                    </div> */}
                </div>
        </div>
    )
}

export default TabSection;