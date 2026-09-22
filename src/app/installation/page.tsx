'use client'

import InstalledAppCard from "@/components/Apps/InstalledAppCard";
import { AppContext } from "@/context/AppContext";
import { IApp } from "@/types/apps";
import { useContext } from "react";

const InstallationPage = () => {
    const { installedApps, setInstalledApps } = useContext(AppContext);

    const handleRemove = (app: IApp) => {
        const filteredApp = installedApps.filter(installedApps => 
        installedApps.id != app.id)

    setInstalledApps(filteredApp);
    }

    return (  
        <div className="container mx-auto">
            <div className='space-y-4 text-center'>
                <h2 className='text-5xl font-bold'>Your Installed Apps</h2>
                <p className='text-xs text-slate-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {installedApps.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-3">
                {installedApps.map((app: IApp) => {
                    return <InstalledAppCard key={app.id} app={app} onRemove={handleRemove} />;
                })}
            </div>
            )
            : (
            <p>installed apps not found.</p>
            )}
    </div>
    );
};

export default InstallationPage;