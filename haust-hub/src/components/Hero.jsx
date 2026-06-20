export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        河南科技大学 · 学生互助平台
      </div>
      <h1>
        互助<span className="accent">连通</span>校园
      </h1>
      <p className="hero-subtitle">
        学习资源、应急物资、兼职机会、校园导航 —— 一站式互助服务，让每位河科大学子都能找到所需
      </p>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-value">4</div>
          <div className="hero-stat-label">服务模块</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">7×24</div>
          <div className="hero-stat-label">互助响应</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-value">Kaiyuan</div>
          <div className="hero-stat-label">开元校区</div>
        </div>
      </div>
    </section>
  )
}
