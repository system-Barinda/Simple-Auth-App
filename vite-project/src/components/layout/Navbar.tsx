import { Link } from "react-router-dom";

const menu = ["home", "to do list", "fun-facts", "register"];

function Navbar() {
  return (
    <div className="bg-gray-300 h-20 w-full flex justify-center items-center gap-10">
      {menu.map((item) => {
        const path = item === "home" ? "/" : `/${item}`;

        return (
          <Link to={path} key={item}>
            <div className="bg-slate-200 h-10 px-6 rounded shadow text-stone-900 text-center flex items-center cursor-pointer hover:bg-slate-300">
              {item}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
