import {clientContext} from "../../utils/context";
import {useEffect, useState} from "react";

const ClientProvider = ({children}) => {
    const [userData,setUserData] = useState({}); // add some features like this
    
    useEffect(() => {
        setUserData({id: "01579c39-b336-492e-ad82-34d81debff9d"}) // just for test
    }, [])
    
    return (
        <clientContext.Provider value={{
            userData,
            userId: userData.id
        }}>
            {children}
        </clientContext.Provider>
    )
}

export default ClientProvider;