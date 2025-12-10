import pluralize from 'pluralize-esm'
import { defineField } from 'sanity'

interface ColorOption {
  title: string
}

export const customProductOptionColorType = defineField({
  name: 'customProductOption.color',
  title: 'Color',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Shopify product option name (case sensitive)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colors',
      type: 'array',
      of: [{ type: 'customProductOption.colorObject' }],
      validation: (Rule) =>
        Rule.custom((options: ColorOption[] | undefined) => {
          if (options) {
            const uniqueTitles = new Set(options.map((option) => option?.title))
            if (options.length > uniqueTitles.size) {
              return 'Each product option must have a unique title'
            }
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      colors: 'colors',
      title: 'title',
    },
    prepare({ colors, title }) {
      const count = colors?.length || 0
      return {
        title,
        subtitle: count ? pluralize('color', count, true) : 'No colors',
      }
    },
  },
})
