"use client";

import { IApp } from "@/types/apps";
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction, } from "react";

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

export default AppProvider;