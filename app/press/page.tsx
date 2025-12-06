import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
// import { getPressReleases } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Press',
  description: 'Press releases and media resources from North & Line.',
};

// Placeholder data - will be replaced with Sanity fetch
const pressReleases = [
  {
    _id: '1',
    title: 'North & Line Expands Healthcare Practice with Senior Hire',
    date: '2024-11-15',
    excerpt: 'Minneapolis-based public relations firm adds veteran healthcare communications leader to growing team.',
    category: 'Company News',
  },
  {
    _id: '2',
    title: 'Q3 2024 Tech Media Landscape Report',
    date: '2024-10-08',
    excerpt: 'Analysis of technology coverage trends across major business and trade publications.',
    category: 'Insights',
  },
  {
    _id: '3',
    title: 'North & Line Named to Top Midwest PR Firms List',
    date: '2024-09-22',
    excerpt: 'Recognition highlights firm\'s strategic approach and measurable client outcomes.',
    category: 'Awards',
  },
  {
    _id: '4',
    title: 'The Case for Clarity: Why Simplicity Wins in Corporate Communications',
    date: '2024-08-14',
    excerpt: 'Op-ed from founding partner Sarah Mitchell on the strategic value of clear, direct messaging.',
    category: 'Thought Leadership',
  },
  {
    _id: '5',
    title: 'North & Line Launches Crisis Communications Practice',
    date: '2024-07-01',
    excerpt: 'New offering brings rapid response capabilities and crisis preparedness planning to client roster.',
    category: 'Company News',
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function PressPage() {
  // When Sanity is connected, uncomment:
  // const releases = await getPressReleases();

  const releases = pressReleases; // Using placeholder data

  // Group releases by year
  const releasesByYear = releases.reduce((acc, release) => {
    const year = new Date(release.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(release);
    return acc;
  }, {} as Record<string, typeof releases>);

  const years = Object.keys(releasesByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <PageHeader
        label="Press"
        title="News and releases."
        subtitle="Company announcements, thought leadership, and media resources."
      />

      {/* Press Releases by Year */}
      <Section className="border-b border-nl-light-gray">
        <div className="space-y-20">
          {years.map((year) => (
            <div key={year}>
              <FadeIn>
                <h2 className="text-subhead font-medium mb-8">{year}</h2>
              </FadeIn>
              <div className="space-y-8">
                {releasesByYear[year].map((release, index) => (
                  <FadeIn key={release._id} delay={0.05 * index}>
                    <article className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-t border-nl-light-gray first:border-t-0">
                      <div className="md:col-span-2">
                        <time className="text-small text-nl-gray">
                          {formatDate(release.date)}
                        </time>
                      </div>
                      <div className="md:col-span-2">
                        <span className="text-small text-nl-gray">
                          {release.category}
                        </span>
                      </div>
                      <div className="md:col-span-8">
                        <h3 className="text-body font-medium group-hover:text-nl-gray transition-colors">
                          {release.title}
                        </h3>
                        <p className="mt-2 text-caption text-nl-gray">
                          {release.excerpt}
                        </p>
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Media Contact */}
      <Section className="border-b border-nl-light-gray bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Media Contact</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <p className="text-body text-nl-gray mb-4">
                For press inquiries, interview requests, or media resources:
              </p>
              <a 
                href="mailto:press@northandline.com" 
                className="text-subhead font-medium link-editorial"
              >
                press@northandline.com
              </a>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Resources */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Resources</span>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="p-6 border border-nl-light-gray">
                  <h3 className="text-body font-medium mb-2">Brand Assets</h3>
                  <p className="text-caption text-nl-gray mb-4">
                    Logo files, brand guidelines, and approved imagery.
                  </p>
                  <span className="text-caption link-editorial cursor-pointer">
                    Download kit
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 border border-nl-light-gray">
                  <h3 className="text-body font-medium mb-2">Company Overview</h3>
                  <p className="text-caption text-nl-gray mb-4">
                    Fact sheet, leadership bios, and company background.
                  </p>
                  <span className="text-caption link-editorial cursor-pointer">
                    Download PDF
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
