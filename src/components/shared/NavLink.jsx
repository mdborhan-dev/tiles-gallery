"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href,children}) => {
    const pathName = usePathname()
    const isActive = pathName === href;
    return (
        <Link href={href} className={`font-semibold ${isActive ? "text-base-content":"text-secondary-text"}`}>
            {children}
        </Link>
    );
};

export default NavLink;