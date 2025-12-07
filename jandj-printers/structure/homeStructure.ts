import { ListItemBuilder } from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .id('homeStructure')
    .title('Home')
    .schemaType('home')
    .child(
      S.editor()
        .id('homeEditor')
        .title('Home')
        .schemaType('home')
        .documentId('home')
    )
)
