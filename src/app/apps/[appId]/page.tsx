import AppDetailsCard from '@/components/Apps/AppDetailsCard';
import { getAllApps } from '@/lib/api';
import { IApp } from '@/types/apps';
import { notFound } from 'next/navigation';

interface IAppDetailsProp {
    params: {
        appId: string
    }
}

const AppDetailsPage = async ({ params }: IAppDetailsProp) => {
    const { appId } = await params;
    const allApps = await getAllApps();

    const app = allApps.find((item: IApp) => String(item.id) === appId);
    
    if (!app) {
        notFound();
    }
    return (
        <main className="container mx-auto px-4 py-8">
            <AppDetailsCard app={app} />
        </main>
    );
};

export default AppDetailsPage;