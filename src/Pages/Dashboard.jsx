import { useEffect } from "react";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <>
      {/* <Header /> */}
      <h1>Dashboard</h1>
    </>
  );
};
