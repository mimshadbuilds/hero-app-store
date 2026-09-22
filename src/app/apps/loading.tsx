import AppCardSkeleton from "@/components/shared/AppCardSkeleton";

const Loading = () => {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8 space-y-3">
        <div className="skeleton mx-auto h-8 w-56" />
        <div className="skeleton mx-auto h-4 w-80" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <AppCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
};

export default Loading;