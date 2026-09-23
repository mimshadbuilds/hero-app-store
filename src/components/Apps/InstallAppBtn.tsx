"use client";

import { AppContext } from "@/context/AppContext";
import { IApp } from "@/types/apps";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallAppButton = ({ app }: {app: IApp}) => {
    const { installedApps, setInstalledApps } = useContext(AppContext);
    const handleInstall = () => {
        setInstalledApps([...installedApps, app]);
        
        toast.success(`${app.title} Successfully Installed.`)
    };
    return (
        <button onClick={() => handleInstall()} className="btn btn-sm flex-1 rounded-full border-0 bg-[#00d390] text-white hover:bg-[#029063]">
        Install
        </button>
    );
};

export default InstallAppButton;
