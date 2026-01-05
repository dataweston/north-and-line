import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  sector: string;
  year: string;
  result: string;
  href: string;
  featured?: boolean;
}

export default function CaseStudyCard({
  title,
  sector,
  year,
  result,
  href,
  featured = false,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="block group">
      <article>
        <div className="flex items-center gap-3 text-small text-nl-gray mb-3">
          <span>{sector}</span>
          <span className="w-4 h-px bg-nl-light-gray" />
          <span>{year}</span>
          {featured && <span className="ml-auto text-nl-black">⭐</span>}
        </div>
        
        <h3 className="text-subhead font-medium mb-3 group-hover:text-nl-gray transition-colors">
          {title}
        </h3>
        
        <div className="border-l-2 border-nl-light-gray pl-4 group-hover:border-nl-black transition-colors">
          <span className="label block mb-2">Key Result</span>
          <p className="text-body">{result}</p>
        </div>
        
        <div className="mt-4 inline-flex items-center gap-2 text-caption link-editorial">
          <span>View case study</span>
        </div>
      </article>
    </Link>
  );
}
