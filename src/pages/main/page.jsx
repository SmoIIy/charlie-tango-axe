import "../../app/globals.css";

export default async function Main() {
  return (
    <section className="flex max-w-2xl flex-col items-center justify-center p-4">
      <h1 className="text-9xl font-bold text-orange-500">Diversa</h1>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio sit nihil quaerat aliquam recusandae ipsum quia sed maxime, blanditiis iusto incidunt sunt sapiente molestias repellendus placeat corrupti beatae a.</p>
      <form action="#" className="border flex flex-col p-4">
        <div className="p-4 flex">
            <div className="flex flex-col">
                <label htmlFor="url">Input Label</label>
                <input className="p-4 rounded-xl text-black" type="url" name="url" id="url" />
            </div>
            <input className="p-4 bg-orange-500 rounded-xl cursor-pointer" type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
}
