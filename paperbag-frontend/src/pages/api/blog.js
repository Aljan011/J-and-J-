import { sanityClient } from '../../../lib/sanity';

const query = `*[_type == "post"] | order(publishedAt desc){
  title,
  slug,
  mainImage{asset->{url}},
  publishedAt,
  author->{name},
  productType,
  body
}`;

export default async function handler(req, res) {
  try {
    const posts = await sanityClient.fetch(query);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
