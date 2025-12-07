import defineStructure from '../utils/defineStructure'

export default defineStructure((S) =>
  S.listItem()
    .id('products')
    .title('Products')
    .schemaType('product')
    .child(
      S.documentTypeList('product')
        .id('productList')
        .title('Products')
    )
)
