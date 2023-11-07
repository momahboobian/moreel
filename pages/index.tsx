import Hero from "../components/hero/Hero";
import SideCol from "../components/shared/SideCol";
import SideMenu from "../components/shared/SideMenu";
import Expertise from "../components/expertise/Expertise";
import Portfolio from "../components/portfolio/Portfolio";
import Recommendations from "../components/recommendations/Recommendations";
import Contact from "../components/contact/Contact";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      <section className="flex flex-col sm:flex-row justify-between items-start gap-1">
        <div className="max-w-md">
          <SideCol />
        </div>
        <section className="max-w-6xl p-4 sm:pt-2 lg:pt-4 sm:p-0">
          {/* <Hero /> */}

          <Expertise />

          <Portfolio />
          {/* 

          <Recommendations />

          <Contact /> */}
        </section>

        {/* <SideMenu /> */}
      </section>

      <footer className="flex justify-center items-center text-center pt-10 w-full">
        <Footer />
      </footer>
    </main>
  );
}
