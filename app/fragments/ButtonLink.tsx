import React from 'react'
import { Link } from 'react-scroll'

type ButtonLinkProps = {
    className: string;
    children: string;
    to: string;
    smooth?: boolean;
    offset?: number
};

export default function ButtonLink({ className, children, to, smooth, offset }: ButtonLinkProps) {
    return (
        <Link
            className={className} to={to} smooth={smooth} offset={offset}
        >
            {children}
        </Link>
    )
}
