import Cart from "../../Components/Cart/Cart";
import TabSection from "../../Components/TabSection/TabSection";
import AccountInfoCard from "../../Components/AccountInfoCard/AccountInfoCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Account = () => {

    const [userData, setUserData] = useState(null);
    const { userID } = useParams();
    
    async function getUserData() {
        try {
          const url = `http://localhost:3001/accounts/${userID}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          await response.json()
          .then(response => {
            setUserData(response);
          });
        } catch (error) {
          console.error(error.message);
        }
      }

      useEffect(() => {
        getUserData();
      }, [])
    if (!userData) {
      // LOADING PAGE 
      return(
        <div className="h-screen">
            {/* LEFT  */}
            <div className="flex space-between">
                <div className="h-screen overflow-auto container">
                   {/* <AccountInfoCard userData={userData}/> */}
                  <div className="container w-screen h-screen flex justify-center items-center pb-72 flex-col bg-base-100">
                    <div className="pb-6">
                      <h1 className="font-bold text-2xl text-slate-100">Please wait.</h1>
                    </div>
                    <div>
                      <span className="loading loading-ring loading-lg"></span>
                    </div>
                  </div>
                </div>
                 {/* RIGHT  */}
                 <div className="flex max-lg:absolute max-lg:inset-x-0 max-lg:bottom-0 max-lg:h-96 flex-start h-screen  bg-slate-300 max-lg:rounded-xl flex-col ll bg-white shadow-xl">
                    <Cart />
                </div>
            </div>
        </div>
      )
    } else {
      return(
        <div className="h-screen">
            {/* LEFT  */}
            <div className="flex space-between">
                <div className="h-screen overflow-auto container">
                   <AccountInfoCard userData={userData}/>
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
}

export default Account;