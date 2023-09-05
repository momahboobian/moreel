// import AppHeader from "@/shared/AppHeader";
// import AppFooter from "@/shared/AppFooter";
// import PagesMetaHead from "@/PagesMetaHead";

interface DefaultLayoutProps {
  children: ReactNode; // Define the children prop with ReactNode type
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      {/* <PagesMetaHead />
      <AppHeader /> */}
      <div>{children}</div>
      {/* <AppFooter /> */}
    </>
  );
}
