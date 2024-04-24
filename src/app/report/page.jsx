import drreport from "./dr_dk.json"
export const revalidate = 1800;

export default async function Report({ searchParams }){
    //local test env
    //const data =  drreport;
    // console.log(data);
    const params = new URLSearchParams(searchParams);
    const response = await fetch(
        `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`,
    );
    const data = await response.json();
    console.log(data);
    return (
        <section>
            <h2>{data.url}</h2>
        </section>
    )

}

