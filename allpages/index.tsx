import Hero from "@/components/hero/Hero";
import SideCol from "@/components/shared/SideCol";
import SideMenu from "@/components/shared/SideMenu";
import Expertise from "@/components/expertise/Expertise";
import Portfolio from "@/components/portfolio/Portfolio";
import Recommendations from "@/components/recommendations/Recommendations";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col justify-center sm:flex-row gap-1">
        <div className="w-screen sm:max-w-md p-3 sm:sticky sm:top-0 sm:h-full ">
          <SideCol />
        </div>
        <div className="max-w-6xl p-3">
          <Hero />

          <Expertise />

          <Portfolio />

          <Recommendations />
          {/* 

          <Contact /> */}
        </div>

        {/* <SideMenu /> */}
      </section>

      <footer className="flex justify-center items-center text-center pt-10 w-full">
        <Footer />
      </footer>
    </main>
  );
}
