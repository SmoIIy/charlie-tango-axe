import Reportscore from "@/components/Reportscore";
import drreport from "./dr_dk.json";
export const revalidate = 1800;
import Reportfull from "@/components/Reportfull";
import Retry from "@/components/Retry";
import Link from "next/link";

export default async function Report({ searchParams }) {
    //local test env
    //const data =  drreport;
    // console.log(data);
    "use server";
    const params = new URLSearchParams(searchParams);
    const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
    const data = await response.json();
    console.log(data);
    if (data.url[0] == 'Invalid URL') {
        return (
            <Retry />
        );  
    }  

    if ('error' in data) {
        return (
            <Retry />
        )
        
    }
    return (
        <>
        <div className="w-full text-center">
            <Link className="text-8xl text-center font-semibold text-brand-orange70 w-full"  href="/">DIVERSA</Link>
            </div>
            <Reportfull data={data} />
        </>
    
    )

}
