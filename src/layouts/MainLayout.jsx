import Navigation from "../components/Navigation/Navigation";

export default function MainLayout({ children }) {
  return (
    <div className="w-full h-screen bg-[url('/public/bg-greenscale.webp')] bg-cover">
      <Navigation />
      {children}
    </div>
  );
}
