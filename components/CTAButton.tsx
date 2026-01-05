'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  location: 'hero' | 'nav' | 'footer' | 'case-study' | 'service' | 'section';
  variant?: 'primary' | 'secondary';
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  onClick,
  children,
  location,
  variant = 'primary',
  className = '',
  external = false,
}: CTAButtonProps) {
  const handleClick = () => {
    // Track CTA click event
    trackCTAClick(location);

    if (onClick) {
      onClick();
    }
  };

  const baseClasses = 'inline-flex items-center gap-3 font-medium group transition-colors';
  const variantClasses = variant === 'primary' 
    ? 'text-body' 
    : 'text-caption uppercase tracking-wider';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          onClick={handleClick}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{children}</span>
          <span className="plus-symbol w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
        </a>
      );
    }

    return (
      <Link href={href} onClick={handleClick} className={combinedClasses}>
        <span>{children}</span>
        <span className="plus-symbol w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={combinedClasses}>
      <span>{children}</span>
      <span className="plus-symbol w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
    </button>
  );
}
