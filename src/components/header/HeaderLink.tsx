"use client"
import React from 'react';
import { usePathname } from 'next/navigation';

export interface HeaderLinkProps {
    link: string;
    name: string;
}

const HeaderLink = ({ link, name }: HeaderLinkProps) => {

    const pathname = usePathname();
    const isActive = pathname.startsWith(link);

    return (
        <li>
            <a className={`relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 ${isActive && "text-teal-500 dark:text-teal-400"}`}
                href={link}>{name}
                {
                    isActive &&
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0">
                    </span>
                }
            </a>
        </li>
    );
};

export default HeaderLink;