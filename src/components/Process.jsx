export function Process({ title, lead, steps = [] }) {
  return (
    <section id="process" className="section process">
      <div className="container">
        <p className="section-eyebrow">Engagement</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-lead">{lead}</p>
        <ol className="process-steps">
          {steps.map((step, i) => (
            <li key={step.title} className="process-step">
              <span className="process-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="process-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
