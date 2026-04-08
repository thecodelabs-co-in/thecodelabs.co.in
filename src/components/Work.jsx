export function Work({ title, lead, items = [] }) {
  return (
    <section id="work" className="section work">
      <div className="container">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-lead">{lead}</p>
        <div className="work-grid">
          {items.map((item) => (
            <article key={item.title} className="work-card">
              <div className="work-media">
                <img src={item.image} alt={item.imageAlt || ''} loading="lazy" />
                <span className="work-category">{item.category}</span>
              </div>
              <div className="work-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
