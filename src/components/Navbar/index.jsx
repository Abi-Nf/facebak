import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <header className="flex p-2.5 py-2 fixed top-0 w-full bg-white border-b z-50">
                <div className="flex justify-between items-center w-full">
                    <Link to="/#" className="font-bold text-2xl text-picton-blue">Facebak</Link>

                    <div className="flex gap-1.5">
                        <Link className="link-to-profile rounded-full bg-zinc-400 w-10 h-10 flex
                    items-center justify-center"
                              to="/profile/[username-here]"></Link>
                    </div>
                </div>
            </header>
        </>
    );
}