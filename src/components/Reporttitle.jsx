export default async function Reporttitle({title}){


    return (
        <h1 className="bg-c-grey80 p-8 m-4 h-28 line-clamp-2 max-w-sm text-xl rounded-xl font-semibold "> <a href={title} className=" text-brand-orange70 uppercase hover:underline">{title.replace("https://", "")}</a></h1>
    )
}