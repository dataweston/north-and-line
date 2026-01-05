import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Crisis & Issues Management',
  description: 'Rapid response, reputation recovery, and crisis preparedness planning to protect your organization during challenging situations.',
};

export default function CrisisIssuesPage() {
  return (
    <>
      <PageHeader
        label="Service"
        title="Crisis & Issues Management"
        subtitle="Rapid response, reputation recovery, and preparedness planning."
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
                When negative news breaks, how you respond in the first hours 
                determines whether you control the narrative or lose it.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-nl-gray max-w-2xl">
                This service provides crisis preparedness planning, rapid response support 
                during active issues, and reputation recovery strategies. We help organizations 
                prepare for potential crises, respond effectively when they occur, and rebuild 
                credibility afterward. This includes media response, stakeholder communication, 
                and strategic counsel during high-pressure situations.
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
                  'Crisis preparedness assessment and planning',
                  'Crisis communication playbook and decision trees',
                  'Spokesperson training for high-pressure situations',
                  'Rapid response support (24-48 hour turnaround)',
                  'Holding statements and official responses',
                  'Media monitoring during active issues',
                  'Stakeholder communication planning',
                  'Post-crisis reputation recovery strategy',
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
                  <h3 className="text-subhead font-medium mb-3">Companies facing negative coverage</h3>
                  <p className="text-body text-nl-gray">
                    Active issues requiring immediate response and narrative management.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Proactive crisis preparation</h3>
                  <p className="text-body text-nl-gray">
                    Organizations that want plans in place before issues arise—particularly 
                    those in high-risk sectors or facing potential transitions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Executive transitions</h3>
                  <p className="text-body text-nl-gray">
                    Leadership changes that require careful internal and external communication.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Prepare before issues arise."
        description="Crisis response is most effective when you have a plan before you need it."
        ctaText="Book a 15-min consult"
        ctaHref="/contact"
        location="service"
        variant="dark"
      />
    </>
  );
}
