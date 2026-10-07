import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#0D0F12] px-4 text-white">
      <div className="text-center">
        <div className="flex items-center justify-center gap-5">
          <h1 className="text-4xl font-black text-[#B6FF00] sm:text-6xl">
            404
          </h1>

          <span className="h-10 w-px bg-[#343A46]" />

          <h2 className="text-xl font-black uppercase">Page Not Found</h2>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/workouts"
            className="rounded-full bg-[#B6FF00] px-7 py-3 text-sm font-bold text-black transition hover:bg-[#A8EC00]"
          >
            Browse Workouts
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#343A46] px-7 py-3 text-sm font-medium text-white transition hover:border-[#B6FF00] hover:text-[#B6FF00]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
