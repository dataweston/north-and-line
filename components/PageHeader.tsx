'use client';

import FadeIn from './FadeIn';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHeader({ title, subtitle, label }: PageHeaderProps) {
  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-24 border-b border-nl-light-gray">
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16">
        {label && (
          <FadeIn delay={0}>
            <span className="label block mb-4">{label}</span>
          </FadeIn>
        )}
        <FadeIn delay={0.1}>
          <h1 className="text-headline md:text-display font-medium text-balance max-w-4xl">
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={0.2}>
            <p className="mt-6 text-subhead text-nl-gray max-w-2xl">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
