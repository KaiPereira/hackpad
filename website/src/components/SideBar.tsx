const SideBar = () => {
    return (
        <aside className="bg-slate-100 space-y-2 max-w-xl p-4 h-screen border-r-2 border-slate-500/80">
            <nav>
                <ul>
                    {/* <li>
            <a href="/note" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Troubleshooting
            </a>
          </li> */}
                    <li>
                        <a
                            href="/guide"
                            className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800"
                        >
                            DIY Guide
                        </a>
                    </li>
                    <li>
                        <a
                            href="/add-components"
                            className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800"
                        >
                            Adding more parts!
                        </a>
                    </li>
                    <li>
                        <a
                            href="/resources"
                            className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800"
                        >
                            Resources & Tips
                        </a>
                    </li>
                    <li>
                        <a
                            href="/parts"
                            className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800"
                        >
                            Approved Parts / Kit Contents
                        </a>
                    </li>
                    <li>
                        <a
                            href="/submitting"
                            className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800"
                        >
                            Submit your project!
                        </a>
                    </li>
                    <li>
                        <a
                            href="/faq"
                            className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800"
                        >
                            FAQ
                        </a>
                    </li>
                    {/* <li>
            <a href="/keyboard" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-red-400 hover:text-red-500">
              Make a keyboard
            </a>
          </li> */}
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
