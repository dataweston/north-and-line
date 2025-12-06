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
    sector: 'Healthcare',
    year: '2024',
    title: 'Regional Health System Expansion',
    challenge: 'A major regional health system was announcing a $400M facility expansion—their largest capital investment in two decades. They needed to communicate the announcement in a way that resonated with patients, staff, and community stakeholders.',
    approach: 'We developed a phased communications strategy that emphasized community impact over corporate milestones. Rather than leading with investment figures, we centered stories of access: the rural communities that would gain nearby care, the specialists who would now practice locally.',
    outcomes: [
      '47 regional media placements',
      'Front-page coverage in three major market newspapers',
      '12 broadcast segments including local NBC, CBS, ABC affiliates',
      '94% positive sentiment in coverage analysis',
    ],
  },
  {
    id: 2,
    sector: 'Technology',
    year: '2024',
    title: 'Series B Funding Announcement',
    challenge: 'A B2B SaaS company had closed a significant Series B round and needed to translate funding news into broader market awareness and credibility with enterprise prospects.',
    approach: 'We positioned the funding not as a financial milestone but as validation of a market shift. We worked with the founders to articulate a clear point of view on industry change, then secured exclusive access for a Tier 1 outlet.',
    outcomes: [
      'TechCrunch exclusive with 48-hour embargo coordination',
      'Follow-on coverage in The Information, Business Insider',
      '3 national business outlet features',
      'CEO podcast appearances on 4 industry shows',
    ],
  },
  {
    id: 3,
    sector: 'Consumer',
    year: '2023',
    title: 'National Brand Launch',
    challenge: 'A Minneapolis-based consumer products company was launching nationally after regional success. They needed to build awareness in new markets while maintaining their authentic Midwest identity.',
    approach: 'We developed a founder-forward strategy that leaned into the company\'s origin story and values rather than downplaying them for national appeal. We identified lifestyle and business media outlets whose audiences valued authenticity.',
    outcomes: [
      '12M earned media impressions in 90 days',
      'Features in Fast Company, Inc., and Entrepreneur',
      '6 regional market profile pieces',
      'Maintained 100% message consistency across all coverage',
    ],
  },
  {
    id: 4,
    sector: 'Financial Services',
    year: '2023',
    title: 'Crisis Response & Reputation Recovery',
    challenge: 'A financial services firm faced reputational challenges following industry-wide scrutiny. They needed to rebuild trust with stakeholders while maintaining operational focus.',
    approach: 'We developed a transparency-first communications approach, proactively sharing operational changes and third-party validations. We identified trade and business media opportunities to demonstrate institutional credibility.',
    outcomes: [
      'Sentiment shift from 34% to 71% positive over 6 months',
      '8 thought leadership placements in trade publications',
      'Speaking opportunities at 3 industry conferences',
      'Zero negative coverage during recovery period',
    ],
  },
  {
    id: 5,
    sector: 'Professional Services',
    year: '2023',
    title: 'Executive Positioning Program',
    challenge: 'A professional services firm\'s new CEO needed to establish thought leadership credibility and visibility within six months of appointment.',
    approach: 'We conducted a comprehensive voice development process, identifying distinctive perspectives and areas of expertise. We then executed a systematic media outreach program targeting business and industry outlets.',
    outcomes: [
      'Bylines in Harvard Business Review and MIT Sloan Management Review',
      '14 media interviews across business press',
      'Keynote invitations from 2 major industry conferences',
      '300% increase in LinkedIn engagement',
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
