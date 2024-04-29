export default async function Reporttitle({title}){


    return (
        <h1 className="bg-c-grey80 p-8 m-4 h-52 line-clamp-3 w-10/12 sm:w-96 text-xl rounded-xl font-semibold ">Report for: <br /> <a href={title} className=" text-brand-orange70 uppercase hover:underline">{title.replace("https://", "")}</a></h1>
    )
}