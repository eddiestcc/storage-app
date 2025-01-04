import Searchfield from '../../Components/Searchfield/Searchfield';
import { NavLink } from "react-router-dom";

const dashNavItems = [
    {
        Name: 'New Rental',
        Icon:  
        <svg className="h-8 w-8 text-slate-100"  
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor">
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
        </svg>,
        Link: 'rental',
    },
    {
        Name: 'Units',
        Icon:
        <svg className="h-8 w-8 text-slate-100"  
        viewBox="0 0 24 24"  
        fill="none"  
        stroke="currentColor"  
        strokeWidth="2"  
        strokeLinecap="round"  
        strokeLinejoin="round">  
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />  
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />  
        <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>,
        Link: 'units',
    },
    {
        Name: 'Retail',
        Icon: 
        <svg className="h-8 w-8 text-slate-100"  
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">  
        <path stroke="none" d="M0 0h24v24H0z"/>  
        <line x1="3" y1="21" x2="21" y2="21" />  
        <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />  
        <path d="M5 21v-10.15" />  <path d="M19 21v-10.15" />  
        <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
        </svg>,
        Link: 'retail',
    }
]

        const Dashboard = () => {
                return(
                    <div>
                        <menu className='h-screen block'>
                            <div className='flex content-center justify-center flex-wrap pt-72'>
                                {dashNavItems.map((item, i) => {
                                    return(
                                        <div key={i} className='p-5'>
                                            <div className='grow'>
                                                <NavLink to={`/${item.Link}`} className="card bg-base-100 w-96">
                                                    <div className="card-body">
                                                        <div className="avatar flex justify-evenly items-center placeholder">
                                                            <div className="bg-base-300 text-neutral-content w-36 rounded-full">
                                                                {item.Icon}
                                                            </div>
                                                            <h1 className="text-white text-3xl font-bold">{item.Name}</h1>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                        )
                                    }
                                )}
                            </div>
                        </menu>
                    </div>
                )
            }
        
export default Dashboard;