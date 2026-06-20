import './App.css'
import Hero from './components/Hero.jsx'
import StudyModule from './components/StudyModule.jsx'
import EmergencyModule from './components/EmergencyModule.jsx'
import PartTimeModule from './components/PartTimeModule.jsx'
import MapModule from './components/MapModule.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />

      <div className="app">
        <nav className="nav">
          <div className="nav-brand">
            <div className="nav-logo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <span className="nav-title">HAUST 互助中心</span>
          </div>
          <div className="nav-links">
            <a href="#study" className="nav-link">学习服务</a>
            <a href="#emergency" className="nav-link">应急互助</a>
            <a href="#parttime" className="nav-link">兼职服务</a>
            <a href="#map" className="nav-link">校园地图</a>
          </div>
        </nav>

        <Hero />
        <StudyModule />
        <EmergencyModule />
        <PartTimeModule />
        <MapModule />
        <Footer />
      </div>
    </>
  )
}
