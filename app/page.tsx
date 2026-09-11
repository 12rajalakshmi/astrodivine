"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#160f2d] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e8c77b]/20 bg-[#160f2d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8c77b] bg-[#24163f] text-2xl text-[#e8c77b]">
              ✦
            </div>

            <div>
              <div className="font-serif text-xl tracking-[0.18em] text-[#f6d98b]">
                ASTRODIVINE
              </div>

              <div className="text-[9px] tracking-[0.2em] text-white/60">
                ANCIENT WISDOM • MODERN GUIDANCE
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#" className="astro-nav active">
              Home
            </a>

            <a href="#kundli" className="astro-nav">
              Kundli
            </a>

            <a href="#ai" className="astro-nav">
              AI Astrologer
            </a>

            <a href="#astrologers" className="astro-nav">
              Astrologers
            </a>

            <a href="#pricing" className="astro-nav">
              Pricing
            </a>

            <a href="#about" className="astro-nav">
              About
            </a>
          </nav>

          {/* DESKTOP AUTH */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full border border-[#e8c77b] px-5 py-2.5 text-sm text-white transition hover:bg-[#e8c77b] hover:text-[#160f2d]">
              Login
            </button>

            <button className="rounded-full bg-[#e8c77b] px-5 py-2.5 text-sm font-semibold text-[#160f2d] transition hover:bg-[#f6d98b]">
              Sign Up
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#e8c77b] md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#160f2d] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a href="#" className="text-white">
                Home
              </a>

              <a href="#kundli" className="text-white">
                Kundli
              </a>

              <a href="#ai" className="text-white">
                AI Astrologer
              </a>

              <a href="#astrologers" className="text-white">
                Astrologers
              </a>

              <a href="#pricing" className="text-white">
                Pricing
              </a>

              <a href="#about" className="text-white">
                About
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden pt-24">
        {/* EXISTING BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('/astrology-bg.png')] bg-cover bg-center bg-no-repeat" />

        {/* DARK PURPLE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#160f2d]/95 via-[#24163f]/75 to-[#160f2d]/80" />

        {/* PURPLE / GOLD LIGHT */}
        <div className="absolute left-[-150px] top-40 h-[450px] w-[450px] rounded-full bg-[#e9a7c4]/15 blur-[130px]" />

        <div className="absolute right-[-100px] top-20 h-[500px] w-[500px] rounded-full bg-[#e8c77b]/15 blur-[140px]" />

        {/* CONTENT */}
        <div className="relative mx-auto grid min-h-[850px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <div className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[#f6d98b]">
              ✦ Ancient Wisdom • Modern Guidance ✦
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Discover What
              <span className="mt-2 block text-[#f6d98b]">
                Your Stars Reveal
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/80 lg:mx-0">
              Your birth chart. Your questions. Your path.
              <br />
              Personalized astrological guidance for your journey.
            </p>

            {/* PRIMARY BUTTONS */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#kundli"
                className="rounded-full bg-[#e8c77b] px-8 py-4 font-semibold text-[#160f2d] shadow-xl transition hover:-translate-y-1 hover:bg-[#f6d98b]"
              >
                ✦ Create My Kundli →
              </a>

              <a
                href="#ai"
                className="rounded-full border border-[#e9a7c4] bg-[#160f2d]/30 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-[#e9a7c4]/20"
              >
                💬 Chat with AI Astrologer
              </a>
            </div>

            {/* OR */}
            <div className="my-7 flex items-center gap-4 lg:max-w-[540px]">
              <div className="h-px flex-1 bg-[#e8c77b]/40" />

              <span className="text-sm text-[#f6d98b]">OR</span>

              <div className="h-px flex-1 bg-[#e8c77b]/40" />
            </div>

            <a
              href="#astrologers"
              className="inline-flex rounded-full border border-[#e8c77b] bg-[#160f2d]/30 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-[#e8c77b] hover:text-[#160f2d]"
            >
              👥 Talk to a Real Astrologer
            </a>
          </div>

          {/* RIGHT BIRTH FORM */}
          <div id="kundli" className="relative">
            <div className="rounded-[28px] border border-[#e8c77b]/50 bg-[#160f2d]/75 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              {/* FORM HEADER */}
              <div className="mb-7 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#e8c77b] bg-[#24163f] text-2xl text-[#e8c77b]">
                  ☼
                </div>

                <h2 className="font-serif text-3xl text-white">
                  Your Birth Details
                </h2>

                <p className="mt-2 text-sm text-white/60">
                  Get your personalized Kundli and insights
                </p>
              </div>

              {/* FORM */}
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-white/80">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="astro-input"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/80">
                    Date of Birth
                  </label>

                  <input type="date" className="astro-input" />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/80">
                    Time of Birth
                  </label>

                  <input type="time" className="astro-input" />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/80">
                    Place of Birth
                  </label>

                  <input
                    type="text"
                    placeholder="City, State, Country"
                    className="astro-input"
                  />
                </div>

                <button className="w-full rounded-full bg-gradient-to-r from-[#e8c77b] to-[#e9a7c4] py-4 font-bold text-[#160f2d] shadow-lg transition hover:scale-[1.02]">
                  Generate My Kundli →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="relative mx-auto grid max-w-7xl gap-4 px-5 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            ["✡", "Personalized Kundli", "Detailed birth chart & planetary insights"],
            ["✦", "AI Astrologer", "Get instant answers to your questions"],
            ["♧", "Expert Astrologers", "Talk to verified astrology experts"],
            ["☾", "Daily Horoscope", "Stay aligned with daily guidance"],
            ["♡", "Kundli Matching", "Find your perfect life partner"],
            ["✓", "Secure & Private", "Your data is always protected"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-[#e8c77b]/40 bg-[#160f2d]/75 p-5 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#e8c77b]"
            >
              <div className="mb-3 text-3xl text-[#f6d98b]">{icon}</div>

              <h3 className="font-serif text-lg text-white">{title}</h3>

              <p className="mt-2 text-xs leading-5 text-white/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AI ASTROLOGER ================= */}
      <section id="ai" className="bg-[#fff8ef] px-5 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-[#76528d]">
            ✦ Your Personal AI Guide
          </div>

          <h2 className="mt-4 font-serif text-4xl text-[#241334] sm:text-5xl">
            Meet Your AI Astrologer
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#66566f]">
            Ask questions about love, career, relationships, compatibility,
            life decisions and your astrological journey.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#e8c77b]/50 bg-white p-5 text-left shadow-xl">
            <div className="rounded-2xl bg-[#f7edf5] p-6">
              <div className="font-semibold text-[#5b3a82]">
                ✦ AI Astrologer
              </div>

              <p className="mt-3 leading-7 text-[#241334]">
                Hello! I'm your astrology guide. Ask me a question about your
                stars and I'll help you explore it.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Ask your astrology question..."
                className="flex-1 rounded-full border border-[#decde0] px-5 py-3 text-[#241334] outline-none focus:border-[#76528d]"
              />

              <button className="rounded-full bg-[#5b3a82] px-7 py-3 font-semibold text-white transition hover:bg-[#76528d]">
                Ask ✦
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HUMAN ASTROLOGERS ================= */}
      <section
        id="astrologers"
        className="bg-gradient-to-b from-[#f7edf5] to-[#fff8ef] px-5 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="text-sm uppercase tracking-[0.3em] text-[#76528d]">
              ✦ Human Guidance
            </div>

            <h2 className="mt-4 font-serif text-4xl text-[#241334] sm:text-5xl">
              Talk to a Real Astrologer
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[#66566f]">
              Connect with experienced astrologers for personalized
              one-to-one guidance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                specialty: "Love & Marriage",
                price: "₹15 / min",
              },
              {
                name: "Rahul Verma",
                specialty: "Career & Finance",
                price: "₹20 / min",
              },
              {
                name: "Ananya Rao",
                specialty: "Vedic Astrology",
                price: "₹12 / min",
              },
            ].map((astrologer) => (
              <div
                key={astrologer.name}
                className="rounded-3xl border border-[#e8c77b]/50 bg-white p-7 shadow-lg transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#5b3a82] text-2xl text-[#f6d98b]">
                    ✦
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-[#241334]">
                      {astrologer.name}
                    </h3>

                    <p className="text-sm text-[#76528d]">
                      {astrologer.specialty}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600">
                    ● Online
                  </span>

                  <span className="font-bold text-[#5b3a82]">
                    {astrologer.price}
                  </span>
                </div>

                <button className="mt-5 w-full rounded-full bg-[#5b3a82] py-3 font-semibold text-white transition hover:bg-[#76528d]">
                  Talk Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="bg-[#160f2d] px-5 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-[#f6d98b]">
            ✦ Simple Pricing
          </div>

          <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Choose Your Astrology Journey
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Free",
                price: "₹0",
                description: "Basic horoscope & daily guidance",
              },
              {
                title: "Premium",
                price: "₹199",
                description: "Detailed astrology insights",
              },
              {
                title: "Astrologer",
                price: "From ₹99",
                description: "One-to-one astrologer consultation",
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className="rounded-3xl border border-[#e8c77b]/40 bg-white/5 p-8 backdrop-blur"
              >
                <h3 className="font-serif text-2xl text-white">
                  {plan.title}
                </h3>

                <div className="mt-5 text-4xl font-bold text-[#f6d98b]">
                  {plan.price}
                </div>

                <p className="mt-4 min-h-12 text-sm leading-6 text-white/60">
                  {plan.description}
                </p>

                <button className="mt-7 w-full rounded-full border border-[#e8c77b] py-3 font-semibold text-[#f6d98b] transition hover:bg-[#e8c77b] hover:text-[#160f2d]">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="about" className="bg-[#0c0818] px-5 py-12 text-center">
        <div className="font-serif text-2xl tracking-[0.2em] text-[#f6d98b]">
          ASTRODIVINE
        </div>

        <p className="mt-3 text-sm text-white/50">
          Ancient Wisdom • Modern Guidance
        </p>

        <div className="mx-auto mt-7 h-px max-w-xl bg-[#e8c77b]/20" />

        <p className="mt-7 text-xs text-white/30">
          © 2026 AstroDivine. All rights reserved.
        </p>
      </footer>

      {/* FLOATING CHAT BUTTON */}
      <button
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#e9a7c4] text-2xl text-[#241334] shadow-2xl transition hover:scale-110"
      >
        💬
      </button>
    </main>
  );
}