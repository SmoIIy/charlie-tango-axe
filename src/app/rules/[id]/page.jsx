import React from "react";
import Rules from "../../rules/rules.json";

const Page = () => {
  // Assuming you're fetching a rule with id '1' as an example
  const rule = Rules.find((rule) => rule.id === "1");

  return (
    <div className="p-8">
      {rule && (
        <div className="max-w-lg mx-auto bg-c-grey80 shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-brand-orange70 mb-4">{rule.title}</h1>
            <h2 className="text-lg font-bold mb-2 text-brand-orange70">Impact:</h2>
            <p className="text-gray-300 mb-4">{rule.impact}</p>
            <p className="text-gray-300 mb-4">{rule.content}</p>
            <h2 className="text-lg font-bold mb-2 text-brand-orange70">How to Fix:</h2>
            <p className="text-gray-300 mb-4">{rule.howToFix}</p>
            <h2 className="text-lg font-bold mb-2 text-brand-orange70">Note:</h2>
            <p className="text-gray-300 mb-4">{rule.note}</p>
            <h2 className="text-lg font-bold mb-2 text-brand-orange70">Description:</h2>
            <p className="text-gray-300 mb-4">{rule.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
