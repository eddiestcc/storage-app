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
                    <div role="tabpanel" className="tab-content w-screen bg-base-100 h-auto pt-8 pl-12 pb-8">
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
                    <div role="tabpanel" className="tab-content w-screen bg-base-100 h-auto pt-8 pl-12 pb-8">
                       <Ledger />
                    </div>
                    <input 
                    type="radio" 
                    name="section-tab" 
                    role="tab" className="tab text-base-100" 
                    aria-label="Documents"
                    onClick={updateTab}
                    />
                    <div role="tabpanel" className="tab-content w-screen bg-base-100 h-auto pt-8 pl-12 pb-8">
                        <Documents setDocsData={setDocsData} />
                    </div>
                </div>
        </div>
    )
}

export default TabSection;