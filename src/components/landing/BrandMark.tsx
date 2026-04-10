"use client";

import Image from "next/image";
import { useState } from "react";

type BrandMarkProps = {
    className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
    const [showFallback, setShowFallback] = useState(false);

    return (
        <div className={className}>
            {!showFallback ? (
                <Image
                    src="/logo-alentio.png"
                    alt="Logo de ALENTIO"
                    width={158}
                    height={44}
                    className="h-9 w-auto object-contain"
                    onError={() => setShowFallback(true)}
                    priority
                />
            ) : (
                <div className="inline-flex items-center gap-2 text-[0.95rem] font-semibold tracking-[0.12em] text-[var(--ink)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                    <span>ALENTIO</span>
                </div>
            )}
        </div>
    );
}
