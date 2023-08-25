import {NavLink} from "react-router-dom";
import {BiHome} from "react-icons/bi";
import style from "./index.module.css";

const AsideLeft = () => {
    return (
        <aside className={
            "asideEmpty w-3/12 flex-shrink-0 p-2 h-full sticky "+
            style.asideLeft
        }>
            <div className="asidePadded w-100 h-full p-2 text-white bg-zinc-100">
                <NavLink to="" className="bg-prussian-blue rounded-md flex gap-2 items-center p-3">
                    <BiHome className="w-6 h-6"/>
                    <span className="text-lg">Home</span>
                </NavLink>
            </div>
        </aside>
    )
}

export default AsideLeft;