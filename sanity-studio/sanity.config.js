import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schema/schema'

export default defineConfig({
  name: 'default',
  title: 'JandJ printers',

  projectId: 'jz6c1suz',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema,
  },
})
