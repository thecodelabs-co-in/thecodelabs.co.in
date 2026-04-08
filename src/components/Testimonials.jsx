export function Testimonials({ title, lead, items = [] }) {
  if (!items.length) return null;
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <p className="section-eyebrow">Social proof</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-lead">{lead}</p>
        <ul className="testimonial-grid">
          {items.map((t) => (
            <li key={t.quote} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-meta">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
