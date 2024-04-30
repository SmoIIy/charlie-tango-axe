import Reportscore from "@/components/Reportscore";
import drreport from "./dr_dk.json";
export const revalidate = 1800;
import Reporttitle from "@/components/Reporttitle";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";
import Reportimage from "@/components/Reportimage";
import Reportfull from "@/components/Reportfull";

export default async function Report({ searchParams }) {
    //local test env
    //const data =  drreport;
    // console.log(data);
    "use server";
    const params = new URLSearchParams(searchParams);
    const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
    const data = await response.json();
    
        
    return (
        <Reportfull data={data} />
    );
}
