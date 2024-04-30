import Link from "next/link";



export default async function Retry(){
    return (
        <main className="p-16 rounded-3xl shadow-2xl bg-c-grey80 max-h-auto mx-auto max-w-xl flex flex-col items-center justify-between">
            <h2 className="my-16 text-center">The URL you requested wasnt valid</h2>
            <Link className="bg-brand-orange70 p-4 rounded-xl max-w-fit hover:bg-orange-800 transition-colors" href="/">Try again</Link>
        </main>
    )
}