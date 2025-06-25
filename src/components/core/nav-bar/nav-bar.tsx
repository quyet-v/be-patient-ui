import { TextLogo } from "../text-logo"
import { House } from "lucide-react"
import { NavBarItem } from "./nav-bar-item/nav-bar-item"

export const NavBar: React.FC = () => {
    return <div style={{backgroundColor: "#000000"}} className="p-4 w-60">
        <TextLogo />
        <ul>
            <NavBarItem Logo={House} text="Dashboard" link="/app" />
            <NavBarItem Logo={House} text="Patients" link="/app/patients" />
            <NavBarItem Logo={House} text="Operations" link="/app/operations" />
        </ul>
    </div>
}