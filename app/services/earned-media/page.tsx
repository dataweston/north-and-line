import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import CTABand from '@/components/CTABand';
import CaseStudyCard from '@/components/CaseStudyCard';

export const metadata: Metadata = {
  title: 'Earned Media & Press Outreach',
  description: 'Strategic media outreach, journalist relationships, and placement execution that drives coverage quality and business outcomes.',
};

export default function EarnedMediaPage() {
  return (
    <>
      <PageHeader
        label="Service"
        title="Earned Media & Press Outreach"
        subtitle="Strategic media outreach, journalist relationships, and placement execution."
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
                Earned media isn't about volume—it's about securing the right coverage 
                in outlets that matter to your specific audiences: investors, customers, 
                partners, or industry peers.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-nl-gray max-w-2xl mb-6">
                This service handles the systematic work of media relations: building journalist 
                relationships, crafting strategic pitches, coordinating exclusives, managing 
                interview prep, and securing placements that align with business goals. We don't 
                pitch stories that aren't ready or spray generic pitches to unvetted lists.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-body text-nl-gray max-w-2xl">
                Every pitch is customized, every journalist relationship is cultivated deliberately, 
                and every placement is measured against strategic objectives—not just counted as 
                a vanity metric.
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
                    <strong className="text-nl-black">Not guaranteed coverage.</strong> No ethical PR firm can promise specific placements. We pitch strategically and maximize success rates, but editors make final decisions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1">×</span>
                  <span className="text-body text-nl-gray">
                    <strong className="text-nl-black">Not mass email blasts.</strong> We don't send generic pitches to purchased media lists. Every outreach is customized and relationship-driven.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1">×</span>
                  <span className="text-body text-nl-gray">
                    <strong className="text-nl-black">Not paid placements.</strong> This is earned media only. We don't facilitate sponsored content or advertorial disguised as press.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1">×</span>
                  <span className="text-body text-nl-gray">
                    <strong className="text-nl-black">Not press release distribution services.</strong> We write press releases when appropriate, but media relations requires actual relationship work, not wire service drops.
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
                  <h3 className="text-subhead font-medium mb-3">Growth-stage companies</h3>
                  <p className="text-body text-nl-gray">
                    Series A+ companies building sustained visibility and thought leadership 
                    through ongoing media relationships.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Product launches</h3>
                  <p className="text-body text-nl-gray">
                    Coordinated campaigns for major releases, feature announcements, or 
                    market expansions that warrant press attention.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Fundraising announcements</h3>
                  <p className="text-body text-nl-gray">
                    Strategic placement of funding news in target outlets with proper 
                    narrative framing and executive positioning.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Ongoing visibility programs</h3>
                  <p className="text-body text-nl-gray">
                    Systematic media cultivation for companies that need consistent presence 
                    without major news hooks—requires retainer engagement.
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
                  'Strategic media plan with target outlet list and editorial calendar analysis',
                  'Custom pitch development for each journalist/outlet',
                  'Press release writing and distribution coordination (when appropriate)',
                  'Journalist relationship cultivation and ongoing outreach',
                  'Interview prep: briefing documents, Q&A development, practice sessions',
                  'Exclusive placement negotiation and coordination',
                  'Coverage monitoring and clip reporting',
                  'Monthly reporting: placements, impressions, strategic recommendations',
                  'Post-coverage analysis and iteration',
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
                  title: 'Strategic Planning',
                  timeline: 'Week 1',
                  description: 'Develop media strategy, identify target outlets and journalists, align on news hooks and timing, establish success metrics.',
                },
                {
                  step: '02',
                  title: 'Materials Development',
                  timeline: 'Week 1-2',
                  description: 'Draft press materials, prepare spokesperson briefings, create pitch angles customized for each target outlet.',
                },
                {
                  step: '03',
                  title: 'Outreach & Cultivation',
                  timeline: 'Ongoing',
                  description: 'Systematic journalist outreach, relationship building, pitch delivery, follow-up coordination, exclusive negotiations.',
                },
                {
                  step: '04',
                  title: 'Interview Management',
                  timeline: 'As scheduled',
                  description: 'Pre-interview prep sessions, real-time coordination, post-interview follow-up, fact-checking support.',
                },
                {
                  step: '05',
                  title: 'Amplification & Reporting',
                  timeline: 'Post-coverage',
                  description: 'Coverage monitoring, clip distribution, performance analysis, strategic recommendations for next phase.',
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
              <span className="label">Typical Outcomes</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-subhead font-medium mb-6">
                Quality placements in target outlets with measurable business impact.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ul className="space-y-3">
                {[
                  'Launch campaigns: 8-15 placements within first 30 days (tier 1 & 2 outlets)',
                  'Retainer programs: 3-8 placements per month sustained over 6-12 months',
                  'Coverage in strategically relevant outlets (not just volume metrics)',
                  'Message consistency across all placements',
                  'Increased inbound interest from target audiences post-coverage',
                  'Strengthened journalist relationships for ongoing opportunities',
                  'Improved spokesperson confidence and media performance',
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
                Related case studies showcasing earned media work:
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <CaseStudyCard
              title="Series B Funding Announcement"
              sector="B2B SaaS"
              year="2024"
              result="Coverage in TechCrunch, The Information, and 12 national outlets within 48 hours"
              href="/work"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <CaseStudyCard
              title="Climate Tech Market Entry"
              sector="Climate"
              year="2024"
              result="47 media placements and 15M earned impressions in 90 days"
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
                  <div className="text-subhead font-medium mb-2">Sprint campaigns</div>
                  <div className="text-body text-nl-gray mb-4">
                    Project-based campaigns (launches, announcements, specific initiatives) 
                    typically range from $15,000-$45,000 depending on scope and timeline.
                  </div>
                  <div className="text-caption text-nl-gray">Timeline: 4-12 weeks</div>
                </div>
                <div>
                  <div className="text-subhead font-medium mb-2">Ongoing retainers</div>
                  <div className="text-body text-nl-gray mb-4">
                    Sustained media relations programs with continuous outreach, relationship 
                    cultivation, and ongoing placement efforts.
                  </div>
                  <div className="text-caption text-nl-gray">From $5,000/month (6-12 month commitment)</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABand
        title="Let's secure coverage that drives business outcomes."
        description="Earned media works when it's strategic, targeted, and systematically executed."
        ctaText="Book a 15-min consult"
        ctaHref="/contact"
        location="service"
        variant="dark"
      />
    </>
  );
}
