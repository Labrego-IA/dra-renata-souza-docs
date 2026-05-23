export function Logo({ size = 'default' }) {
  const heights = { small: 14, default: 18, large: 24 }
  const h = heights[size] || heights.default

  return (
    <img src="/logo-labrego.png" alt="Labrego IA" style={{ height: h, display: 'block' }} />
  )
}

export function PageHeader({ tag, children }) {
  return (
    <div className="page-header">
      <span className="page-tag">{tag}</span>
      <span className="page-logo"><Logo /></span>
      {children}
    </div>
  )
}

export function SectionHero({ num, title, description, style }) {
  return (
    <div className="section-hero" style={style}>
      {num && <div className="num">{num}</div>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
