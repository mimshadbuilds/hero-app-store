import AppCard from '@/components/shared/AppCard';
import { getAllApps } from '@/lib/api';
import { IApp } from '@/types/apps';

const AppsPage = async () => {
    const data = await getAllApps();
    return (
        <div className='container mx-auto'>
            <div className='space-y-4 max-w-[500px] mx-auto text-center'>
                <h2 className='text-3xl w-full font-bold md:text-5xl'>Our All Applications</h2>
                <p className='text-xs text-slate-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {
                data.map((app: IApp) => {
                    return <AppCard key={app.id} app={app} />
                })
            }
            </div>
        </div>
    );
};

export default AppsPage;