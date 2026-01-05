import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import ServiceCard from '@/components/ServiceCard';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Strategic communications services built for measurable outcomes: narrative development, earned media, executive positioning, and launch strategy.',
};

const services = [
  {
    title: 'Narrative & Positioning',
    slug: 'narrative-positioning',
    shortPitch: 'Message architecture and strategic positioning that holds up under scrutiny.',
    bestFor: ['VC-backed startups pre-launch', 'Companies repositioning', 'Founder story development'],
  },
  {
    title: 'Earned Media',
    slug: 'earned-media',
    shortPitch: 'Strategic media outreach, journalist relationships, and placement execution.',
    bestFor: ['Growth-stage companies', 'Product launches', 'Ongoing visibility programs'],
  },
  {
    title: 'Executive Communications',
    slug: 'executive-comms',
    shortPitch: 'Founder and CEO positioning, media training, and thought leadership.',
    bestFor: ['First-time founders', 'Series A+ companies', 'Executive visibility programs'],
  },
  {
    title: 'Launch Strategy',
    slug: 'launch-strategy',
    shortPitch: 'Coordinated campaigns for fundraising, product releases, and market entry.',
    bestFor: ['Pre-launch startups', 'Fundraising announcements', 'Major product releases'],
  },
  {
    title: 'Content & PR Enablement',
    slug: 'content-pr-enablement',
    shortPitch: 'Press kits, media training, and materials that support ongoing outreach.',
    bestFor: ['In-house teams needing structure', 'Companies without PR infrastructure', 'Ongoing programs'],
  },
  {
    title: 'Crisis & Issues Management',
    slug: 'crisis-issues',
    shortPitch: 'Rapid response, reputation recovery, and preparedness planning.',
    bestFor: ['Companies facing negative coverage', 'Proactive crisis preparation', 'Executive transitions'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="Built for outcomes, not activity."
        subtitle="Every service is designed around measurable results: coverage quality, message consistency, and lasting reputation impact."
      />

      {/* Services Grid */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={0.1 * (index + 1)}>
              <ServiceCard
                title={service.title}
                shortPitch={service.shortPitch}
                bestFor={service.bestFor}
                href={`/services/${service.slug}`}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section className="border-b border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">How We Work</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <h2 className="text-headline font-medium mb-8">
                Senior-level attention on every account.
              </h2>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">We work with fewer clients, more deeply</h3>
                  <p className="text-body text-nl-gray">
                    We deliberately limit client load to ensure every account receives partner-level 
                    attention—not just during pitches, but throughout the engagement. This isn't 
                    positioning; it's a practical choice that produces better outcomes.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Monthly reporting and strategic counsel</h3>
                  <p className="text-body text-nl-gray">
                    Every retainer includes detailed monthly reports with media monitoring, coverage 
                    analysis, and strategic recommendations. You'll always know what we're doing, 
                    why we're doing it, and what results we're seeing.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Integrated approach, not bolt-on service</h3>
                  <p className="text-body text-nl-gray">
                    PR works best when it's integrated into how an organization operates. We work 
                    directly with leadership, understand your business deeply, and act as an extension 
                    of your team—not an external vendor managing from a distance.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Engagement Models */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Engagement Models</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <h2 className="text-headline font-medium">
                Three options, each structured for specific outcomes.
              </h2>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="border border-nl-light-gray p-8 hover:border-nl-black transition-colors">
              <h3 className="text-subhead font-medium mb-3">Retainer</h3>
              <p className="text-caption text-nl-gray uppercase tracking-wider mb-4">6-12 months</p>
              <p className="text-body text-nl-gray mb-6">
                Ongoing strategic counsel, media relations, and executive positioning with 
                monthly reporting and systematic execution.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Dedicated account team</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Monthly strategic reviews</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Continuous media cultivation</span>
                </div>
              </div>
              <div className="pt-4 border-t border-nl-light-gray">
                <div className="text-body font-medium">From $5,000/month</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border border-nl-light-gray p-8 hover:border-nl-black transition-colors">
              <h3 className="text-subhead font-medium mb-3">Sprint</h3>
              <p className="text-caption text-nl-gray uppercase tracking-wider mb-4">4-12 weeks</p>
              <p className="text-body text-nl-gray mb-6">
                Focused campaigns for launches, fundraising announcements, or specific positioning 
                initiatives with defined scope and deliverables.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Clear scope and timeline</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Coordinated execution</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Measurable outcomes</span>
                </div>
              </div>
              <div className="pt-4 border-t border-nl-light-gray">
                <div className="text-body font-medium">From $15,000</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="border border-nl-light-gray p-8 hover:border-nl-black transition-colors">
              <h3 className="text-subhead font-medium mb-3">Advisory</h3>
              <p className="text-caption text-nl-gray uppercase tracking-wider mb-4">Ongoing or as-needed</p>
              <p className="text-body text-nl-gray mb-6">
                Strategic counsel and narrative development without ongoing execution—ideal for 
                companies with in-house teams or specific planning needs.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Quarterly reviews</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Message architecture</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Crisis preparedness</span>
                </div>
              </div>
              <div className="pt-4 border-t border-nl-light-gray">
                <div className="text-body font-medium">Custom pricing</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <CTABand
        title="Let's discuss which approach fits your goals."
        ctaText="Book a 15-min consult"
        ctaHref="/contact"
        location="service"
        variant="dark"
      />
    </>
  );
}
