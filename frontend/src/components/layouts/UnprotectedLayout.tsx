import { Outlet } from "react-router-dom"
import UnprotectedNavbar from "../compound/NavBar/UnprotectedNavbar";

const UnprotectedLayout: React.FC = () => {
    return (
        <div>
            <main className=" bg-primary">
                <UnprotectedNavbar />
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default UnprotectedLayout;