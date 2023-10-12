import NavbarNormal from "./navbar-normal";
import NavbarMobile from "./navbar-mobile";

const Navbar = () => {
  return (
    <nav className="sticky h-full inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <NavbarNormal />
    </nav>
  );
};

export default Navbar;
