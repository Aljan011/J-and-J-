import {StructureResolver} from 'sanity/structure'

import home from './homeStructure'
import pages from './pageStructure'
// import products from './products'
import colorThemes from './colorThemeStructure'
import settings from './settingStructure'

// IDs to hide from default list
const hiddenDocTypes = (listItem: any) => {
  console.log(listItem)
  return !['home', 'page', 'colorTheme', 'settings'].includes(listItem.getId())
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      pages(S, context),
      S.divider(),

      // products(S, context),
      S.divider(),

      colorThemes(S, context),
      S.divider(),

      settings(S, context),
      S.divider(),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
