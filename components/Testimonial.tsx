interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  className?: string;
}

export default function Testimonial({
  quote,
  author,
  role,
  company,
  className = '',
}: TestimonialProps) {
  return (
    <blockquote className={`${className}`}>
      <p className="text-subhead font-medium text-balance leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6">
        <div className="text-body">
          <cite className="not-italic font-medium text-nl-black">{author}</cite>
          <span className="text-nl-gray">
            {' '}— {role}
            {company && `, ${company}`}
          </span>
        </div>
      </footer>
    </blockquote>
  );
}
