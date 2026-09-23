import { IApp } from "@/types/apps";
import Image from "next/image";
import Link from "next/link";
import {
  FaDownload,
  FaStar,
  FaRegCommentDots,
} from "react-icons/fa";
import InstallAppButton from "./InstallAppBtn";

interface AppDetailsCardProps {
  app: IApp;
}

const AppDetailsCard = ({ app }: AppDetailsCardProps) => {
  const totalRatings = app.ratings.reduce(
    (total, rating) => total + rating.count,
    0
  );

  const getPercentage = (count: number) => {
    if (totalRatings === 0) return 0;

    return Math.round((count / totalRatings) * 100);
  };

  return (
    <div className="w-full bg-base-100">
      <section className="pb-5">
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden bg-base-200 sm:h-36 sm:w-36">
            <Image
              src={app.image}
              alt={app.title}
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h1 className="text-lg font-bold text-base-content sm:text-xl">
              {app.title}
            </h1>
            <p className="mt-1 text-xs text-base-content/50">
              Developed by{" "}
              <span className="text-primary">
                {app.companyName}
              </span>
            </p>
            <div className="my-3 border-t border-base-300" />
            <div className="flex flex-wrap items-start gap-8 sm:gap-12">

              <div>
                <FaDownload className="text-lg text-success" />
                <p className="mt-1 text-[10px] text-base-content/50">
                  Downloads
                </p>

                <p className="text-base font-bold">
                  {app.downloads}
                </p>
              </div>

              <div>
                <FaStar className="text-lg text-warning" />

                <p className="mt-1 text-[10px] text-base-content/50">
                  Average Ratings
                </p>

                <p className="text-base font-bold">
                  {app.ratingAvg}
                </p>
              </div>

              <div>
                <FaRegCommentDots className="text-lg text-secondary" />
                <p className="mt-1 text-[10px] text-base-content/50">
                  Total Reviews
                </p>
                <p className="text-base font-bold">
                  {app.reviews}
                </p>
              </div>
            </div>

            <div className="mt-3">
              <InstallAppButton app={app} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-base-300 py-5">

        <h2 className="text-sm font-semibold">
          Ratings
        </h2>

        <div className="mt-4 space-y-2">
          {app.ratings
            .slice()
            .reverse()
            .map((rating) => {
              const percentage = getPercentage(
                rating.count
              );

              return (
                <div
                  key={rating.name}
                  className="flex items-center gap-3"
                >
                  <span className="w-8 shrink-0 text-[10px] text-base-content/50">
                    {rating.name.split(" ")[0]} star
                  </span>
                  <progress
                    className="progress progress-warning h-3 flex-1"
                    value={rating.count}
                    max={totalRatings}
                  />

                  <span className="w-12 shrink-0 text-right text-[10px] text-base-content/50">
                    {rating.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
        </div>
      </section>

      <section className="border-t border-base-300 pt-5">
        <h2 className="text-sm font-semibold">
          Description
        </h2>
        <div className="mt-4 space-y-5">
          <p className="text-sm leading-5 text-base-content/60">
            {app.description}
          </p>
        </div>
      </section>

      <div className="mt-6 border-t border-base-300 pt-5">
        <Link href="/apps"
          className="btn btn-sm btn-gradient text-white">
          Back to Apps
        </Link>
      </div>
    </div>
  );
};

export default AppDetailsCard;