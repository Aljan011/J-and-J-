import { StructureBuilder } from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default function home(S: StructureBuilder) {
 return S.listItem()
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

}
