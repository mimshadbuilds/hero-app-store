import Image from "next/image";
import banner from "@/assets/hero.png";

const stats = [
    { label: "Total Downloads", value: "29.6M", note: "21% More Than Last Month" },
    { label: "Total Reviews", value: "906K", note: "46% More Than Last Month" },
    { label: "Active Apps", value: "132+", note: "31 More Will Launch" },
    ];

    const Banner = () => {
        return (
            <section className="overflow-hidden rounded-lg bg-base-100 shadow-md">
            <div className="space-y-5 px-6 pt-10 text-center">
                <h2 className="text-4xl font-bold text-slate-950">
                We Build <br />
                <span className="text-purple-600">Productive</span> Apps
                </h2>
                <p className="mx-auto max-w-[700px] text-sm text-slate-600">
                At HERO.IO, we craft innovative apps designed to make everyday life
                simpler, smarter, and more exciting. Our goal is to turn your ideas
                into digital experiences that truly make an impact.
                </p>

                <div className="flex justify-center gap-2">
                    <button className="btn btn-success text-white">Google</button>
                    <button className="btn btn-primary text-white">App Store</button>
                </div>
                <Image
                src={banner}
                alt="HERO.IO apps"
                className="mx-auto h-auto w-[750px]"
                />
            </div>
            <div className="brand-gradient px-6 py-12 text-center text-white md:py-14">
                <h3 className="text-2xl font-bold md:text-4xl">
                Trusted By Millions, Built For You
                </h3>
                <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="space-y-2">
                        <p className="text-sm text-white/70">{stat.label}</p>
                        <p className="mt-1 text-4xl font-extrabold md:text-6xl">
                        {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-white/60">
                        {stat.note}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;