'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import { trackContactFormSubmit } from '@/lib/analytics';

type FormStageType = 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth' | 'established' | 'other' | '';
type FormBudgetType = 'under-5k' | '5k-10k' | '10k-20k' | '20k-plus' | 'project' | 'flexible' | '';
type FormGoalType = 'launch' | 'fundraise' | 'reposition' | 'ongoing-press' | 'executive-visibility' | 'crisis' | 'other' | '';
type FormTimelineType = 'now' | '30d' | '90d' | 'exploring' | '';

interface FormState {
  name: string;
  email: string;
  company: string;
  stage: FormStageType;
  budget: FormBudgetType;
  goal: FormGoalType;
  timeline: FormTimelineType;
  message: string;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    stage: '',
    budget: '',
    goal: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track form submission
    trackContactFormSubmit({
      stage: formState.stage,
      budget: formState.budget,
      goal: formState.goal,
      timeline: formState.timeline,
    });
    
    // Simulate form submission
    // In production, this would POST to an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <PageHeader
        label="Contact"
        title="Start a conversation."
        subtitle="We're selective about the work we take on. Tell us about what you're building."
      />

      <Section className="border-b border-nl-light-gray">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Form Column */}
          <div className="md:col-span-7">
            {isSubmitted ? (
              <FadeIn>
                <div className="py-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="plus-symbol w-5 h-5 text-nl-black" />
                    <h2 className="text-subhead font-medium">Message received.</h2>
                  </div>
                  <p className="text-body text-nl-gray">
                    Thank you for reaching out. We review every inquiry and will 
                    respond within two business days if there&apos;s a potential fit.
                  </p>
                </div>
              </FadeIn>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <FadeIn delay={0.1}>
                  <div>
                    <label htmlFor="name" className="label block mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-nl-light-gray pb-3 text-body 
                                 focus:outline-none focus:border-nl-black transition-colors
                                 placeholder:text-nl-light-gray"
                      placeholder="Your name"
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                  <div>
                    <label htmlFor="email" className="label block mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-nl-light-gray pb-3 text-body 
                                 focus:outline-none focus:border-nl-black transition-colors
                                 placeholder:text-nl-light-gray"
                      placeholder="your@email.com"
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div>
                    <label htmlFor="company" className="label block mb-3">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-nl-light-gray pb-3 text-body 
                                 focus:outline-none focus:border-nl-black transition-colors
                                 placeholder:text-nl-light-gray"
                      placeholder="Your company"
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div>
                    <label htmlFor="stage" className="label block mb-3">
                      Company Stage *
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      required
                      value={formState.stage}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-nl-light-gray pb-3 text-body 
                                 focus:outline-none focus:border-nl-black transition-colors"
                    >
                      <option value="">Select stage...</option>
                      <option value="pre-seed">Pre-seed</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                      <option value="series-b">Series B+</option>
                      <option value="growth">Growth stage</option>
                      <option value="established">Established</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div>
                    <label htmlFor="budget" className="label block mb-3">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-nl-light-gray pb-3 text-body 
                                 focus:outline-none focus:border-nl-black transition-colors"
                    >
                      <option value="">Select budget...</option>
                      <option value="under-5k">Under $5,000/month</option>
                      <option value="5k-10k">$5,000-$10,000/month</option>
                      <option value="10k-20k">$10,000-$20,000/month</option>
                      <option value="20k-plus">$20,000+/month</option>
                      <option value="project">Project-based</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div>
                    <label htmlFor="goal" className="label block mb-3">
                      Primary Goal *
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      required
                      value={formState.goal}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-nl-light-gray pb-3 text-body 
                                 focus:outline-none focus:border-nl-black transition-colors"
                    >
                      <option value="">Select goal...</option>
                      <option value="launch">Product/company launch</option>
                      <option value="fundraise">Fundraising announcement</option>
                      <option value="reposition">Brand repositioning</option>
                      <option value="ongoing-press">Ongoing press coverage</option>
                      <option value="executive-visibility">Executive visibility</option>
                      <option value="crisis">Crisis/issues management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div>
                    <label htmlFor="timeline" className="label block mb-3">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formState.timeline}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-nl-light-gray pb-3 text-body 
                                 focus:outline-none focus:border-nl-black transition-colors"
                    >
                      <option value="">Select timeline...</option>
                      <option value="now">Immediately</option>
                      <option value="30d">Within 30 days</option>
                      <option value="90d">Within 90 days</option>
                      <option value="exploring">Exploring options</option>
                    </select>
                  </div>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <div>
                    <label htmlFor="message" className="label block mb-3">
                      Tell us more *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-nl-light-gray pb-3 text-body 
                                 focus:outline-none focus:border-nl-black transition-colors resize-none
                                 placeholder:text-nl-light-gray"
                      placeholder="Tell us about your organization and what you're looking for..."
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 text-body font-medium group
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                    <span className={`plus-symbol w-4 h-4 transition-transform duration-300 
                                     ${isSubmitting ? 'animate-spin' : 'group-hover:rotate-45'}`} />
                  </button>
                </FadeIn>
              </form>
            )}
          </div>

          {/* Contact Info Column */}
          <div className="md:col-span-4 md:col-start-9">
            <div className="space-y-12">
              <FadeIn delay={0.1}>
                <div>
                  <h3 className="label mb-4">General Inquiries</h3>
                  <a 
                    href="mailto:hello@northandline.com" 
                    className="text-body link-editorial"
                  >
                    hello@northandline.com
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div>
                  <h3 className="label mb-4">Press Contact</h3>
                  <a 
                    href="mailto:press@northandline.com" 
                    className="text-body link-editorial"
                  >
                    press@northandline.com
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div>
                  <h3 className="label mb-4">Location</h3>
                  <address className="text-body not-italic text-nl-gray">
                    Minneapolis, Minnesota
                  </address>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div>
                  <h3 className="label mb-4">Response Time</h3>
                  <p className="text-body text-nl-gray">
                    We respond to all inquiries within two business days.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Note */}
      <Section>
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-body text-nl-gray">
              We work with a limited number of clients at any time to ensure 
              senior-level attention on every account. Not every inquiry will 
              be a fit, but we read every message and will be direct about whether 
              there&apos;s potential for partnership.
            </p>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
