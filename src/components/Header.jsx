import { SheetSide } from "./Sheet";
import NavigationItem from "./OwnNavigationItem";
export const Header = () => {
  return (
    <header className="flex justify-between py-2 fixed  top-0 left-0 right-0  px-2 bg-pink-500">
      <div class="md:hidden block">
        <SheetSide />
      </div>
      <div class="hidden  md:flex md:gap-5">
        <NavigationItem />
      </div>
      {/* <div>jlsdnlj</div> */}
    </header>
  );
};
