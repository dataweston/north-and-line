import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  padded?: boolean;
  narrow?: boolean;
}

export default function Section({
  children,
  className = '',
  id,
  padded = true,
  narrow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        ${padded ? 'py-20 md:py-28 lg:py-36' : ''}
        ${className}
      `}
    >
      <div className={`
        max-w-site mx-auto px-6 md:px-10 lg:px-16
        ${narrow ? 'max-w-prose' : ''}
      `}>
        {children}
      </div>
    </section>
  );
}
