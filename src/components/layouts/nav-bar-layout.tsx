import { Outlet } from "react-router"
import { NavBar } from "../core/nav-bar/nav-bar"
import { FullContainer } from "../core/full-container"

export const NavBarLayout: React.FC = () => {
    return <FullContainer className="flex flex-row">
        <NavBar />
        <Outlet />
    </FullContainer>
}