import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
    GraduationCap, Stethoscope, UtensilsCrossed, Sprout, Scissors, Droplets,
    Award, Trophy, Medal, Star, Quote, Phone, Mail, MapPin, MessageCircle,
    X, ChevronLeft, ChevronRight, Plus, Minus, Facebook, Instagram, Youtube, Twitter, ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import PillButton from '@/components/site/PillButton';
import DonateDonors from '@/components/site/DonateDonors';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';

const IMG = {
    founder: 'https://images.hostinger.com/1d6e79ff-4815-484e-84fc-088e5465a852.png',
    school: 'https://images.hostinger.com/694a504c-806e-4a98-b2e9-a6b5aa1b79e7.png',
    medical: 'https://images.hostinger.com/a30e70f1-6b2b-4b29-b9bb-e5b3535f077d.png',
    meals: 'https://images.hostinger.com/a4aeb330-e0dd-428f-89b1-3df350ace527.png',
    trophies: 'https://images.hostinger.com/1934db4c-6537-4338-a109-65862a815a46.png',
    stage: 'https://images.hostinger.com/7d8f377e-b547-4c78-b999-93aa363d3f07.png',
    tailoring: 'https://images.hostinger.com/b7527eea-e64b-4d79-804e-58f2942e3a8c.png',
    trees: 'https://images.hostinger.com/c92e91df-7b9b-4848-b9bc-4053cbc8c61c.png',
    elders: 'https://images.hostinger.com/1dee6357-62b4-4aa0-9d4c-10e4bd61372e.png',
    blood: 'https://images.hostinger.com/bbfb8a9a-4dec-4736-beee-4f8749e75d7d.png',
};

const activities = [
    { icon: GraduationCap, title: 'Education support', text: 'Notebooks, uniforms, school bags and fee assistance for children in government schools across our mandals.' },
    { icon: Stethoscope, title: 'Free medical camps', text: 'Monthly general, eye and diabetes camps with visiting doctors, free diagnostics and medicines.' },
    { icon: UtensilsCrossed, title: 'Food & nutrition', text: 'Hot meals during festivals and calamities, plus monthly ration kits for widows and daily-wage families.' },
    { icon: Scissors, title: 'Skills & livelihood', text: 'Tailoring, embroidery and computer training so rural women can earn from home with dignity.' },
    { icon: Sprout, title: 'Green villages', text: 'Plantation drives, pond cleaning and roadside saplings maintained by student eco-clubs.' },
    { icon: Droplets, title: 'Blood & emergency aid', text: 'Voluntary blood donation camps and immediate help for accident and hospital emergencies.' },
];

const awards = [
    { icon: Star, title: 'Akkineni Nageswara Rao Excellence Award', note: 'For outstanding contribution to society and culture' },
    { icon: Award, title: 'Abdul Kalam Excellence Award', note: 'Presented at Hyderabad for humanitarian service' },
    { icon: Medal, title: "India's 75th Independence Anniversary (Vajrotsavam) Award", note: 'Honoured during the national Vajrotsavam celebrations' },
    { icon: Trophy, title: 'Potti Sriramulu Excellence Award', note: 'For selfless leadership in public service' },
    { icon: Award, title: 'Best Service Award', note: 'Recognising sustained community welfare work' },
    { icon: Star, title: 'Ten Ugadi Awards', note: 'Ten consecutive Ugadi honours for social service' },
    { icon: Trophy, title: 'Lions Club Best President Award', note: 'For exemplary stewardship and member service' },
    { icon: Medal, title: 'Recognition at numerous public and social service events', note: 'Felicitated across Andhra Pradesh and Telangana' },
];

const gallery = [
    { src: IMG.school, caption: 'School kit distribution, Ramachandrapuram' },
    { src: IMG.medical, caption: 'Free health camp for village elders' },
    { src: IMG.meals, caption: 'Annadanam during the monsoon floods' },
    { src: IMG.tailoring, caption: 'Tailoring batch for self-help group women' },
    { src: IMG.trees, caption: 'Roadside plantation with student eco-club' },
    { src: IMG.blood, caption: 'Voluntary blood donation camp' },
    { src: IMG.elders, caption: 'Monthly support for elderly couples' },
    { src: IMG.stage, caption: 'Felicitation at a civic service ceremony' },
    { src: IMG.trophies, caption: 'Awards received over three decades' },
];

