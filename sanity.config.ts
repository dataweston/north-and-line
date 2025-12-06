import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';
export default defineConfig({
  name: 'north-and-line',
  title: 'North & Line',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [structureTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  studio: {
    components: {
      // Custom studio components can be added here
    },
  },
});
