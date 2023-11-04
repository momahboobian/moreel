import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";
import { RecoilRoot } from "recoil";
// import UseScrollToTop from "@hooks/useScrollToTop";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AnimatePresence>
        <div className="bg-primary-dark dark:bg-primary-dark transition duration-300">
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </div>
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default MyApp;
