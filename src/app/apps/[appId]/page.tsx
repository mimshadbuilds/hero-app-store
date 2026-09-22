import { getAllApps } from '@/lib/api';
import React from 'react';

type TAppDetailsProp = {
    params: {
        id: string
    }
}

const AppDetailsPage = async ({params}: TAppDetailsProp) => {
    const {appId} = await params;
    const allApps = await getAllApps(id);

    const app = allApps.find(app => app.appId === Number(id) )
    return (
        <div>
            
        </div>
    );
};

export default AppDetailsPage;