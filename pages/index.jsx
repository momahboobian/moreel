import Hero from "../components/shared/Hero";
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
      <section className="flex flex-col md:flex-row justify-between items-start gap-4">
        {/* <div className="flex-none">
          <SideCol />
        </div> */}
        <section className="shrink flex-col max-w-full ">
          <Hero />
          {/* 
          <Expertise />

          <Portfolio />

          <Recommendations />

          <Contact /> */}
        </section>

        {/* <SideMenu /> */}
      </section>

      {/* <footer className="flex justify-center items-center text-center pt-10 w-full">
        <Footer />
      </footer> */}
    </main>
  );
}
