import { defineType, defineField } from "sanity";

export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({ name: "fullName", type: "string", title: "Full Name" }),
    defineField({ name: "company", type: "string", title: "Company" }),

    defineField({
      name: "address",
      type: "object",
      title: "Address",
      fields: [
        defineField({ name: "street", type: "string", title: "Street" }),
        defineField({ name: "landmark", type: "string", title: "Landmark" }),
        defineField({ name: "city", type: "string", title: "City" }),
      ],
    }),

    defineField({ name: "phone", type: "string", title: "Phone" }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "notes", type: "text", title: "Order Notes" }),

    // PRODUCT SNAPSHOT
    defineField({
      name: "product",
      type: "object",
      title: "Product Snapshot",
      fields: [
        defineField({ name: "id", type: "string", title: "Product ID" }),
        defineField({ name: "name", type: "string", title: "Product Name" }),
        defineField({ name: "mainImage", type: "string", title: "Main Image" }),
        defineField({
          name: "selectedColor",
          type: "string",
          title: "Selected Color",
        }),
        defineField({
          name: "selectedPack",
          type: "number",
          title: "Selected Pack Size",
        }),
        defineField({ name: "price", type: "number", title: "Price" }),
      ],
    }),

    defineField({ name: "quantity", type: "number", title: "Quantity" }),

    defineField({
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
        ],
      },
      initialValue: "pending",
    }),

    defineField({ name: "totalPrice", type: "number", title: "Total Price" }),

    defineField({ name: "esewaRefId", type: "string", title: "eSewa Ref ID" }),

    defineField({
      name: "rawVerification",
      type: "object",
      title: "Verification Response",
      fields: [
        defineField({
          name: "response",
          type: "text",
          title: "Raw Response JSON",
        }),
      ],
    }),

    defineField({ name: "createdAt", type: "datetime", title: "Created At" }),
    defineField({ name: "updatedAt", type: "datetime", title: "Updated At" }),
  ],
});
