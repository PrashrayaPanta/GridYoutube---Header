import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <section className="bg-red-500 px-2 ">
      <div>About</div>
    </section>
  );
};

export default About;
