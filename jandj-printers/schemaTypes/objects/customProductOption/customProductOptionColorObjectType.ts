import { defineType, defineField } from 'sanity'

export const customProductOptionColorObjectType = defineType({
  name: 'customProductOption.colorObject',
  title: 'Color Option',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      type: 'colorObject',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      color: 'color.hex',
      title: 'title',
    },
    prepare({ color, title }) {
      return {
        title,
        subtitle: color || '(No color)',
        media: color || undefined, 
      }
    },
  },
})
