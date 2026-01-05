import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import CTABand from '@/components/CTABand';

export const metadata: Metadata = {
  title: 'Executive Communications',
  description: 'Founder and CEO positioning, media training, and thought leadership programs that build executive visibility and credibility.',
};

export default function ExecutiveCommsPage() {
  return (
    <>
      <PageHeader
        label="Service"
        title="Executive Communications"
        subtitle="Founder and CEO positioning, media training, and thought leadership."
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
                Executive visibility matters. Investors, journalists, and customers want to 
                hear from founders and CEOs—not marketing departments.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-body text-nl-gray max-w-2xl">
                This service develops executive presence, prepares spokespersons for media 
                engagements, builds thought leadership platforms, and positions founders as 
                credible industry voices. We work with first-time founders who've never done 
                press, experienced executives transitioning to new roles, and CEOs building 
                sustained visibility programs.
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
                  'Media training: on-camera, print, podcast interview preparation',
                  'Messaging development and talking points',
                  'Thought leadership strategy and content planning',
                  'Byline placement in target publications',
                  'Speaking opportunity identification and pitch support',
                  'Executive profile building (LinkedIn, bio optimization)',
                  'Crisis communication preparation',
                  'Interview prep sessions before major media appearances',
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
                  <h3 className="text-subhead font-medium mb-3">First-time founders</h3>
                  <p className="text-body text-nl-gray">
                    Learning to articulate vision, handle tough questions, and represent 
                    the company confidently in media settings.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Series A+ companies</h3>
                  <p className="text-body text-nl-gray">
                    Building sustained executive visibility as company scales and media 
                    opportunities increase.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <h3 className="text-subhead font-medium mb-3">Executive transitions</h3>
                  <p className="text-body text-nl-gray">
                    New CEOs or leadership changes requiring repositioning and external 
                    introductions.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        title="Build executive presence that drives business outcomes."
        ctaText="Book a 15-min consult"
        ctaHref="/contact"
        location="service"
        variant="dark"
      />
    </>
  );
}
