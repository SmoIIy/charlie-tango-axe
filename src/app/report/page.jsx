
import drreport from "./dr_dk.json"



const params = new URLSearchParams({
    url: "https://www.charlietango.dk",
  });
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
  );
  const data = await response.json();


export default async function Report({ report }){
    //local test env
    //const data =  drreport;
    // console.log(data);

    return (
        <section>
            <h2>{data.url}</h2>
        </section>
    )

}

