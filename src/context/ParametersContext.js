import { createContext, useContext, useState } from "react";

const ParamatersContext = createContext()

export const ParametersProvider = ({children}) => {
    const [water, setWater] = useState(0);
    const [air, setAir] = useState(0);
    const [material, setMaterial] = useState("steel")


    return <ParamatersContext.Provider value={{water, setWater, air, setAir, material, setMaterial}}>
        {children}
    </ParamatersContext.Provider>
}

export const useParametersContext = () => {
    return useContext(ParamatersContext)
}