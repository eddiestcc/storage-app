import DashCard from '../DashCard/DashCard';
import Logout from '../Logout/Logout';

import React from "react";

        const Dashboard = () => {
                return(
                    <div>
                        <Logout />
                        <menu className='justify-center align-center h-screen'>
                            {/* COLUMN 1  */}
                            <div className='padding-right padding-top'>
                                {/* CARD 1  */}
                                <DashCard />
                                {/* CARD 2 */}
                                <DashCard />
                            </div>
                            {/* COLUMN 2  */}
                            <div className='padding-right padding-top'>
                                {/* CARD 3 */}
                                <DashCard />
                                {/* CARD 4  */}
                                <DashCard />
                            </div>
                        </menu>
                    </div>
                )
            }
        
export default Dashboard;