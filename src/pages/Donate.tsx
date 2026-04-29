import { useState } from 'react'

const TIERS = [
  {
    id: 'supporter',
    label: 'SUPPORTER',
    amount: 5,
    color: '#00f0ff',
    glow: 'rgba(0,240,255,0.3)',
    perks: ['Supporter badge in-game', 'Discord role', 'Early access to patch notes'],
    popular: false,
  },
  {
    id: 'champion',
    label: 'CHAMPION',
    amount: 15,
    color: '#ff003c',
    glow: 'rgba(255,0,60,0.4)',
    perks: ['Champion badge', 'Exclusive cosmetic skin', 'Discord role', 'Name in credits', 'Monthly Q&A access'],
    popular: true,
  },
  {
    id: 'legend',
    label: 'LEGEND',
    amount: 50,
    color: '#ffcc00',
    glow: 'rgba(255,204,0,0.4)',
    perks: ['Legend badge', '3 exclusive skins', 'Custom player title', 'Dev Discord channel access', 'Name in credits', 'Annual merch pack'],
    popular: false,
  },
]

const IMPACT = [
  { icon: '🛡️', label: 'Server costs', desc: 'Keeps 128-player servers running globally' },
  { icon: '🧑‍💻', label: 'Dev team', desc: 'Supports our indie team of 12 developers' },
  { icon: '🎮', label: 'New content', desc: 'Funds new districts, missions, and weapons' },
  { icon: '🔒', label: 'Anti-cheat', desc: 'Maintains our NexusGuard cheat detection' },
]

