import { ListItemBuilder } from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .id('settingsStructure')
    .title('Settings')
    .schemaType('settings')
    .child(
      S.editor()
        .id('settingsEditor')
        .title('Settings')
        .schemaType('settings')
        .documentId('settings')
    )
)
