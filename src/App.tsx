import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Announcements from './pages/Announcements'
import Download from './pages/Download'
import Donate from './pages/Donate'
import GameFeatures from './pages/GameFeatures'

function NavBar({ muted, toggleMute }: { muted: boolean; toggleMute: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

useEffect(() => {
  const timer = setTimeout(() => setMenuOpen(false), 0)
  return () => clearTimeout(timer)
}, [location])

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/features', label: 'FEATURES' },
    { to: '/announcements', label: 'ANNOUNCEMENTS' },
    { to: '/download', label: 'DOWNLOAD' },
    { to: '/donate', label: 'DONATE' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#ff003c]/30' : 'bg-transparent'
      }`}
    >
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ff003c] to-transparent w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-[#ff003c] rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
              <div className="absolute inset-0 w-8 h-8 border border-[#00f0ff]/40 rotate-12 group-hover:rotate-[192deg] transition-transform duration-700 delay-75" />
            </div>
            <span className="font-['Orbitron'] text-lg md:text-xl font-black tracking-widest text-white group-hover:text-[#ff003c] transition-colors duration-300">
              SEPTOMIC<span className="text-[#ff003c]">://</span>RAN ONLINE
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-['Orbitron'] text-xs font-bold tracking-[0.2em] transition-all duration-300 relative group ${
                    isActive ? 'text-[#ff003c]' : 'text-[#a0a0a0] hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-[1px] bg-[#ff003c] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-4 border-l border-[#ff003c]/30 pl-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[#333] hover:border-[#ff003c] flex items-center justify-center text-[#a0a0a0] hover:text-[#ff003c] transition-all duration-300 hover:shadow-[0_0_12px_#ff003c80] group"
                title="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[#333] hover:border-[#00f0ff] flex items-center justify-center text-[#a0a0a0] hover:text-[#00f0ff] transition-all duration-300 hover:shadow-[0_0_12px_#00f0ff80]"
                title="Discord"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.103.12 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              {/* Mute button */}
              <button
                onClick={toggleMute}
                className="w-8 h-8 border border-[#333] hover:border-[#ff003c]/60 flex items-center justify-center text-[#555] hover:text-[#ff003c] transition-all duration-300"
                title={muted ? 'Unmute' : 'Mute'}
              >
                {muted ? (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m0 0l-3-3m3 3l3-3M9 9H4.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H9l3 3V6L9 9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.07 4.929a10 10 0 010 14.142" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile: mute + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleMute}
              className="w-8 h-8 border border-[#333] flex items-center justify-center text-[#555]"
            >
              {muted ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12M9 9H4.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H9l3 3V6L9 9z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            >
              <span className={`block h-[2px] bg-[#ff003c] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
              <span className={`block h-[2px] bg-[#ff003c] transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
              <span className={`block h-[2px] bg-[#ff003c] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[400px] border-b border-[#ff003c]/30' : 'max-h-0'
        }`}
      >
        <div className="bg-[#0d0d0d]/98 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-['Orbitron'] text-sm font-bold tracking-[0.2em] py-2 border-b border-[#1a1a1a] transition-colors duration-300 ${
                  isActive ? 'text-[#ff003c]' : 'text-[#a0a0a0]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="flex gap-4 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-[#ff003c] transition-colors duration-300 flex items-center gap-2 font-['Orbitron'] text-xs tracking-widest">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              FACEBOOK
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-[#00f0ff] transition-colors duration-300 flex items-center gap-2 font-['Orbitron'] text-xs tracking-widest">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.103.12 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
              DISCORD
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function AudioPlayer({ muted }: { muted: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // Handle mute/unmute and set volume
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.muted = muted
    audioRef.current.volume = 1.0 // Set volume programmatically
    console.log('Mute state changed to:', muted)
  }, [muted])

  // Auto-play on first ANY user interaction
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const attemptPlay = () => {
      if (isPlaying) return
      
      console.log('Attempting to play audio...')
      audio.play()
        .then(() => {
          console.log('Audio is playing!')
          setIsPlaying(true)
        })
        .catch((err: Error) => {
          console.log('Play failed:', err.message)
        })
    }

    // Try to play immediately (might fail due to browser policy)
    attemptPlay()

    // Also listen for user interactions on the entire window
    const handleInteraction = () => {
      attemptPlay()
    }

    window.addEventListener('click', handleInteraction)
    window.addEventListener('touchstart', handleInteraction)
    window.addEventListener('keydown', handleInteraction)
    
    return () => {
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
    }
  }, [isPlaying])

  return (
    <audio 
      ref={audioRef} 
      loop 
      preload="auto"
    >
      <source src="/music/theme.ogg" type="audio/ogg" />
      <source src="/music/theme.mp3" type="audio/mpeg" />
    </audio>
  )
}

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])
  return null
}

export default function App() {
  const [muted, setMuted] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-[#181818] text-white overflow-x-hidden">
        <AudioPlayer muted={muted} />
        <ScrollToTop />
        <NavBar muted={muted} toggleMute={() => setMuted(m => !m)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<GameFeatures />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/download" element={<Download />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#ff003c]/20 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-['Orbitron'] text-[#ff003c] font-black text-lg tracking-widest">SEPTOMIC://RAN ONLINE</p>
          <p className="text-[#555] text-xs tracking-widest mt-1 font-mono">© 2026 ALL RIGHTS RESERVED</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#ff003c] transition-colors duration-300 font-['Orbitron'] text-xs tracking-widest">FACEBOOK</a>
          <span className="text-[#333]">|</span>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-[#555] hover:text-[#00f0ff] transition-colors duration-300 font-['Orbitron'] text-xs tracking-widest">DISCORD</a>
        </div>
        <p className="text-[#333] text-xs font-mono">GAME.VER 7 // ONLINE</p>
      </div>
    </footer>
  )
}