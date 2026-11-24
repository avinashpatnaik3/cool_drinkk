import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Heart, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/services', label: 'Services' },
        { to: '/gallery', label: 'Gallery' },
    ];

    const supportLinks = [
        { to: '/donate', label: 'Donate', icon: Heart, fill: true },
        { to: '/contact', label: 'Contact', icon: Mail, fill: false },
    ];

    const socialLinks = [
        {
            icon: Facebook,
            href: 'https://www.facebook.com/share/1EoJ59cEqg/',
            label: 'Facebook',
        },
        {
            icon: Instagram,
            href: 'https://www.instagram.com/patnaikbsk?igsh=MWsyN3g4cHl2cWF2YQ==',
            label: 'Instagram',
        },
        {
            icon: Youtube,
            href: 'https://youtube.com/@bskpatnaik4914?si=1QIyl1XBp0lgHLg2',
            label: 'YouTube',
        },
        {
            icon: MessageCircle,
            href: 'https://wa.me/919290834533',
            label: 'WhatsApp',
        },
    ];

    return (
        <footer id="website-footer" className="relative w-full overflow-hidden bg-transparent text-[#17251A]">
            {/* Top Wave Decorative Transition - Multi-layered Organic Wave */}
            <div className="w-full overflow-hidden leading-none pointer-events-none select-none -mb-[1px]">
                <svg
                    viewBox="0 0 1440 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-16 sm:h-24 lg:h-32 block"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    {/* Layer 1: Soft muted green background curve */}
                    <path
                        d="M 0,55 C 320,110 540,20 860,70 C 1140,115 1320,35 1440,65 L 1440,140 L 0,140 Z"
                        fill="#EDF4E4"
                        opacity="0.8"
                    />
                    {/* Layer 2: Vibrant primary lime-green ribbon accent */}
                    <path
                        d="M 0,66 C 260,126 480,32 780,82 C 1060,126 1260,48 1440,78 L 1440,84 C 1260,54 1060,132 780,88 C 480,38 260,132 0,72 Z"
                        fill="#A8CC27"
                        opacity="0.85"
                    />
                    {/* Layer 3: Soft muted green contour accent with subtle opacity */}
                    <path
                        d="M 0,62 C 260,122 480,28 780,78 C 1060,122 1260,44 1440,74 L 1440,76 C 1260,46 1060,124 780,80 C 480,30 260,124 0,64 Z"
                        fill="#4D922F"
                        opacity="0.2"
                    />
                    {/* Layer 4: Main soft ivory-green footer canvas */}
                    <path
                        d="M 0,68 C 260,128 480,34 780,84 C 1060,128 1260,50 1440,80 L 1440,140 L 0,140 Z"
                        fill="#F7FAF1"
                    />
                </svg>
            </div>

            {/* Main Footer Container with soft natural ivory/off-white background */}
            <div className="relative bg-[#F7FAF1] pt-6 pb-12 sm:pb-16 lg:pb-18">
                {/* Decorative Subtle Ambient Glows */}
                <div
                    className="absolute top-0 right-10 w-96 h-96 bg-[#A8CC27]/10 rounded-full blur-3xl pointer-events-none -z-0"
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-10 left-10 w-80 h-80 bg-[#4D922F]/8 rounded-full blur-3xl pointer-events-none -z-0"
                    aria-hidden="true"
                />

                {/* Decorative Lotus Flower Watermark (Top Right - as in reference image) */}
                <div
                    className="absolute -top-12 sm:-top-16 lg:-top-20 right-6 sm:right-16 lg:right-28 pointer-events-none opacity-30 select-none -z-0"
                    aria-hidden="true"
                >
                    <svg
                        width="180"
                        height="140"
                        viewBox="0 0 180 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-28 sm:w-36 lg:w-44 h-auto"
                    >
                        {/* Central upright petal */}
                        <path
                            d="M 90,12 C 82,42 78,82 90,105 C 102,82 98,42 90,12 Z"
                            fill="#A8CC27"
                            fillOpacity="0.5"
                            stroke="#4D922F"
                            strokeWidth="1.6"
                        />
                        {/* Inner side petals */}
                        <path
                            d="M 90,105 C 75,82 58,52 68,28 C 80,48 85,76 90,105 Z"
                            fill="#A8CC27"
                            fillOpacity="0.4"
                            stroke="#4D922F"
                            strokeWidth="1.4"
                        />
                        <path
                            d="M 90,105 C 105,82 122,52 112,28 C 100,48 95,76 90,105 Z"
                            fill="#A8CC27"
                            fillOpacity="0.4"
                            stroke="#4D922F"
                            strokeWidth="1.4"
                        />
                        {/* Middle flared petals */}
                        <path
                            d="M 90,105 C 66,90 38,68 50,48 C 65,64 78,84 90,105 Z"
                            fill="#A8CC27"
                            fillOpacity="0.32"
                            stroke="#4D922F"
                            strokeWidth="1.3"
                        />
                        <path
                            d="M 90,105 C 114,90 142,68 130,48 C 115,64 102,84 90,105 Z"
                            fill="#A8CC27"
                            fillOpacity="0.32"
                            stroke="#4D922F"
                            strokeWidth="1.3"
                        />
                        {/* Outer lower petals */}
                        <path
                            d="M 90,105 C 55,98 18,84 30,70 C 48,80 70,94 90,105 Z"
                            fill="#A8CC27"
                            fillOpacity="0.25"
                            stroke="#4D922F"
                            strokeWidth="1.2"
                        />
                        <path
                            d="M 90,105 C 125,98 162,84 150,70 C 132,80 110,94 90,105 Z"
                            fill="#A8CC27"
                            fillOpacity="0.25"
                            stroke="#4D922F"
                            strokeWidth="1.2"
                        />
                        {/* Base ellipse */}
                        <ellipse
                            cx="90"
                            cy="110"
                            rx="38"
                            ry="4.5"
                            fill="#4D922F"
                            fillOpacity="0.35"
                        />
                    </svg>
                </div>

                {/* Main Content Area */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-12 lg:gap-16 pt-2">
                        {/* Column 1: Trust Branding (md:col-span-5 lg:col-span-5) */}
                        <div className="md:col-span-5 lg:col-span-5">
                            {/* Logo & Trust Name */}
                            <div className="flex items-center gap-3.5">
                                {/* Green Heart Emblem matching reference image */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#A8CC27] shadow-sm shadow-[#A8CC27]/40 flex items-center justify-center text-[#123B20]">
                                    <svg
                                        viewBox="0 0 32 32"
                                        className="w-7 h-7"
                                        fill="none"
                                        stroke="#123B20"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M16 26.5 C16 26.5 6 19.5 6 13 C6 9 9 6 13 6 C14.6 6 15.6 6.8 16 7.5 C16.4 6.8 17.4 6 19 6 C23 6 26 9 26 13 C26 19.5 16 26.5 16 26.5 Z" />
                                        <path d="M11 14.5 C12.2 17.5 14.2 19.5 16 20.5 C17.8 19.5 19.8 17.5 21 14.5" strokeWidth="1.8" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="font-display text-xl sm:text-[22px] font-bold text-[#17251A] leading-none tracking-tight">
                                        balivada ramarao
                                    </h2>
                                    <p className="font-display text-xl sm:text-[22px] font-extrabold text-[#17251A] tracking-wider leading-tight mt-0.5">
                                        PATNAIK
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#667064] uppercase mt-1">
                                        CHARITABLE TRUST
                                    </p>
                                </div>
                            </div>

                            {/* Mission Statement */}
                            <p className="mt-5 max-w-sm text-[14.5px] sm:text-[15px] leading-relaxed text-[#17251A]/80">
                                A volunteer-led trust serving villages across Andhra Pradesh with education, healthcare, food relief and livelihood training since 1992.
                            </p>

                            {/* Social Media Rounded Buttons in Dark Forest Green */}
                            <div className="mt-6 flex items-center gap-3">
                                {socialLinks.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit our ${item.label}`}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123B20] text-white shadow-sm transition-all duration-300 hover:bg-[#4D922F] hover:-translate-y-1 hover:shadow-md hover:shadow-[#123B20]/25 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D922F]"
                                    >
                                        <item.icon className="h-4 w-4" strokeWidth={2} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Quick Links (md:col-span-4 lg:col-span-4) */}
                        <div className="md:col-span-4 lg:col-span-4 md:pl-4">
                            <div className="inline-block">
                                <h3 className="font-display text-lg sm:text-[20px] font-bold text-[#17251A] tracking-tight">
                                    Quick Links
                                </h3>
                                <div className="mt-1 h-[2.5px] w-7 rounded-full bg-[#A8CC27]" />
                            </div>

                            <ul className="mt-5 space-y-3 max-w-[14rem]">
                                {quickLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="group flex items-center justify-between py-1 text-[15px] font-medium text-[#17251A] transition-all duration-200 hover:text-[#4D922F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D922F]/40 rounded-lg"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="h-2 w-2 rounded-full border-[1.8px] border-[#4D922F] transition-all duration-200 group-hover:bg-[#4D922F] group-hover:scale-110 flex-shrink-0" />
                                                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                                                    {link.label}
                                                </span>
                                            </div>
                                            <ChevronRight className="h-4 w-4 text-[#667064]/60 transition-all duration-200 group-hover:text-[#4D922F] group-hover:translate-x-1" strokeWidth={1.8} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Support (md:col-span-3 lg:col-span-3) */}
                        <div className="md:col-span-3 lg:col-span-3">
                            <div className="inline-block">
                                <h3 className="font-display text-lg sm:text-[20px] font-bold text-[#17251A] tracking-tight">
                                    Support
                                </h3>
                                <div className="mt-1 h-[2.5px] w-7 rounded-full bg-[#A8CC27]" />
                            </div>

                            <ul className="mt-5 space-y-3 max-w-[12rem]">
                                {supportLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="group flex items-center gap-3 py-1 text-[15px] font-medium text-[#17251A] transition-all duration-200 hover:text-[#4D922F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D922F]/40 rounded-lg"
                                        >
                                            <link.icon
                                                className={`h-4 w-4 text-[#123B20] transition-colors duration-200 group-hover:text-[#4D922F] flex-shrink-0 ${
                                                    link.fill ? 'fill-[#123B20] group-hover:fill-[#4D922F]' : ''
                                                }`}
                                                strokeWidth={2}
                                            />
                                            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Section 4: Bottom Copyright Bar (Dark Forest Green Rounded Bar) */}
                    <div className="relative mt-14 sm:mt-16 lg:mt-20">
                        <div className="relative z-10 w-full rounded-2xl sm:rounded-full bg-[#123B20] px-6 sm:px-10 py-4.5 sm:py-5 shadow-lg shadow-[#123B20]/15 border border-[#A8CC27]/15">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[13px] sm:text-[14px]">
                                <p className="text-white/95 tracking-normal">
                                    © 2026 Balivada Ramarao PATNAIK Charitable Trust. All rights reserved.
                                </p>
                                <p className="text-white/80 font-normal tracking-normal">
                                    Registered Charitable Trust · Andhra Pradesh, India
                                </p>
                            </div>
                        </div>

                        {/* Botanical Leaf Sprig (Overlapping bottom right of copyright bar - as in reference image) */}
                        <div
                            className="absolute -bottom-4 -right-2 sm:-right-4 pointer-events-none select-none z-20"
                            aria-hidden="true"
                        >
                            <svg
                                width="75"
                                height="65"
                                viewBox="0 0 75 65"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 sm:w-16 h-auto drop-shadow-sm"
                            >
                                <path
                                    d="M 10,55 C 25,42 45,26 68,10"
                                    stroke="#123B20"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                {/* Leaf pair 1 */}
                                <path
                                    d="M 32,38 C 30,28 38,24 44,26 C 44,33 39,38 32,38 Z"
                                    fill="#4D922F"
                                />
                                <path
                                    d="M 28,42 C 19,40 17,33 21,28 C 26,29 29,35 28,42 Z"
                                    fill="#A8CC27"
                                />
                                {/* Leaf pair 2 */}
                                <path
                                    d="M 50,23 C 48,13 56,9 62,11 C 62,18 57,23 50,23 Z"
                                    fill="#4D922F"
                                />
                                <path
                                    d="M 46,27 C 37,25 35,18 39,13 C 44,14 47,20 46,27 Z"
                                    fill="#A8CC27"
                                />
                                {/* Tip leaf */}
                                <path
                                    d="M 68,10 C 62,6 61,0 65,-3 C 71,-3 74,3 68,10 Z"
                                    fill="#4D922F"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick WhatsApp Floating Contact Button */}
            <a
                href="https://wa.me/919290834533"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="fixed bottom-6 right-6 z-40 grid h-13 w-13 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-[#20ba5a] hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
            >
                <MessageCircle className="h-6 w-6" strokeWidth={2} />
            </a>
        </footer>
    );
};

export default Footer;
