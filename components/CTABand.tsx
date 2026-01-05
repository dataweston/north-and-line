import Section from './Section';
import FadeIn from './FadeIn';
import CTAButton from './CTAButton';

interface CTABandProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  location: 'hero' | 'nav' | 'footer' | 'case-study' | 'service' | 'section';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function CTABand({
  title,
  description,
  ctaText = 'Book a 15-min consult',
  ctaHref = '/contact',
  location,
  variant = 'dark',
  className = '',
}: CTABandProps) {
  const isDark = variant === 'dark';
  const sectionClasses = isDark
    ? 'border-t border-nl-light-gray bg-nl-black text-nl-cream'
    : 'border-t border-nl-light-gray';

  return (
    <Section className={`${sectionClasses} ${className}`}>
      <div className="text-center max-w-2xl mx-auto">
        <FadeIn>
          <h2 className="text-headline font-medium">{title}</h2>
        </FadeIn>
        {description && (
          <FadeIn delay={0.1}>
            <p className={`mt-4 text-body ${isDark ? 'text-nl-light-gray' : 'text-nl-gray'}`}>
              {description}
            </p>
          </FadeIn>
        )}
        <FadeIn delay={0.2}>
          <div className="mt-8">
            <CTAButton
              href={ctaHref}
              location={location}
              className={isDark ? 'text-nl-cream' : ''}
            >
              {ctaText}
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
