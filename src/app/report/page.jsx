import drreport from "./dr_dk.json";
export const revalidate = 1800;

export default async function Report({ searchParams }) {
  //local test env
  //const data =  drreport;
  // console.log(data);
  "use client";
  const params = new URLSearchParams(searchParams);
  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();

  return (
    <main>
      <h1 className="text-2xl font-semibold text-brand-orange70">Report for {data.url}</h1>
      <p>Found {data.violations.length} issues</p>
      <div>
        <h2 className="text-xl text-brand-orange70">Violations:</h2>
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
    </main>
  );
}
