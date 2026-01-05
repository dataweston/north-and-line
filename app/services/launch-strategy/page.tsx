import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Launch Strategy',
  description: 'Coordinated campaigns for fundraising announcements, product releases, and market entry that drive maximum impact.',
};

export default function LaunchStrategyPage() {
  return (
    <>
      <PageHeader
        label="Service"
        title="Launch Strategy"
        subtitle="Coordinated campaigns for fundraising, product releases, and market entry."
      />

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
                Launches require precise coordination: timing, messaging, media cultivation, 
                and multi-channel execution that creates momentum.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-nl-gray max-w-2xl">
                This service manages complex launch campaigns from strategy through execution: 
                fundraising announcements, product releases, market entry, rebrands, and major 
                company milestones. We coordinate media outreach, analyst relations, partner 
                communications, and internal alignment to ensure launches land with impact.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

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
                  'Launch strategy and timing recommendations',
                  'Coordinated media outreach and embargo management',
                  'Press materials: release, FAQ, backgrounders, media kit',
                  'Exclusive placement negotiation',
                  'Spokesperson preparation and interview coordination',
                  'Partner and stakeholder communication planning',
                  'Social amplification strategy',
                  'Post-launch reporting and analysis',
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

      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Best For</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Fundraising announcements</h3>
                  <p className="text-body text-nl-gray">
                    Series A through growth rounds requiring strategic media placement and 
                    narrative positioning.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Product launches</h3>
                  <p className="text-body text-nl-gray">
                    Major releases, new features, or product lines that warrant coordinated 
                    media attention.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Market entry</h3>
                  <p className="text-body text-nl-gray">
                    Geographic expansion, new verticals, or category positioning that requires 
                    strategic introduction.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Launch with precision and impact."
        description="Coordinated launches create momentum. Random announcements create noise."
        ctaText="Book a 15-min consult"
        ctaHref="/contact"
        location="service"
        variant="dark"
      />
    </>
  );
}
