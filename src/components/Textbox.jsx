

export default async function Textbox(){
    return (
        <article className="my-4 mx-8 p-8 bg-c-grey80 rounded-xl" >
            <h2 className="text-xl font-bold text-brand-orange70 leading-relaxed">Description</h2>
            <p className="max-w-prose">When you submit a website URL to Diversa, our system automatically scans the site using the Deque Axe ruleset. It evaluates each element of the website against these rules and generates a detailed report. Based on the results, we calculate a score that reflects the overall accessibility and usability of the website.</p>
        </article>
       
    )
}