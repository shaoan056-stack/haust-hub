export default function MapModule() {
  return (
    <section className="module-section" id="map">
      <div className="section-header">
        <div className="section-icon section-icon--violet">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
            <line x1="8" y1="2" x2="8" y2="18" />
            <line x1="16" y1="6" x2="16" y2="22" />
          </svg>
        </div>
        <div>
          <h2 className="section-title">校园地图</h2>
          <p className="section-subtitle">Campus Navigation</p>
        </div>
      </div>

      <div className="map-container">
        <img src="/campus-map.jpg" alt="HAUST 校园地图" className="map-image" />
      </div>
    </section>
  )
}
