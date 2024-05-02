import { useRouter } from "next/router";
import Rules from "./rules.json";
import Link from "next/link";

const RuleDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!rule) return <div>Rule not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{rule.title}</h1>
      <p>{rule.content}</p>
    </div>
  );
};

export default RuleDetail;
