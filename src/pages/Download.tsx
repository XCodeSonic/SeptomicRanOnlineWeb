import { useState } from 'react'

const WINDOWS_DRIVE_LINK = 'https://drive.google.com/file/d/1kQL8wKI6D2CIN_oP-V1c_qQ_R01IhvLN/view'
const WINDOWS_MEGA_LINK = 'https://mega.nz/file/6BtDjJwT#b-Y36KGA1Bl-rkgcTfCX13PtsBZ7F645eJH9Cz2MtBw'

const PLATFORMS = [
  {
    id: 'windows',
    label: 'WINDOWS',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.949" />
      </svg>
    ),
    version: 'v7',
    size: '2.09 GB',
    min: 'Windows 10/11',
    rec: 'NULL',
    comingSoon: false,
    driveLink: WINDOWS_DRIVE_LINK,
    megaLink: WINDOWS_MEGA_LINK,
  },
  {
    id: 'android',
    label: 'ANDROID',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M6 18L3.269 5.143A1 1 0 0 1 4.242 4h15.516a1 1 0 0 1 .973 1.143L18 18H6zm0 0v3h12v-3M9 9h.01M15 9h.01M8.5 13.5s1 1.5 3.5 1.5 3.5-1.5 3.5-1.5" />
        <path d="M8 4L6.5 1M16 4l1.5-3" />
      </svg>
    ),
    version: 'Coming Soon',
    size: 'TBA',
    min: 'Android 10+',
    rec: 'Android 13+ / 6GB RAM',
    comingSoon: true,
    driveLink: null,
    megaLink: null,
  },
  {
    id: 'ios',
    label: 'iOS',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.3-2.17 3.87.03 3.06 2.65 4.08 2.68 4.09l-.06.16zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    version: 'Coming Soon',
    size: 'TBA',
    min: 'iOS 16+',
    rec: 'iPhone 13+ / iPad Pro',
    comingSoon: true,
    driveLink: null,
    megaLink: null,
  },
]

const SYS_REQS = [
  { label: 'OS', min: 'Windows 10', rec: 'Windows 11' },
  { label: 'CPU', min: 'Intel i5-9600 / Ryzen 5 3600', rec: 'Intel i7-12700K / Ryzen 9 5900X' },
  { label: 'RAM', min: '8 GB', rec: '8 GB' },
  { label: 'GPU', min: 'GTX 1070 / RX 5700', rec: 'RTX 3080 / RX 6800 XT' },
  { label: 'STORAGE', min: '10 GB SSD', rec: '10 GB NVMe SSD' },
  { label: 'NETWORK', min: 'Broadband required', rec: 'Broadband required' },
]

