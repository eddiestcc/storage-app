import { NavLink } from 'react-router-dom';
import React from "react";

        const DashCard = () => {
                return(
                            <div className='padding-bottom grow'>
                                    <NavLink to="/rental" className="card bg-neutral text-primary-content w-96">
                                        <div className="card-body">
                                            <div className="avatar space-dash-card placeholder center">
                                                <div className="bg-base-300 text-neutral-content w-24 rounded-full">
                                                    <svg class="h-8 w-8 text-slate-100"  
                                                    fill="none" 
                                                    viewBox="0 0 24 24" 
                                                    stroke="currentColor">
                                                    <path 
                                                    stroke-linecap="round" 
                                                    stroke-linejoin="round" 
                                                    stroke-width="2" 
                                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                                                    </svg>
                                                </div>
                                                <h1 className="text-white text-4xl font-bold">Rental</h1>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                )
            }
        
export default DashCard;