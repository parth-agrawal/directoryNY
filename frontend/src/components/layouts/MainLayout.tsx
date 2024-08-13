import { Outlet } from "react-router-dom"
import NavBar from "../compound/NavBar/NavBar"

const MainLayout: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;