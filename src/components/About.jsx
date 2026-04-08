export function About({ title, body, image, imageAlt, highlights = [] }) {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div className="about-visual">
          {image && <img src={image} alt={imageAlt || ''} className="about-image" loading="lazy" />}
          <div className="about-glow" aria-hidden="true" />
        </div>
        <div className="about-content">
          <p className="section-eyebrow">Studio</p>
          <h2 className="section-title">{title}</h2>
          <p className="about-body">{body}</p>
          <ul className="about-list">
            {highlights.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
