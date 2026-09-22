import { IApp } from "@/types/apps";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import InstallAppButton from "../Apps/InstallAppBtn";

interface IAppProps {
    app: IApp;
}

const AppCard = ({ app }: IAppProps) => {
 return (
    <section className="container mx-auto">
        <div className="w-full rounded-xl border border-base-200 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">   
            <div className="flex items-start gap-3">           
                <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl mt-2">
                    <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        sizes="72px"
                        className="object-cover"
                    />
                </div>

                    <div className="min-w-0 flex-1">
                        <h2 className="line-clamp-2 text-lg font-semibold">
                            {app.title}
                        </h2>
                        <p className="mt-0.5 truncate text-sm text-base-content/60">
                            {app.companyName}
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm leading-5 text-base-content/60">
                            {app.description}
                        </p>
                    </div>
                <div className="mt-2">
                <InstallAppButton app={app} />
                </div>
            </div>

            <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl bg-base-200/40">
                
                <div className="border-r border-base-200 px-2 py-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-semibold">
                        {app.ratingAvg}
                        <FaStar className="text-xs" />
                    </div>
                    <p className="mt-1 text-xs text-base-content/60">
                    Ratings
                    </p>
                </div>

                <div className="border-r border-base-200 px-2 py-3 text-center">
                    <p className="text-sm font-semibold">
                        {app.downloads}
                    </p>
                    <p className="mt-1 text-xs text-base-content/60">
                        Downloads
                    </p>
                </div>

                <div className="px-2 py-3 text-center">
                    <p className="text-sm font-semibold">
                    {app.size} MB
                    </p>
                    <p className="mt-1 text-xs text-base-content/60">
                    Size
                    </p>
                </div>
            </div>

            <div className="mt-4">
            <Link href={`/apps/${app.id}`}
                className="btn btn-sm btn-outline w-full rounded-lg">
                View Details
            </Link>
            </div>
        </div>
    </section>
    );
};

export default AppCard;