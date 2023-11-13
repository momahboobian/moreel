import Image from "next/image";
import bannerImage from "@/public/images/MoReel.jpg";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center text-white mx-auto p-4">
      <div className="lg:flex lg:justify-between lg:gap-4 bg-secondary-dark rounded-2xl p-4 ">
        <div className=" items-start lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col  lg:py-24">
          <div className=" w-32 sm:w-48 h-32 sm:h-48 overflow-hidden rounded-md ">
            <Image
              src={bannerImage}
              alt="Profile image"
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Mo Mahboobian
          </h2>
          <h3 className="flex flex-col mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            <span className="">Software Developer</span>
            <span className="whitespace-pre ">& Video Engineer</span>
          </h3>
          <p className="mt-4 max-w-xs leading-normal">
            I build and design full-stack applications, leveraging my media
            production experience to create captivating web experiences.
          </p>
          {/* <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
              <li>
                <a class="group flex items-center py-3" href="#about">
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="group flex items-center py-3 active"
                  href="#experience"
                >
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a class="group flex items-center py-3" href="#projects">
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </a>
              </li>
            </ul>
          </nav> */}
          {/* <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li class="mr-5 text-xs">
              <a
                class="block hover:text-slate-200"
                href="https://github.com/bchiang7"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </li>
            <li class="mr-5 text-xs">
              <a
                class="block hover:text-slate-200"
                href="https://instagram.com/bchiang7"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 1000"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                </svg>
              </a>
            </li>
            <li class="mr-5 text-xs">
              <a
                class="block hover:text-slate-200"
                href="https://twitter.com/bchiang7"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 248 204"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    id="white_background"
                    d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="mr-5 text-xs">
              <a
                class="block hover:text-slate-200"
                href="https://www.linkedin.com/in/bchiang7/"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </li>
          </ul> */}
        </div>
        <div className="pt-24 lg:w-1/2 lg:py-24">
          <p className="text-base text-gray-200 leading-relaxed">
            Hello! I'm thrilled to share a bit about myself. I believe in the
            power of technology to transform ideas into reality and enhance user
            experiences I am a passionate and versatile full-stack developer
            with a keen interest in exploring the latest cutting-edge
            technologies. My journey in the world of web development has been
            nothing short of exhilarating, and I constantly strive to enhance my
            skills and embrace emerging trends in the industry.
          </p>
          <p>
            ------------------- Curious about me? Here you have it: I'm a
            passionate, self-proclaimed designer who specializes in full stack
            development (React.is & Node.js]. I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me. I began my journey
            as a web developer in 2015, and since then, I've continued to grow
            and evolve as a developer, taking on new challenges and learning the
            latest technologies along the way. Now, in my thirties, 7 years
            after starting my web development journey, I'm building cutting-edge
            web applications using modern technologies such as Next.js,
            TypeScript, Nestis, Tailwindcss, Supabase and much more. I am very
            much a progressive thinker and enjoy working on products end to end,
            from ideation all the way to development. When I'm not in full-on
            developer mode, you can find me hovering around on twitter or on
            indie hacker, witnessing the journey of early startups or enjoying
            some free time. You can follow me on Twitter where I share
            tech-related bites and build in public, or you can follow me on
            GitHub. Finally, some quick bits about me. • B.E. in Computer
            Engineering • Avid learner • Full time freelancer * Aspiring indie
            hacker One last thing, I'm available for freelance work, so feel
            free to reach out and say hello! I promise I don't bite
          </p>
          <p>
            "Tell me about yourself." Certainly! I'm a passionate and
            results-driven software engineer with a strong background in both
            frontend and backend development. I'm always excited to work on
            innovative projects that have a positive impact. I've worked on a
            wide range of projects, from developing user-friendly web interfaces
            to designing and optimising backend systems. I'm highly adaptable,
            enjoy taking on challenges, and I'm committed to delivering
            high-quality solutions. I'm highly proficient in several front-end
            frameworks, including React and NextJs. However, I have a strong
            preference for React due to its flexibility, vibrant community, and
            extensive ecosystem of libraries. React's component-based
            architecture and virtual DOM make it a powerful tool for building
            dynamic and responsive user interfaces. I enjoy leveraging React's
            capabilities to create intuitive and performant front-end
            applications. creating a responsive frontend using React, and
            building a secure and scalable backend with Node.js. I worked
            closely with the client to understand their requirements and
            implemented features such as patient data management, appointment
            scheduling, and real-time chat.
          </p>
          <p>
            Hello! My name is Mo and I enjoy creating th, a passionate software
            engineer with a keen interest in web development. I believe in the
            power of technology to transform ideas into reality and enhance user
            experiences.
          </p>
          <p>
            My journey in the world of coding began with [briefly mention your
            background or a defining moment that sparked your interest in
            programming].
          </p>
          <p>
            I'm proficient in a wide range of technologies, including HTML, CSS,
            JavaScript, React, Node.js, and more. I enjoy tackling complex
            problems and crafting elegant solutions that make a positive impact.
          </p>
          <p>
            Outside of coding, you can find me [mention your hobbies or
            interests]. I believe that a well-rounded individual brings
            creativity and innovation to the tech world.
          </p>
          <p>
            Feel free to explore my portfolio to see some of the projects I've
            worked on. If you have a project in mind or want to collaborate, I'm
            always open to new opportunities. Let's build something amazing
            together!
          </p>
          <p>
            If you'd like to get in touch, please don't hesitate to reach out to
            me at [your email address].
          </p>
          <h3 className="text-2xl font-semibold text-white mt-6 mb-3">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-500 leading-relaxed">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                Web Development
              </h4>
              <p>
                As a developer, I find myself most captivated by the power and
                flexibility of NEXT.js. I'm always eager to dive into new
                projects that leverage NEXT.js and discover innovative ways to
                create fast, scalable, and user-friendly applications.
              </p>
            </div>
            <div className="text-gray-500 leading-relaxed">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                App Development
              </h4>
              <p>
                With a focus on user-centric design and cutting-edge
                technologies, I thrive on building intuitive and efficient apps
                that make a positive impact on people's lives. Let's turn ideas
                into reality and shape the future together.
              </p>
            </div>
            <div className="text-gray-500 leading-relaxed">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                UI/UX Designing
              </h4>
              <p>
                Crafting visually appealing and intuitive user interfaces that
                offer a delightful user experience is something I'm truly
                fanatic about.
              </p>
            </div>
            <div className="text-gray-500 leading-relaxed">
              <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                Mentorship
              </h4>
              <p>
                I have also found great joy in sharing my knowledge with others.
                Being a technical mentor allows me to give back to the community
                that has supported me throughout my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
