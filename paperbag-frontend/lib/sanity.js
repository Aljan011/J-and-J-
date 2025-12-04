import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'jz6c1suz', 
  dataset: 'production',    
  apiVersion: '2023-01-01', 
  useCdn: true,            
})

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}
