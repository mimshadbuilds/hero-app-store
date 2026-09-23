'use client'

import InstalledAppCard from "@/components/Apps/InstalledAppCard";
import { AppContext } from "@/context/AppContext";
import { IApp } from "@/types/apps";
import { useContext } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const InstallationPage = () => {
    const { installedApps, setInstalledApps } = useContext(AppContext);

    const handleRemove = (app: IApp) => {
        const filteredApp = installedApps.filter(installedApps => 
        installedApps.id != app.id)
        toast.error(`${app.title} has Uninstalled.`)

    setInstalledApps(filteredApp);
    }

    return (  
        <div className="container mx-auto">
            <div className='space-y-4 text-center'>
                <h2 className='text-2xl font-bold md:text-5xl'>Your Installed Apps</h2>
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
            <div className="rounded-2xl border border-dashed border-base-300 bg-base-200/40 px-6 py-14 text-center mt-4">
                <p className="text-lg font-semibold text-base-content/80">No app installed yet!</p>
                <p className="mt-1 text-sm text-base-content/50">Choose an App from the store to install.</p>
                <div className='text-center mt-8'>
                    <Link href="/apps"
                    className="btn btn-gradient text-sm text-white font-semibold">App Store 
                    </Link>
                </div>
            </div>
            )}
    </div>
    );
};

export default InstallationPage;