import Cart from "../../Components/Cart/Cart";
import TabSection from "../../Components/TabSection/TabSection";
import AccountInfoCard from "../../Components/AccountInfoCard/AccountInfoCard";
import { useEffect, useState } from "react";

const Account = () => {

    const [userData, setUserData] = useState(null);
    

    return(
        <div className="h-screen">
            {/* LEFT  */}
            <div className="flex space-between">
                <div className="h-screen overflow-auto container">
                   <AccountInfoCard />
                   <TabSection />
                </div>
                 {/* RIGHT  */}
                 <div className="flex max-lg:absolute max-lg:inset-x-0 max-lg:bottom-0 max-lg:h-96 flex-start h-screen  bg-slate-300 max-lg:rounded-xl flex-col ll bg-white shadow-xl">
                    <Cart />
                </div>
            </div>
          
        </div>
       
    )
}

export default Account;