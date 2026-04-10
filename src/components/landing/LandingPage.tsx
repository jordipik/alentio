"use client";

import { motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";

import { translations, type Language } from "@/lib/translations";
import { BrandMark } from "./BrandMark";
import { FadeIn } from "./FadeIn";
import { LanguageSwitcher } from "./LanguageSwitcher";

const serviceIcons = [
  <svg key="s1" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M5 18V7l7-3 7 3v11l-7 3-7-3Z" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="s2" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M4 7h16M7 4v16M17 4v16" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="s3" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M12 4v16M4 12h16M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="s4" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10.5 10.5 13.5 13.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="s5" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M4 18h16M7 18V8h10v10M10 8V5h4v3" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
];

function SectionLabel({ label, title }: { label: string; title: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">{label}</p>
      <h2 className="text-balance font-display text-3xl leading-tight text-[var(--ink)] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function LandingPage() {
  const [language, setLanguage] = useState<Language>("es");
  const t = useMemo(() => translations[language], [language]);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#process", label: t.nav.process },
    { href: "#sectors", label: t.nav.sectors },
    { href: "#contact", label: t.nav.contact },
  ];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-x-0 top-[-380px] z-0 h-[780px] bg-[radial-gradient(circle_at_20%_20%,rgba(236,119,43,0.22),transparent_45%),radial-gradient(circle_at_78%_14%,rgba(255,174,125,0.28),transparent_46%),linear-gradient(180deg,#f9f8f5_0%,#f8f7f4_80%,#f4f1ea_100%)]" />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-[rgba(249,248,245,0.74)] backdrop-blur-xl transition">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="shrink-0">
            <BrandMark />
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[var(--ink-muted)] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher value={language} onChange={setLanguage} />
            <a
              href="#contact"
              className="rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(236,119,43,0.34)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
            >
              {t.cta.talk}
            </a>
          </div>
        </div>
      </header>

      <main id="home" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 sm:pt-36 lg:px-10">
        <section className="grid items-center gap-14 pb-24 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
          <FadeIn className="space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">ALENTIO</p>
            <h1 className="max-w-3xl text-balance font-display text-5xl leading-[1.02] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl">
              {t.hero.claim}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-[var(--ink-muted)] sm:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#contact"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(236,119,43,0.36)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
              >
                {t.cta.talk}
              </a>
              <a
                href="#services"
                className="rounded-full border border-[var(--line)] bg-white/75 px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                {t.cta.services}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mx-auto w-full max-w-xl">
            <motion.div
              className="absolute -left-10 top-6 h-24 w-24 rounded-[30px] border border-[rgba(236,119,43,0.26)] bg-[rgba(236,119,43,0.09)]"
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-8 -top-4 h-20 w-20 rounded-full border border-[rgba(52,49,45,0.13)] bg-white/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative rounded-[2.4rem] border border-[var(--line)] bg-[linear-gradient(140deg,rgba(255,255,255,0.9),rgba(247,244,238,0.96))] p-7 shadow-[0_20px_55px_rgba(26,23,19,0.08)] backdrop-blur-md sm:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Innovación real",
                  "Coste controlado",
                  "Ejecución práctica",
                  "Escalabilidad",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-2xl border border-[var(--line)] bg-white/78 p-4 text-sm font-medium text-[var(--ink)]"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{ y: -4 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="about" className="scroll-mt-28 py-16 md:py-20">
          <FadeIn>
            <SectionLabel label={t.about.eyebrow} title={t.about.title} />
          </FadeIn>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <FadeIn delay={0.08}>
              <p className="max-w-3xl text-pretty text-lg leading-relaxed text-[var(--ink-muted)]">{t.about.body}</p>
            </FadeIn>
            <div className="space-y-3">
              {t.about.points.map((point, index) => (
                <FadeIn key={point} delay={index * 0.08}>
                  <div className="rounded-2xl border border-[var(--line)] bg-white/72 p-4 text-sm text-[var(--ink)] shadow-[0_10px_30px_rgba(26,23,19,0.04)]">
                    {point}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 py-16 md:py-20">
          <FadeIn>
            <SectionLabel label={t.services.eyebrow} title={t.services.title} />
          </FadeIn>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.services.items.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group h-full rounded-3xl border border-[var(--line)] bg-white/82 p-6 shadow-[0_16px_44px_rgba(26,23,19,0.06)]"
                >
                  <div className="mb-4 inline-flex rounded-xl border border-[rgba(236,119,43,0.2)] bg-[rgba(236,119,43,0.08)] p-2.5 text-[var(--brand)] transition group-hover:bg-[rgba(236,119,43,0.16)]">
                    {serviceIcons[index]}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--ink)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{service.description}</p>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="process" className="scroll-mt-28 py-16 md:py-20">
          <FadeIn>
            <SectionLabel label={t.process.eyebrow} title={t.process.title} />
          </FadeIn>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {t.process.steps.map((step, index) => (
              <FadeIn key={step} delay={index * 0.05}>
                <div className="rounded-2xl border border-[var(--line)] bg-white/78 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-base font-medium text-[var(--ink)]">{step}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[var(--ink-muted)]">{t.process.footer}</p>
          </FadeIn>
        </section>

        <section className="py-16 md:py-20">
          <FadeIn>
            <SectionLabel label={t.philosophy.eyebrow} title={t.philosophy.title} />
          </FadeIn>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <FadeIn delay={0.06}>
              <div className="h-full rounded-3xl border border-[rgba(196,111,72,0.22)] bg-[rgba(255,255,255,0.66)] p-6">
                <h3 className="text-lg font-semibold text-[var(--ink)]">No somos...</h3>
                <ul className="mt-4 space-y-3 text-sm text-[var(--ink-muted)]">
                  {t.philosophy.not.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[rgba(193,74,30,0.8)]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="h-full rounded-3xl border border-[var(--line)] bg-white/84 p-6 shadow-[0_16px_44px_rgba(26,23,19,0.05)]">
                <h3 className="text-lg font-semibold text-[var(--ink)]">Sí somos...</h3>
                <ul className="mt-4 space-y-3 text-sm text-[var(--ink-muted)]">
                  {t.philosophy.yes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand)]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="sectors" className="scroll-mt-28 py-16 md:py-20">
          <FadeIn>
            <SectionLabel label={t.sectors.eyebrow} title={t.sectors.title} />
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">{t.sectors.intro}</p>
          </FadeIn>
          <div className="mt-6 flex flex-wrap gap-3">
            {t.sectors.items.map((item, index) => (
              <FadeIn key={item} delay={index * 0.04}>
                <span className="rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm text-[var(--ink)]">
                  {item}
                </span>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <FadeIn>
            <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(120deg,rgba(255,255,255,0.9),rgba(247,241,231,0.86))] p-8 text-center shadow-[0_20px_54px_rgba(26,23,19,0.08)] md:p-12">
              <p className="mx-auto max-w-4xl font-display text-3xl leading-tight text-[var(--ink)] md:text-4xl">
                {t.midCta.text}
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(236,119,43,0.34)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
              >
                {t.cta.contact}
              </a>
            </div>
          </FadeIn>
        </section>

        <section id="contact" className="scroll-mt-28 py-16 md:py-20">
          <FadeIn>
            <SectionLabel label={t.contact.eyebrow} title={t.contact.title} />
          </FadeIn>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <FadeIn delay={0.05}>
              <div className="space-y-6 rounded-3xl border border-[var(--line)] bg-white/85 p-7 shadow-[0_14px_40px_rgba(26,23,19,0.05)]">
                <p className="text-sm leading-relaxed text-[var(--ink-muted)]">{t.contact.intro}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href="mailto:hola@alentio.com"
                    className="mt-1 inline-block text-lg font-medium text-[var(--ink)] transition hover:text-[var(--brand)]"
                  >
                    hola@alentio.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                    {t.contact.locationsLabel}
                  </p>
                  <ul className="mt-2 space-y-1 text-base text-[var(--ink)]">
                    {t.contact.locations.map((location) => (
                      <li key={location}>{location}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-[var(--line)] bg-white/92 p-7 shadow-[0_18px_44px_rgba(26,23,19,0.06)]"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-1.5 text-sm text-[var(--ink-muted)]">
                    <span>{t.contact.form.name}</span>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-[var(--ink-muted)]">
                    <span>{t.contact.form.company}</span>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-[var(--ink-muted)] sm:col-span-2">
                    <span>{t.contact.form.email}</span>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]"
                    />
                  </label>
                  <label className="space-y-1.5 text-sm text-[var(--ink-muted)] sm:col-span-2">
                    <span>{t.contact.form.message}</span>
                    <textarea
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2.5 text-sm text-[var(--ink)] outline-none transition focus:border-[var(--brand)]"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-5 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(236,119,43,0.34)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)]"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-white/72 py-8 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-5 px-6 text-sm text-[var(--ink-muted)] md:flex-row md:items-center lg:px-10">
          <div className="space-y-2">
            <BrandMark className="opacity-90" />
            <p>© {new Date().getFullYear()} ALENTIO. {t.footer.rights}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
                {item.label}
              </a>
            ))}
            <LanguageSwitcher value={language} onChange={setLanguage} />
          </div>
        </div>
      </footer>
    </div>
  );
}
