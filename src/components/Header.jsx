import { theme } from '../config/theme';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <img src={theme.logo} alt={theme.companyName} className="brand-logo" />
          <span className="brand-name">{theme.companyName}</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
