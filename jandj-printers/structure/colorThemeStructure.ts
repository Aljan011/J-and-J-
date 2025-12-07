import { ListItemBuilder } from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .id('colorThemeStructure')
    .title('Color Themes')
    .schemaType('colorTheme')
    .child(
      S.documentTypeList('colorTheme')
        .id('colorThemeList')
        .title('Color Themes')
    )
)
