import { LucideProps } from "lucide-react";
import React from "react";
import "./nav-bar-item.css";

interface Props {
    Logo: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">> & React.RefAttributes<SVGSVGElement>,
    text: string,
    link: string
}

export const NavBarItem: React.FC<Props> = ({Logo, text, link}) => {
    return <li className="p-3 nav-bar-item">
        <a className="text-white flex" href={link}>
            <Logo className="mr-2" />
            {text}
        </a>
    </li>
}