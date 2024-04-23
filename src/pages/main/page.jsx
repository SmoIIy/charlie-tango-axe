import "../../app/globals.css";

export default async function Main() {
  return (
    <section class="p-16 rounded-3xl shadow-2xl ">
      <div class="flex flex-col items-center justify-center">
        <div class="max-h-auto mx-auto max-w-xl">
          <div class="mb-8 space-y-3">
            <h1 class="text-8xl font-semibold text-brand-orange70">Diversa</h1>
            <p class="text-gray-500">Enter your website, and we will test the accesibility <br />No fuss, no ballade - <span className="text-brand-orange70 underline">read more!</span></p>
          </div>

          <form class="w-full">
            <div class="mb-10 space-y-3">
              <div class="space-y-1">
                <div class="space-y-2">
                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="url">URL</label>
                  <input class="border-input text-c-grey80 bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-xl" id="url" placeholder="website.com..." name="url" />
                </div>
              </div>
  
              <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-brand-orange70 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit">Test</button>
            </div>
          </form>

          <div class="text-center"> No placeholder? <a class="text-brand-turquoise50" href="/signup">Create placeholder</a> </div>
        </div>
      </div>
    </section>
  );
}
