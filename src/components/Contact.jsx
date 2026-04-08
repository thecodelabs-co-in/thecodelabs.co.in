import { theme } from '../config/theme';

export function Contact({ title, intro, email, website }) {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-panel">
        <div className="contact-copy">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">{title}</h2>
          <p className="contact-intro">{intro}</p>
          <div className="contact-actions">
            {email && (
              <a className="btn btn-primary" href={`mailto:${email}`}>
                Email us
              </a>
            )}
            {website && (
              <a className="btn btn-outline" href={website} target="_blank" rel="noreferrer">
                {theme.companyName} site
              </a>
            )}
          </div>
        </div>
        <div className="contact-aside" aria-hidden="true">
          <div className="contact-orbit" />
        </div>
      </div>
    </section>
  );
}
