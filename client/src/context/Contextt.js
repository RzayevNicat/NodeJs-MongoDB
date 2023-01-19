import { createContext, useContext, useState } from "react";

const Context = createContext()


export const DetailsProvider = ({ children }) => {

    const [details, setDetail] = useState("")

    const data = {
        details, setDetail
    }
    return (
        <Context.Provider value={data}>{children}</Context.Provider>
    );
}

export const useDetails = () => useContext(Context)