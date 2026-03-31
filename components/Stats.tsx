import { stats } from "@/lib/constants";
import styles from "@/lib/styles";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-wrap gap-6 py-12`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center justify-center min-w-[160px] py-6 px-6 bg-white rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="text-3xl mb-1">{stat.emoji}</div>
          <h4 className="font-poppins font-bold text-[38px] leading-[48px] text-dark">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal text-[14px] text-secondary uppercase tracking-widest mt-1 text-center">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
