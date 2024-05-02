import Link from "next/link";
import Rules from "./rules.json";

const RuleCard = ({ id, title, content }) => (
  <Link href={`/rules/${id}`}>
    <div className="cursor-pointer bg-c-grey80 rounded-md shadow-md p-6 mb-4">
      <h2 className="text-lg text-brand-orange70 font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  </Link>
);

const Rulepage = () => {
  return (
    <div className="m-4">
      <h1 className="text-4xl font-bold mb-4 text-brand-orange70">Rules</h1>
      <div>
        {Rules.map((rule, index) => (
          <RuleCard key={index} id={rule.id} title={rule.title} content={rule.content} />
        ))}
      </div>
    </div>
  );
};

export default Rulepage;
