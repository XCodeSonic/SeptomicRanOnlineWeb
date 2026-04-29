import { useState } from 'react'

const ANNOUNCEMENTS = [
  {
    id: 1,
    tag: 'PATCH NOTES',
    tagColor: '#00f0ff',
    date: 'APR 28, 2026',
    title: 'Update v2.6.1 — Shadow Protocol',
    desc: 'New stealth mechanics overhaul, 12 new cyberware implants, bug fixes for GPU memory leak on NVIDIA cards, and balance changes to faction combat AI.',
    pinned: true,
  },
  {
    id: 2,
    tag: 'EVENT',
    tagColor: '#ff003c',
    date: 'APR 20, 2026',
    title: 'Neon Uprising — Limited Event',
    desc: 'Join the 72-hour faction war event. Earn exclusive cosmetics, rare weapon skins, and the legendary "Ghost of District 7" title. Limited time only.',
    pinned: true,
  },
  {
    id: 3,
    tag: 'DEV BLOG',
    tagColor: '#ffcc00',
    date: 'APR 15, 2026',
    title: 'Roadmap Q2 2026 Revealed',
    desc: `We're dropping our full Q2 roadmap. Expect a new district expansion, vehicle combat, the reworked reputation system, and co-op story missions.`,
    pinned: false,
  },
  {
    id: 4,
    tag: 'COMMUNITY',
    tagColor: '#ff003c',
    date: 'APR 10, 2026',
    title: '100,000 Players Milestone',
    desc: 'We hit 100K active players! To celebrate, every account gets a free Legendary Weapon Crate and the exclusive "Early Riser" badge.',
    pinned: false,
  },
  {
    id: 5,
    tag: 'PATCH NOTES',
    tagColor: '#00f0ff',
    date: 'APR 04, 2026',
    title: 'Hotfix v2.5.9 — Critical Exploit Fix',
    desc: 'Emergency patch addressing a critical duplication exploit in the marketplace. All duplicated items have been removed and affected accounts reviewed.',
    pinned: false,
  },
  {
    id: 6,
    tag: 'DEV BLOG',
    tagColor: '#ffcc00',
    date: 'MAR 28, 2026',
    title: 'Behind the Sound: The Music of Nexus Zero',
    desc: 'Our lead audio engineer shares how the cyberpunk soundtrack was composed — blending industrial synth, lo-fi beats, and live orchestra.',
    pinned: false,
  },
]

const TAGS = ['ALL', 'PATCH NOTES', 'EVENT', 'DEV BLOG', 'COMMUNITY']

export default function Announcements() {
  const [filter, setFilter] = useState('ALL')

  const filtered = ANNOUNCEMENTS.filter(a => filter === 'ALL' || a.tag === filter)

  return (
    <main className="pt-24 md:pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#ff003c]" />
            <span className="font-mono text-[#ff003c] text-xs tracking-[0.4em]">TRANSMISSION LOG</span>
          </div>
          <h1 className="font-['Orbitron'] text-3xl md:text-5xl font-black text-white uppercase">
            ANNOUNCE<span className="text-[#ff003c]">MENTS</span>
          </h1>
          <p className="text-[#555] font-mono text-sm mt-3">
            // SYSTEM BROADCAST — LATEST UPDATES FROM THE NEXUS TEAM
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`font-['Orbitron'] text-[10px] tracking-[0.2em] px-4 py-2 border transition-all duration-300 ${
                filter === tag
                  ? 'border-[#ff003c] bg-[#ff003c]/10 text-[#ff003c]'
                  : 'border-[#222] text-[#555] hover:border-[#444] hover:text-[#888]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {filtered.map((item, i) => (
            <article
              key={item.id}
              className="group border border-[#1e1e1e] bg-[#0f0f0f] p-6 relative overflow-hidden hover:border-[#ff003c]/40 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Pinned badge */}
              {item.pinned && (
                <div className="absolute top-0 right-0 bg-[#ff003c] text-white font-['Orbitron'] text-[9px] font-bold tracking-widest px-3 py-1">
                  PINNED
                </div>
              )}

              {/* Hover line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#ff003c] to-[#00f0ff] transition-all duration-700" />
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ff003c]/0 group-hover:bg-[#ff003c]/60 transition-all duration-300" />

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-['Orbitron'] text-[9px] font-bold tracking-[0.3em] px-2 py-1 border"
                      style={{ color: item.tagColor, borderColor: `${item.tagColor}50`, background: `${item.tagColor}10` }}
                    >
                      {item.tag}
                    </span>
                    <span className="font-mono text-[#444] text-xs">{item.date}</span>
                  </div>
                  <h2 className="font-['Orbitron'] text-base md:text-lg font-bold text-white group-hover:text-[#ff003c] transition-colors duration-300 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-[#666] font-mono text-sm leading-relaxed">{item.desc}</p>
                </div>

                <div className="md:w-12 flex md:flex-col items-center md:justify-center text-[#333] group-hover:text-[#ff003c] transition-colors duration-300 self-center">
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#444] font-mono text-sm">
            // NO TRANSMISSIONS FOUND FOR THIS CATEGORY
          </div>
        )}

        {/* Load more */}
        <div className="mt-10 text-center">
          <button className="font-['Orbitron'] text-xs tracking-widest text-[#444] border border-[#222] px-8 py-3 hover:border-[#ff003c]/40 hover:text-[#ff003c] transition-all duration-300">
            LOAD MORE TRANSMISSIONS
          </button>
        </div>
      </div>
    </main>
  )
}