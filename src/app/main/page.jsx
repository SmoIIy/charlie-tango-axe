import { redirect } from "next/navigation";
import "../../app/globals.css";

export default async function Main() {
  return (
    <section className="p-16 rounded-3xl shadow-2xl bg-c-grey80">
      <div className="flex flex-col items-center justify-center">
        <div className="max-h-auto mx-auto max-w-xl">
          <div className="mb-8 space-y-3">
            <h1 className="text-8xl font-semibold text-brand-orange70">Diversa</h1>
            <h2 className="text-c-grey60">
              Enter your website, and we will test the accesibility <br />
              No fuss, no ballade -{" "}
              <a href="/rules">
                <span className="text-brand-orange70 underline">read more!</span>
              </a>
            </h2>
          </div>

          <form className="w-full" action="/report">
            <div className="mb-10 space-y-3">
              <div className="space-y-1">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="url">
                    URL
                  </label>
                  <input className="border-input text-c-grey80 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-xl" type="text" id="url" placeholder="website.com..." name="url" />
                </div>
              </div>

              <button className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-brand-orange70 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit">
                Test
              </button>
            </div>
          </form>

          <div className="text-center">
            {" "}
            No placeholder?{" "}
            <a className="text-brand-turquoise50" href="/signup">
              Create placeholder
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
