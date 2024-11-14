import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { CardComponent } from "./components/CardComponent";

import Home from "./Pages/Home";
import { Dashboard } from "./Pages/Dashboard";
import Layout from "./components/Layout";
import About from "./Pages/About";
// import Login from "./Pages/Login";

import { PrivateRoute } from "./Route/privateRoute";
import { Login } from "./Pages/Login";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
            <Route
              path="dashboard"
              element={<PrivateRoute element={<Dashboard />} />}
            />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* <section>
        <div class="relative">
          <img
            src={OldisGold1}
            alt="oldisgold"
            class="w-full object-cover min-h-[400px]"
          />
          <div class="absolute top-[75px] left-[22px] right-[22px]">
            <div class="flex flex-col items-center justify-center min-h-[200px] gap-[5px]">
              <h1 class="text-[20px] font-bold">Hello</h1>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                natus saepe esse corporis necessitatibus unde perspiciatis?
                Nulla ipsum totam nesciunt. Maxime soluta expedita ab numquam
                quasi hic veritatis reprehenderit accusamus porro dolores,
                facilis iure, odit quam totam ratione mollitia dicta!
                Praesentium voluptatibus nulla sunt tempore. Voluptatum sed
                quidem veritatis! Tempora!
              </div>
              <div>
                <button class="bg-red-600 text-white border-none h-[36px] w-[100px] transition-opacity duration-150 hover:opacity-80">
                  All
                </button>
                <button class="bg-red-600 text-white border-none h-[36px] w-[100px] transition-opacity duration-150 hover:opacity-80">
                  all1
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <CardComponent />
      <AccordionComponent /> */}
      {/* <TableDemo /> */}
    </>
  );
}

export default App;
