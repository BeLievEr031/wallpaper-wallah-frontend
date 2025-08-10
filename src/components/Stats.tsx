import clsx from "clsx";

const Stats = () => {
    const stats = [
        { label: "Wallpapers Available", value: "25,430+" },
        { label: "Categories", value: "50+" },
        { label: "Active Users", value: "120k+" },
        { label: "Total Downloads", value: "2M+" },
    ];

    return (
        <section className="my-20 font-rubik">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, idx) => (
                    <div key={idx} className={clsx(idx !== 0 && "border-l-2 border-zinc-600")}>
                        <h2 className="text-6xl font-bold text-blue-600">{stat.value}</h2>
                        <p className="mt-2 text-gray-700 font-semibold text-3xl">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Stats;
