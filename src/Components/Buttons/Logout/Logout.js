import { NavLink } from 'react-router-dom';

import React from "react";

        const Logout = () => {

                return(
                    <span className='flex justify-end'>
                        <NavLink className="btn btn-ghost" to="/" >
                            <svg className="h-8 w-8 text-base-100"  
                            width="24" height="24" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" 
                            stroke-linecap="round" stroke-linejoin="round">  
                            <path stroke="none" d="M0 0h24v24H0z"/>  
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  
                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                            </svg>
                            {/* BUTTON TITLE HERE  */} <h1 className='font-large text-base-100'>Logout</h1>
                        </NavLink>
                    </span>
                )
            }
        
export default Logout;