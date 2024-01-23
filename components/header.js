import Image from 'next/image';
import Link from 'next/link';
import Styles from '../assets/styles/header.module.scss';

const pages = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' },
];

export default function Header() {
    return (
        <header>
            <div className="light">
                <nav className="relative h-12">
                    <a href="#" className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">Logo</a>
                    <ul id="nav-mobile" className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        {pages.map((page, i) => (
                            <li className="nav-item inline-block mx-6" key={i}><Link href={page.href}>{page.name}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}