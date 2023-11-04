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
    <main className="flex sm:justify-between sm:flex-col gap-4">
      <section className="flex flex-col sm:justify-between items-start sm:flex-row gap-4">
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
