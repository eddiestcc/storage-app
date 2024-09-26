import DashCard from '../../Components/Buttons/DashCard/DashCard';
import Logout from '../../Components/Buttons/Logout/Logout';

import React from "react";

        const Dashboard = () => {
                return(
                    <div className=''>
                        <Logout />
                        <menu className='block'>
                            <div className='pb-64 flex content-center justify-center flex-wrap h-screen'>
                                <DashCard />
                            </div>
                        </menu>
                    </div>
                )
            }
        
export default Dashboard;