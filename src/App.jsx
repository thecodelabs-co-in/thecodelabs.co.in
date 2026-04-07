import { useConfig } from './hooks/useConfig';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const config = useConfig();
  const { seo, hero, services, about, contact, footer } = config;

  return (
    <>
      <SEO title={seo.title} description={seo.description} keywords={seo.keywords} />
      <Header />
      <main>
        <Hero title={hero.title} subtitle={hero.subtitle} cta={hero.cta} />
        <Services items={services} />
        <About title={about.title} body={about.body} highlights={about.highlights} />
        <Contact
          title={contact.title}
          intro={contact.intro}
          email={contact.email}
          website={contact.website}
        />
      </main>
      <Footer tagline={footer.tagline} />
    </>
  );
}
