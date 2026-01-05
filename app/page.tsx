'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';
import CTABand from '@/components/CTABand';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import Testimonial from '@/components/Testimonial';

const faqItems = [
  {
    question: 'What is your typical budget range?',
    answer: 'Most engagements start at $5,000/month for ongoing retainers. Project-based work (launch campaigns, narrative development) typically ranges from $15,000-$50,000. We work with companies that view PR as a strategic investment, not a cost center.',
  },
  {
    question: 'How long do engagements typically last?',
    answer: 'Retainer engagements are typically 6-12 months minimum. Earned media takes time to build momentum. Sprint projects (positioning work, press kits, crisis response) range from 4-8 weeks. We don\'t do one-off press releases.',
  },
  {
    question: 'What types of companies do you work with?',
    answer: 'We work primarily with VC-backed startups (seed through growth stage), mission-driven companies, and established businesses going through significant transitions. Our sweet spot is B2B tech, climate/impact, and companies that value substance over hype.',
  },
  {
    question: 'What won\'t you do?',
    answer: 'We don\'t pitch stories that aren\'t ready. We don\'t guarantee coverage—no ethical PR firm can. We don\'t take on clients whose claims we can\'t verify. We don\'t do paid placements disguised as earned media. And we don\'t work with more clients than we can serve well.',
  },
  {
    question: 'How do you measure success?',
    answer: 'Quality and relevance of coverage, not just volume. Message consistency across all placements. Spokesperson confidence and preparedness. Pipeline influence and brand perception shifts when measurable. We provide detailed monthly reports with media monitoring and strategic recommendations.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Conversion Focused */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 py-32">
          <div className="max-w-4xl">
            {/* Value Prop + ICP + Outcome */}
            <FadeIn delay={0.1}>
              <h1 className="text-display font-medium text-balance leading-tight">
                Earned media and positioning for VC-backed startups that need coverage that drives outcomes.
              </h1>
            </FadeIn>

            {/* Sub-copy */}
            <FadeIn delay={0.3}>
              <p className="mt-8 text-subhead text-nl-gray max-w-2xl">
                Narrative, strategy, and media execution—built for measurable visibility, not vanity PR.
              </p>
            </FadeIn>

            {/* Primary & Secondary CTAs */}
            <FadeIn delay={0.5}>
              <div className="mt-12 flex flex-col sm:flex-row items-start gap-6">
                <CTAButton href="/contact" location="hero">
                  Book a 15-min consult
                </CTAButton>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-body link-editorial"
                >
                  <span>See case studies</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-12 bg-nl-light-gray"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* Proof Bar */}
      <Section className="border-t border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <FadeIn delay={0.1}>
            <div className="text-center md:text-left">
              <div className="text-display font-medium">150M+</div>
              <div className="mt-2 text-body text-nl-gray">Earned impressions delivered</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center md:text-left">
              <div className="text-display font-medium">200+</div>
              <div className="mt-2 text-body text-nl-gray">Media placements secured</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center md:text-left">
              <div className="text-display font-medium">95%</div>
              <div className="mt-2 text-body text-nl-gray">Client retention rate</div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="border-t border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Services</span>
              <h2 className="mt-4 text-headline font-medium">
                Built for outcomes, not activity.
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-body text-nl-gray max-w-2xl">
                Every engagement is structured around measurable results: coverage quality, 
                message consistency, and lasting reputation impact.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <ServiceCard
              title="Narrative & Positioning"
              shortPitch="Message architecture and strategic positioning that holds up under scrutiny."
              bestFor={['VC-backed startups pre-launch', 'Companies repositioning', 'Founder story development']}
              href="/services/narrative-positioning"
              featured
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <ServiceCard
              title="Earned Media"
              shortPitch="Strategic media outreach, journalist relationships, and placement execution."
              bestFor={['Growth-stage companies', 'Product launches', 'Ongoing visibility programs']}
              href="/services/earned-media"
              featured
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <ServiceCard
              title="Executive Comms"
              shortPitch="Founder and CEO positioning, media training, and thought leadership."
              bestFor={['First-time founders', 'Series A+ companies', 'Executive visibility programs']}
              href="/services/executive-comms"
              featured
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <CTAButton href="/services" location="section">
              View all services
            </CTAButton>
          </div>
        </FadeIn>
      </Section>

      {/* Featured Work Preview */}
      <Section className="border-t border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Case Studies</span>
              <h2 className="mt-4 text-headline font-medium">
                Proof, not promises.
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-body text-nl-gray max-w-2xl">
                Every case study includes verifiable results, coverage links, and the 
                specific work required to achieve those outcomes.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <CaseStudyCard
              title="Series B Funding Announcement"
              sector="B2B SaaS"
              year="2024"
              result="Coverage in TechCrunch, The Information, and 12 national outlets within 48 hours"
              href="/work"
              featured
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <CaseStudyCard
              title="Climate Tech Market Entry"
              sector="Climate"
              year="2024"
              result="47 media placements and 15M earned impressions in 90 days"
              href="/work"
              featured
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <CaseStudyCard
              title="Brand Repositioning Campaign"
              sector="Consumer"
              year="2023"
              result="Successful narrative shift reflected in 23 major publications"
              href="/work"
              featured
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <CTAButton href="/work" location="section">
              View all case studies
            </CTAButton>
          </div>
        </FadeIn>
      </Section>

      {/* Approach Preview */}
      <Section className="border-t border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Approach</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                <span className="text-headline font-medium">Diagnostic</span>
                <span className="plus-symbol w-5 h-5 text-nl-gray" />
                <span className="text-headline font-medium">Narrative</span>
                <span className="plus-symbol w-5 h-5 text-nl-gray" />
                <span className="text-headline font-medium">Media Plan</span>
                <span className="plus-symbol w-5 h-5 text-nl-gray" />
                <span className="text-headline font-medium">Execution</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-body text-nl-gray max-w-2xl">
                Every engagement begins with understanding what makes you genuinely 
                different—not different in a press release, but different in practice. 
                We build from there: narrative architecture, proof development, media strategy, 
                and systematic execution with monthly reporting.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link 
                href="/approach" 
                className="inline-flex items-center gap-2 mt-8 link-editorial text-body"
              >
                <span>Our methodology</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="border-t border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Client Testimonials</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-16">
              <FadeIn delay={0.1}>
                <Testimonial
                  quote="North & Line helped us articulate our value in a way that resonated with reporters and customers alike. The coverage quality was exceptional—every placement was strategically aligned with our goals."
                  author="Sarah Chen"
                  role="CEO"
                  company="Climate Tech Startup (Series A)"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <Testimonial
                  quote="Unlike other PR firms, they don't overpromise. They deliver strategic counsel, real results, and monthly reporting that actually helps us make decisions. The ROI has been clear."
                  author="Michael Torres"
                  role="Head of Marketing"
                  company="B2B SaaS Company (Series B)"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Engagement Options */}
      <Section className="border-t border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Engagement Options</span>
              <h2 className="mt-4 text-headline font-medium">
                Structured for impact.
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-body text-nl-gray max-w-2xl">
                We offer three engagement models, each designed for specific outcomes and timelines.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="border border-nl-light-gray p-8">
              <h3 className="text-subhead font-medium mb-3">Retainer</h3>
              <p className="text-body text-nl-gray mb-6">
                Ongoing strategic counsel, media relations, and executive positioning.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>6-12 month commitments</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Monthly reporting</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Senior-level execution</span>
                </div>
              </div>
              <div className="text-body font-medium">From $5,000/month</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border border-nl-light-gray p-8">
              <h3 className="text-subhead font-medium mb-3">Sprint</h3>
              <p className="text-body text-nl-gray mb-6">
                Focused campaigns for launches, fundraising announcements, or market entry.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>4-12 week projects</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Defined scope & timeline</span>
                </div>
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Measurable deliverables</span>
                </div>
              </div>
              <div className="text-body font-medium">From $15,000</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="border border-nl-light-gray p-8">
              <h3 className="text-subhead font-medium mb-3">Advisory</h3>
              <p className="text-body text-nl-gray mb-6">
                Strategic counsel and narrative development without ongoing execution.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-caption text-nl-gray flex items-start gap-2">
                  <span className="plus-symbol w-3 h-3 mt-1.5 flex-shrink-0" />
                  <span>Quarterly or as-needed</span>
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
              <div className="text-body font-medium">Custom pricing</div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">FAQ</span>
              <h2 className="mt-4 text-headline font-medium">
                Common questions.
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <FAQAccordion items={faqItems} />
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CTABand
        title="Ready to start a conversation?"
        description="We're selective about the work we take on. If you value substance and are building something meaningful, we'd like to hear from you."
        ctaText="Book a 15-min consult"
        ctaHref="/contact"
        location="footer"
        variant="dark"
      />
    </>
  );
}
