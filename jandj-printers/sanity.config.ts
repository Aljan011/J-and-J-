import {defineConfig, isDev} from 'sanity'

import {structureTool} from 'sanity/structure'
import { schemaTypes  } from './schemaTypes'
import {structure} from './structure'

import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './plugins/customDocumentActions'
import Navbar from './components/studio/Navbar'



// Plugins only for development
const devOnlyPlugins = [visionTool()]


export default defineConfig({
  name: 'default',
  title: 'JandJ Printers',

  projectId: 'jz6c1suz',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  form: {
    file: {
      assetSources: (previousAssetSources) =>
        previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource),
    },
    image: {
      assetSources: (previousAssetSources) =>
        previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource),
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


