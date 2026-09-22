import { IApp } from '@/types/apps';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface AppProviderProps {
    children: ReactNode;
}

interface IAppContext {
    installedApps: IApp[];
    setInstalledApps: Dispatch<SetStateAction<IApp[]>>
}

export const AppContext = createContext<IAppContext>({
    installedApps: [],
    setInstalledApps: () => {}
});

const AppProvider = ({ children }: AppProviderProps) => {
    const [installedApps, setInstalledApps] = useState<IApp[]>([])

    const sharedData: IAppContext = {
        installedApps, 
        setInstalledApps
    }
    return (
        <AppContext.Provider value={sharedData}>
            { children }
        </AppContext.Provider>
    );
};

export default AppProvider;