const AppCardSkeleton = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
            <div className="flex items-start gap-4">
            {/* App Icon */}
            <div className="skeleton h-16 w-16 shrink-0 rounded-xl" />

            <div className="flex-1 space-y-2">
                {/* App Name */}
                <div className="skeleton h-5 w-3/4" />

                {/* Category */}
                <div className="skeleton h-4 w-1/2" />

                {/* Rating */}
                <div className="skeleton h-4 w-1/3" />
            </div>
            </div>

            {/* Description */}
            <div className="mt-3 space-y-2">
            <div className="skeleton h-3 w-full" />
            <div className="skeleton h-3 w-5/6" />
            </div>

            {/* Bottom */}
            <div className="mt-4 flex items-center justify-between">
            <div className="skeleton h-4 w-20" />
            <div className="skeleton h-9 w-20 rounded-lg" />
            </div>
        </div>
        </div>
    );
};

export default AppCardSkeleton;