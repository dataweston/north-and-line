import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Content & PR Enablement',
  description: 'Press kits, media training, and materials that support ongoing communications and enable in-house teams.',
};

export default function ContentPREnablementPage() {
  return (
    <>
      <PageHeader
        label="Service"
        title="Content & PR Enablement"
        subtitle="Press kits, media training, and materials that support ongoing outreach."
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
                Not every company needs full-service PR. Some need the infrastructure, 
                training, and materials to execute effectively in-house.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-nl-gray max-w-2xl">
                This service provides the enablement tools and training that in-house teams 
                need: comprehensive press kits, media training for executives, process documentation, 
                and strategic frameworks. We build the infrastructure, train your team, and provide 
                advisory support as needed—without requiring ongoing execution from us.
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
                  'Comprehensive press kit (boilerplate, bios, fact sheet, imagery)',
                  'Media list development and journalist research',
                  'Pitch template library and usage guidelines',
                  'Media training sessions for executives and spokespeople',
                  'PR process documentation and playbooks',
                  'Crisis communication preparedness plan',
                  'Press release templates and writing guidelines',
                  'Monthly or quarterly advisory check-ins (optional)',
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
                  <h3 className="text-subhead font-medium mb-3">In-house teams needing structure</h3>
                  <p className="text-body text-nl-gray">
                    Marketing teams handling PR internally but lacking professional frameworks 
                    and materials.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Companies without PR infrastructure</h3>
                  <p className="text-body text-nl-gray">
                    Organizations that need foundational PR assets before hiring or engaging 
                    ongoing support.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Budget-conscious startups</h3>
                  <p className="text-body text-nl-gray">
                    Early-stage companies that can't afford retainers but need professional 
                    guidance and materials.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Build your PR infrastructure with professional guidance."
        ctaText="Book a 15-min consult"
        ctaHref="/contact"
        location="service"
        variant="dark"
      />
    </>
  );
}
