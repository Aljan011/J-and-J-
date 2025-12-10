import { StructureBuilder } from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default function home(S: StructureBuilder) {
  return S.listItem()
    .id('colorThemeStructure')
    .title('Color Themes')
    .schemaType('colorTheme')
    .child(
      S.documentTypeList('colorTheme')
        .id('colorThemeList')
        .title('Color Themes')
    )
  }
