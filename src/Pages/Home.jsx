import { useEffect } from "react";
import { Header } from "../components/Header";
// import { AccordionComponent } from "../components/AccordionComponent";
import { MyGridsComponent } from "../components/MyGridsComponent";

import TopHeader from "../components/TopHeader";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <Header />
      {/* <AccordionComponent />; */}
      {/* <TopHeader /> */}
      <MyGridsComponent />
    </>
  );
}
