import { StructureBuilder } from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default function home(S: StructureBuilder) {
 return S.listItem()
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
  }
