import { theme } from '../config/theme';

export function Hero({ eyebrow, title, subtitle, cta, secondaryCta, image, imageAlt, trust = [] }) {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              {cta}
            </a>
            {secondaryCta && (
              <a href="#work" className="btn btn-ghost">
                {secondaryCta}
              </a>
            )}
          </div>
          {trust.length > 0 && (
            <ul className="hero-trust">
              {trust.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="hero-visual">
          <div className="hero-frame" style={{ borderColor: theme.secondaryColor }}>
            {image ? (
              <img src={image} alt={imageAlt || ''} className="hero-image" loading="eager" />
            ) : (
              <div className="hero-glow" style={{ borderColor: theme.secondaryColor }} aria-hidden="true" />
            )}
            <div className="hero-badge" style={{ background: theme.primaryColor }}>
              <span className="hero-badge-label">Shipped with care</span>
              <span className="hero-badge-value">Quality-first delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
