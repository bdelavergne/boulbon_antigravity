import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Chateau de Boulbon',

  projectId: '6slug6ow',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton: Home Page
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            // Regular document types
            S.documentTypeListItem('event').title('Events'),
            S.documentTypeListItem('pageContent').title('Page Content'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
