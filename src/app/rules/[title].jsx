import { useRouter } from "next/router";
import Rules from "./rules.json";
import Link from "next/link";

const RuleDetail = () => {
  const { title } = router.query;
  const decodedTitle = decodeURIComponent(title);
  const rule = Rules.find((rule) => rule.title === decodedTitle);

  if (!rule) return <div>Rule not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{rule.title}</h1>
      <p>{rule.content}</p>
    </div>
  );
};

export default RuleDetail;
