import { IApp } from "@/types/apps";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import InstallAppButton from "./InstallAppBtn";

interface AppDetailsCardProps {
    app: IApp;
}

const AppDetailsCard = ({ app }: AppDetailsCardProps) => {

    const totalRatings = app.ratings.reduce(
        (total, rating) => total + rating.count, 0
    );

    const getPercentage = (count: number) => {
        if (totalRatings === 0) return 0;
        return Math.round((count / totalRatings) * 100);
    };

    return (
        <div className="w-full rounded-2xl border border-base-200 bg-base-100 shadow-sm">
            <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                    />
                </div>

            <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-bold text-base-content sm:text-3xl">
                {app.title}
                </h1>
                <p className="mt-1 text-sm text-base-content/60">
                {app.companyName}
                </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1">
                    <span className="font-semibold">
                    {app.ratingAvg}
                    </span>
                    <FaStar className="text-sm" />
                </div>
                <span className="text-sm text-base-content/50">
                {app.reviews} reviews
                </span>
                </div>
            </div>

                <button 
                className="btn rounded-full border-0 bg-[#4f2bd6] px-7 text-white hover:bg-[#4323bd]">Install
                </button>
            </div>
            <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-xl bg-base-200/40">
            <div className="border-r border-base-200 px-3 py-4 text-center">
                <div className="flex items-center justify-center gap-1 font-semibold">
                {app.ratingAvg}
                <FaStar className="text-xs" />
                </div>
                <p className="mt-1 text-xs text-base-content/60">
                Rating
                </p>
            </div>

            <div className="border-r border-base-200 px-3 py-4 text-center">
                <p className="font-semibold">
                {app.downloads}
                </p>
                <p className="mt-1 text-xs text-base-content/60">
                Downloads
                </p>
            </div>
            <div className="px-3 py-4 text-center">
                <p className="font-semibold">
                {app.size} MB
                </p>
                <p className="mt-1 text-xs text-base-content/60">
                App Size
                </p>
            </div>
        </div>

        <section className="mt-8">
            <h2 className="text-lg font-semibold">
                About this app
            </h2>

            <p className="mt-3 text-sm leading-7 text-base-content/70">
                {app.description}
            </p>
            </section>

            <section className="mt-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">
                    Ratings and reviews
                    </h2>

                    <span className="text-sm text-base-content/50">
                    {app.reviews} reviews
                    </span>
                </div>

            <div className="mt-5 flex items-center gap-5">
                <div className="shrink-0 text-center">
                <p className="text-4xl font-bold">
                    {app.ratingAvg}
                </p>

                    <div className="mt-1 flex justify-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                            key={star}
                            className="text-xs"/>
                        ))}
                    </div>
                </div>

                <div className="flex-1 space-y-2">
                {app.ratings
                    .slice()
                    .reverse()
                    .map((rating) => {
                    const percentage = getPercentage(
                        rating.count
                    );

                    return (
                        <div key={rating.name}
                            className="flex items-center gap-3">
                            <span className="w-8 text-xs text-base-content/60">
                                {rating.name.split(" ")[0]}
                            </span>
                            <progress className="progress progress-primary h-2 flex-1"
                                value={percentage}
                                max={100}/>
                            <span className="w-10 text-right text-xs text-base-content/50">
                                {percentage}%
                            </span>
                        </div>
                    );
                })}
                </div>
            </div>
        </section>

            <div className="mt-8 flex flex-col gap-3 border-t border-base-200 pt-6 sm:flex-row">
                <InstallAppButton app={app} />
                <Link href="/apps"
                    className="btn btn-outline flex-1 rounded-full">
                    Back to Apps
                </Link>
            </div>
        </div>
    </div>
    );
};

export default AppDetailsCard;