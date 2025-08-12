import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'jz6c1suz', //Sanity project ID
  dataset: 'production',   // 
  apiVersion: '2023-08-10', 
  useCdn: true,            
})
