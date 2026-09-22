import AppDetailsCard from '@/components/Apps/AppDetailsCard';
import { getAllApps } from '@/lib/api';
import { IApp } from '@/types/apps';

type TAppDetailsProp = {
    params: {
        appId: string
    }
}

const AppDetailsPage = async ({ params }: TAppDetailsProp) => {
    const { appId } = await params;
    const allApps = await getAllApps();

    const app = allApps.find((item: IApp) => 
        item.id === appId
    );
    
    if (!app) {
        return <div>App not found.</div>;
    }
    return (
        <main className="container mx-auto px-4 py-8">          
            <AppDetailsCard app={app}  />
        </main>
    );
};

export default AppDetailsPage;