import React, { useState } from "react";
import Header from "../components/header/header";
import AsideMenu from "../components/asideMenu/asideMenu";

const home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main id="home">
      <Header isOpen={isOpen} onButtonClick={() => setIsOpen(!isOpen)}></Header>
      <AsideMenu isOpen={isOpen}></AsideMenu>
    </main>
  );
};

export default home;
