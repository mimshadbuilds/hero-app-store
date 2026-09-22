"use client";

import { IApp } from "@/types/apps";
import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction, } from "react";

interface IAppContextType {
    installedApps: IApp[];
    setInstalledApps: Dispatch<SetStateAction<IApp[]>>;
}

interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<IAppContextType>({
    installedApps: [],
    setInstalledApps: () => {}
});

const AppProvider = ({ children }: AppProviderProps) => {
    const [installedApps, setInstalledApps] = useState<IApp[]>([]);

    return (
        <AppContext.Provider value={{ installedApps, setInstalledApps }}>
        {children}
        </AppContext.Provider>
    );
    };

//    export const useAppContext = () => {   
//     const context = useContext(AppContext);
//     if (!context) {
//         throw new Error("useAppContext not found!");
//     }
//     return context;
// };

export default AppProvider;