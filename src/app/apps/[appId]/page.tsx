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

    const apps = allApps.find((app: IApp) => app.id === Number(appId));
    console.log(apps, 'app details')
    return (
        <div>
            {apps}
        </div>
    );
};

export default AppDetailsPage;