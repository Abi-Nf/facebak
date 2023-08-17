import {clientContext} from "../../utils/context";

const ClientProvider = ({children}) => {
    const userId = ''; // add some features like this

    return (
        <clientContext.Provider value={{
            userId
        }}>
            {children}
        </clientContext.Provider>
    )
}

export default ClientProvider;