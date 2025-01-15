import { NavLink } from "react-router-dom";
import { dashNavItems } from "../../utils";

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