import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'E.g., "Narrative & Positioning", "Earned Media"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortPitch',
      title: 'Short Pitch',
      type: 'text',
      rows: 2,
      description: 'Brief one-liner for service cards (aim for 50-80 characters)',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'What this service is',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatItIsNot',
      title: 'What It Is Not',
      type: 'text',
      rows: 3,
      description: 'Clarify what this service does NOT include',
    }),
    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Who should consider this service (e.g., "VC-backed startups", "Companies pre-launch")',
      validation: (Rule) => Rule.required().min(2).max(5),
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Measurable outcomes clients can expect',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Concrete deliverables (e.g., "Media list", "Press kit", "Monthly reports")',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Step Number', type: 'string', description: 'E.g., "01"' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'timeline', title: 'Timeline', type: 'string', description: 'E.g., "Week 1-2"' },
          ],
        },
      ],
      description: 'Step-by-step process with timelines',
    }),
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
      description: 'Example case studies that showcase this service',
    }),
    defineField({
      name: 'pricingNote',
      title: 'Pricing Note',
      type: 'string',
      description: 'Optional pricing guidance (e.g., "From $5,000/month", "Project-based pricing")',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display on services page (lower numbers first)',
      initialValue: 10,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show in homepage services preview',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      featured: 'featured',
      order: 'order',
    },
    prepare({ title, featured, order }) {
      return {
        title,
        subtitle: `Order: ${order}${featured ? ' ⭐ Featured' : ''}`,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
