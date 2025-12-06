import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected case studies from North & Line, demonstrating earned media outcomes and strategic communications.',
};

const caseStudies = [
  {
    id: 1,
    sector: 'Hospitality',
    year: '2024',
    title: 'Multi-Unit Restaurant Group Repositioning',
    challenge: 'A fast-growing restaurant group was preparing to enter new markets. Their public posture was fragmented: each concept carried its own identity, but none of them connected to a coherent narrative about the group itself. Media interest was high, but coverage framed the expansion as opportunistic rather than intentional. They needed a unified story that could travel across markets without sounding manufactured.',
    approach: 'I conducted a full narrative audit—menus, leadership statements, early press, investor materials, staff language. I rebuilt the group\'s message architecture around one principle: the work should feel grounded in place, even when geography changes. Each concept received a defined role within the larger story, along with tone controls and proof points tied to operations. Leadership received a communication map for how to speak about growth without drifting into hype or contradiction.',
    outcomes: [
      'A single, coherent story adopted across all public materials',
      'Clearer framing in early conversations with national reporters',
      'Improved internal alignment during expansion planning',
      'Staff onboarding incorporated the alignment guide within a month',
    ],
  },
  {
    id: 2,
    sector: 'Culinary',
    year: '2024',
    title: 'Chef Reintroduction & Market Entry',
    challenge: 'A well-known chef returning to the Midwest after national work faced a familiar problem: reputation without context. Local audiences remembered the name but not the story, and early outreach produced inconsistent coverage. The chef needed a clean reintroduction that clarified what the move meant and why it mattered.',
    approach: 'I rebuilt the chef\'s narrative from first principles. We defined a point of view rooted in regional foodways rather than personal history, established three proofs tied to sourcing and technique, and produced a posture document for all communications—menus, interviews, investor meetings, and staff briefings. Early press materials were rewritten to center intent over biography.',
    outcomes: [
      'Stable, consistent framing across all introductory coverage',
      'Renewed interest from regional outlets previously disengaged',
      'Clearer differentiation from other returning chefs',
      'A foundation for future media without overclaiming',
    ],
  },
  {
    id: 3,
    sector: 'Consumer Food Brand',
    year: '2023',
    title: 'Brand Language Overhaul for National Launch',
    challenge: 'A consumer food brand with strong regional traction was preparing for national distribution. Their identity was authentic but inward-facing—language that resonated locally didn\'t translate to new markets. Retail partners requested stronger, more legible messaging capable of carrying the brand beyond its origin story.',
    approach: 'I created a new message spine that preserved the company\'s Midwest posture while giving it national utility. We shifted from founder nostalgia to operational credibility: sourcing standards, manufacturing clarity, product integrity. I produced language for packaging, retail decks, and consumer-facing channels, all grounded in a single narrative architecture.',
    outcomes: [
      'Clean, uniform messaging adopted across all national materials',
      'Better reception from retail category buyers',
      'Press coverage highlighted the brand\'s operational rigor, not trendiness',
      'Maintained authenticity without sounding provincial',
    ],
  },
  {
    id: 4,
    sector: 'Hospitality Operations',
    year: '2023',
    title: 'Reputation Stabilization Following Operational Disruption',
    challenge: 'A hospitality operator experienced an internal disruption that, while resolved quickly, created persistent speculation among staff, partners, and regular guests. Social chatter diverged from reality, and attempts to clarify the situation only amplified confusion. They needed to settle the narrative without escalating it.',
    approach: 'I developed a transparency-first communications posture organized by audience: staff, vendors, partners, and guests. Each received a calibrated level of detail grounded in fact and operational stability. I created talking points, decision trees for when and how to speak, and a cadence that reduced noise rather than counterattacked it.',
    outcomes: [
      'Sentiment stabilized within weeks',
      'Speculation tapered without confrontation',
      'Staff regained a shared understanding and communicated clearly',
      'The operator returned to normal operations without further narrative residue',
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Work"
        title="Selected engagements and outcomes."
        subtitle="We measure success in coverage quality, message accuracy, and lasting reputation impact—not vanity metrics."
      />

      {/* Case Studies */}
      <Section className="border-b border-nl-light-gray">
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <FadeIn key={study.id} delay={0.1}>
              <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Meta Column */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 text-small text-nl-gray">
                    <span>{study.sector}</span>
                    <span className="w-4 h-px bg-nl-light-gray" />
                    <span>{study.year}</span>
                  </div>
                  <span className="block mt-4 text-caption text-nl-gray">
                    Case {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content Column */}
                <div className="md:col-span-9">
                  <h2 className="text-headline font-medium">{study.title}</h2>
                  
                  <div className="mt-8 space-y-8">
                    <div>
                      <h3 className="label mb-3">Challenge</h3>
                      <p className="text-body text-nl-gray">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="label mb-3">Approach</h3>
                      <p className="text-body text-nl-gray">{study.approach}</p>
                    </div>
                    
                    <div>
                      <h3 className="label mb-3">Outcomes</h3>
                      <ul className="space-y-2">
                        {study.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3 text-body">
                            <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0 text-nl-gray" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              
              {index < caseStudies.length - 1 && (
                <div className="divider mt-24" />
              )}
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Note */}
      <Section>
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-body text-nl-gray">
              All case studies represent real client work. Some details have been 
              modified or anonymized to protect client confidentiality. Results 
              described are specific to each engagement and should not be considered 
              guarantees of future performance.
            </p>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
