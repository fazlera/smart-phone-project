import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-5 shadow-xl">
        <Logo></Logo>
        <ul className="flex  gap-5 px-5">

          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-slate-900 text-yellow-50 rounded-lg p-2" : ""}>
              Home
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/favorite"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-slate-900 text-yellow-50 rounded-lg p-2" : ""}>
              Favorite
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active bg-slate-900 text-yellow-50 rounded-lg p-2" : ""}>
              Login
            </NavLink>
            
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
