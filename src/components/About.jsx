export function About({ title, body, highlights = [] }) {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div>
          <h2 className="section-title">{title}</h2>
          <p className="about-body">{body}</p>
        </div>
        <ul className="about-list">
          {highlights.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
