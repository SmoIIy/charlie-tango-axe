"use client"
import drreport from "./dr_dk.json"
export default function Report({ report }){
    
    const data =  drreport;
    console.log(data);
    return (
        <section>
            <h2>{data.url}</h2>
        </section>
    )

}