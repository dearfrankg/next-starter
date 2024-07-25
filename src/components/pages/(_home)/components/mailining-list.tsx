import { Card } from "@/components/ui/card";

export function MailingList() {
  return (
    <Card className="mx-auto max-w-6xl shadow-none">
      <div className="bg-gray-100 relative rounded-xl p-5 sm:py-16 before:absolute before:top-0 before:start-0 before:bg-[url('/svg/web-bg-gray.svg')] before:bg-no-repeat before:bg-top before:bg-contain before:w-2/3 before:h-full before:z-0 dark:bg-neutral-950 dark:before:bg-[url('/svg/web-bg.svg')]">
        <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div className="max-w-xl text-center mx-auto">
            <div className="mb-5">
              <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
                Sign up to our newsletter
              </h2>
            </div>

            <form>
              <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Subscribe
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}
