import { Language } from "@/lib/translations";

type LanguageSwitcherProps = {
    value: Language;
    onChange: (next: Language) => void;
};

const options: Array<{ key: Language; label: string }> = [
    { key: "es", label: "ES" },
    { key: "ca", label: "CA" },
    { key: "en", label: "EN" },
];

export function LanguageSwitcher({ value, onChange }: LanguageSwitcherProps) {
    return (
        <div className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/75 p-1 text-xs font-semibold tracking-wide text-[var(--ink-muted)] backdrop-blur-sm">
            {options.map((option) => {
                const isActive = option.key === value;

                return (
                    <button
                        key={option.key}
                        type="button"
                        onClick={() => onChange(option.key)}
                        className={`rounded-full px-2.5 py-1.5 transition ${isActive
                                ? "bg-[var(--brand)] text-white shadow-sm"
                                : "hover:bg-[var(--surface)]"
                            }`}
                        aria-pressed={isActive}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}
