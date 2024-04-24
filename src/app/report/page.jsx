
import drreport from "./dsb_dk.json"
export const revalidate = 1800;

export default function Report({ }){
    //local test env
    "use client"
    const data =  drreport;
    console.log(data);
    // "use client"
    // const params = new URLSearchParams();
    // const response = await fetch(
    //     `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
    // );
    // const data = await response.json();

    return (
        <section>
            <h2>{data.url}</h2>
        </section>
    )

}

