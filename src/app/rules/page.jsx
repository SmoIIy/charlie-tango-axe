import Link from "next/link";
import Rules from "./rules.json";

const RuleCard = ({ id, title, content }) => (
  <Link href={`/rules/${id}`}>
    <article className="cursor-pointer bg-c-grey80 rounded-md mx-2 sm:mx-0 p-6 mb-4 max-w-lg h-full border border-c-grey80 hover:border-brand-orange70 shadow-inner hover:bg-c-grey90 transition-all duration-300">
      <h2 className="text-lg text-brand-orange70 font-semibold mb-2">{title}</h2>
      <p className="max-w-prose">{content}</p>
    </article>
  </Link>
);

const Rulepage = () => {
  return (
   <>
        <h1 className="text-4xl font-bold mb-4 text-brand-orange70 text-center">Rules</h1>
        <section className="m-4 mx-auto max-w-6xl flex justify-center flex-wrap gap-4 items-stretch">
          
    
            {Rules.map((rule, index) => (
              <RuleCard key={index} id={rule.id} title={rule.title} content={rule.content} />
            ))}
    
        </section>
   </>
  );
};

export default Rulepage;
