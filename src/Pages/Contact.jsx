import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contacxt";
  }, []);
  return <div class="px-2">Contact</div>;
};

export default Contact;
