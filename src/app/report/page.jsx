import drreport from "./dr_dk.json";
export const revalidate = 1800;

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
      <h1 className="text-2xl font-semibold text-brand-orange70">Report for <span className="uppercase">{data.url.replace("https://", "")}</span></h1>
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
              <a href={violation.helpUrl}>More info</a>
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
              <a href={pass.helpUrl}>More info</a>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2 className="text-xl text-brand-orange70">Inapplicable:</h2>
        <p>Found {data.inapplicable.length} inapplicable</p>
        <ul>
          {data.inapplicable.map((pass, index) => (
            <li key={index}>
              {/* <h3 className="text-brand-orange70">{.id}</h3>
              <p>Impact: {.impact}</p>
              <p>Description: {.description}</p>
              <p>Help: {.help}</p>
              <a href={.helpUrl}>More info</a> */}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
