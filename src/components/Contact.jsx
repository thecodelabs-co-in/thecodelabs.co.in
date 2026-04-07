import { theme } from '../config/theme';

export function Contact({ title, intro, email, website }) {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
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
              Visit {theme.companyName}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
