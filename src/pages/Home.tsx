import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`glitch relative inline-block ${className}`} data-text={text}>
      {text}
    </span>
  )
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: string }) {
  return (
    <div
      className="border border-[#ff003c]/30 bg-[#0f0f0f] p-5 md:p-6 relative overflow-hidden group hover:border-[#ff003c]/60 transition-all duration-500"
      style={{ animationDelay: delay }}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff003c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#ff003c]/40" />
      <p className="font-['Orbitron'] text-2xl md:text-3xl font-black text-[#ff003c] mb-1">{value}</p>
      <p className="text-[#666] text-xs tracking-[0.2em] font-['Orbitron'] uppercase">{label}</p>
    </div>
  )
}

function FeatureCard({ icon, title, desc, accent }: { icon: string; title: string; desc: string; accent: string }) {
  return (
    <div className={`border border-[#222] bg-[#0f0f0f] p-6 relative overflow-hidden group hover:border-[${accent}]/50 transition-all duration-500`}>
      <div className={`absolute inset-0 bg-gradient-to-br from-[${accent}]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-['Orbitron'] text-sm font-bold tracking-widest text-white mb-2 uppercase">{title}</h3>
      <p className="text-[#666] text-sm leading-relaxed font-mono">{desc}</p>
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[${accent}] transition-all duration-700`} />
    </div>
  )
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [scanLine, setScanLine] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(v => (v + 1) % 100)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="pt-20">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,60,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,60,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Scan line effect */}
        <div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent pointer-events-none z-10 transition-none"
          style={{ top: `${scanLine}%` }}
        />

        {/* Corner decorations */}
        <div className="absolute top-8 left-6 w-12 h-12 border-t-2 border-l-2 border-[#ff003c]" />
        <div className="absolute top-8 right-6 w-12 h-12 border-t-2 border-r-2 border-[#ff003c]" />
        <div className="absolute bottom-8 left-6 w-12 h-12 border-b-2 border-l-2 border-[#00f0ff]/50" />
        <div className="absolute bottom-8 right-6 w-12 h-12 border-b-2 border-r-2 border-[#00f0ff]/50" />

        {/* Red glow blob */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#ff003c]/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#00f0ff]/5 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div
            className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Pre-title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#ff003c]" />
              <span className="font-mono text-[#ff003c] text-xs tracking-[0.4em] uppercase">
                ▶ SYSTEM ONLINE // 2026
              </span>
            </div>

            {/* Main title */}
            <h1 className="font-['Orbitron'] font-black leading-none mb-4">
  <GlitchText
    text="SEPTOMIC"
    className="block text-[clamp(3rem,10vw,8rem)] text-white neon-red"
  />
  <GlitchText
    text="RAN ONLINE"
    className="block text-[clamp(3rem,10vw,8rem)] text-[#ff003c] neon-red"
  />
              <span className="block text-[clamp(1rem,3vw,2rem)] text-[#00f0ff] tracking-[0.5em] mt-2">
                Episode 7
              </span>
            </h1>

            <p className="text-[#777] font-mono text-sm md:text-base max-w-xl mt-8 leading-relaxed">
              A free-to-play MMORPG with 6 unique classes, Septomic Ran Online combat, and unlimited progression.
              Battle through CW and Tyranny, conquer guild wars, and rise to the top — Max Reborn 5000 awaits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/download"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff003c] text-white font-['Orbitron'] text-sm font-bold tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,0,60,0.6)]"
              >
                <span className="relative z-10">DOWNLOAD NOW</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Link>

              <Link
                to="/announcements"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#00f0ff]/50 text-[#00f0ff] font-['Orbitron'] text-sm font-bold tracking-widest hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] transition-all duration-300"
              >
                <span>LATEST NEWS</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
              <StatCard value="386" label="Players" delay="0ms" />
              <StatCard value="4.9★" label="Rating" delay="100ms" />
              <StatCard value="200+" label="Missions" delay="200ms" />
              <StatCard value="FREE" label="To Play" delay="300ms" />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#181818] to-transparent" />
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 md:py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#ff003c]" />
              <span className="font-mono text-[#ff003c] text-xs tracking-[0.4em]">CORE SYSTEMS</span>
            </div>
            <h2 className="font-['Orbitron'] text-2xl md:text-4xl font-black text-white uppercase">
              GAME <span className="text-[#ff003c]">FEATURES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
            { icon: '⚔️', title: '6 Classes', desc: 'Longrange, 1 Hit, Stun, UM, SH — each with unique Skywar skills and distinct EVA, ACCU, ATK, DEF builds.', accent: '#ff003c' },
            { icon: '🏆', title: 'Max Level 300', desc: 'Unlimited Reborn system with item & stat rewards. Push beyond limits with no ceiling on your grind.', accent: '#00f0ff' },
            { icon: '⚡', title: 'EXP Rate', desc: 'Mid Rate Item & Gold drops. Level fast on Sayonara maps 1, 2, 3 — multi portal available at Market.', accent: '#ff003c' },
            { icon: '🔧', title: 'Max Upgrade +15', desc: 'Crafting, Reform, Seal, Dual Seal Cards enabled. Hunt Base and NPC Trade for rare card acquisition.', accent: '#00f0ff' },
            { icon: '🌐', title: 'PVP & War Modes', desc: 'Club War (Mon–Sat), Tyranny War every 4 hours, and Free PK zones. MMR & Top Guild ranking systems.', accent: '#ff003c' },
            { icon: '🎯', title: 'Fair & Balanced', desc: 'No edited or service items. No spoonfeed. No bias staff. Long-term dedicated server and team.', accent: '#00f0ff' },
          ].map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
          </div>
        </div>
      </section>

      {/* ── TRAILER SECTION ── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f0f0f]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,60,0.5) 2px, rgba(255,0,60,0.5) 4px)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#00f0ff]" />
            <span className="font-mono text-[#00f0ff] text-xs tracking-[0.4em]">OFFICIAL TRAILER</span>
            <div className="h-[1px] w-8 bg-[#00f0ff]" />
          </div>
          <h2 className="font-['Orbitron'] text-2xl md:text-4xl font-black text-white uppercase mb-10">
            ENTER THE <span className="text-[#00f0ff]">GRID</span>
          </h2>

          {/* Video placeholder */}
          <div className="relative mx-auto max-w-4xl aspect-video border border-[#ff003c]/40 bg-[#0a0a0a] overflow-hidden group cursor-pointer hover:border-[#ff003c]/80 transition-all duration-500">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 border-2 border-[#ff003c] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_40px_rgba(255,0,60,0.5)]">
                <div className="w-0 h-0 border-l-[28px] border-l-[#ff003c] border-y-[16px] border-y-transparent ml-2" />
              </div>
              <p className="font-['Orbitron'] text-xs tracking-widest text-[#555] mt-6">WATCH TRAILER — 4K</p>
            </div>
            <div className="absolute top-4 left-4 font-mono text-[#ff003c]/40 text-xs">REC ●</div>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff003c]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff003c]/50 to-transparent" />
            {/* Fake scanlines */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[#ff003c] text-xs tracking-[0.4em] mb-4">▶ JOIN THE MOVEMENT</p>
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-black text-white uppercase mb-6 leading-tight">
            READY TO <span className="text-[#ff003c]">SURVIVE</span>?
          </h2>
          <p className="text-[#666] font-mono text-sm leading-relaxed mb-10">
            Join 300+ players already fighting for the megacity. Free to download. Free to play.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/download"
              className="px-10 py-4 bg-[#ff003c] text-white font-['Orbitron'] text-sm font-bold tracking-widest hover:shadow-[0_0_40px_rgba(255,0,60,0.5)] transition-all duration-300 active:scale-95"
            >
              PLAY FREE NOW
            </Link>
            <Link
              to="/donate"
              className="px-10 py-4 border border-[#333] text-[#777] font-['Orbitron'] text-sm font-bold tracking-widest hover:border-[#ff003c]/50 hover:text-white transition-all duration-300"
            >
              SUPPORT US
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}