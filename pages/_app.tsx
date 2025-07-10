import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import DefaultLayout from "../components/layout/DefaultLayout";

interface MyAppProps {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <AnimatePresence>
      <div className="bg-primary-dark dark:bg-primary-dark transition duration-300">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </div>
    </AnimatePresence>
  );
}
