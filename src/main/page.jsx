import "../app/globals.css";

export default async function Main(){
    return (
        <section className="w-40 flex-col ">
            <h1 className="text-9xl  text-orange-500">Diversa</h1>
            <p className="underline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio sit nihil quaerat aliquam recusandae ipsum quia sed maxime, blanditiis iusto incidunt sunt sapiente molestias repellendus placeat corrupti beatae a.</p>
            <form action="#">
                <label htmlFor="url">Cock and ball torture</label>
                <input className="p-4" type="url" name="url" id="url"/>
                <input type="submit" value="submit" />
            </form>
        </section>
    )
}