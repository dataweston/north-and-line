import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'sector',
      title: 'Sector / Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Healthcare', value: 'Healthcare' },
          { title: 'Technology', value: 'Technology' },
          { title: 'B2B SaaS', value: 'B2B SaaS' },
          { title: 'Consumer', value: 'Consumer' },
          { title: 'Climate / Mission-Driven', value: 'Climate' },
          { title: 'Financial Services', value: 'Financial Services' },
          { title: 'Professional Services', value: 'Professional Services' },
          { title: 'Manufacturing', value: 'Manufacturing' },
          { title: 'Non-Profit', value: 'Non-Profit' },
          { title: 'Hospitality', value: 'Hospitality' },
          { title: 'Other', value: 'Other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stage',
      title: 'Client Stage',
      type: 'string',
      description: 'Company stage (pre-seed, Series A, growth, etc.)',
      options: {
        list: [
          { title: 'Pre-seed', value: 'Pre-seed' },
          { title: 'Seed', value: 'Seed' },
          { title: 'Series A', value: 'Series A' },
          { title: 'Series B', value: 'Series B' },
          { title: 'Growth Stage', value: 'Growth' },
          { title: 'Established', value: 'Established' },
          { title: 'Regional', value: 'Regional' },
        ],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'objective',
      title: 'Client Objective',
      type: 'string',
      description: 'What the client wanted to achieve',
      placeholder: 'E.g., Launch fundraising announcement, reposition brand, enter new market',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 4,
      description: 'The problem or opportunity the client faced',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'strategy',
      title: 'Strategy',
      type: 'text',
      rows: 4,
      description: 'The strategic approach developed',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'execution',
      title: 'Execution',
      type: 'text',
      rows: 5,
      description: 'What North & Line actually did—specific tactics and activities',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', title: 'Metric', type: 'string', description: 'E.g., "47 media placements"' },
            { name: 'timeframe', title: 'Timeframe', type: 'string', description: 'E.g., "in 90 days"' },
          ],
        },
      ],
      description: 'Quantified results with timeframes',
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: 'coverageLinks',
      title: 'Coverage Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'outlet', title: 'Outlet Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'headline', title: 'Headline', type: 'string' },
          ],
        },
      ],
      description: 'Links to actual media coverage',
    }),
    defineField({
      name: 'coverageScreenshots',
      title: 'Coverage Screenshots',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Screenshots of media coverage',
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
        { name: 'author', title: 'Author Name', type: 'string' },
        { name: 'role', title: 'Role/Title', type: 'string' },
        { name: 'company', title: 'Company', type: 'string' },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage (select top 3)',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this case study was published',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sector: 'sector',
      year: 'year',
      featured: 'featured',
    },
    prepare({ title, sector, year, featured }) {
      return {
        title,
        subtitle: `${sector} — ${year}${featured ? ' ⭐ Featured' : ''}`,
      };
    },
  },
  orderings: [
    {
      title: 'Year, Newest',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
    {
      title: 'Published Date, Newest',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});
