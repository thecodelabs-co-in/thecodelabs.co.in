export function Services({ items = [] }) {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-lead">
          Practical engineering for products that need to ship and evolve.
        </p>
        <ul className="service-grid">
          {items.map((s) => (
            <li key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
