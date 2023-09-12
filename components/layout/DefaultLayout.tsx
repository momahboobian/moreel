import { ReactNode } from "react";
// import AppHeader from "@/shared/AppHeader";
// import AppFooter from "@/shared/AppFooter";
// import PagesMetaHead from "@/PagesMetaHead";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      {/* <PagesMetaHead />
      <AppHeader /> */}
      <div className="">{children}</div>
      {/* <AppFooter /> */}
    </>
  );
}
