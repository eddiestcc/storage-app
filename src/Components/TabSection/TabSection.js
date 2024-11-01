import Details from "../Details/Details";
import Documents from "../Documents/Documents";
import Ledger from "../Ledger/Ledger";
import Notes from "../Notes/Notes";


const TabSection = () => {
    return (
        <div className="bg-slate-500 pt-10">
                <div role="tablist" className="tabs w-full tabs-lifted">
                    <input 
                    type="radio" 
                    name="my_tabs_2" 
                    role="tab" 
                    className="tab text-slate-100" 
                    aria-label="Notes"
                    defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <Notes />
                    </div>
                    <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab text-slate-100"
                    aria-label="Rental Ledger"/>
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                       <Ledger />
                    </div>
                    <input 
                    type="radio" 
                    name="my_tabs_2" 
                    role="tab" className="tab text-slate-100" 
                    aria-label="Documents" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <Documents />
                    </div>
                    <input 
                    type="radio" 
                    name="my_tabs_2" 
                    role="tab" 
                    className="tab text-slate-100" 
                    aria-label="Rental Details" />
                    <div role="tabpanel" className="tab-content  bg-base-100 border-base-300 rounded-box p-6">
                        <Details />
                    </div>
                </div>
        </div>
    )
}

export default TabSection;