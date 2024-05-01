import Reportimage from "./Reportimage"
import Reportscore from "./Reportscore"
import Reporttitle from "./Reporttitle"
import Card2 from "./Card2"
import Textbox from "./Textbox";



export default async function Reportfull(data){
    console.log(data);
    return (
        <main className="max-w-7xl m-auto">
            <section className="flex justify-center items-center flex-col sm:flex-row sm:items-start">
                <Reporttitle title={data.data.url} />
                <Reportscore violations={data.data.violations} />
                <Reportimage src={data.data} />
            </section>
        <Textbox />
        <Card2 title="Violations">
          <div className="text-c-grey20">
            <h2 className="text-xl font-bold text-brand-orange70">Violations:</h2>
            <p>Found {data.data.violations.length} issues</p>
            <ul>
              {data.data.violations.map((violation, index) => (
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
            <p>Found {data.data.passes.length} passes</p>
            <ul>
              {data.data.passes.map((pass, index) => (
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
            <p>Found {data.data.inapplicable.length} inapplicable</p>
            <ul>
              {data.data.inapplicable.map((issue, index) => (
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
    )
}