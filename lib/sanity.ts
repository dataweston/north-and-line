import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Query functions
export async function getPressReleases() {
  return client.fetch(`
    *[_type == "pressRelease"] | order(date desc) {
      _id,
      title,
      date,
      excerpt,
      category,
      "slug": slug.current,
      content
    }
  `);
}

export async function getPressReleaseBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "pressRelease" && slug.current == $slug][0] {
      _id,
      title,
      date,
      excerpt,
      category,
      "slug": slug.current,
      content
    }
  `,
    { slug }
  );
}

export async function getCaseStudies() {
  return client.fetch(`
    *[_type == "caseStudy"] | order(year desc) {
      _id,
      title,
      sector,
      year,
      challenge,
      approach,
      outcomes,
      "slug": slug.current
    }
  `);
}

export async function getPage(slug: string) {
  return client.fetch(
    `
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      content
    }
  `,
    { slug }
  );
}
