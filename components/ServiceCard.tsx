import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  shortPitch: string;
  bestFor: string[];
  href: string;
  featured?: boolean;
}

export default function ServiceCard({
  title,
  shortPitch,
  bestFor,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block group border border-nl-light-gray p-8 hover:border-nl-black transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-subhead font-medium">{title}</h3>
        <span className="plus-symbol w-4 h-4 text-nl-gray flex-shrink-0 mt-1 group-hover:rotate-45 transition-transform duration-300" />
      </div>
      
      <p className="text-body text-nl-gray mb-6">{shortPitch}</p>
      
      <div>
        <span className="label block mb-3">Best for</span>
        <ul className="space-y-2">
          {bestFor.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-caption text-nl-gray">
              <span className="w-1 h-1 bg-nl-gray rounded-full mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {featured && (
        <div className="mt-4 pt-4 border-t border-nl-light-gray">
          <span className="text-small text-nl-gray">⭐ Featured Service</span>
        </div>
      )}
    </Link>
  );
}
