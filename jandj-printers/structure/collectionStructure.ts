import { ListItemBuilder } from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .id('collectionStructure')
    .title('Collections')
    .schemaType('collection')
    .child(
      S.documentTypeList('collection')
        .id('collectionList')
        .title('Collections')
    )
)
