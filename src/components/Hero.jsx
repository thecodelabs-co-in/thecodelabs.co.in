import { theme } from '../config/theme';

export function Hero({ title, subtitle, cta }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <a href="#contact" className="btn btn-primary">
            {cta}
          </a>
        </div>
        <div className="hero-accent" aria-hidden="true">
          <div className="hero-glow" style={{ borderColor: theme.secondaryColor }} />
        </div>
      </div>
    </section>
  );
}
