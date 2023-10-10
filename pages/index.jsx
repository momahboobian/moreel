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
        <div className="flex-none">
          <SideCol />
        </div>
        <div className="shrink flex-col max-w-full ">
          <Hero />

          <Expertise />

          <Portfolio />

          <Recommendations />

          <Contact />
        </div>

        <SideMenu />
      </section>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div> */}

      <div className="flex justify-center items-center text-center pt-10 w-full">
        <Footer />
      </div>
    </main>
  );
}
