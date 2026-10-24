import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar"

function Layout () {
    return(
        <div className="layout">
            <SideBar/>
            <main className="contenido">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout