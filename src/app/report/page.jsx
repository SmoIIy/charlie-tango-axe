import drreport from "./dr_dk.json";
export const revalidate = 1800;
import Reporttitle from "@/components/Reporttitle";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";

export default async function Report({ searchParams }) {
  //local test env
  //const data =  drreport;
  // console.log(data);
  "use server";
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  return (
    <main>
      <Card></Card>
      <Card2></Card2>
      <Reporttitle title={data.url} />
      <div>
        <h2 className="text-xl text-brand-orange70">Violations:</h2>
        <p>Found {data.violations.length} issues</p>
        <ul>
          {data.violations.map((violation, index) => (
            <li key={index}>
              <h3 className="text-brand-orange70">{violation.id}</h3>
              <p>Impact: {violation.impact}</p>
              <p>Description: {violation.description}</p>
              <p>Help: {violation.help}</p>
              <a target="blank_" href={violation.helpUrl}>
                More info
              </a>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2 className="text-xl text-brand-orange70">Passes:</h2>
        <p>Found {data.passes.length} passes</p>
        <ul>
          {data.passes.map((pass, index) => (
            <li key={index}>
              <h3 className="text-brand-orange70">{pass.id}</h3>
              <p>Impact: {pass.impact}</p>
              <p>Description: {pass.description}</p>
              <p>Help: {pass.help}</p>
              <a target="blank_" href={pass.helpUrl}>
                More info
              </a>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2 className="text-xl text-brand-orange70">Inapplicable:</h2>
        <p>Found {data.inapplicable.length} inapplicable</p>
        <ul>
          {data.inapplicable.map((issue, index) => (
            <li key={index}>
              <h3 className="text-brand-orange70">{issue.id}</h3>
              <p>Impact: {issue.impact}</p>
              <p>Description: {issue.description}</p>
              <p>Help: {issue.help}</p>
              <a target="blank_" href={issue.helpUrl}>
                More info
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
