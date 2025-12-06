import Link from 'next/link';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/approach', label: 'Approach' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-nl-light-gray bg-nl-cream">
      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-xl font-medium tracking-tight">North & Line</span>
              <span className="plus-symbol w-3 h-3 text-nl-black transition-transform duration-300 group-hover:rotate-45" />
            </Link>
            <p className="mt-4 text-caption text-nl-gray max-w-xs">
              Public Relations<br />
              Minneapolis
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="label mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-editorial text-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h4 className="label mb-4">Contact</h4>
            <ul className="space-y-3 text-body">
              <li>
                <a 
                  href="mailto:hello@northandline.com" 
                  className="link-editorial"
                >
                  hello@northandline.com
                </a>
              </li>
              <li>
                <a 
                  href="mailto:press@northandline.com" 
                  className="link-editorial"
                >
                  press@northandline.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location Column */}
          <div className="md:col-span-2">
            <h4 className="label mb-4">Location</h4>
            <address className="text-body not-italic text-nl-gray">
              Minneapolis<br />
              Minnesota
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-nl-light-gray flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-small text-nl-gray">
            © {currentYear} North & Line. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-small text-nl-gray">
            <Link href="/privacy" className="hover:text-nl-black transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-nl-black transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
