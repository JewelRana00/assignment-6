import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";
import Loading from "@/components/shared/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Banner />
        <Library />
      </Suspense>
    </div>
  );
}
