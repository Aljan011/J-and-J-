import { DocumentsIcon } from '@sanity/icons'
import { ListItemBuilder, StructureBuilder, StructureResolverContext } from 'sanity/structure'

export default function pages(S: StructureBuilder, context: StructureResolverContext): ListItemBuilder {
  return S.listItem()
    .id('pagesStructure')
    .title('Pages')
    .icon(DocumentsIcon)
    .schemaType('page')
    .child(
      S.documentTypeList('page')
        .id('pagesList')
        .title('Pages')
    )
}
