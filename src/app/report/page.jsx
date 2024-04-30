import Reportscore from "@/components/Reportscore";
import drreport from "./dr_dk.json";
export const revalidate = 1800;
import Reporttitle from "@/components/Reporttitle";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";
import Reportimage from "@/components/Reportimage";

export default async function Report({ searchParams }) {
  //local test env
  //const data =  drreport;
  // console.log(data);
  "use server";
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  return (
    <main className="max-w-7xl m-auto">
      <section className="flex justify-center items-center flex-col sm:flex-row sm:items-start">
        <Reporttitle title={data.url} />
        <Reportscore violations={data.violations} />
        <Reportimage src={data} />
      </section>

      <Card2 title="Violations">
        <div className="text-c-grey20">
          <h2 className="text-xl font-bold text-brand-orange70">Violations:</h2>
          <p>Found {data.violations.length} issues</p>
          <ul>
            {data.violations.map((violation, index) => (
              <li className="max-w-prose" key={index}>
                <h3 className="mb-1 mt-4 text-brand-orange70 font-bold capitalize">{violation.id}</h3>
                <p className="my-1"><span className="font-bold">Impact:</span> {violation.impact}</p>
                <p className="my-1"><span className="font-bold">Description:</span> {violation.description}</p>
                <p className="my-1"><span className="font-bold">Help:</span> {violation.help}</p>
                <a className="my-1 underline underline-offset-4 decoration-brand-orange70 hover:text-brand-orange70" target="blank_" href={violation.helpUrl}>
                  More info <span className="text-brand-orange70">⮞</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Card2>

      <Card2 title="Passes">
        <div className="text-c-grey20">
          <h2 className="text-xl font-bold text-brand-orange70">Passes:</h2>
          <p>Found {data.passes.length} passes</p>
          <ul>
            {data.passes.map((pass, index) => (
              <li className="max-w-prose" key={index}>
                <h3 className="mb-1 mt-4 text-brand-orange70 font-bold capitalize">{pass.id}</h3>
                <p className="my-1"><span className="font-bold">Impact:</span> {pass.impact}</p>
                <p className="my-1"><span className="font-bold">Description:</span> {pass.description}</p>
                <p className="my-1"><span className="font-bold">Help:</span> {pass.help}</p>
                <a className="my-1 underline underline-offset-4 decoration-brand-orange70 hover:text-brand-orange70" target="blank_" href={pass.helpUrl}>
                  More info <span className="text-brand-orange70">⮞</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Card2>
      <Card2 title="Inapplicable">
        <div className="text-c-grey20">
          <h2 className="text-xl font-bold text-brand-orange70">Inapplicable:</h2>
          <p>Found {data.inapplicable.length} inapplicable</p>
          <ul>
            {data.inapplicable.map((issue, index) => (
              <li className="max-w-prose" key={index}>
                <h3 className="mb-1 mt-4 text-brand-orange70 font-bold capitalize">{issue.id}</h3>
                <p className="my-1"><span className="font-bold">Impact:</span> {issue.impact}</p>
                <p className="my-1"><span className="font-bold">Description:</span> {issue.description}</p>
                <p className="my-1"><span className="font-bold">Help:</span> {issue.help}</p>
                <a className="my-1 underline underline-offset-4 decoration-brand-orange70 hover:text-brand-orange70" target="blank_" href={issue.helpUrl}>
                  More info <span className="text-brand-orange70">⮞</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Card2>
    </main>
  );
}
