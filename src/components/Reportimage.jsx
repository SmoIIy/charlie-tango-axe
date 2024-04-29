import Image from "next/image";


export default async function Reportimage(data){
    console.log(data);
    return (
        <article className="bg-c-grey80 m-4 px-8 h-52 w-10/12 sm:w-96 rounded-xl flex justify-center">
            <Image
                alt={data.url}
                src={data.src.screenshot.url}
                width={data.src.screenshot.width}
                height={data.src.screenshot.height}
            />
        </article>
    )
}