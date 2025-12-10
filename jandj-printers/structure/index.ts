import { StructureBuilder } from 'sanity/structure'

import home from './homeStructure'
import pages from './pageStructure'
// import products from './products'
import colorThemes from './colorThemeStructure'
import settings from './settingStructure'

// IDs to hide from default list
const hiddenDocTypes = (listItem: { getId: () => string | undefined }) =>
  !['home', 'page', 'colorTheme', 'settings'].includes(listItem.getId() || '')

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      home(S),      
      pages(S),     
      S.divider(),

      // products(S),
      // S.divider(),

      colorThemes(S),
      S.divider(),

      settings(S),
      S.divider(),

      // Filter out hidden document types correctly
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId?.() || ''
        return !['home', 'page', 'colorTheme', 'settings'].includes(id)
      }),
    ])