export default function Download() {
  const [selected, setSelected] = useState('windows')

  const active = PLATFORMS.find(p => p.id === selected)!

  return (
    <main className="pt-24 md:pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#ff003c]" />
            <span className="font-mono text-[#ff003c] text-xs tracking-[0.4em]">DEPLOY PACKAGE</span>
          </div>
          <h1 className="font-['Orbitron'] text-3xl md:text-5xl font-black text-white uppercase">
            DOWN<span className="text-[#ff003c]">LOAD</span>
          </h1>
          <p className="text-[#555] font-mono text-sm mt-3">
            // SELECT PLATFORM — FREE TO PLAY — NO CREDIT CARD REQUIRED
          </p>
        </div>

        {/* Platform selector */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {PLATFORMS.map(p => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`relative border p-5 flex flex-col items-center gap-3 transition-all duration-300 ${
                selected === p.id
                  ? 'border-[#ff003c] bg-[#ff003c]/10 text-[#ff003c]'
                  : 'border-[#1e1e1e] bg-[#0f0f0f] text-[#555] hover:border-[#333] hover:text-[#888]'
              }`}
            >
              {p.comingSoon && (
                <span className="absolute top-0 right-0 bg-[#ffcc00] text-black font-['Orbitron'] text-[8px] font-black px-2 py-0.5 tracking-widest">
                  SOON
                </span>
              )}
              {p.icon}
              <span className="font-['Orbitron'] text-[10px] font-bold tracking-[0.2em]">{p.label}</span>
            </button>
          ))}
        </div>

        {/* Download card */}
        <div className="border border-[#ff003c]/40 bg-[#0f0f0f] relative overflow-hidden mb-10">
          <div className="h-[2px] bg-gradient-to-r from-[#ff003c] via-[#ff003c]/50 to-transparent" />
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">

              {/* Icon */}
              <div className="text-[#ff003c] flex-shrink-0">
                <div className="w-16 h-16 border border-[#ff003c]/50 flex items-center justify-center">
                  {active.icon}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="font-['Orbitron'] text-lg font-black text-white uppercase">{active.label} BUILD</h2>
                  <span className="font-mono text-[10px] text-[#00f0ff] border border-[#00f0ff]/30 px-2 py-0.5">{active.version}</span>
                </div>
                <div className="flex flex-wrap gap-6 mt-2 text-[#555] font-mono text-xs">
                  <span>SIZE: <span className="text-[#888]">{active.size}</span></span>
                  <span>MIN: <span className="text-[#888]">{active.min}</span></span>
                </div>
                <div className="mt-1 font-mono text-xs text-[#555]">
                  REC: <span className="text-[#888]">{active.rec}</span>
                </div>
                {!active.comingSoon && (
                  <p className="mt-2 font-mono text-[11px] text-[#444]">
                    ↗ Choose your preferred mirror below
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex-shrink-0 flex flex-col gap-3 w-full md:w-auto">
                {active.comingSoon ? (
                  <button
                    disabled
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-['Orbitron'] text-sm font-bold tracking-widest bg-[#1a1a1a] text-[#444] cursor-not-allowed border border-[#222]"
                  >
                    COMING SOON
                  </button>
                ) : (
                  <>
                    <a
                      href={active.driveLink!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 font-['Orbitron'] text-sm font-bold tracking-widest overflow-hidden bg-[#ff003c] text-white hover:shadow-[0_0_40px_rgba(255,0,60,0.5)] active:scale-95 transition-all duration-300"
                    >
                      <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      GOOGLE DRIVE
                      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    </a>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-[1px] bg-[#1e1e1e]" />
                      <span className="font-mono text-[10px] text-[#333] tracking-widest">OR</span>
                      <div className="flex-1 h-[1px] bg-[#1e1e1e]" />
                    </div>

                    <a
                      href={active.megaLink!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 font-['Orbitron'] text-sm font-bold tracking-widest overflow-hidden border border-[#d90429] text-[#d90429] hover:bg-[#d90429]/10 hover:shadow-[0_0_30px_rgba(217,4,41,0.3)] active:scale-95 transition-all duration-300"
                    >
                      <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      MEGA
                      <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    </a>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* System Requirements */}
        {selected === 'windows' && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#00f0ff]" />
              <span className="font-mono text-[#00f0ff] text-xs tracking-[0.4em]">SYSTEM REQUIREMENTS</span>
            </div>
            <div className="border border-[#1e1e1e] bg-[#0f0f0f] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0a0a0a] border-b border-[#1e1e1e]">
                <div className="px-5 py-3 font-['Orbitron'] text-[10px] text-[#444] tracking-widest">SPEC</div>
                <div className="px-5 py-3 font-['Orbitron'] text-[10px] text-[#555] tracking-widest">MINIMUM</div>
                <div className="px-5 py-3 font-['Orbitron'] text-[10px] text-[#00f0ff] tracking-widest">RECOMMENDED</div>
              </div>
              {SYS_REQS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 border-b border-[#1a1a1a] last:border-0 hover:bg-[#111] transition-colors duration-200"
                >
                  <div className="px-5 py-4 font-['Orbitron'] text-[10px] text-[#ff003c] tracking-widest">{row.label}</div>
                  <div className="px-5 py-4 font-mono text-xs text-[#666]">{row.min}</div>
                  <div className="px-5 py-4 font-mono text-xs text-[#999]">{row.rec}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile coming soon */}
        {(selected === 'android' || selected === 'ios') && (
          <div className="border border-[#ffcc00]/20 bg-[#ffcc00]/5 p-6 text-center">
            <p className="font-['Orbitron'] text-xs text-[#ffcc00] tracking-widest mb-2">IN DEVELOPMENT</p>
            <p className="font-mono text-sm text-[#666]">
              The {active.label} version is currently in development. Join our Discord to get notified when it launches.
            </p>
            <a
              href="https://discord.gg/ee2ZVawmVs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 font-['Orbitron'] text-xs tracking-widest text-[#00f0ff] border border-[#00f0ff]/30 px-5 py-2 hover:bg-[#00f0ff]/10 transition-all duration-300"
            >
              JOIN DISCORD FOR UPDATES
            </a>
          </div>
        )}

        {/* Note */}
        <p className="mt-8 text-[#444] font-mono text-xs leading-relaxed border-l-2 border-[#ff003c]/30 pl-4">
          ⚠ Windows installer (.exe) is available on Google Drive and MEGA. Your browser may warn you before downloading — this is normal for .exe files.
          An internet connection is required for initial activation and online features.
        </p>

      </div>
    </main>
  )
}