import "../../app/globals.css";

export default async function Main() {
  return (
    <section className="flex max-w-2xl flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-orange-500">Diversa</h1>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio sit nihil quaerat aliquam recusandae ipsum quia sed maxime, blanditiis iusto incidunt sunt sapiente molestias repellendus placeat corrupti beatae a.</p>
      <form action="#" className="border flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="url">Cock and ball torture</label>
          <input className="p-4" type="url" name="url" id="url" />
          <input type="submit" value="submit" />
        </div>
      </form>
    </section>
  );
}
