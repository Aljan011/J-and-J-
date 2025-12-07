import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'email'},
  },
})
