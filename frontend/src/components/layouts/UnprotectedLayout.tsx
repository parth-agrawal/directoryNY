import { Outlet } from "react-router-dom"

const UnprotectedLayout: React.FC = () => {
    return (
        <div>
            <main className="pt-44 xs:pt-52 sm:pt-32 md:pt-32 lg:pt-32 xl:pt-32 bg-primary">
                <div className="bg-red-500">
                    red
                </div>
                <div>
                    not red
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default UnprotectedLayout;