"use client";

import { AppContext } from "@/context/AppContext";
import { IApp } from "@/types/apps";
import { useContext } from "react";

const InstallAppButton = ({ app }: {app: IApp}) => {
    const { installedApps, setInstalledApps } = useContext(AppContext);
    const handleInstall = () => {
        setInstalledApps([...installedApps, app]);
    };
    return (
        <button onClick={() => handleInstall()} className="btn flex-1 rounded-full border-0 bg-[#4f2bd6] text-white hover:bg-[#4323bd]">
        Install
        </button>
    );
};

export default InstallAppButton;
