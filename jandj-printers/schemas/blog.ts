import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blog', // type name
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({ 
      name: 'author', 
      title: 'Author', 
      type: 'reference', 
      to: [{ type: 'author' }] 
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'body', title: 'Body', type: 'blockContent' }), // ensure blockContent is in schemaTypes
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'Packaging Services', value: 'packaging' },
          { title: 'Printing Services', value: 'printing' },
          { title: 'Paper Bags', value: 'paperbags' },
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: { title: 'title', author: 'author.name', media: 'mainImage' },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
