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
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Healthcare', value: 'Healthcare' },
          { title: 'Technology', value: 'Technology' },
          { title: 'Consumer', value: 'Consumer' },
          { title: 'Financial Services', value: 'Financial Services' },
          { title: 'Professional Services', value: 'Professional Services' },
          { title: 'Manufacturing', value: 'Manufacturing' },
          { title: 'Non-Profit', value: 'Non-Profit' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'approach',
      title: 'Approach',
      type: 'text',
      rows: 4,
      description: 'How North & Line addressed the challenge',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'outcomes',
      title: 'Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key results and metrics',
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
        { name: 'author', title: 'Author', type: 'string' },
        { name: 'role', title: 'Role', type: 'string' },
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
      description: 'Show on homepage?',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sector: 'sector',
      year: 'year',
    },
    prepare({ title, sector, year }) {
      return {
        title,
        subtitle: `${sector} — ${year}`,
      };
    },
  },
  orderings: [
    {
      title: 'Year, Newest',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
});
