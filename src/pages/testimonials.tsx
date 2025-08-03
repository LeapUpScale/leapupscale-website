import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          alt=""
          src="/eze-frame.png"
          className="mx-auto h-12"
          width={189}
          height={48}
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “ElevateXcellence has truly transformed my career in ways I never
              imagined. Their support and guidance have propelled me to heights
              I once only dreamed of.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt=""
              src="/human-resources-director-of-eze-frame.png"
              className="mx-auto size-32 rounded-full"
              width={128}
              height={128}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Karrah Lou</div>
              <span className="text-gray-900">•</span>
              <div className="text-gray-600">IT Tech Support of EZE-FRAME</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
