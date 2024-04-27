export default async function Reporttitle({title}){


    return (
        <h1 className="bg-c-grey60 p-8 min-h-28 line-clamp-2 max-w-sm text-xl rounded-xl font-semibold ">Report for <a href={title} className=" text-brand-orange70 uppercase hover:underline">{title.replace("https://", "")}</a></h1>
    )
}