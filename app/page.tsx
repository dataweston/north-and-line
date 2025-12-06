'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import Section from '@/components/Section';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 py-32">
          <div className="max-w-4xl">
            {/* Manifesto */}
            <FadeIn delay={0.2}>
              <h1 className="text-display font-medium text-balance leading-tight">
                Clarity ages better than charisma.
              </h1>
            </FadeIn>

            {/* Sub-copy */}
            <FadeIn delay={0.4}>
              <p className="mt-8 text-subhead text-nl-gray">
                Public Relations / Minneapolis
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.6}>
              <div className="mt-12 flex items-center gap-8">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-3 text-body font-medium group"
                >
                  <span>View our work</span>
                  <span className="plus-symbol w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
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

      {/* Brief Introduction */}
      <Section className="border-t border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">About</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-headline font-medium text-balance">
                We build reputations through earned media, strategic counsel, 
                and stories that hold up under scrutiny.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-body text-nl-gray max-w-2xl">
                North & Line is a public relations firm for companies that value 
                substance over spectacle. We help organizations find their voice, 
                articulate their value, and earn attention that matters.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 mt-8 link-editorial text-body"
              >
                <span>Learn more about us</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Featured Work Preview */}
      <Section className="border-t border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Selected Work</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-16">
              {/* Work Item 1 */}
              <FadeIn delay={0.1}>
                <article className="group">
                  <span className="text-small text-nl-gray">Healthcare / 2024</span>
                  <h3 className="mt-2 text-subhead font-medium">
                    Regional Health System Expansion
                  </h3>
                  <p className="mt-3 text-body text-nl-gray">
                    Media strategy for a $400M facility announcement, resulting in 
                    coverage across 47 regional outlets.
                  </p>
                  <Link 
                    href="/work" 
                    className="inline-flex items-center gap-2 mt-4 text-caption link-editorial"
                  >
                    <span>View case study</span>
                  </Link>
                </article>
              </FadeIn>

              {/* Work Item 2 */}
              <FadeIn delay={0.2}>
                <article className="group">
                  <span className="text-small text-nl-gray">Technology / 2024</span>
                  <h3 className="mt-2 text-subhead font-medium">
                    Series B Funding Announcement
                  </h3>
                  <p className="mt-3 text-body text-nl-gray">
                    Coordinated launch securing features in TechCrunch, The Information, 
                    and three national business outlets.
                  </p>
                  <Link 
                    href="/work" 
                    className="inline-flex items-center gap-2 mt-4 text-caption link-editorial"
                  >
                    <span>View case study</span>
                  </Link>
                </article>
              </FadeIn>

              {/* Work Item 3 */}
              <FadeIn delay={0.3}>
                <article className="group">
                  <span className="text-small text-nl-gray">Consumer / 2023</span>
                  <h3 className="mt-2 text-subhead font-medium">
                    Brand Launch Campaign
                  </h3>
                  <p className="mt-3 text-body text-nl-gray">
                    National media launch for a Minneapolis-based consumer brand, 
                    achieving 12M earned impressions in 90 days.
                  </p>
                  <Link 
                    href="/work" 
                    className="inline-flex items-center gap-2 mt-4 text-caption link-editorial"
                  >
                    <span>View case study</span>
                  </Link>
                </article>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-16 pt-8 border-t border-nl-light-gray">
                <Link 
                  href="/work" 
                  className="inline-flex items-center gap-3 text-body font-medium group"
                >
                  <span>All work</span>
                  <span className="plus-symbol w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
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
                <span className="text-headline font-medium">Core Story</span>
                <span className="plus-symbol w-5 h-5 text-nl-gray" />
                <span className="text-headline font-medium">Proof</span>
                <span className="plus-symbol w-5 h-5 text-nl-gray" />
                <span className="text-headline font-medium">Voice</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-body text-nl-gray max-w-2xl">
                Every engagement begins with understanding what makes you genuinely 
                different—not different in a press release, but different in practice. 
                We build from there.
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

      {/* Contact CTA */}
      <Section className="border-t border-nl-light-gray bg-nl-black text-nl-cream">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-headline font-medium">
              Ready to start a conversation?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 text-body text-nl-light-gray">
              We&apos;re selective about the work we take on. If you value substance 
              and are building something meaningful, we&apos;d like to hear from you.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-8 text-body font-medium group"
            >
              <span>Get in touch</span>
              <span className="plus-symbol w-4 h-4 text-nl-cream transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