const testimonials = [
    { quote: 'My daughter would have stopped studying after class seven. The trust paid her fees and gave books every single year. Today she is in a nursing college.', name: 'Satyavathi K.', role: 'Parent, Kothapeta' },
    { quote: 'We ran a free eye camp with them. In one morning, 340 villagers were screened and 42 got cataract surgery arranged. The organisation was flawless.', name: 'Dr. P. Venkateswarlu', role: 'Ophthalmologist, Kakinada' },
    { quote: 'After the cyclone, their volunteers reached our street before anyone else — rice, water and blankets for eighty families.', name: 'Nageswara Rao B.', role: 'Village elder, Konaseema' },
    { quote: 'The tailoring training changed my life. I now stitch for the whole village and earn eight thousand rupees a month.', name: 'Jhansi Rani M.', role: 'Beneficiary, Amalapuram' },
];

const faqs = [
    { q: 'Where does my donation actually go?', a: 'Directly into programme costs — school kits, medicines, ration kits, training material and camp logistics. Administrative work is done voluntarily by trustees.' },
    { q: 'Will I receive a receipt?', a: 'Yes. Share your name and phone number while donating and we issue a signed receipt, along with 80G documentation on request, within seven days.' },
    { q: 'Can I volunteer instead of donating?', a: 'Absolutely. Doctors, teachers, students and professionals help at camps, tuition centres and distribution drives every month.' },
    { q: 'Which areas does the trust serve?', a: 'Villages and towns across Konaseema, East Godavari and neighbouring districts of Andhra Pradesh, with select programmes in Hyderabad.' },
];

const stats = [
    { value: 32, suffix: '+', label: 'Years of service' },
    { value: 48000, suffix: '+', label: 'Lives touched' },
    { value: 260, suffix: '+', label: 'Camps conducted' },
    { value: 9, suffix: '', label: 'Districts reached' },
];

