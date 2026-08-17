"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href,children,onClick}) => {
    const pathName = usePathname()
    const isActive = pathName === href;
    return (
        <Link href={href} onClick={onClick} className={`font-semibold ${isActive ? "text-base-content":"text-secondary-text"}`}>
            {children}
        </Link>
    );
};

export default NavLink;