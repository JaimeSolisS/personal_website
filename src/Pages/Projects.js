import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import projects from "../data/projects";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import Footer from "../Components/Footer";

const sortedByName = projects.sort((a, b) =>
  a.category.localeCompare(b.category)
);
const allButtons = [
  "All",
  ...new Set(sortedByName.map((item) => item.category)),
];

function Projects() {
  const sorted = projects.sort((a, b) => b.id - a.id);
  const [menuItem, setMenuItems] = useState(sorted);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(sorted);
      return;
    }

    const filteredData = sorted.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <>
      <MainLayout>
        <Title title={"Projects"} />
        <InnerLayout>
          <Button filter={filter} button={button} />
          <Menu menuItem={menuItem} />
        </InnerLayout>
      </MainLayout>
      <Footer />
    </>
  );
}

export default Projects;
