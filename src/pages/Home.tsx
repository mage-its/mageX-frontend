import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar"
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <main className="bg-dark h-screen flex flex-col justify-between">
      <Navbar />
      <div>
        <SocialMedia />
      </div>
      <Footer />
    </main>
  );
}
