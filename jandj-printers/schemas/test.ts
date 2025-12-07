// schemas/test.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' }
  ]
})
