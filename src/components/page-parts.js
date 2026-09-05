import * as React from 'react';
import { Link } from 'gatsby';
export function ActionLink({ to, children, secondary = false, className = '' }) {
  return (
    <Link className={(secondary ? 'text-link ' : 'action-link ') + className} to={to}>
      {children}
      <span aria-hidden='true'>↗</span>
    </Link>
  );
}
export function PageIntro({ eyebrow, title, children }) {
  return (
    <section className='site-container page-intro'>
      <p className='eyebrow'>{eyebrow}</p>
      <h1>{title}</h1>
      <div className='intro-copy'>{children}</div>
    </section>
  );
}
export function ContactBand({ title = 'Tell us what you’re working on.', children, category = 'project' }) {
  return (
    <section className='contact-band'>
      <div className='site-container contact-band-inner'>
        <div>
          <p className='eyebrow'>Start a conversation</p>
          <h2>{title}</h2>
          <p>
            {children ||
              'Bring your material, your objective and your questions. Let’s establish the practical next step.'}
          </p>
        </div>
        <ActionLink to={'/contact/?type=' + category}>Discuss a project</ActionLink>
      </div>
    </section>
  );
}
export function ProjectSteps() {
  return (
    <ol className='project-steps'>
      {[
        ['Tell us the objective', 'Describe the material, the decision you need to make and your timing.'],
        ['Review the fit', 'Clarify the requirements, available information and proposed approach.'],
        ['Agree the work', 'Confirm scope, material acceptance and arrangements before starting.'],
        ['Decide what follows', 'Use the findings to identify the next step for your project.'],
      ].map(([title, text], i) => (
        <li key={title}>
          <span className='step-number'>0{i + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}
export function AcceptanceNote() {
  return (
    <p className='acceptance-note'>
      Please contact TTL before shipping material. We confirm material acceptance and delivery arrangements
      before shipment, and agree the scope before work begins.
    </p>
  );
}
