export default function StudyModule() {
  return (
    <section className="module-section" id="study">
      <div className="section-header">
        <div className="section-icon section-icon--blue">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        </div>
        <div>
          <h2 className="section-title">学习服务</h2>
          <p className="section-subtitle">Academic Resources</p>
        </div>
      </div>

      <div className="card-grid card-grid--1">
        <a
          href="https://jwgl-haust-edu-cn-s.haust.edu.cn/eams/loginExt.action"
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <div className="card-link-inner">
            <div className="card-link-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <span className="card-link-title">河南科技大学教务系统</span>
            <span className="card-link-desc">课程查询 · 成绩管理 · 选课系统 · 考试安排</span>
          </div>
        </a>
      </div>
    </section>
  )
}
