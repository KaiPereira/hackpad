const Footer = () => {
    return (
        <footer>
            <div className="bg-slate-900 py-12 text-slate-500 text-center font-mono">
                <p>
                    made with ❤️ by{" "}
                    <a
                        href="https://dari.zone"
                        target="_blank"
                        className="text-cyan-600"
                    >
                        alex ren
                    </a>
                </p>
                <p>
                    drop me a follow on{" "}
                    <a
                        href="https://github.com/qcoral"
                        target="_blank"
                        className="text-cyan-600"
                    >
                        github!
                    </a>{" "}
                    if you found this useful :D
                </p>
            </div>
        </footer>
    );
};

export default Footer;
