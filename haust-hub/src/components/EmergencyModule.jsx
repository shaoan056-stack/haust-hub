const emergencyItems = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V8H6a2 2 0 0 1-2-2c0-2 2-4 4-4s4 2 4 4v4" />
        <path d="M4 6v12c0 1.1.9 2 2 2h14v-4h-4" />
        <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
      </svg>
    ),
    tag: '应急',
    tagClass: 'card-tag--amber',
    iconClass: 'card-icon--amber',
    title: '常用药品',
    desc: '感冒药、退烧药、肠胃药、创可贴等应急药品，解燃眉之急',
    wechat: 'wxid_med_haust',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    tag: '应急',
    tagClass: 'card-tag--amber',
    iconClass: 'card-icon--amber',
    title: '小型电器',
    desc: '充电宝、台灯、电风扇、吹风机等常用电器，应急周转借用',
    wechat: 'wxid_elec_haust',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M12 8v12" />
        <path d="M3 14h18" />
        <path d="M8 3l4 5 4-5" />
      </svg>
    ),
    tag: '应急',
    tagClass: 'card-tag--amber',
    iconClass: 'card-icon--amber',
    title: '桌椅板凳',
    desc: '折叠桌、椅凳、书架等临时借用，应对宿舍临时需要',
    wechat: 'wxid_furn_haust',
  },
]

export default function EmergencyModule() {
  return (
    <section className="module-section" id="emergency">
      <div className="section-header">
        <div className="section-icon section-icon--amber">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div>
          <h2 className="section-title">应急刚需互助</h2>
          <p className="section-subtitle">Emergency Mutual Aid</p>
        </div>
      </div>

      <div className="card-grid card-grid--3">
        {emergencyItems.map((item, i) => (
          <div className="card" key={i}>
            <div className="card-header">
              <div className={`card-icon ${item.iconClass}`}>{item.icon}</div>
              <span className={`card-tag ${item.tagClass}`}>{item.tag}</span>
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
            <a href={`weixin://contacts/profile/${item.wechat}`} className="card-contact">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.952-7.062-6.122zm-2.18 2.769c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982z" />
              </svg>
              微信: {item.wechat}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
