import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'producte',
  title: 'Producte',
  type: 'document',
  fields: [
    defineField({ name: 'id', type: 'string', title: 'Product ID' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: "id", maxLength: 100 },
    }),
    defineField({ name: 'name', type: 'string', title: 'Product Name' }),
    defineField({ name: 'brand', type: 'string', title: 'Brand' }),
    defineField({ name: 'size', type: 'string', title: 'Size' }),
    defineField({ name: 'material', type: 'string', title: 'Material' }),
    defineField({ name: 'shape', type: 'string', title: 'Shape' }),
    defineField({ name: 'usage', type: 'string', title: 'Usage' }),
    defineField({ name: 'recyclable', type: 'boolean', title: 'Recyclable' }),
    defineField({ name: 'customPrinting', type: 'string', title: 'Custom Printing' }),
    defineField({ name: 'quickLine', type: 'string', title: 'Quick Info Line' }),
    defineField({ name: 'mainImage', type: 'image', title: 'Main Image' }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Gallery Images',
      of: [defineArrayMember({ type: 'image', title: 'Gallery Image' })],
    }),
    defineField({
      name: 'packs',
      type: 'array',
      title: 'Available Pack Sizes',
      of: [defineArrayMember({ type: 'number', title: 'Pack Size' })],
    }),
    defineField({ name: 'defaultPack', type: 'number', title: 'Default Pack Size' }),

    // Colors & Pricing
    defineField({
      name: 'colors',
      type: 'array',
      title: 'Colors & Pricing',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Color',
          fields: [
            defineField({ name: 'name', type: 'string', title: 'Color Name' }),
            defineField({ name: 'hex', type: 'string', title: 'Color Hex Code' }),
            defineField({
              name: 'packPrices',
              type: 'array',
              title: 'Pack Prices',
              of: [
                defineArrayMember({
                  type: 'object',
                  title: 'Pack Price',
                  fields: [
                    defineField({ name: 'packSize', type: 'number', title: 'Pack Size' }),
                    defineField({ name: 'price', type: 'number', title: 'Price for this color & pack' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({ name: 'shortDescription', type: 'text', title: 'Short Description' }),
    defineField({ name: 'longDescription', type: 'text', title: 'Long Description' }),

    // Structured Details
    defineField({
      name: 'details',
      type: 'object',
      title: 'Structured Details',
      fields: [
        defineField({
          name: 'features',
          type: 'array',
          title: 'Features',
          of: [
            defineArrayMember({
              type: 'object',
              title: 'Feature',
              fields: [
                defineField({ name: 'feature', type: 'string', title: 'Feature Name' }),
                defineField({ name: 'description', type: 'string', title: 'Description' }),
              ],
            }),
          ],
        }),
        defineField({ name: 'whyChooseTitle', type: 'string', title: 'Why Choose Title' }),
        defineField({ name: 'whyChoose', type: 'text', title: 'Why Choose Description' }),
        defineField({
          name: 'commonUses',
          type: 'array',
          title: 'Common Uses',
          of: [defineArrayMember({ type: 'string', title: 'Common Use' })],
        }),
        defineField({
          name: 'benefits',
          type: 'array',
          title: 'Benefits',
          of: [defineArrayMember({ type: 'string', title: 'Benefit' })],
        }),
        defineField({ name: 'conclusion', type: 'text', title: 'Conclusion' }),
      ],
    }),

    // Quick Info
    defineField({
      name: 'quickInfo',
      type: 'array',
      title: 'Quick Info',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Info Item',
          fields: [
            defineField({ name: 'key', type: 'string', title: 'Key' }),
            defineField({ name: 'value', type: 'string', title: 'Value' }),
          ],
        }),
      ],
    }),

    // FAQs
    defineField({
      name: 'faqs',
      type: 'array',
      title: 'FAQs',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'FAQ',
          fields: [
            defineField({ name: 'q', type: 'string', title: 'Question' }),
            defineField({ name: 'a', type: 'text', title: 'Answer' }),
          ],
        }),
      ],
    }),

    // Offers
    defineField({
      name: 'offers',
      type: 'array',
      title: 'Offers',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Offer',
          fields: [
            defineField({ name: 'code', type: 'string', title: 'Offer Code' }),
            defineField({ name: 'description', type: 'string', title: 'Description' }),
            defineField({
              name: 'type',
              type: 'string',
              title: 'Type',
              options: { list: ['percentage', 'flat'] },
            }),
            defineField({ name: 'amount', type: 'number', title: 'Amount' }),
            defineField({ name: 'minPrice', type: 'number', title: 'Minimum Price' }),
            defineField({ name: 'maxPrice', type: 'number', title: 'Maximum Price' }),
          ],
        }),
      ],
    }),

    defineField({ name: 'discountRate', type: 'number', title: 'Discount Rate (%)' }),

    // SEO
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'SEO Title' }),
        defineField({ name: 'description', type: 'text', title: 'SEO Description' }),
      ],
    }),
  ],
})