const HomePage = () => {
    const [lightbox, setLightbox] = useState(null);
    const [slide, setSlide] = useState(0);
    const [openFaq, setOpenFaq] = useState(0);

    useEffect(() => {
        const id = window.setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 6000);

        return () => window.clearInterval(id);
    }, []);

    useEffect(() => {
        if (lightbox === null) return undefined;

        const onKey = (e) => {
            if (e.key === 'Escape') setLightbox(null);
            if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % gallery.length);
            if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + gallery.length) % gallery.length);
        };

        window.addEventListener('keydown', onKey);

        return () => window.removeEventListener('keydown', onKey);
    }, [lightbox]);

    return (
        <div className="min-h-screen bg-[#FAFCFF]">
            <Helmet>
                <title>Balivada Ramarao Patnaik Charitable Trust | Service, Education & Healthcare in Andhra Pradesh</title>
                <meta
                    name="description"
                    content="The Balivada Ramarao Patnaik Charitable Trust serves villages across Andhra Pradesh with free medical camps, education support, food relief, women's livelihood training and emergency aid. Donate securely by UPI."
                />
            </Helmet>
            <Seo
                title="Balivada Ramarao Patnaik Charitable Trust"
                description="Three decades of education, healthcare and livelihood service across Andhra Pradesh."
                image={IMG.founder}
                siteName="Balivada Ramarao Patnaik Charitable Trust"
            />

            <Navbar />

            {/* HERO */}
            <section id="home" className="relative min-h-[100dvh] overflow-hidden pb-24 pt-36 sm:pt-44">
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#EEF5FF] via-[#FAFCFF] to-[#FAFCFF]" />
                <div aria-hidden className="pointer-events-none absolute left-1/2 top-[-14rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#3B82F6]/16 blur-[110px]" />
                <div aria-hidden className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#0F4CBA]/10 blur-3xl" />

                <div className="relative mx-auto grid max-w-[80rem] items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#2563EB] backdrop-blur"
                        >
                            Serving Andhra Pradesh since 1992
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
                            className="mt-7 font-display text-[2.75rem] leading-[1.05] text-[#111827] sm:text-6xl lg:text-[4.15rem]"
                        >
                            Quiet service,<br />
                            <span className="text-[#0F4CBA]">generation after generation.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
                            className="mt-7 max-w-xl text-[18px] leading-[1.75] text-[#4B5563]"
                        >
                            The Balivada Ramarao Patnaik Charitable Trust carries forward one man's lifelong promise —
                            that no child in our villages goes without books, no elder without medicine, and no family
                            without a meal.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
                            className="mt-10 flex flex-wrap gap-3"
                        >
                            <PillButton onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}>
                                Donate now <ArrowRight className="h-4 w-4" />
                            </PillButton>
                            <PillButton variant="ghost" onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}>
                                See our work
                            </PillButton>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                            className="animate-floaty overflow-hidden rounded-[2.25rem] border border-white bg-white p-3 shadow-lift"
                        >
                            <img
                                src={IMG.founder}
                                alt="Balivada Ramarao Patnaik, founder of the charitable trust"
                                loading="eager"
                                className="h-[26rem] w-full rounded-[1.75rem] object-cover sm:h-[32rem]"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                            className="glass absolute -bottom-10 left-1/2 w-[88%] -translate-x-1/2 rounded-3xl border border-white/80 p-5 shadow-lift sm:-left-8 sm:translate-x-0 sm:w-auto"
                        >
                            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-7">
                                {stats.map((s) => (
                                    <div key={s.label}>
                                        <p className="font-display text-2xl text-[#0F4CBA]">
                                            <CountUp value={s.value} suffix={s.suffix} locale="en-IN" />
                                        </p>
                                        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#4B5563]">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about" className="bg-[#EEF5FF] py-24 sm:py-32">
                <div className="mx-auto max-w-[72rem] px-6">
                    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                        <Reveal>
                            <div>
                                <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">Our founder</p>
                                <h2 className="mt-4 font-display text-4xl leading-[1.1] text-[#111827] sm:text-[2.9rem]">
                                    A schoolteacher's promise became a district's lifeline.
                                </h2>
                            </div>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <div className="space-y-6 text-[17px] leading-[1.8] text-[#4B5563]">
                                <p>
                                    Sri Balivada Ramarao Patnaik began with a single act — buying notebooks for four
                                    children in his village who had none. Three decades later, that habit of noticing who
                                    is being left behind has grown into a trust that runs medical camps, feeds families in
                                    calamity, trains women in trades and plants thousands of trees each year.
                                </p>
                                <p>
                                    The trust is deliberately small in overhead and large in reach. Trustees serve without
                                    salary, volunteers come from the same villages we work in, and every rupee is
                                    accounted for publicly.
                                </p>
                                <blockquote className="rounded-3xl border-l-4 border-[#0F4CBA] bg-white p-6 font-display text-xl leading-relaxed text-[#111827] shadow-soft">
                                    “Service is not charity. It is simply returning what the village gave you first.”
                                </blockquote>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* IMPACT */}
            <section id="impact" className="py-24 sm:py-32">
                <div className="mx-auto max-w-[78rem] px-6">
                    <Reveal>
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <div className="overflow-hidden rounded-[2rem] shadow-soft">
                                <img src={IMG.medical} alt="Doctors checking village elders at a free medical camp" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">Our impact</p>
                                <h2 className="mt-4 font-display text-4xl leading-[1.1] text-[#111827]">
                                    Measured in mornings that got easier.
                                </h2>
                                <div className="mt-10 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
                                    {[
                                        ['12,400+', 'children given books, bags and uniforms'],
                                        ['31,000+', 'patients seen at free medical and eye camps'],
                                        ['1,900+', 'women trained in tailoring and computers'],
                                        ['26,000+', 'saplings planted and maintained'],
                                    ].map(([n, t]) => (
                                        <div key={n} className="flex items-baseline gap-5 py-5">
                                            <span className="font-display text-2xl text-[#0F4CBA]">{n}</span>
                                            <span className="text-[16px] text-[#4B5563]">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ACTIVITIES */}
            <section id="activities" className="bg-[#EEF5FF] py-24 sm:py-32">
                <div className="mx-auto max-w-[78rem] px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">What we do</p>
                            <h2 className="mt-4 font-display text-4xl leading-[1.08] text-[#111827] sm:text-5xl">Our activities</h2>
                            <p className="mt-5 text-[17px] leading-relaxed text-[#4B5563]">
                                Six steady programmes, run month after month, in the places where help rarely arrives on time.
                            </p>
                        </div>
                    </Reveal>
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {activities.map((a, i) => (
                            <Reveal key={a.title} delay={i * 0.06}>
                                <article className="group h-full cursor-default rounded-[1.75rem] border border-white bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                                    <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#0F4CBA] to-[#3B82F6] text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                                        <a.icon className="h-6 w-6" strokeWidth={1.6} />
                                    </span>
                                    <h3 className="mt-6 font-display text-xl text-[#111827]">{a.title}</h3>
                                    <p className="mt-3 text-[15px] leading-relaxed text-[#4B5563]">{a.text}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* AWARDS */}
            <section id="awards" className="py-24 sm:py-32">
                <div className="mx-auto max-w-[78rem] px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">Honours</p>
                            <h2 className="mt-4 font-display text-4xl leading-[1.08] text-[#111827] sm:text-5xl">Awards &amp; Recognition</h2>
                            <p className="mt-5 text-[17px] leading-relaxed text-[#4B5563]">
                                Celebrating a lifetime of service, leadership and humanitarian excellence.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {awards.map((a, i) => (
                            <Reveal key={a.title} delay={Math.min(i, 5) * 0.05}>
                                <article className="group h-full rounded-[1.5rem] border border-[#E5E7EB] bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3B82F6]/40 hover:shadow-lift">
                                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#EEF5FF] text-[#0F4CBA] transition-transform duration-300 group-hover:scale-110">
                                        <a.icon className="h-5 w-5" strokeWidth={1.7} />
                                    </span>
                                    <h3 className="mt-5 text-[16px] font-medium leading-snug text-[#111827]">{a.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{a.note}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {[{ src: IMG.trophies, caption: 'The awards collection, received across three decades of service' }, { src: IMG.stage, caption: 'Felicitation at a civic service ceremony in Hyderabad' }].map((item, i) => (
                            <Reveal key={item.caption} delay={i * 0.08}>
                                <figure className="group overflow-hidden rounded-[1.75rem] border border-[#E5E7EB] bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                                    <div className="overflow-hidden rounded-[1.35rem]">
                                        <img src={item.src} alt={item.caption} loading="lazy" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                                    </div>
                                    <figcaption className="px-3 py-4 text-sm text-[#4B5563]">{item.caption}</figcaption>
                                </figure>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section id="gallery" className="bg-[#EEF5FF] py-24 sm:py-32">
                <div className="mx-auto max-w-[80rem] px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">In the field</p>
                            <h2 className="mt-4 font-display text-4xl leading-[1.08] text-[#111827] sm:text-5xl">Gallery</h2>
                            <p className="mt-5 text-[17px] leading-relaxed text-[#4B5563]">
                                Moments from camps, classrooms, kitchens and plantation drives.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>figure]:mb-5">
                        {gallery.map((item, i) => (
                            <figure key={item.caption} className="break-inside-avoid">
                                <button
                                    onClick={() => setLightbox(i)}
                                    className="group block w-full overflow-hidden rounded-[1.5rem] border border-white bg-white text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30"
                                >
                                    <span className="block overflow-hidden">
                                        <img
                                            src={item.src}
                                            alt={item.caption}
                                            loading="lazy"
                                            className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                                        />
                                    </span>
                                    <figcaption className="px-5 py-4 text-sm text-[#4B5563]">{item.caption}</figcaption>
                                </button>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {lightbox !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0B1220]/85 p-4 backdrop-blur-md"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-[1.75rem] bg-white p-3"
                        >
                            <img src={gallery[lightbox].src} alt={gallery[lightbox].caption} className="max-h-[72vh] w-full rounded-[1.35rem] object-contain" />
                            <figcaption className="px-3 py-4 text-center text-sm text-[#4B5563]">{gallery[lightbox].caption}</figcaption>
                        </motion.figure>

                        {[
                            { Icon: ChevronLeft, cls: 'left-4', act: () => setLightbox((i) => (i - 1 + gallery.length) % gallery.length), label: 'Previous image' },
                            { Icon: ChevronRight, cls: 'right-4', act: () => setLightbox((i) => (i + 1) % gallery.length), label: 'Next image' },
                            { Icon: X, cls: 'right-4 top-4', act: () => setLightbox(null), label: 'Close' },
                        ].map(({ Icon, cls, act, label }) => (
                            <button
                                key={label}
                                aria-label={label}
                                onClick={(e) => { e.stopPropagation(); act(); }}
                                className={`absolute ${cls} ${label === 'Close' ? '' : 'top-1/2 -translate-y-1/2'} grid h-12 w-12 place-items-center rounded-full bg-white/90 text-[#0F4CBA] transition-all duration-200 hover:scale-105 active:scale-95`}
                            >
                                <Icon className="h-5 w-5" />
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* DONATE + DONORS */}
            <DonateDonors />

            {/* TESTIMONIALS */}
            <section id="voices" className="relative overflow-hidden bg-[#EEF5FF] py-24 sm:py-32">
                <div className="mx-auto max-w-[62rem] px-6 text-center">
                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">Voices</p>
                        <h2 className="mt-4 font-display text-4xl leading-[1.08] text-[#111827] sm:text-5xl">
                            What the villages say
                        </h2>
                    </Reveal>

                    <div className="relative mt-14 min-h-[19rem] sm:min-h-[15rem]">
                        <AnimatePresence mode="wait">
                            <motion.blockquote
                                key={slide}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -14 }}
                                transition={{ duration: 0.45, ease: 'easeOut' }}
                                className="glass mx-auto rounded-[2rem] border border-white/80 p-9 shadow-soft sm:p-12"
                            >
                                <Quote className="mx-auto h-7 w-7 text-[#3B82F6]" strokeWidth={1.5} />
                                <p className="mt-6 font-display text-[21px] leading-[1.7] text-[#111827] sm:text-[24px]">
                                    {testimonials[slide].quote}
                                </p>
                                <footer className="mt-7 text-sm text-[#4B5563]">
                                    <span className="font-medium text-[#0F4CBA]">{testimonials[slide].name}</span>
                                    {` · ${testimonials[slide].role}`}
                                </footer>
                            </motion.blockquote>
                        </AnimatePresence>
                    </div>

                    <div className="mt-8 flex justify-center gap-2">
                        {testimonials.map((t, i) => (
                            <button
                                key={t.name}
                                aria-label={`Show testimonial from ${t.name}`}
                                onClick={() => setSlide(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${i === slide ? 'w-8 bg-[#0F4CBA]' : 'w-2.5 bg-[#0F4CBA]/25 hover:bg-[#0F4CBA]/50'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-24 sm:py-32">
                <div className="mx-auto max-w-[56rem] px-6">
                    <Reveal>
                        <h2 className="font-display text-4xl leading-[1.08] text-[#111827] sm:text-5xl">Questions, answered</h2>
                    </Reveal>
                    <div className="mt-12 space-y-3">
                        {faqs.map((f, i) => (
                            <Reveal key={f.q} delay={i * 0.05}>
                                <div className="overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white shadow-soft transition-colors duration-200 hover:border-[#3B82F6]/40">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                        className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                                    >
                                        <span className="text-[17px] font-medium text-[#111827]">{f.q}</span>
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EEF5FF] text-[#0F4CBA] transition-transform duration-200 active:scale-90">
                                            {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                        </span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                            >
                                                <p className="px-7 pb-7 text-[16px] leading-relaxed text-[#4B5563]">{f.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="bg-[#EEF5FF] py-24 sm:py-32">
                <div className="mx-auto max-w-[78rem] px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">Reach us</p>
                            <h2 className="mt-4 font-display text-4xl leading-[1.08] text-[#111827] sm:text-5xl">Get in touch</h2>
                            <p className="mt-5 text-[17px] leading-relaxed text-[#4B5563]">
                                Volunteer, request a camp in your village, or ask anything about our work.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid gap-5 sm:grid-cols-3">
                        {[
                            { icon: Phone, label: 'Call us', value: '+91 98765 43210', href: 'tel:+919876543210' },
                            { icon: Mail, label: 'Email', value: 'contact@brpatnaiktrust.org', href: 'mailto:contact@brpatnaiktrust.org' },
                            { icon: MapPin, label: 'Office', value: 'Main Road, Ramachandrapuram, Konaseema, Andhra Pradesh 533255', href: '#contact' },
                        ].map((c, i) => (
                            <Reveal key={c.label} delay={i * 0.06}>
                                <a
                                    href={c.href}
                                    className="group flex h-full flex-col rounded-[1.75rem] border border-white bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                                >
                                    <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#0F4CBA] to-[#3B82F6] text-white transition-transform duration-300 group-hover:scale-110">
                                        <c.icon className="h-5 w-5" strokeWidth={1.7} />
                                    </span>
                                    <span className="mt-5 text-xs uppercase tracking-[0.18em] text-[#2563EB]">{c.label}</span>
                                    <span className="mt-2 text-[16px] leading-relaxed text-[#111827]">{c.value}</span>
                                </a>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                        <Reveal>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="rounded-[2rem] border border-white bg-white p-8 shadow-soft sm:p-10"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    {[
                                        { id: 'c-name', label: 'Name', type: 'text', ph: 'Your name' },
                                        { id: 'c-phone', label: 'Phone', type: 'tel', ph: '10-digit mobile' },
                                    ].map((f) => (
                                        <div key={f.id} className="flex flex-col gap-2">
                                            <label htmlFor={f.id} className="text-sm text-[#4B5563]">{f.label}</label>
                                            <input
                                                id={f.id}
                                                type={f.type}
                                                placeholder={f.ph}
                                                className="w-full rounded-2xl border border-[#E5E7EB] bg-[#FAFCFF] px-4 py-3 text-[15px] transition-all duration-200 focus:border-[#3B82F6] focus:outline-none focus:ring-4 focus:ring-[#3B82F6]/15"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-5 flex flex-col gap-2">
                                    <label htmlFor="c-msg" className="text-sm text-[#4B5563]">How can we help?</label>
                                    <textarea
                                        id="c-msg"
                                        rows={4}
                                        placeholder="Tell us about your village, request or offer to volunteer"
                                        className="w-full rounded-2xl border border-[#E5E7EB] bg-[#FAFCFF] px-4 py-3 text-[15px] transition-all duration-200 focus:border-[#3B82F6] focus:outline-none focus:ring-4 focus:ring-[#3B82F6]/15"
                                    />
                                </div>
                                <PillButton as="a" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="mt-7 w-full sm:w-auto">
                                    Send via WhatsApp
                                </PillButton>
                                <p className="mt-4 text-sm text-[#4B5563]">
                                    We reply within one working day.
                                </p>
                            </form>
                        </Reveal>
                        <Reveal delay={0.08}>
                            <div className="h-full overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-soft">
                                <iframe
                                    title="Trust office location on Google Maps"
                                    src="https://www.google.com/maps?q=Ramachandrapuram%2C%20Konaseema%2C%20Andhra%20Pradesh&output=embed"
                                    loading="lazy"
                                    className="h-[26rem] w-full rounded-[1.5rem] border-0 lg:h-full"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0B1B3A] py-20 text-white/80">
                <div className="mx-auto max-w-[78rem] px-6">
                    <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
                        <div>
                            <p className="font-display text-2xl text-white">Balivada Ramarao Patnaik</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">Charitable Trust</p>
                            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
                                A volunteer-led trust serving villages across Andhra Pradesh with education, healthcare,
                                food relief and livelihood training since 1992.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.18em] text-white/50">Quick links</p>
                            <ul className="mt-5 space-y-3 text-[15px]">
                                {['about', 'activities', 'awards', 'gallery'].map((id) => (
                                    <li key={id}>
                                        <a
                                            href={`#${id}`}
                                            className="capitalize transition-all duration-200 hover:translate-x-1 hover:text-white inline-block"
                                        >
                                            {id}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.18em] text-white/50">Support</p>
                            <ul className="mt-5 space-y-3 text-[15px]">
                                {[['donate', 'Donate'], ['donors', 'Donors'], ['faq', 'FAQ'], ['contact', 'Contact']].map(([id, label]) => (
                                    <li key={id}>
                                        <a href={`#${id}`} className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-white">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.18em] text-white/50">Newsletter</p>
                            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex gap-2">
                                <input
                                    aria-label="Email address"
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/45 transition-all duration-200 focus:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/10"
                                />
                                <PillButton type="submit" className="shrink-0 bg-white text-[#0B1B3A] hover:bg-white/90">
                                    Join
                                </PillButton>
                            </form>
                            <div className="mt-7 flex gap-3">
                                {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#home"
                                        aria-label="Social profile"
                                        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-all duration-200 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 active:scale-95"
                                    >
                                        <Icon className="h-4 w-4" strokeWidth={1.7} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
                        <p>© {new Date().getFullYear()} Balivada Ramarao Patnaik Charitable Trust. All rights reserved.</p>
                        <p>Registered charitable trust · Andhra Pradesh, India</p>
                    </div>
                </div>
            </footer>

            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#0F4CBA] text-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d43a4] active:scale-95"
            >
                <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
            </a>
        </div>
    );
};

export default HomePage;
