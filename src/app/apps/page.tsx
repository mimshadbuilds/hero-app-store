import { getAllApps } from '@/lib/api';

const AppsPage = async () => {
    const data = await getAllApps();
    return (
        <div className='container mx-auto'>
            All apps
            {
                
            }
        </div>
    );
};

export default AppsPage;