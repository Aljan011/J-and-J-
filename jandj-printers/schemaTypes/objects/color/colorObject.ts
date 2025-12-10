// schemaTypes/objects/colorObject.ts
import { defineType, defineField } from 'sanity'

export const colorObjectType = defineType({
  name: 'colorObject',
  title: 'Color Object',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Color Name' }),
    defineField({ name: 'hex', type: 'string', title: 'Hex Code' }),
  ],
})
