import Link from "next/link";
import Rules from "./rules.json";

const RuleCard = ({ id, title, content }) => (
  <Link href={`/rules/${id}`}>
    <article className="cursor-pointer bg-c-grey80 rounded-md mx-2 sm:mx-0 p-6 mb-4 max-w-lg h-full border border-c-grey80  hover:border-brand-orange70 hover:bg-c-grey90 shadow-inner  transition-all duration-300">
      <h2 className="text-lg text-brand-orange70 font-semibold mb-2">{title}</h2>
      <p className="max-w-prose">{content}</p>
    </article>
  </Link>
);

const Rulepage = () => {
  return (
    <>
      <div className="w-full text-center">
        <Link className="text-8xl font-semibold text-brand-orange70" href="/">
          DIVERSA
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-brand-orange70 text-center">Rules</h1>
      <section className="m-4 mx-auto max-w-6xl flex justify-center flex-wrap gap-4 items-stretch ">
        {Rules.map((rule, index) => (
          <RuleCard key={index} id={rule.id} title={rule.title} content={rule.content} />
        ))}
      </section>
    </>
  );
};

export default Rulepage;
