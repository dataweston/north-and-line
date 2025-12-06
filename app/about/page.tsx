import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description: 'North & Line is a public relations firm built on the belief that clarity outlasts charisma.',
};

const partners = [
  {
    name: 'Bob Pucker',
    role: 'Founding Partner',
    bio: 'Twenty years in narrative work across restaurants, hospitality groups, and operators in transition. I built my practice on the idea that most reputations rise or fall on clarity, not volume. At North & Line, I serve as the editorial spine—keeping the story aligned with the work itself.',
  },
];

const values = [
  {
    title: 'Substance over spectacle',
    description: 'We don\'t manufacture buzz. We help articulate genuine value in ways that resonate.',
  },
  {
    title: 'Earned, not bought',
    description: 'Our focus is earned media—coverage that comes from having something worth saying.',
  },
  {
    title: 'Long-term thinking',
    description: 'Reputations are built over years. We optimize for sustained credibility, not viral moments.',
  },
  {
    title: 'Selective partnerships',
    description: 'We work with fewer clients more deeply. This allows us to truly understand each business.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="We believe the best public relations is indistinguishable from the truth."
        subtitle="North & Line is a Minneapolis-based firm built for companies that value substance. We represent chefs and founders whose work benefits from disciplined storytelling."
      />

      {/* Philosophy Section */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Philosophy</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <blockquote className="text-headline font-medium text-balance">
                &ldquo;The goal isn&apos;t to make something sound good. 
                It&apos;s to find what&apos;s genuinely good and articulate it clearly.&rdquo;
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 text-body text-nl-gray max-w-2xl">
                We founded North & Line after years of watching PR operate backwards—
                starting with the story a company wanted to tell, then working backward 
                to justify it. We take the opposite approach: start with what&apos;s true, 
                then find the most compelling way to share it.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 text-body text-nl-gray max-w-2xl">
                This isn&apos;t idealism. It&apos;s strategy. In an era of
                information overload, audiences have developed sharp instincts
                for inauthenticity. The organizations that will build lasting
                reputations are those willing to be genuinely transparent about
                who they are and what they do.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="border-b border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Values</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={0.1 + index * 0.1}>
                  <div>
                    <h3 className="text-subhead font-medium">{value.title}</h3>
                    <p className="mt-3 text-body text-nl-gray">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Leadership</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-16">
              {partners.map((partner, index) => (
                <FadeIn key={partner.name} delay={0.1 + index * 0.1}>
                  <article>
                    <div className="flex items-baseline gap-4">
                      <h3 className="text-subhead font-medium">{partner.name}</h3>
                      <span className="text-caption text-nl-gray">{partner.role}</span>
                    </div>
                    <p className="mt-4 text-body text-nl-gray max-w-xl">
                      {partner.bio}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Location</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <h2 className="text-headline font-medium">Minneapolis</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-body text-nl-gray max-w-2xl">
                We&apos;re headquartered in Minneapolis, though we work with clients 
                across the country. There&apos;s something about the Midwest that 
                shapes how we work: a bias toward directness, a skepticism of 
                pretense, and a belief that good work speaks for itself.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
