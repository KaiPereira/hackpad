import { Link } from "react-router-dom";

const SideBarKeyboard = () => {
  return (
    <aside className= "bg-slate-100 space-y-2 max-w-prose p-4 h-screen border-r-4 border-slate-500 border-dashed">
      <nav>
        <ul>
          <li>
            <Link to="/keyboard" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Keyboard Overview
            </Link>
          </li>
          <li>
            <Link to="/keyboard/faq" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              FAQ v2
            </Link>
          </li>
          <li>
            <Link to="/guide" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-red-400 hover:text-red-500">
              Back to macropads
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBarKeyboard;