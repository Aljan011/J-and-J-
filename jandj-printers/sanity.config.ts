import { defineConfig, isDev } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

import { structure } from './structure'
import { schemaTypes } from './schemaTypes'
import { customDocumentActions } from './plugins/customDocumentActions'
import Navbar from './components/studio/Navbar'

// Plugins only for development
const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'default',
  title: 'JandJ Printers',

  projectId: 'jz6c1suz',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    customDocumentActions(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  form: {
    file: {
      assetSources: (prev) =>
        prev.filter((source) => source.name !== 'mediaAssetSource'), // optional cleanup
    },
    image: {
      assetSources: (prev) =>
        prev.filter((source) => source.name === 'mediaAssetSource'),
    },
  },

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: Navbar,
    },
  },
})
