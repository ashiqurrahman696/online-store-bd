import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-10">
            <aside className="space-y-3">
                <h2 className="font-semibold text-3xl">Online Store BD</h2>
                <p>Providing reliable products</p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link href="https://facebook.com">
                        <FaFacebookF size={24} />
                    </Link>
                    <Link href="https://x.com">
                        <RiTwitterXFill size={24} />
                    </Link>
                    <Link href="https://youtube.com">
                        <FaYoutube size={24} />
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;