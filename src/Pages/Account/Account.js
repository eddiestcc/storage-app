import TabSection from "../../Components/TabSection/TabSection";
import AccountInfoCard from "../../Components/AccountInfoCard/AccountInfoCard";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserAccountData } from "../../utils";
import AccountCart from "../../Components/AccountCart/AccountCart";


  // Contexts
  export const ActiveTabContext = createContext(null);
  export const UserDataContext = createContext(null);
  export const UserNoteContext = createContext(null);
  export const LedgerDetailsContext = createContext(null);
  export const DocsDataContext = createContext(null);
  export const MoveOutDateContext = createContext(null);
  export const RentContext = createContext(null);

const Account = () => {

    
    // States
    const [userData, setUserData] = useState(null);
    const [userNotes, setUserNotes] = useState(null);
    const [ledgerDetails, setLedgerDetails] = useState(null);
    const [docsData, setDocsData] = useState(null);
    const [moveOutDate, setMoveOutDate] = useState(null);
    const [rent, setRent] = useState(null);
    // Cart state
    const [cart , setCart] = useState([])
    const [cartTotal, setCartTotal] = useState( 
    {
    tax: '0.00', 
    grandTotal: '0.00', 
     });
    const [updateCart, setUpdateCart] = useState(false);


    const { userID } = useParams();

      useEffect(() => {
        getUserAccountData(
          setUserData,
          `http://localhost:3001/accounts/${userID}`, 
          setUserNotes,
          setLedgerDetails,
          setDocsData,
          setMoveOutDate,
          setRent
        )
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
                    {/* <Cart /> */}
                </div>
            </div>
        </div>
      )
    } else {
      return(
        <UserDataContext.Provider value={userData}>
        <UserNoteContext.Provider value={userNotes}>
        <LedgerDetailsContext.Provider value={ledgerDetails}>
        <DocsDataContext.Provider value={docsData}>
        <MoveOutDateContext.Provider value={moveOutDate}>
        <RentContext.Provider value={rent}>
          <div className="h-screen">
              {/* LEFT  */}
              <div className="flex">
                  <div className="bg-base-100 h-screen overflow-auto container">
                    <AccountInfoCard />
                    <TabSection setDocsData={setDocsData} setUserNotes={setUserNotes}  />
                  </div>
                  {/* RIGHT Cart Section  */}
                  <div className="flex max-lg:sticky max-lg:w-screen max-lg:inset-x-0 max-lg:bottom-0 max-lg:h-min flex-start h-screen bg-slate-300 max-lg:rounded-xl flex-col  bg-white shadow-xl">
                    <AccountCart setRent={setRent}/>
                  </div>
              </div>
          </div>
        </RentContext.Provider>
        </MoveOutDateContext.Provider>
        </DocsDataContext.Provider>
        </LedgerDetailsContext.Provider>
        </UserNoteContext.Provider>
        </UserDataContext.Provider>
      )
    }  
}

export default Account;