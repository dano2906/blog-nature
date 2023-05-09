import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen sm:h-auto bg-[url('/bg-greenscale.webp')] bg-cover flex flex-col">
        <Navigation />
        <HeroSection />
      </main>
    </>
  );
}
