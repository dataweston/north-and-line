'use client';

import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';

const methodologySteps = [
  {
    number: '01',
    title: 'Core Story',
    subtitle: 'Discovery & Foundation',
    description: 'Before we pitch anything, we need to understand what makes you genuinely different—not different in a press release, but different in practice. We spend time with leadership, review your history, talk to customers, and identify the authentic narrative threads that reporters and audiences will find compelling.',
    deliverables: ['Narrative audit', 'Competitive positioning analysis', 'Core message framework', 'Story bank development'],
  },
  {
    number: '02',
    title: 'Proof',
    subtitle: 'Evidence & Validation',
    description: 'Every claim needs evidence. We work with you to identify and develop proof points: data, third-party validation, customer success stories, and tangible outcomes that make your story credible. This foundation ensures that every media conversation is grounded in substance.',
    deliverables: ['Proof point inventory', 'Data visualization support', 'Case study development', 'Third-party validation strategy'],
  },
  {
    number: '03',
    title: 'Voice',
    subtitle: 'Articulation & Presence',
    description: 'With story and proof established, we develop your distinctive voice: how you communicate across contexts, from press interviews to bylined articles to crisis response. We ensure consistency without rigidity, giving spokespersons the confidence to represent the organization authentically.',
    deliverables: ['Spokesperson preparation', 'Key message documents', 'Interview training', 'Editorial voice guidelines'],
  },
];

const services = [
  {
    category: 'Media Relations',
    items: ['Strategic media outreach', 'Press release development', 'Journalist relationship building', 'Exclusive placement negotiation', 'Press event coordination'],
  },
  {
    category: 'Strategic Communications',
    items: ['Message development', 'Narrative strategy', 'Stakeholder mapping', 'Communications planning', 'Internal communications'],
  },
  {
    category: 'Executive Positioning',
    items: ['Thought leadership development', 'Byline placement', 'Speaking opportunities', 'Media training', 'Profile building'],
  },
  {
    category: 'Crisis & Issues',
    items: ['Crisis preparedness planning', 'Rapid response support', 'Reputation recovery', 'Issues management', 'Media monitoring'],
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        label="Approach"
        title="Strategy built on substance, not spin."
        subtitle="Every engagement follows a clear methodology: understand what's true, prove it, then articulate it compellingly."
      />

      {/* Methodology Diagram */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Methodology</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            {/* Visual Diagram */}
            <FadeIn delay={0.1}>
              <div className="flex items-center justify-start gap-4 md:gap-8 flex-wrap mb-16">
                <motion.span 
                  className="text-display font-medium"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Core Story
                </motion.span>
                <span className="plus-symbol w-6 h-6 text-nl-gray" />
                <motion.span 
                  className="text-display font-medium"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Proof
                </motion.span>
                <span className="plus-symbol w-6 h-6 text-nl-gray" />
                <motion.span 
                  className="text-display font-medium"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Voice
                </motion.span>
              </div>
            </FadeIn>

            {/* Detailed Steps */}
            <div className="space-y-20">
              {methodologySteps.map((step, index) => (
                <FadeIn key={step.number} delay={0.2 + index * 0.1}>
                  <article className="relative">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-small text-nl-gray font-medium">{step.number}</span>
                      <h3 className="text-subhead font-medium">{step.title}</h3>
                      <span className="text-caption text-nl-gray">— {step.subtitle}</span>
                    </div>
                    <p className="text-body text-nl-gray max-w-2xl mb-6">
                      {step.description}
                    </p>
                    <div>
                      <span className="text-small text-nl-gray uppercase tracking-wider">Deliverables</span>
                      <ul className="mt-3 flex flex-wrap gap-3">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="text-caption px-3 py-1 border border-nl-light-gray">
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="border-b border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Services</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <FadeIn key={service.category} delay={0.1 + index * 0.1}>
                  <div>
                    <h3 className="text-subhead font-medium mb-4">{service.category}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-body text-nl-gray">
                          <span className="w-1 h-1 bg-nl-gray rounded-full mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Note */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">How We Work</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <blockquote className="text-headline font-medium text-balance">
                &ldquo;We work with fewer clients, more deeply.&rdquo;
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-body text-nl-gray max-w-2xl">
                We deliberately limit the number of clients we take on at any given time. 
                This isn&apos;t positioning—it&apos;s a practical choice that allows us to 
                provide senior-level attention to every account. Every client works directly 
                with partners, not just during pitches but throughout the engagement.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 text-body text-nl-gray max-w-2xl">
                We believe PR works best when it&apos;s integrated into how an organization
                operates, not bolted on as an afterthought. That requires time, access,
                and genuine partnership—commodities that don&apos;t scale efficiently
                but produce dramatically better outcomes.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-6 text-body text-nl-gray max-w-2xl">
                For select clients, we act as the primary liaison for press, partnerships, and appearances.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
