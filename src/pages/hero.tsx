"use client";

export default function Hero() {
  return (
    <div className="bg-[url(/sea-of-clouds.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="relative isolate px-6 pt-14 lg:px-8  backdrop-brightness-50">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
              Helping you reach your dream job.
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-blue-400 sm:text-xl/8">
              We empower business owners and individuals to realize their full
              potential and achieve their goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
