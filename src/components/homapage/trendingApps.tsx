import AppCard from '../shared/AppCard';
import { getAllApps } from '@/lib/api';
import { IApp } from '@/types/apps';
import Link from "next/link";


const TrandingApps = async () => {
    const data = await getAllApps();
    console.log(data)
    return (
        <div className='my-[80px] container mx-auto'>
            <div className='space-y-4 max-w-[400px] mx-auto text-center'>
                <h2 className='text-4xl font-bold'>Trending Apps</h2>
                <p className='text-xs text-slate-500'>Explore All Trending Apps</p>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {
                (data && Array.isArray(data) ? data : []).slice(0, 8).map((app: IApp) => {
                    return <AppCard key={app.id} app={app} />
                })
            }
            </div>
            <div className='text-center mt-8'>
                <Link href="/apps"
                    className="btn btn-gradient text-sm text-white font-semibold">Show All 
                </Link>
            </div>
        </div>
    );
};

export default TrandingApps;