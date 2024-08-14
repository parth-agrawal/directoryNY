import { Outlet } from "react-router-dom"
import NavBar from "../compound/NavBar/NavBar"

const MainLayout: React.FC = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <main className="pt-44 xs:pt-52 sm:pt-32 md:pt-32 lg:pt-32 xl:pt-32 bg-primary">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;