import React, { useContext } from "react";
import DashCard from '../../Components/Buttons/DashCard/DashCard';
import Searchfield from '../../Components/Searchfield/Searchfield';
import { AuthContext } from "../../App";

        const Dashboard = () => {
                const token = useContext(AuthContext)
                return(
                    <div>
                        <menu className='h-screen block'>
                            <div className="pt-36 pb-36">
                                <Searchfield />
                            </div>
                            <div className='flex content-center justify-center flex-wrap'>
                                <DashCard />
                            </div>
                        </menu>
                    </div>
                )
            }
        
export default Dashboard;