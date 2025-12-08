// src/data/products.js
// Static products data for first-launch (no backend).
// Add more products to this array as needed.

export const products = [
  {
    id: "flap-box-4-5x3x1",
    slug: "3-ply-corrugated-flap-box-4-5x3x1",
    name: "3 Ply Corrugated Flap Box - 4.5x3x1 Inch | Ideal for Jewellery & Gifts",
    brand: "Box Brother",

    size: "4.5x3x1 Inch (11.43 L x 7.62 B x 2.54 H cm)",
    material: "3 Ply Brown Kraft Corrugated Board",
    shape: "Rectangular Flap Box",
    usage: "Small product, Ecommerce, Jewellery And Gift Packaging",
    recyclable: true,
    customPrinting: "Available on Bulk Orders",

    // QUICK ONE-LINE INFO (NEW)
    quickLine:
      "Durable 3 Ply Brown Kraft Flap Box ideal for small items, gifting & e-commerce packaging.",

    // IMAGES
    images: [
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg"
    ],
    mainImage: "/paper-bags/paperbag.jpg",

    // PACKS
    packs: [100, 500, 1000, 2000],
    defaultPack: 100,

    // COLORS
    colors: {
      brown: { name: "Brown", hex: "#c48757", pricePerUnit: 7 },
      pink: { name: "Pink", hex: "#ff80ff", pricePerUnit: 16 },
      royalblue: { name: "Royal Blue", hex: "#4169e0", pricePerUnit: 16 },
      white: { name: "White", hex: "#ffffff", pricePerUnit: 13 },
    },

    // OLD DESCRIPTION
    shortDescription:
      "3 Ply Corrugated Flap Box – Ideal for Compact Shipping Needs.",
    longDescription:
      "The Box Brother 3 Ply Corrugated Flap Box in 4.5x3x1 inch size is crafted to ensure secure and damage-free delivery of your small and delicate items. Made from premium brown kraft paperboard, this box is lightweight yet durable — a smart packaging choice for e-commerce, gifting, and D2C brands dealing in compact products.",

    // NEW ✔ FULL STRUCTURED DESCRIPTION SYSTEM
    details: {
      // FEATURE TABLE (NEW)
      features: [
        {
          feature: "Product Name",
          description: "3 Ply Corrugated Flap Box"
        },
        {
          feature: "Size",
          description: "4.5x3x1 Inch (11.43 L x 7.62 B x 2.54 H cm)"
        },
        {
          feature: "Material",
          description: "3-Ply Corrugated Board"
        },
        {
          feature: "Color Options",
          description: "Brown, White, Pink, Royal Blue"
        },
        {
          feature: "Shape",
          description: "Rectangular Flap Box"
        },
        {
          feature: "Usage",
          description: "Jewellery, Gifts, Electronics, E-commerce"
        },
        {
          feature: "Recyclable",
          description: "Yes"
        },
        {
          feature: "Custom Printing",
          description: "Available on Bulk Orders"
        }
      ],

      // WHY CHOOSE SECTION (NEW)
      whyChooseTitle: "Why Choose the 4.5x3x1 Inch Flap Box?",
      whyChoose:
        "This flap box is engineered for brands that need strong, lightweight, and professional-grade packaging. With its high-strength 3-ply kraft material, it offers excellent protection while keeping shipping costs low.",

      // COMMON USES (NEW)
      commonUses: [
        "Jewellery & accessories",
        "Small Cosmetics and skincare products",
        "Small electronics (earbuds, USBs, chargers)",
        "Festive gift packs or promotional items",
        "Tiny hardware or craft parts",
      ],

      // BENEFITS (NEW)
      benefits: [
        "Compact and elegant design for small products",
        "Strong 3-ply corrugated board for relaible protection",
        "Ships flat for efficient storage and transport",
        "Eco-conscious materials, reflecting Nepal-inspired sustainability",
        "Trusted by small business for secure packaging",
      ],

      // CONCLUSION (NEW)
      conclusion:
        "For a reliable, eco-friendly and elegant packaging for small items, the 4.5x3x1 inch 3 Ply Corrugated Flap Box from Box Brother is the ideal choice. Its combination of durability, affordability, and aesthetic appeal makes it a favorite among D2C brands and e-commerce sellers.",
    },

    // QUICK INFO TABLE (unchanged)
    quickInfo: [
      { key: "Product Name", value: "3 Ply Corrugated Flap Box" },
      { key: "Brand", value: "Box Brother" },
      { key: "Size", value: "4.5x3x1 Inch" },
      { key: "Material", value: "3 Ply Brown Kraft Corrugated Board" },
      { key: "Color", value: "Brown" },
      { key: "Shape", value: "Rectangular Flap Box" },
      { key: "Usage", value: "Small product, Ecommerce, Jewellery And Gift Packaging" },
      { key: "Recyclable", value: "Yes" },
      { key: "Custom Printing", value: "Available on Bulk Orders" }
    ],

    // FAQs
    faqs: [
      {
        q: "What products can I pack in this flap box?",
        a: "Ideal for compact, fragile items like jewellery, small electronics, cosmetics, and gifts."
      },
      {
        q: "Is it sturdy enough for shipping?",
        a: "Yes, the 3-ply corrugated board provides excellent protection during transit."
      },
      {
        q: "Can I order custom printed boxes?",
        a: "Yes, custom printing options are available for bulk orders. Contact us for details."
      },
      {
        q: "Is this box eco-friendly?",
        a: "Yes, it is made from recyclable materials, aligning with sustainable packaging practices."
      },
      {
        q: "How is this box shipped?",
        a: "The boxes are shipped flat to save space and reduce shipping costs."
      }
    ],

    // OFFERS
    offers: [
      {
        code: "WELCOME10",
        description: "10% off on orders above 999",
        type: "percentage",
        amount: 10,
        minPrice: 999,
        maxPrice: 100000,
      },
      {
        code: "G15",
        description: "15% off on orders above 1500",
        type: "percentage",
        amount: 15,
        minPrice: 1500,
        maxPrice: 1000000,
      }
    ],

    // SEO
    seo: {
      title: "3 Ply Corrugated Flap Box - 4.5x3x1 Inch | Durable Jewellery & Gift Packaging",
      description:
        "Buy durable 3 Ply Corrugated Flap Boxes for jewelry, cosmetics, small electronics, and e-commerce packaging. Affordable, strong, and available in multiple colors inspired by Nepal."
    }
  },


  // sample products for testing
  {
    id: "flap-box-4x4x1.5",
    slug: "3-ply-corrugated-flap-box-4x4x1.5",
    name: "3 Ply Corrugated Flap Box - 4x4x1.5 Inch | Ideal for Small Gifts & Jewellery",
    brand: "Box Brother",
    size: "4x4x1.5 Inch (10.16 L x 10.16 B x 3.81 H cm)",
    material: "3 Ply Corrugated Board - sturdy yet lightweight",
    shape: "Rectangular Flap Box",
    usage: "Small product, Ecommerce, Jewellery And Gift Packaging",
    recyclable: true,
    customPrinting: "Available on Bulk Orders",

    // QUICK ONE-LINE INFO (NEW)
    quickLine:
      "Durable 3 Ply Brown Kraft Flap Box ideal for small items, gifting & e-commerce packaging.",
    images: [
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg"
    ],
    mainImage: "/paper-bags/paperbag.jpg",
    packs: [100, 500, 1000, 2000],
    defaultPack: 100,
    colors: {
      brown: { name: "Brown", hex: "#c48757", pricePerUnit: 11 },
      pink: { name: "Pink", hex: "#ff80ff", pricePerUnit: 18 },
      royalblue: { name: "Royal Blue", hex: "#4169e0", pricePerUnit: 18 },
      white: { name: "White", hex: "#ffffff", pricePerUnit: 14.5 },
    },
    shortDescription:
      "3 Ply Corrugated Flap Box – Ideal for Compact Shipping Needs.",
    longDescription:
      "The Box Brother 3 Ply Corrugated Flap Box in 4x4x1.5 inch size is crafted to ensure secure and damage-free delivery of your small and delicate items. Made from premium brown kraft paperboard, this box is lightweight yet durable — a smart packaging choice for e-commerce, gifting, and D2C brands dealing in compact products.",
    details: {
      // FEATURE TABLE (NEW)
      features: [
        {
          feature: "Product Name",
          description: "3 Ply Corrugated Flap Box"
        },
        {
          feature: "Size",
          description: "4x4x1.5 Inch (10.16 L x 10.16 B x 3.81 H cm)"
        },
        {
          feature: "Material",
          description: "3-Ply Corrugated Board"
        },
        {
          feature: "Color Options",
          description: "Brown, White, Pink, Royal Blue"
        },
        {
          feature: "Shape",
          description: "Rectangular Flap Box"
        },
        {
          feature: "Usage",
          description: "Jewellery, mini Cosmetics and Gift Packaging, small accessories"
        },
        {
          feature: "Recyclable",
          description: "Yes"
        },
        {
          feature: "Custom Printing",
          description: "Available on Bulk Orders"
        }
      ],
      // WHY CHOOSE SECTION (NEW)
      whyChooseTitle: "Why Choose the 4x4x1.5 Inch Flap Box?",
      whyChoose:
        "This flap box is engineered for brands that need strong, lightweight, and professional-grade packaging. With its high-strength 3-ply kraft material, it offers excellent protection while keeping shipping costs low.",
      // COMMON USES (NEW)
      commonUses: [
        "Rings, earrings & small accessories",
        "Skincare and cosmetics samples",
        "Small electronics (earbuds, USBs, chargers)",
        "Mini gift packs or promotional items",
        "Tiny hardware or craft parts",
      ],
      // BENEFITS (NEW)
      benefits: [
        "Compact and elegant design for small products",
        "Strong 3-ply corrugated board for relaible protection",
        "Ships flat for efficient storage and transport",
        "Eco-conscious materials, reflecting Nepal-inspired sustainability",
        "Trusted by small business for secure packaging",
      ],
      // CONCLUSION (NEW)
      conclusion:
        "For a reliable, eco-friendly and elegant packaging for small items, the 4x4x1.5 inch 3 Ply Corrugated Flap Box from Box Brother is the ideal choice. Its combination of durability, affordability, and aesthetic appeal makes it a favorite among D2C brands and e-commerce sellers.", 
    },
    quickInfo: [
      { key: "Product Name", value: "3 Ply Corrugated Flap Box" },
      { key: "Brand", value: "Box Brother" },
      { key: "Size", value: "4x4x1.5 Inch" },
      { key: "Material", value: "3 Ply Brown Kraft Corrugated Board" },
      { key: "Color", value: "Brown" },
      { key: "Shape", value: "Rectangular Flap Box" },
      { key: "Usage", value: "Small product, Ecommerce, Jewellery And Gift Packaging" },
      { key: "Recyclable", value: "Yes" },
      { key: "Custom Printing", value: "Available on Bulk Orders" }
    ],
    faqs: [
      {
        q: "What products can I pack in this flap box?",
        a: "Ideal for compact, fragile items like jewellery, small electronics, cosmetics, and miniature tech gadgets."
      },
      {
        q: "Is it sturdy enough for shipping?",
        a: "Yes, the 3-ply corrugated board provides excellent protection during transit."
      },
      {
        q: "Can I order custom printed boxes?",
        a: "Yes, custom printing options are available for bulk orders. Contact us for details."
      },
      {
        q: "Is this box eco-friendly?",
        a: "Yes, it is made from recyclable materials, aligning with sustainable packaging practices."
      },
      {
        q: "How is this box shipped?",
        a: "The boxes are shipped flat to save space and reduce shipping costs."
      }
    ],

    
    
  },

  {
    id : "3-Ply Rigid Corrugated Box - 6x4x2 Inch",
    slug: "3-ply-rigid-corrugated-box-6x4x2-inch",
    name : "3 Ply Rigid Corrugated Box - 6x4x2 Inch | Sturdy Packaging for Electronics & Gifts",
    brand: "Box Brother",
    size : "6x4x2 Inch (15.24 L x 10.16 B x 5.08 H cm)",
    material : "3 Ply Corrugated Board - sturdy yet lightweight",
    shape : "Rectangular Rigid Box",
    usage : "Small product, Ecommerce, Electronics And Gift Packaging",
    recyclable : true,
    customPrinting : "Available on Bulk Orders",

    // QUICK ONE-LINE INFO (NEW)
    quickLine :
      "Durable 3 Ply Brown Kraft Rigid Box ideal for electronics, gifting & e-commerce packaging.",
    images : [
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg"
    ],
    mainImage : "/paper-bags/paperbag.jpg",
    packs : [100, 500, 1000, 2000],
    defaultPack : 100,
    colors : {
      brown : { name : "Brown", hex : "#c48757", pricePerUnit : 14 },
      pink : { name : "Pink", hex : "#ff80ff", pricePerUnit : 27 },
      royalblue : { name : "Royal Blue", hex : "#4169e0", pricePerUnit : 27 },
      white : { name : "White", hex : "#ffffff", pricePerUnit : 10 },
  },
    shortDescription :
      "3 Ply Rigid Corrugated Box – Ideal for Secure Shipping Needs.",
    longDescription :
      "The Box Brother 3 Ply Rigid Corrugated Box in 6x4x2 inch size is crafted to ensure secure and damage-free delivery of your small and delicate items. Made from premium brown kraft paperboard, this box is lightweight yet durable — a smart packaging choice for e-commerce, gifting, and D2C brands dealing in compact products.",
    details : {
      // FEATURE TABLE (NEW)
      features : [
        {
          feature : "Product Name",
          description : "3 Ply Rigid Corrugated Box"
        },
        {
          feature : "Size",
          description : "6x4x2 Inch (15.24 L x 10.16 B x 5.08 H cm)"
        },
        {
          feature : "Material",
          description : "Rigid corrugated Board with three plies"
        },
        {
          feature : "Color Options",
          description : "Brown, White, Pink, Royal Blue"
        },
        {
          feature : "Shape",
          description : "Rectangular Rigid Box"
        },
        {
          feature : "Usage",
          description : " Jewellery, Small Gifts, Delicate Accessories"
        },
        {
          feature : "Recyclable",
          description : "Yes"
        },
        {
          feature : "Custom Printing",
          description : "Available on Bulk Orders"
        }
      ],
      // WHY CHOOSE SECTION (NEW)
      whyChooseTitle : "Why Choose the 6x4x2 Inch Rigid Box?",
      whyChoose :
        "This rigid box is engineered for brands that need strong, lightweight, and professional-grade packaging. With its high-strength 3-ply kraft material, it offers excellent protection while keeping shipping costs low.",
      // COMMON USES (NEW)
      commonUses : [
        "Small electronics (earbuds, smartwatches)",
        "Jewellery & accessories",
        "Cosmetics and skincare products",
        "Gift packs or promotional items",
        "Delicate craft parts",
      ],
      // BENEFITS (NEW)
      benefits : [
        "Sturdy design for fragile products",
        "Strong 3-ply corrugated board for reliable protection",
        "Ships flat for efficient storage and transport",
        "Eco-conscious materials, reflecting Nepal-inspired sustainability",
        "Trusted by small business for secure packaging",
      ],
      // CONCLUSION (NEW)
      conclusion :
        "For a reliable, eco-friendly and elegant packaging for small items, the 6x4x2 inch 3 Ply Rigid Corrugated Box from Box Brother is the ideal choice. Its combination of durability, affordability, and aesthetic appeal makes it a favorite among D2C brands and e-commerce sellers.", 
    },
    quickInfo : [
      { key : "Product Name", value : "3 Ply Rigid Corrugated Box" },
      { key : "Brand", value : "Box Brother" },
      { key : "Size", value : "6x4x2 Inch" },
      { key : "Material", value : "3 Ply Brown Kraft Corrugated Board" },
      { key : "Color", value : "Brown" },
      { key : "Shape", value : "Rectangular Rigid Box" },
      { key : "Usage", value : "Small product, Ecommerce, Electronics And Gift Packaging" },
      { key : "Recyclable", value : "Yes" },
      { key : "Custom Printing", value : "Available on Bulk Orders" }
    ],
    faqs : [
      {
        q : "What products can I pack in this rigid box?",
        a : "Ideal for fragile items like jewellery, small electronics, cosmetics, and gifts."
      },
      {
        q : "Is it sturdy enough for shipping?",
        a : "Yes, the 3-ply corrugated board provides excellent protection during transit."
      },
      {
        q : "Can I order custom printed boxes?",
        a : "Yes, custom printing options are available for bulk orders. Contact us for details."
      },
      {
        q : "Is this box eco-friendly?",
        a : "Yes, it is made from recyclable materials, aligning with sustainable packaging practices."
      },
      {

        q : "How is this box shipped?",
        a : "The boxes are shipped flat to save space and reduce shipping costs."
      }
    ]
  },

  {
    id : "3-Ply Corrugated Flap Box - 6x6x2 Inch",
    slug: "3-ply-corrugated-flap-box-6x6x2-inch",
    name : "3 Ply Corrugated Flap Box - 6x6x2 Inch | Ideal for shipping gifts, cosmetics & more",
    brand: "Box Brother",
    size : "6x6x2 Inch (15.24 L x 15.24 B x 5.08 H cm)",
    material : "3 Ply Corrugated Board - sturdy yet lightweight",
    shape : "Rectangular Flap Box",
    usage : "Small product, Ecommerce, Jewellery And Gift Packaging",
    recyclable : true,
    customPrinting : "Available on Bulk Orders",
    // QUICK ONE-LINE INFO (NEW)
    quickLine :
      "Durable 3 Ply Brown Kraft Flap Box ideal for small items, gifting & e-commerce packaging.",
    images : [
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg",
      "/paper-bags/paperbag.jpg"
    ],
    mainImage : "/paper-bags/paperbag.jpg",
    packs : [100, 500, 1000, 2000],
    defaultPack : 100,
    colors : {
      brown : { name : "Brown", hex : "#c48757", pricePerUnit : 14 },
      pink : { name : "Pink", hex : "#ff80ff", pricePerUnit : 27 },
      royalblue : { name : "Royal Blue", hex : "#4169e0", pricePerUnit : 27 },
      white : { name : "White", hex : "#ffffff", pricePerUnit : 10 },
  },
    shortDescription :
      "3 Ply Corrugated Flap Box – Ideal for shipping gifts, cosmetic & more.",
    longDescription :
      "The Box Brother 3 Ply Corrugated Flap Box in 6x6x2 inch size is crafted to ensure secure and damage-free delivery of your small and delicate items. Made from premium brown kraft paperboard, this box is lightweight yet durable — a smart packaging choice for e-commerce, gifting, and D2C brands dealing in compact products.",
    details : {
      // FEATURE TABLE (NEW)
      features : [
        {
          feature : "Product Name",
          description : "3 Ply Corrugated Flap Box"
        },
        {
          feature : "Size",
          description : "6x6x2 Inch (15.24 L x 15.24 B x 5.08 H cm)"
        },
        {
          feature : "Material",
          description : "3-Ply Corrugated Board"
        },
        {
          feature : "Color Options",
          description : "Brown, White, Pink, Royal Blue"
        },
        {
          feature : "Shape",
          description : "Rectangular Flap Box"
        },
        {
          feature : "Usage",
          description : " Jewellery, Small Gifts, Delicate Accessories"
        },
        {
          feature : "Recyclable",
          description : "Yes"
        },
        {
          feature : "Custom Printing",
          description : "Available on Bulk Orders"
        }
      ],
      // WHY CHOOSE SECTION (NEW)
      whyChooseTitle : "Why Choose the 6x6x2 Inch Flap Box?",
      whyChoose :
        "This flap box is engineered for brands that need strong, lightweight, and professional-grade packaging. With its high-strength 3-ply kraft material, it offers excellent protection while keeping shipping costs low.",
      // COMMON USES (NEW)
      commonUses : [
        "Small electronics (earbuds, smartwatches)",
        "Jewellery & accessories",
        "Cosmetics and skincare products",
        "Gift packs or promotional items",
        "Delicate craft parts",
      ],
      // BENEFITS (NEW)
      benefits : [
        "Sturdy design for fragile products",
        "Strong 3-ply corrugated board for reliable protection",
        "Ships flat for efficient storage and transport",
        "Eco-conscious materials, reflecting Nepal-inspired sustainability",
        "Trusted by business for secure packaging",
      ],
      // CONCLUSION (NEW)
      conclusion :
        "For a reliable, eco-friendly and elegant packaging for small items, the 6x6x2 inch 3 Ply Corrugated Flap Box from Box Brother is the ideal choice. Its combination of durability, affordability, and aesthetic appeal makes it a favorite among D2C brands and e-commerce sellers.", 
    },
    quickInfo : [
      { key : "Product Name", value : "3 Ply Corrugated Flap Box" },
      { key : "Brand", value : "Box Brother" },
      { key : "Size", value : "6x6x2 Inch" },
      { key : "Material", value : "3 Ply Brown Kraft Corrugated Board" },
      { key : "Color", value : "Brown" },
      { key : "Shape", value : "Rectangular Flap Box" },
      { key : "Usage", value : "Small product, Ecommerce, Jewellery And Gift Packaging" },
      { key : "Recyclable", value : "Yes" },
      { key : "Custom Printing", value : "Available on Bulk Orders" }
    ],
    faqs : [
      {
        q : "What products can I pack in this flap box?",
        a : "Ideal for fragile items like jewellery, small electronics, cosmetics, and gifts."
      },
      {
        q : "Is it sturdy enough for shipping?",
        a : "Yes, the 3-ply corrugated board provides excellent protection during transit."
      },
      {
        q : "Can I order custom printed boxes?",
        a : "Yes, custom printing options are available for bulk orders. Contact us for details."
      },
      {
        q : "Is this box eco-friendly?",
        a : "Yes, it is made from recyclable materials, aligning with sustainable packaging practices."
      },
      {
        q : "How is this box shipped?",
        a : "The boxes are shipped flat to save space and reduce shipping costs."
      }
    ],
    

      offers: [
      {
        code: "WELCOME10",
        description: "10% off on orders above 999",
      }
    ],

    seo: {
      title: "3 Ply Corrugated Flap Box - 6x6x2 Inch | Durable Jewellery & Gift Packaging",
      description:
        "Buy durable 3 Ply Corrugated Flap Boxes for jewelry, cosmetics, small electronics, and e-commerce packaging. Affordable, strong, and available in multiple colors inspired by Nepal."
    },

    
  


  },





];


