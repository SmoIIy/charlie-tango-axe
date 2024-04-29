import Image from "next/image";


export default async function Reportimage(data){
    console.log(data);
    return (
        <article className="bg-c-grey80 m-4 px-8 min-h-28 line-clamp-2 w-96 rounded-xl flex justify-center">
            <Image
                alt={data.url}
                src={data.src.screenshot.url}
                width={data.src.screenshot.width}
                height={data.src.screenshot.height}
            />
        </article>
    )
}