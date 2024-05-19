import Footer from "@components/shared/Footer";
import AboutSide from "@components/about/AboutSide";
import AboutMe from "@components/about/AboutMe";

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex justify-center sm:flex-row gap-1 mx-auto p-3 max-w-[1605px] ">
        <div className="flex flex-col justify-between items-center bg-secondary-dark text-gray-200 rounded-2xl p-8">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <div className="lg:w-5/12">
              <AboutSide />
            </div>
            <div className="lg:w-7/12 lg:py-24">
              <AboutMe />
            </div>
          </div>
          <p className="text-center text-lg px-10">
            From interactive applications to multimedia-rich content, I&#39;m
            passionate about creating engaging experiences that resonate with
            audiences.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
