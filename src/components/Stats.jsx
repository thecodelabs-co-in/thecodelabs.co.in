export function Stats({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="stats-strip" aria-label="Highlights">
      <div className="container">
        <ul className="stats-grid">
          {items.map((s) => (
            <li key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
