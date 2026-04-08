import { theme } from '../config/theme';

const quick = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export function Footer({ tagline }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <div className="footer-brand">
            <img src={theme.logo} alt="" width={40} height={40} className="footer-logo" />
            <span>{theme.companyName}</span>
          </div>
          <p className="footer-tagline">{tagline}</p>
        </div>
        <div className="footer-links">
          <span className="footer-heading">Explore</span>
          <ul>
            {quick.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-meta">
          <p className="footer-copy">© {year} {theme.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
