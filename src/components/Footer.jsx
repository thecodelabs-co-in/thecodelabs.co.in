import { theme } from '../config/theme';

export function Footer({ tagline }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={theme.logo} alt="" width={36} height={36} className="footer-logo" />
          <span>{theme.companyName}</span>
        </div>
        <p className="footer-tagline">{tagline}</p>
        <p className="footer-copy">© {year} {theme.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
