import { useConfig } from './hooks/useConfig';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Work } from './components/Work';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const config = useConfig();
  const { seo, hero, stats, services, process, work, about, testimonials, contact, footer } = config;

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl={seo.canonicalUrl}
        ogImage={seo.ogImage}
      />
      <Header />
      <main>
        <Hero
          eyebrow={hero.eyebrow}
          title={hero.title}
          subtitle={hero.subtitle}
          cta={hero.cta}
          secondaryCta={hero.secondaryCta}
          image={hero.image}
          imageAlt={hero.imageAlt}
          trust={hero.trust}
        />
        <Stats items={stats} />
        <Services items={services} />
        <Process title={process.title} lead={process.lead} steps={process.steps} />
        <Work title={work.title} lead={work.lead} items={work.items} />
        <About
          title={about.title}
          body={about.body}
          image={about.image}
          imageAlt={about.imageAlt}
          highlights={about.highlights}
        />
        <Testimonials
          title={testimonials.title}
          lead={testimonials.lead}
          items={testimonials.items}
        />
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
