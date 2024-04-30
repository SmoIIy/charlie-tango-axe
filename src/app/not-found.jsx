import Link from 'next/link'
 
export default function NotFound() {
    return (
        <main className="p-16 rounded-3xl shadow-2xl bg-c-grey80 max-h-auto mx-auto max-w-xl flex flex-col items-center justify-between gap-4">
            <h2 className="text-center">Not Found</h2>
            <p>Could not find requested resource</p>
            <Link className="bg-brand-orange70 p-4 rounded-xl max-w-fit hover:bg-orange-800 transition-colors" href="/">Return Home</Link>
        </main>
    )
}