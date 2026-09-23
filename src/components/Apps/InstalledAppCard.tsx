import { IApp } from '@/types/apps';
import Image from 'next/image';
import { MdOutlineFileDownload } from 'react-icons/md';

const InstalledAppCard = ({ app, onRemove }: {
    app: IApp;
    onRemove: (app: IApp) => void;
}) => {
    return (
        <div className="group flex items-center justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-base-300 sm:size-20">
                    <Image
                        src={app.image}
                        alt={`${app.title} icon`}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <div className='shrink-0'>
                    <h2 className="truncate text-sm md:text-base font-bold sm:text-xl">{app.title}</h2>
                    <div className='flex items-center gap-2'>
                        <p className="mt-1 text-sm font-medium text-emerald-400 flex items-center"><MdOutlineFileDownload /> {app.downloads}</p>
                        <p className="mt-1 text-sm font-medium text-amber-400">{app.ratingAvg}★</p>
                        <p className="mt-1 text-xs font-semibold text-base-content/50">{app.size} MB</p>
                    </div>
                </div>
            </div>
            <button
                title={`Remove ${app.title}`}
                onClick={() => onRemove(app)}
                className="btn text-sm md:text-base text-white bg-[#00d390] hover:bg-[#019566]">
                Uninstall
            </button>
        </div>
    );
};

export default InstalledAppCard;