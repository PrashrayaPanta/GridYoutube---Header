import { NavLink } from "react-router-dom";
function NavigationItem() {
  return (
    <>
      {/* <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="" variant="outline">
              Home
            </a>
          </TooltipTrigger>
          
          <TooltipTrigger asChild>
            <a href="" variant="outline">
              About
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-200" : "text-black"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-200" : "text-black"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-200" : "text-black"
        }
      >
        Contact
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "text-blue-200" : "text-black"
        }
      >
        Login
      </NavLink>
    </>
  );
}

export default NavigationItem;
