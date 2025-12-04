export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    { name: "fullName", type: "string", title: "Full Name" },
    { name: "company", type: "string", title: "Company (optional)" },
    {
      name: "address",
      type: "object",
      title: "Address",
      fields: [
        { name: "street", type: "string", title: "Street" },
        { name: "landmark", type: "string", title: "Landmark (optional)" },
        { name: "city", type: "string", title: "City" },
      ],
    },
    { name: "phone", type: "string", title: "Phone" },
    { name: "email", type: "string", title: "Email" },
    { name: "notes", type: "text", title: "Order Notes (optional)" },

    // Product snapshot
    { name: "product", type: "reference", to: [{ type: "product" }], title: "Product" },
    { name: "productName", type: "string", title: "Product Name" },
    { name: "productPrice", type: "number", title: "Product Price" },
    { name: "quantity", type: "number", title: "Quantity" },
    { name: "selectedSize", type: "string", title: "Selected Size" },

    // Payment status
    {
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
    },

    { name: "totalPrice", type: "number", title: "Total Price" },
    { name: "esewaRefId", type: "string", title: "eSewa Ref ID" },
    { name: "rawVerification", type: "object", title: "Verification Response" },

    { name: "createdAt", type: "datetime", title: "Created At" },
    { name: "updatedAt", type: "datetime", title: "Updated At" },
  ],
};
