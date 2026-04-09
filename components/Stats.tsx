import { stats } from "@/lib/constants";

const Stats = () => {
  return (
    <section className="w-full bg-dark py-8">
      <div className="flex flex-wrap items-center justify-center gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            className={`flex items-center gap-3 px-8 sm:px-12 py-4 ${
              i !== stats.length - 1 ? "border-r border-white/10" : ""
            }`}
          >
            <span className="text-2xl">{stat.emoji}</span>
            <div>
              <h4 className="font-poppins font-bold text-[28px] sm:text-[34px] leading-tight text-white">
                {stat.value}
              </h4>
              <p className="font-poppins font-normal text-[11px] sm:text-[12px] text-white/50 uppercase tracking-widest">
                {stat.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
