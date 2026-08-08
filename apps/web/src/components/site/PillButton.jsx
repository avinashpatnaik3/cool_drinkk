import React, { useCallback, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const variants = {
    primary:
        'bg-[#0F4CBA] text-white hover:bg-[#0d43a4] shadow-soft hover:shadow-lift focus-visible:ring-[#0F4CBA]/40',
    ghost:
        'bg-white/70 text-[#0F4CBA] border border-[#E5E7EB] hover:border-[#3B82F6]/60 hover:bg-white ripple-dark focus-visible:ring-[#3B82F6]/30',
    soft:
        'bg-[#EEF5FF] text-[#0F4CBA] hover:bg-[#e2eeff] ripple-dark focus-visible:ring-[#3B82F6]/30',
};

const PillButton = React.forwardRef(function PillButton(
    { as = 'button', variant = 'primary', className, children, onClick, ...props },
    forwardedRef,
) {
    const Comp = as;
    const localRef = useRef(null);
    const [ripples, setRipples] = useState([]);

    const handleClick = useCallback(
        (event) => {
            const el = localRef.current;

            if (el) {
                const rect = el.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const id = Date.now() + Math.random();

                setRipples((prev) => [
                    ...prev,
                    {
                        id,
                        style: {
                            width: size,
                            height: size,
                            left: (event.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2,
                            top: (event.clientY ?? rect.top + rect.height / 2) - rect.top - size / 2,
                        },
                    },
                ]);
                window.setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
            }

            if (onClick) onClick(event);
        },
        [onClick],
    );

    return (
        <Comp
            ref={(node) => {
                localRef.current = node;
                if (typeof forwardedRef === 'function') forwardedRef(node);
                else if (forwardedRef) forwardedRef.current = node;
            }}
            onClick={handleClick}
            className={cn(
                'ripple-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight',
                'min-h-[48px] cursor-pointer select-none transition-all duration-200 ease-out',
                'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.975]',
                'focus:outline-none focus-visible:ring-4',
                variants[variant],
                className,
            )}
            {...props}
        >
            {ripples.map((r) => (
                <span key={r.id} className="ripple" style={r.style} />
            ))}
            {children}
        </Comp>
    );
});

export default PillButton;
