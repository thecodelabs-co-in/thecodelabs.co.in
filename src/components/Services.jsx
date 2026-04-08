function ServiceIcon({ name }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75 };
  switch (name) {
    case 'mobile':
      return (
        <svg {...common} aria-hidden="true">
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10 18h4" strokeLinecap="round" />
        </svg>
      );
    case 'design':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
          <path d="M12 12l7-4M12 12v10M12 12L5 8" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M7 18h10a4 4 0 0 0 0-8 1 1 0 0 0-1-1 5 5 0 0 0-9.7 1.7A3.5 3.5 0 0 0 7 18z" />
        </svg>
      );
    case 'cart':
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="9" cy="20" r="1.25" />
          <circle cx="18" cy="20" r="1.25" />
          <path d="M3 4h2l2 12h12l2-9H7" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 19V5M9 19v-6M14 19V9M19 19v-9" strokeLinecap="round" />
        </svg>
      );
    case 'web':
    default:
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 15h4" strokeLinecap="round" />
        </svg>
      );
  }
}

export function Services({ items = [] }) {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="section-eyebrow">Capabilities</p>
        <h2 className="section-title">Services</h2>
        <p className="section-lead">
          End-to-end product skills—so you can move from idea to launch without juggling five vendors.
        </p>
        <ul className="service-grid">
          {items.map((s) => (
            <li key={s.title} className="service-card">
              <span className="service-icon" aria-hidden="true">
                <ServiceIcon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