export default function Donate() {
  const [selected, setSelected] = useState('champion')
  const [custom, setCustom] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleDonate = () => {
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const activeTier = TIERS.find(t => t.id === selected)

  return (
    <main className="pt-24 md:pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#ff003c]" />
            <span className="font-mono text-[#ff003c] text-xs tracking-[0.4em]">FUND THE CAUSE</span>
          </div>
          <h1 className="font-['Orbitron'] text-3xl md:text-5xl font-black text-white uppercase">
            SUPPORT <span className="text-[#ff003c]">US</span>
          </h1>
          <p className="text-[#555] font-mono text-sm mt-3 max-w-xl leading-relaxed">
            // WE'RE A SMALL INDIE TEAM. YOUR SUPPORT KEEPS THE SERVERS ALIVE AND THE CONTENT COMING. 
            EVERY CREDIT COUNTS.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Tiers */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-['Orbitron'] text-xs text-[#444] tracking-widest">SELECT TIER</span>
            </div>

            <div className="flex flex-col gap-4">
              {TIERS.map(tier => (
                <button
                  key={tier.id}
                  onClick={() => setSelected(tier.id)}
                  className={`relative text-left border p-5 md:p-6 transition-all duration-400 overflow-hidden group ${
                    selected === tier.id
                      ? 'border-[#ff003c]/60 bg-[#0f0f0f]'
                      : 'border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2a2a2a]'
                  }`}
                  style={
                    selected === tier.id
                      ? { boxShadow: `0 0 30px ${activeTier?.glow || 'transparent'}` }
                      : {}
                  }
                >
                  {tier.popular && (
                    <span className="absolute top-0 right-0 bg-[#ff003c] text-white font-['Orbitron'] text-[9px] font-black tracking-widest px-3 py-1">
                      POPULAR
                    </span>
                  )}

                  {/* Left color stripe */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] transition-opacity duration-300"
                    style={{ background: tier.color, opacity: selected === tier.id ? 1 : 0.2 }}
                  />

                  <div className="flex items-start justify-between gap-4 pl-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-3 h-3 rounded-full border-2 transition-all duration-300"
                          style={{
                            borderColor: tier.color,
                            background: selected === tier.id ? tier.color : 'transparent',
                            boxShadow: selected === tier.id ? `0 0 8px ${tier.color}` : 'none',
                          }}
                        />
                        <span className="font-['Orbitron'] text-xs font-bold tracking-[0.3em]" style={{ color: tier.color }}>
                          {tier.label}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {tier.perks.map((perk, i) => (
                          <span key={i} className="font-mono text-[11px] text-[#555] flex items-center gap-1.5">
                            <span style={{ color: tier.color }}>▸</span> {perk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="font-['Orbitron'] text-2xl font-black text-white">${tier.amount}</span>
                      <span className="block font-mono text-[10px] text-[#444]">/ month</span>
                    </div>
                  </div>
                </button>
              ))}

              {/* Custom */}
              <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-5 md:p-6">
                <p className="font-['Orbitron'] text-xs text-[#444] tracking-widest mb-3">CUSTOM AMOUNT</p>
                <div className="flex items-center gap-3">
                  <span className="font-['Orbitron'] text-white text-lg">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="0.00"
                    value={custom}
                    onChange={e => {
                      setCustom(e.target.value)
                      setSelected('')
                    }}
                    onClick={() => setSelected('')}
                    className="flex-1 bg-transparent border-b border-[#333] focus:border-[#ff003c] outline-none text-white font-['Orbitron'] text-lg pb-1 transition-colors duration-300 placeholder-[#333]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary + action */}
          <div className="md:col-span-2">
            <div className="border border-[#ff003c]/30 bg-[#0f0f0f] p-6 sticky top-24">
              <div className="h-[2px] bg-gradient-to-r from-[#ff003c] to-transparent mb-6 -mx-6 -mt-6" />

              <p className="font-['Orbitron'] text-xs text-[#444] tracking-widest mb-4">SUMMARY</p>

              {selected && activeTier ? (
                <>
                  <div className="border border-[#1a1a1a] p-4 mb-4">
                    <p className="font-['Orbitron'] text-xs font-bold mb-1" style={{ color: activeTier.color }}>
                      {activeTier.label} TIER
                    </p>
                    <p className="font-['Orbitron'] text-2xl font-black text-white">${activeTier.amount}<span className="text-sm font-normal text-[#444]">/mo</span></p>
                  </div>
                  <div className="space-y-2 mb-6">
                    {activeTier.perks.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 font-mono text-xs text-[#666]">
                        <span className="text-[#ff003c] mt-0.5">✓</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : custom ? (
                <div className="border border-[#1a1a1a] p-4 mb-6">
                  <p className="font-['Orbitron'] text-xs font-bold text-[#888] mb-1">CUSTOM</p>
                  <p className="font-['Orbitron'] text-2xl font-black text-white">${custom}<span className="text-sm font-normal text-[#444]">/mo</span></p>
                </div>
              ) : (
                <p className="text-[#444] font-mono text-xs mb-6">Select a tier to continue...</p>
              )}

              <button
                onClick={handleDonate}
                disabled={!selected && !custom}
                className={`w-full py-4 font-['Orbitron'] text-sm font-bold tracking-widest transition-all duration-300 relative overflow-hidden group ${
                  !selected && !custom
                    ? 'bg-[#1a1a1a] text-[#444] cursor-not-allowed'
                    : submitted
                    ? 'bg-[#00f0ff]/20 border border-[#00f0ff]/50 text-[#00f0ff]'
                    : 'bg-[#ff003c] text-white hover:shadow-[0_0_30px_rgba(255,0,60,0.5)] active:scale-95'
                }`}
              >
                {submitted ? (
                  '✓ THANK YOU!'
                ) : (
                  <>
                    <span className="relative z-10">DONATE NOW</span>
                    {(selected || custom) && (
                      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    )}
                  </>
                )}
              </button>

              <p className="text-[#333] font-mono text-[10px] text-center mt-4 leading-relaxed">
                Secure payment via Stripe. Cancel anytime.<br />
                No refunds on digital perks delivered.
              </p>
            </div>
          </div>
        </div>

        {/* Impact section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-[#00f0ff]" />
            <span className="font-mono text-[#00f0ff] text-xs tracking-[0.4em]">YOUR IMPACT</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {IMPACT.map((item, i) => (
              <div key={i} className="border border-[#1a1a1a] bg-[#0f0f0f] p-5 group hover:border-[#ff003c]/30 transition-all duration-300">
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="font-['Orbitron'] text-xs font-bold text-white tracking-widest mb-2 uppercase">{item.label}</p>
                <p className="text-[#555] font-mono text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}