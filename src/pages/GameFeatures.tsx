export default function GameFeatures() {
  const sections = [
    {
      title: 'SERVER INFO',
      color: '#ff003c',
      items: [
        'SKYWAR / SEPTOMIC GAMEPLAY',
        '6 CLASSES — LR, 1HIT, STUN, UM, SH',
        'EVA, ACCU, ATTACK, DEFENSE BUILDS',
        'MAX LEVEL 300',
        'LEVELING MAP: SAYONARA 1, 2, 3 (MULTI PORTAL AT MARKET)',
        'UNLIMITED REBORN',
        'MAX UPGRADE +15',
        'HUNT BASE',
        'CODEX ENABLED',
        'CRAFTING ENABLED',
        'PANDORA ENABLED',
        'DAILY TASK ENABLED',
        'REBORN BASE WITH ITEM & STATS REWARDS',
        'REFORM, SEAL, DUAL SEAL CARDS [HUNT BASE & NPC TRADE]',
        'GUILD PERKS',
        'MAX RV CARDS',
        'NO EDITED OR SERVICE ITEMS',
        'NO SPOONFEED',
        'NO BIAS OR FAVORITISM — STAFF / TEAMS',
      ],
    },
    {
      title: 'CHARACTER EQUIPMENT',
      color: '#00f0ff',
      items: [
        'ARMORS', 'WEAPON', 'DECORATION', 'EARRINGS',
        'BELT', 'NECKLACE', 'BRACELET', 'ORNAMENT',
        'RINGS', 'CHARMS', 'VEHICLE',
      ],
    },
    {
      title: 'CHARACTER COSTUMES',
      color: '#ffcc00',
      items: [
        'ARMOR', 'WEAPON', 'SIDE DECORATION', 'SCARFS / CAPES',
        'AURA', 'WINGS', 'GUARDIAN SPIRITS', 'BATTLE WINGS',
        'MAGIC STONES', 'TRIUMPH CARDS',
      ],
    },
    {
      title: 'GAME FUNCTIONS',
      color: '#ff003c',
      items: [
        'IN GAME REGISTRATION',
        'IN GAME RANKING',
        'IN GAME GUIDES',
        'GAME TIME AUTO CONVERSION',
        'DAILY LOG IN ENABLED',
        'AUTO PILOT [ENABLED] F5',
        'AUTO REBORN [ENABLED] F5',
        'AUTO POTION [ENABLED] F6',
        'MMR RANKING SYSTEM',
        'TOP GUILD RANKING',
      ],
    },
    {
      title: 'PVP & WAR',
      color: '#00f0ff',
      items: [
        'PVP MAPS',
        'CLUB WAR [CW] — MONDAY TO SATURDAY',
        'TYRANNY WAR [TW] — EVERY 4 HOURS SERVER TIME',
        'FREE PK [FPK]',
      ],
    },
    {
      title: 'SERVER RATES',
      color: '#ffcc00',
      items: [
        'EXP RATE: HIGH',
        'GOLD DROP: MID',
        'ITEM DROP: MID',
        'LONG-TERM DEDICATED SERVER AND TEAMS',
      ],
    },
    {
      title: 'SERVER PURPOSES',
      color: '#ff003c',
      items: [
        'RELAXATION & STRESS RELIEF — Calm games that help you chill out',
        'CHALLENGE & SKILL BUILDING — Test your reflexes, strategy, or thinking',
        'CREATIVITY & SOCIAL FUN — Play with friends or family',
        'EXPLORATION & CURIOSITY',
        'LEARNING WHILE PLAYING',
      ],
    },
  ]

  return (
    <main className="pt-24 md:pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#ff003c]" />
            <span className="font-mono text-[#ff003c] text-xs tracking-[0.4em]">SYSTEM DATABASE</span>
          </div>
          <h1 className="font-['Orbitron'] text-3xl md:text-5xl font-black text-white uppercase">
            GAME <span className="text-[#ff003c]">FEATURES</span>
          </h1>
          <p className="text-[#555] font-mono text-sm mt-3">
            // COMPLETE SERVER INFORMATION — SEPTOMIC RAN ONLINE EP.7
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title} className="border border-[#1e1e1e] bg-[#0f0f0f] overflow-hidden">
              {/* Section header */}
              <div
                className="px-6 py-4 flex items-center gap-4"
                style={{ borderBottom: `1px solid ${section.color}30` }}
              >
                <div className="h-[2px] w-6" style={{ background: section.color }} />
                <h2
                  className="font-['Orbitron'] text-sm font-black tracking-[0.3em]"
                  style={{ color: section.color }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Items grid */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 group"
                  >
                    <span
                      className="mt-[5px] w-1.5 h-1.5 flex-shrink-0 rotate-45"
                      style={{ background: section.color }}
                    />
                    <span className="font-mono text-xs text-[#888] group-hover:text-white transition-colors duration-200 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 border border-[#ff003c]/30 bg-[#ff003c]/5 p-8 text-center">
          <p className="font-['Orbitron'] text-xs text-[#ff003c] tracking-widest mb-2">READY TO JOIN?</p>
          <p className="font-mono text-sm text-[#666] mb-6">Free to play. No pay-to-win. Pure skill and grind.</p>
          <a
            href="/download"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff003c] text-white font-['Orbitron'] text-sm font-bold tracking-widest hover:shadow-[0_0_40px_rgba(255,0,60,0.5)] transition-all duration-300 active:scale-95"
          >
            DOWNLOAD NOW
          </a>
        </div>

      </div>
    </main>
  )
}