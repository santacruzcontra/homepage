import { HomePageCarousel } from "./components/HomePageCarousel/HomePageCarousel";
import { PageTitle } from "./components/PageTitle";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <PageTitle>Santa Cruz Contra</PageTitle>
      <div className="flex w-full flex-col items-center p-4">
        <HomePageCarousel />
      </div>
    </>
  );
}
