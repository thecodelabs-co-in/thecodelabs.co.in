import { theme } from '../config/theme';

const nav = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand">
          <img src={theme.logo} alt={theme.companyName} className="brand-logo" width={40} height={40} />
          <span className="brand-name">{theme.companyName}</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary btn-sm header-cta">
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
