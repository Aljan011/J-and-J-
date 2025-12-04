export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "id", type: "string", title: "Product ID" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "name", maxLength: 100 } },
    { name: "name", type: "string", title: "Product Name" },
    { name: "brand", type: "string", title: "Brand" },
    { name: "size", type: "string", title: "Size" },
    { name: "material", type: "string", title: "Material" },
    { name: "shape", type: "string", title: "Shape" },
    { name: "usage", type: "string", title: "Usage" },
    { name: "recyclable", type: "boolean", title: "Recyclable" },
    { name: "customPrinting", type: "string", title: "Custom Printing" },
    { name: "quickLine", type: "string", title: "Quick Info Line" },

    // Images
    { name: "mainImage", type: "image", title: "Main Image" },
    { name: "images", type: "array", of: [{ type: "image" }], title: "Gallery Images" },

    // Packs
    { name: "packs", type: "array", of: [{ type: "number" }], title: "Available Pack Sizes" },
    { name: "defaultPack", type: "number", title: "Default Pack Size" },

    // Colors and Price per pack
    {
      name: "colors",
      type: "array",
      title: "Colors & Pricing",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Color Name" },
            { name: "hex", type: "string", title: "Color Hex Code" },
            {
              name: "packPrices",
              type: "array",
              title: "Pack Prices",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "packSize", type: "number", title: "Pack Size" },
                    { name: "price", type: "number", title: "Price for this color & pack" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // Short & Long Description
    { name: "shortDescription", type: "text", title: "Short Description" },
    { name: "longDescription", type: "text", title: "Long Description" },

    // Detailed Sections
    {
      name: "details",
      type: "object",
      title: "Structured Details",
      fields: [
        {
          name: "features",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "feature", type: "string", title: "Feature Name" },
                { name: "description", type: "string", title: "Description" }
              ]
            }
          ]
        },
        { name: "whyChooseTitle", type: "string", title: "Why Choose Title" },
        { name: "whyChoose", type: "text", title: "Why Choose Description" },
        { name: "commonUses", type: "array", of: [{ type: "string" }], title: "Common Uses" },
        { name: "benefits", type: "array", of: [{ type: "string" }], title: "Benefits" },
        { name: "conclusion", type: "text", title: "Conclusion" },
      ]
    },

    // Quick Info
    {
      name: "quickInfo",
      type: "array",
      of: [
        { type: "object", fields: [
            { name: "key", type: "string", title: "Key" },
            { name: "value", type: "string", title: "Value" }
          ] 
        }
      ]
    },

    // FAQs
    {
      name: "faqs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", type: "string", title: "Question" },
            { name: "a", type: "text", title: "Answer" }
          ]
        }
      ]
    },

    // Offers (future use)
    {
      name: "offers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "code", type: "string", title: "Offer Code" },
            { name: "description", type: "string", title: "Description" },
            { name: "type", type: "string", title: "Type", options: { list: ["percentage", "flat"] } },
            { name: "amount", type: "number", title: "Amount" },
            { name: "minPrice", type: "number", title: "Minimum Price" },
            { name: "maxPrice", type: "number", title: "Maximum Price" },
          ]
        }
      ]
    },

    // Discount rate for listing page
    { name: "discountRate", type: "number", title: "Discount Rate (%)" },

    // SEO
    {
      name: "seo",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "SEO Title" },
        { name: "description", type: "text", title: "SEO Description" },
      ]
    }
  ]
};
