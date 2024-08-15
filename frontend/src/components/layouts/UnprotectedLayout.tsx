import { Outlet, useNavigate } from "react-router-dom"
import UnprotectedNavbar from "../compound/NavBar/UnprotectedNavbar";
import { UserService } from "../../lib/services/users/service";
import { useEffect } from "react";

const UnprotectedLayout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const user = await UserService().getCurrentUser();
            if (user) {
                navigate('/');
            }
        })();
    }, []);

    return (
        <div>
            <main className=" bg-primary">
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default UnprotectedLayout;