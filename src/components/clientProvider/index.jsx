import {clientContext} from "../../utils/context";

const ClientProvider = ({children}) => {
    return (
        <clientContext.Provider value={{

        }}>
            {children}
        </clientContext.Provider>
    )
}

export default ClientProvider;