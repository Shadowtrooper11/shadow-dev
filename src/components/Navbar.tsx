'use client'

import { use, useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from '../i18n/navigation';
import Link from 'next/link';
import { ClipboardPen, House, BookOpenText, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { AnimatePresence, motion } from 'framer-motion';

interface NavLink {
    path: string;
    label: string;
    icon: React.ElementType;
}

export default function Navbar() {
    const t = useTranslations('Navbar');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks: NavLink[] = [
        { label: t('home'), path: '/', icon: House },
        { label: t('about'), path: '/about', icon: BookOpenText },
        { label: t('contact'), path: '/contact', icon: ClipboardPen },
    ];

    return (
        <header className="relative flex justify-between items-center bg-zinc-800/20 sticky top-0 z-50 backdrop-blur-sm border-b-2 border-zinc-700/40 shadow-md h-20">
            <Link
                href="/" 
                className="flex items-center gap-2 p-5 hover:text-white transition duration-300">
                <img src="/shadowhexlogo.svg" alt="Shadow Logo" className="size-12 md:size-16" />
                <span className="font-bold text-xl md:text-2xl">ShadowHex</span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
                <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 flex gap-6 bg-zinc-900/95 p-6.5", 
                                    "border-x-2 border-zinc-700/90 border-b-2 ring ring-zinc-700 rounded-b-lg")}>
                    {navLinks.map((link) => {
                        const isActive = link.path === '/' 
                        ? pathname === '/' 
                        : pathname.startsWith(link.path);
                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={cn("flex items-center hover:text-blue-400 transition duration-300 gap-1", 
                                    isActive ? "text-blue-400" : "text-gray-300"    
                                )}
                            >
                                <link.icon />
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
            <div className="hidden md:flex p-5">
                <LanguageSwitcher />
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center p-4">
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </div>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.4 }}
                        className="absolute top-full left-0 w-full flex flex-col ">
                        {navLinks.map((link) => {
                            const isActive = link.path === '/' 
                            ? pathname === '/' 
                            : pathname.startsWith(link.path);
                            return (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn("flex items-center hover:text-blue-400 transition duration-300 gap-1 bg-zinc-900 p-6 border-b-2 border-zinc-700/90", 
                                            isActive ? "text-blue-400" : "text-gray-300"    
                                        )}
                                    >
                                        <link.icon />
                                        {link.label}
                                    </Link>
                                
                            );
                        })}
                        <div className="bg-zinc-900 p-4 border-b border-zinc-700/90">
                            <LanguageSwitcher />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}