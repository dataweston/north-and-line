import { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import CTABand from '@/components/CTABand';
import CaseStudyCard from '@/components/CaseStudyCard';

export const metadata: Metadata = {
  title: 'Narrative & Positioning',
  description: 'Message architecture and strategic positioning that holds up under scrutiny. Build a narrative that resonates with journalists, customers, and investors.',
};

export default function NarrativePositioningPage() {
  return (
    <>
      <PageHeader
        label="Service"
        title="Narrative & Positioning"
        subtitle="Message architecture and strategic positioning that holds up under scrutiny."
      />

      {/* What It Is */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">What It Is</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-subhead font-medium text-balance mb-6">
                Most companies can articulate what they do. Few can explain why it matters 
                in a way that resonates across contexts—press, sales, investor conversations, 
                and customer messaging.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-nl-gray max-w-2xl mb-6">
                Narrative & Positioning work establishes the foundation for all external communications. 
                We identify what makes you genuinely differentiated (not just different), build a 
                message architecture that works across audiences, and create the supporting proof 
                points that make your story credible.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-body text-nl-gray max-w-2xl">
                This isn't copywriting—it's strategic work that requires understanding your business, 
                competitive landscape, and audience psychology. The output becomes the blueprint for 
                everything: media pitches, website copy, sales decks, and investor materials.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* What It's Not */}
      <Section className="border-b border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">What It's Not</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1">×</span>
                  <span className="text-body text-nl-gray">
                    <strong className="text-nl-black">Not brand identity work.</strong> We focus on messaging and positioning, not visual identity, logos, or design systems.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1">×</span>
                  <span className="text-body text-nl-gray">
                    <strong className="text-nl-black">Not aspirational fluff.</strong> We won't help you claim to be "the leading" anything unless the proof exists. No manufactured differentiation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1">×</span>
                  <span className="text-body text-nl-gray">
                    <strong className="text-nl-black">Not a one-time deliverable.</strong> Narrative work requires iteration as your company evolves. We build frameworks, not static documents.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1">×</span>
                  <span className="text-body text-nl-gray">
                    <strong className="text-nl-black">Not execution without strategy.</strong> This is foundational work that must come before media outreach, not something bolted on afterward.
                  </span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Best For */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Best For</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Pre-launch startups</h3>
                  <p className="text-body text-nl-gray">
                    Establish positioning before going public. Avoid the common mistake of 
                    launching with fragmented messaging that confuses early audiences.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Companies repositioning</h3>
                  <p className="text-body text-nl-gray">
                    Shifting markets, pivoting products, or evolving from legacy perceptions. 
                    Requires careful narrative reconstruction.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Founder story development</h3>
                  <p className="text-body text-nl-gray">
                    First-time founders often struggle to articulate their "why" in ways 
                    that resonate beyond personal motivation.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Market category creation</h3>
                  <p className="text-body text-nl-gray">
                    Defining a new category requires precise language, clear differentiation, 
                    and proof that the category exists and matters.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section className="border-b border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Deliverables</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <ul className="space-y-3">
                {[
                  'Narrative audit (competitive analysis, current state assessment)',
                  'Core message framework (value prop, positioning statement, proof points)',
                  'Audience-specific message maps (investors, press, customers, partners)',
                  'Differentiation analysis and competitive positioning',
                  'Story bank (key narratives, case examples, proof points)',
                  'Founder/executive talking points and interview prep',
                  'Usage guidelines and tone controls',
                  'Quarterly narrative updates (retainer clients only)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body">
                    <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0 text-nl-gray" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Process</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Discovery & Audit',
                  timeline: 'Week 1-2',
                  description: 'Stakeholder interviews, competitive analysis, review of existing materials. We identify narrative gaps, competitive positioning opportunities, and audience disconnects.',
                },
                {
                  step: '02',
                  title: 'Strategic Framework',
                  timeline: 'Week 2-3',
                  description: 'Draft core messaging architecture, positioning statements, and proof point inventory. Present framework for feedback and iteration.',
                },
                {
                  step: '03',
                  title: 'Refinement & Documentation',
                  timeline: 'Week 3-4',
                  description: 'Finalize messaging documents, create audience-specific adaptations, develop usage guidelines. Deliver complete narrative package.',
                },
                {
                  step: '04',
                  title: 'Implementation Support',
                  timeline: 'Ongoing',
                  description: 'Train internal teams, refine based on market feedback, update as company evolves. Retainer clients receive quarterly updates.',
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * (i + 1)}>
                  <div>
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-small text-nl-gray font-medium">{item.step}</span>
                      <h3 className="text-subhead font-medium">{item.title}</h3>
                      <span className="text-caption text-nl-gray">— {item.timeline}</span>
                    </div>
                    <p className="text-body text-nl-gray">{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="border-b border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Outcomes</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-subhead font-medium mb-6">
                Measurable improvements in message consistency, audience comprehension, 
                and organizational alignment.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ul className="space-y-3">
                {[
                  'Consistent messaging across all external communications',
                  'Improved media pitch response rates (typical increase: 30-50%)',
                  'Clearer differentiation from competitors in press coverage',
                  'Higher-quality inbound inquiries (investors, partners, customers)',
                  'Internal alignment on company positioning and value prop',
                  'Foundation for all future PR, marketing, and sales efforts',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body text-nl-gray">
                    <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Example Results */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Example Results</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-body text-nl-gray">
                Related case studies that showcase narrative and positioning work:
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <CaseStudyCard
              title="Climate Tech Market Entry"
              sector="Climate"
              year="2024"
              result="New narrative framework adopted across all channels; 47 media placements in 90 days"
              href="/work"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <CaseStudyCard
              title="Brand Repositioning Campaign"
              sector="Consumer"
              year="2023"
              result="Successful narrative shift reflected in 23 major publications"
              href="/work"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Pricing */}
      <Section className="border-b border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Investment</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div>
                  <div className="text-subhead font-medium mb-2">Project-based</div>
                  <div className="text-body text-nl-gray mb-4">
                    Standalone narrative development and positioning work typically ranges 
                    from $15,000-$35,000 depending on complexity and scope.
                  </div>
                  <div className="text-caption text-nl-gray">Timeline: 4-6 weeks</div>
                </div>
                <div>
                  <div className="text-subhead font-medium mb-2">Retainer inclusion</div>
                  <div className="text-body text-nl-gray mb-4">
                    Narrative work is included in all retainer engagements, with quarterly 
                    updates and ongoing refinement as part of the monthly fee.
                  </div>
                  <div className="text-caption text-nl-gray">From $5,000/month</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABand
        title="Let's build your narrative foundation."
        description="Strong positioning is the difference between press that lands and pitches that get ignored."
        ctaText="Book a 15-min consult"
        ctaHref="/contact"
        location="service"
        variant="dark"
      />
    </>
  );
}
