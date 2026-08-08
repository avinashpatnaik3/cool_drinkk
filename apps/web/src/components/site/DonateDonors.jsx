import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, BadgeCheck, QrCode, Heart, Loader2, TrendingUp, Users, IndianRupee } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import PillButton from '@/components/site/PillButton';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';

const GOAL = 2500000;
const UPI_ID = 'brpatnaiktrust@upi';

const maskPhone = (phone = '') => {
    const digits = String(phone).replace(/\D/g, '');
    if (digits.length < 6) return '*****';

    return `${digits.slice(0, 5)}*****`;
};

const initials = (name = '') =>
    name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();

const formatINR = (n) => `₹${Number(n || 0).toLocaleString('en-IN')}`;

const formatDate = (value) => {
    if (!value) return '';
    const d = new Date(String(value).replace(' ', 'T'));

    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
};

const DonateDonors = () => {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);
    const [form, setForm] = useState({
        donor_name: '',
        phone_number: '',
        amount: '2500',
        city: '',
        message: '',
        anonymous: false,
    });

    const load = useCallback(async () => {
        try {
            setError('');
            const records = await pb.collection('donors').getFullList({ sort: '-created' });
            setDonors(records);
        } catch (err) {
            if (!String(err?.message || '').includes('autocancelled')) {
                setError('We could not load donations just now. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const totals = useMemo(() => {
        const amount = donors.reduce((sum, d) => sum + Number(d.amount || 0), 0);

        return { amount, count: donors.length, progress: Math.min(100, Math.round((amount / GOAL) * 100)) };
    }, [donors]);

    const ticker = useMemo(() => (donors.length ? [...donors, ...donors] : []), [donors]);

    const submit = async (event) => {
        event.preventDefault();
        const amount = parseInt(form.amount, 10);

        if (!form.donor_name.trim() || !/^\d{10}$/.test(form.phone_number.trim()) || !amount || amount < 1) {
            setError('Please enter your name, a 10-digit phone number and a valid amount.');

            return;
        }

        setSubmitting(true);
        setError('');

        try {
            await pb.collection('donors').create({
                donor_name: form.donor_name.trim(),
                phone_number: form.phone_number.trim(),
                amount,
                city: form.city.trim(),
                message: form.message.trim(),
                payment_id: `UPI-${Date.now().toString(36).toUpperCase()}`,
                anonymous: form.anonymous,
            });
            setDone(true);
            setForm({ donor_name: '', phone_number: '', amount: '2500', city: '', message: '', anonymous: false });
            await load();
            window.setTimeout(() => setDone(false), 6000);
        } catch {
            setError('Something went wrong recording your donation. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const field =
        'w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-[15px] text-[#111827] placeholder:text-[#9CA3AF] transition-all duration-200 focus:border-[#3B82F6] focus:outline-none focus:ring-4 focus:ring-[#3B82F6]/15';

    return (
        <>
            <section id="donate" className="relative overflow-hidden bg-[#EEF5FF] py-24 sm:py-32">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-[#3B82F6]/12 blur-3xl"
                />
                <div className="relative mx-auto max-w-[72rem] px-6">
                    <Reveal>
                        <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">Give with confidence</p>
                        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.08] text-[#111827] sm:text-5xl">
                            A small gift today becomes someone's whole tomorrow.
                        </h2>
                        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#4B5563]">
                            Every rupee is spent in the villages we serve — school kits, medicines, meals and skill
                            training. No middlemen, no overheads, full transparency.
                        </p>
                    </Reveal>

                    <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                        <Reveal>
                            <div className="glass h-full rounded-[2rem] border border-white/80 p-8 shadow-soft sm:p-10">
                                <div className="flex items-baseline justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-[#4B5563]">Raised so far</p>
                                        <p className="mt-1 font-display text-3xl text-[#0F4CBA]">
                                            <CountUp value={totals.amount} prefix="₹" locale="en-IN" />
                                        </p>
                                    </div>
                                    <p className="text-sm text-[#4B5563]">Goal {formatINR(GOAL)}</p>
                                </div>
                                <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-white">
                                    <motion.div
                                        className="h-full rounded-full bg-gradient-to-r from-[#0F4CBA] to-[#3B82F6]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${Math.max(totals.progress, 3)}%` }}
                                        transition={{ duration: 1.1, ease: 'easeOut' }}
                                    />
                                </div>
                                <p className="mt-3 text-sm text-[#4B5563]">
                                    {totals.progress}% of this year's community fund · {totals.count} donors
                                </p>

                                <form onSubmit={submit} className="mt-8 space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="donor_name" className="text-sm text-[#4B5563]">Full name</label>
                                            <input
                                                id="donor_name"
                                                className={field}
                                                value={form.donor_name}
                                                onChange={(e) => setForm({ ...form, donor_name: e.target.value })}
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="phone_number" className="text-sm text-[#4B5563]">Phone number</label>
                                            <input
                                                id="phone_number"
                                                inputMode="numeric"
                                                className={field}
                                                value={form.phone_number}
                                                onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
                                                placeholder="10-digit mobile"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="amount" className="text-sm text-[#4B5563]">Amount (INR)</label>
                                            <input
                                                id="amount"
                                                inputMode="numeric"
                                                className={field}
                                                value={form.amount}
                                                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="city" className="text-sm text-[#4B5563]">City (optional)</label>
                                            <input
                                                id="city"
                                                className={field}
                                                value={form.city}
                                                onChange={(e) => setForm({ ...form, city: e.target.value })}
                                                placeholder="Visakhapatnam"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {[1000, 2500, 5000, 11000].map((amt) => (
                                            <button
                                                key={amt}
                                                type="button"
                                                onClick={() => setForm({ ...form, amount: String(amt) })}
                                                className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm text-[#0F4CBA] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3B82F6] active:scale-95"
                                            >
                                                {formatINR(amt)}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="message" className="text-sm text-[#4B5563]">Message (optional)</label>
                                        <textarea
                                            id="message"
                                            rows={2}
                                            className={field}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="Why you are giving today"
                                        />
                                    </div>
                                    <label className="flex cursor-pointer items-center gap-3 text-sm text-[#4B5563]">
                                        <input
                                            type="checkbox"
                                            checked={form.anonymous}
                                            onChange={(e) => setForm({ ...form, anonymous: e.target.checked })}
                                            className="h-4 w-4 rounded border-[#E5E7EB] accent-[#0F4CBA]"
                                        />
                                        Donate anonymously
                                    </label>

                                    {error && <p className="text-sm text-[#B42318]">{error}</p>}

                                    <PillButton type="submit" disabled={submitting} className="w-full sm:w-auto">
                                        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Heart className="h-4 w-4" />}
                                        {submitting ? 'Recording donation' : 'Complete donation'}
                                    </PillButton>

                                    <AnimatePresence>
                                        {done && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="rounded-2xl bg-white px-4 py-3 text-sm text-[#0F4CBA]"
                                            >
                                                Thank you. Your donation is recorded and now appears with our generous donors.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="h-full rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-soft sm:p-10">
                                <p className="text-xs uppercase tracking-[0.24em] text-[#2563EB]">Pay by UPI</p>
                                <div className="mt-6 flex flex-col items-center rounded-3xl bg-[#FAFCFF] p-8 text-center">
                                    <div className="grid h-40 w-40 place-items-center rounded-2xl border border-[#E5E7EB] bg-white shadow-soft transition-transform duration-300 hover:scale-[1.03]">
                                        <QrCode className="h-24 w-24 text-[#0F4CBA]" strokeWidth={1.1} />
                                    </div>
                                    <p className="mt-6 font-display text-lg text-[#111827]">Scan &amp; give in seconds</p>
                                    <p className="mt-2 select-all rounded-full bg-[#EEF5FF] px-4 py-2 text-sm text-[#0F4CBA]">{UPI_ID}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                                        Works with GPay, PhonePe, Paytm and every UPI app. Add your name in the note so we
                                        can thank you.
                                    </p>
                                </div>
                                <ul className="mt-8 space-y-4">
                                    {[
                                        { icon: ShieldCheck, text: 'Registered charitable trust, audited annually' },
                                        { icon: Lock, text: 'Secure UPI / bank transfer — we never store card data' },
                                        { icon: BadgeCheck, text: '80G receipt issued on request within 7 days' },
                                    ].map((item) => (
                                        <li key={item.text} className="flex items-start gap-3 text-sm text-[#4B5563]">
                                            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EEF5FF] text-[#0F4CBA]">
                                                <item.icon className="h-4 w-4" strokeWidth={1.75} />
                                            </span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section id="donors" className="py-24 sm:py-32">
                <div className="mx-auto max-w-[78rem] px-6">
                    <Reveal>
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.28em] text-[#2563EB]">Gratitude</p>
                            <h2 className="mt-4 font-display text-4xl leading-[1.08] text-[#111827] sm:text-5xl">
                                Our Generous Donors
                            </h2>
                            <p className="mt-5 text-[17px] leading-relaxed text-[#4B5563]">
                                Every contribution helps us transform lives and create lasting impact.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {[
                            { icon: IndianRupee, label: 'Total raised', node: <CountUp value={totals.amount} prefix="₹" locale="en-IN" /> },
                            { icon: Users, label: 'Total donors', node: <CountUp value={totals.count} /> },
                            {
                                icon: TrendingUp,
                                label: 'Largest gift',
                                node: <CountUp value={donors.reduce((m, d) => Math.max(m, Number(d.amount || 0)), 0)} prefix="₹" locale="en-IN" />,
                            },
                        ].map((stat, i) => (
                            <Reveal key={stat.label} delay={i * 0.06}>
                                <div className="glass rounded-3xl border border-white/80 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                                    <stat.icon className="h-5 w-5 text-[#2563EB]" strokeWidth={1.75} />
                                    <p className="mt-4 font-display text-3xl text-[#111827]">{stat.node}</p>
                                    <p className="mt-1 text-sm text-[#4B5563]">{stat.label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {ticker.length > 0 && (
                        <div className="mt-10 overflow-hidden rounded-full border border-[#E5E7EB] bg-white py-3">
                            <div className="flex w-max animate-marquee gap-10 px-6">
                                {ticker.map((d, i) => (
                                    <span key={`${d.id}-${i}`} className="whitespace-nowrap text-sm text-[#4B5563]">
                                        <span className="text-[#0F4CBA]">{d.anonymous ? 'Anonymous Donor ❤️' : d.donor_name}</span>
                                        {` gave ${formatINR(d.amount)}`}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {loading &&
                            [0, 1, 2].map((i) => (
                                <div key={i} className="h-44 animate-pulse rounded-3xl border border-[#E5E7EB] bg-white" />
                            ))}

                        {!loading && donors.length === 0 && (
                            <p className="text-[15px] text-[#4B5563]">
                                No donations recorded yet — be the first to support this work.
                            </p>
                        )}

                        {!loading &&
                            donors.map((d, i) => (
                                <Reveal key={d.id} delay={Math.min(i, 6) * 0.05}>
                                    <article className="group h-full rounded-3xl border border-[#E5E7EB] bg-white/85 p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3B82F6]/40 hover:shadow-lift">
                                        <div className="flex items-center gap-4">
                                            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#EEF5FF] font-medium text-[#0F4CBA] transition-transform duration-300 group-hover:scale-105">
                                                {d.anonymous ? <Heart className="h-5 w-5" strokeWidth={1.75} /> : initials(d.donor_name)}
                                            </span>
                                            <div className="min-w-0">
                                                <p className="truncate font-medium text-[#111827]">
                                                    {d.anonymous ? 'Anonymous Donor ❤️' : d.donor_name}
                                                </p>
                                                <p className="text-sm text-[#4B5563]">
                                                    {d.anonymous ? 'Details withheld by request' : maskPhone(d.phone_number)}
                                                    {!d.anonymous && d.city ? ` · ${d.city}` : ''}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-5 font-display text-2xl text-[#0F4CBA]">{formatINR(d.amount)}</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#9CA3AF]">
                                            {formatDate(d.created)}
                                        </p>
                                        {d.message && (
                                            <p className="mt-4 border-t border-[#E5E7EB] pt-4 text-[15px] leading-relaxed text-[#4B5563]">
                                                “{d.message}”
                                            </p>
                                        )}
                                    </article>
                                </Reveal>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DonateDonors;
