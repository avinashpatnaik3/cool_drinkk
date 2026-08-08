import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, HeartHandshake } from 'lucide-react';
import PillButton from '@/components/site/PillButton';
import { cn } from '@/lib/utils';

const links = [
    { id: 'about', label: 'About' },
    { id: 'activities', label: 'Activities' },
    { id: 'awards', label: 'Awards' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'donors', label: 'Donors' },
    { id: 'contact', label: 'Contact' },
];

const moreLinks = [
    { id: 'impact', label: 'Our Impact' },
    { id: 'voices', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const ids = ['home', ...links.map((l) => l.id), ...moreLinks.map((l) => l.id)];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' },
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const go = (id) => {
        setOpen(false);
        setMoreOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out',
                scrolled ? 'py-2' : 'py-4',
            )}
        >
            <nav
                className={cn(
                    'mx-auto flex max-w-[84rem] items-center justify-between gap-6 rounded-full px-5 transition-all duration-300 ease-out',
                    scrolled
                        ? 'glass border border-white/70 shadow-soft py-2.5 mx-4 lg:mx-auto'
                        : 'border border-transparent py-3 mx-4 lg:mx-auto',
                )}
            >
                <button
                    onClick={() => go('home')}
                    className="group flex items-center gap-3 rounded-full pr-3 text-left transition-transform duration-200 active:scale-[0.98]"
                >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F4CBA] text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
                        <HeartHandshake className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="leading-tight">
                        <span className="block font-display text-[15px] text-[#111827]">Balivada Ramarao Patnaik</span>
                        <span className="block text-[11px] uppercase tracking-[0.22em] text-[#4B5563]">Charitable Trust</span>
                    </span>
                </button>

                <div className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => go(link.id)}
                            className="relative rounded-full px-4 py-2 text-sm text-[#4B5563] transition-colors duration-200 hover:text-[#0F4CBA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/40"
                        >
                            {active === link.id && (
                                <motion.span
                                    layoutId="nav-active"
                                    className="absolute inset-0 rounded-full bg-[#EEF5FF]"
                                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                                />
                            )}
                            <span className="relative">{link.label}</span>
                        </button>
                    ))}

                    <div
                        className="relative"
                        onMouseEnter={() => setMoreOpen(true)}
                        onMouseLeave={() => setMoreOpen(false)}
                    >
                        <button
                            onClick={() => setMoreOpen((v) => !v)}
                            className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-[#4B5563] transition-colors duration-200 hover:text-[#0F4CBA]"
                        >
                            More
                            <ChevronDown
                                className={cn('h-4 w-4 transition-transform duration-200', moreOpen && 'rotate-180')}
                            />
                        </button>
                        <AnimatePresence>
                            {moreOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.18, ease: 'easeOut' }}
                                    className="absolute right-0 top-full mt-3 w-52 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-lift"
                                >
                                    {moreLinks.map((link) => (
                                        <button
                                            key={link.id}
                                            onClick={() => go(link.id)}
                                            className="block w-full rounded-xl px-3 py-2.5 text-left text-sm text-[#4B5563] transition-colors duration-150 hover:bg-[#EEF5FF] hover:text-[#0F4CBA]"
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <PillButton onClick={() => go('donate')} className="hidden px-6 sm:inline-flex">
                        Donate
                    </PillButton>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white/80 text-[#0F4CBA] transition-transform duration-200 active:scale-95 lg:hidden"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="mx-4 mt-2 rounded-3xl border border-white/70 glass p-3 shadow-lift lg:hidden"
                    >
                        {[...links, ...moreLinks].map((link) => (
                            <button
                                key={link.id}
                                onClick={() => go(link.id)}
                                className="block w-full rounded-2xl px-4 py-3 text-left text-[15px] text-[#111827] transition-colors duration-150 hover:bg-[#EEF5FF] hover:text-[#0F4CBA]"
                            >
                                {link.label}
                            </button>
                        ))}
                        <PillButton onClick={() => go('donate')} className="mt-2 w-full">
                            Donate now
                        </PillButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
