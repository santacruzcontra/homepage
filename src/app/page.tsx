import { HomePageCarousel } from "./components/HomePageCarousel/HomePageCarousel";
import { PageTitle } from "./components/PageTitle";

export default function HomePage() {
  return (
    <>
      <PageTitle>Santa Cruz Contra</PageTitle>
      <HomePageCarousel />
      <div className="">
        <p></p>
      </div>
    </>
  );
}
