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
      <h1>Report for {data.url}</h1>
      <p>Found {data.violations.length} issues</p>
    </main>
  );
}
