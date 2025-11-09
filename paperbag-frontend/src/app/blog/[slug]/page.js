import { sanityClient, urlFor } from "../../../../lib/sanity.js";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import "../../../styles/blog-detail.css";

// 🔹 Fetch single post by slug
async function getPost(slug) {
  if (!slug) return null;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage{
      asset->{
        url
      }
    },
    publishedAt,
    author->{
      name,
      image{
        asset->{
          url
        }
      }
    },
    body
  }`;
  return await sanityClient.fetch(query, { slug });
}

// 🔹 Generate static paths for all posts
export async function generateStaticParams() {
  const query = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
  const slugs = await sanityClient.fetch(query);

  return slugs.map((s) => ({
    slug: s.slug,
  }));
}

export const dynamicParams = true; // allow new slugs without rebuild

// 🔹 Blog Detail Page
export default async function BlogDetailPage({ params }) {
  console.log("DEBUG params:", params);
  const { slug } = params;  
  console.log("DEBUG slug:", slug);

  const post = await getPost(slug);
  console.log("DEBUG post:", post);

  if (!post) notFound();

  // 🔹 PortableText custom components for Sanity body content
  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;
        return (
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Blog image"}
            style={{
              width: "100%",
              borderRadius: "12px",
              margin: "1rem 0",
              
            }}
          />
        );
      },
    },
  };

  return (
    <div className="blog-detail-pg">
      {/* Hero Image */}
      {post.mainImage?.asset?.url && (
        <div className="blog-detail-hero">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            width={1200}
            height={600}
            className="blog-detail-hero-img"
            priority
          />
        </div>
      )}

      {/* Header */}
      <div className="blog-detail-header">
        <h1 className="blog-detail-title">{post.title}</h1>
        <div className="blog-detail-meta">
          {post.author?.image?.asset?.url && (
            <Image
              src={post.author.image.asset.url}
              alt={post.author.name}
              width={40}
              height={40}
              className="blog-detail-author-img"
            />
          )}
          <div className="blog-detail-meta-info">
            <span className="blog-detail-author">{post.author?.name}</span>
            <span className="blog-detail-date">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-detail-content">
        <PortableText value={post.body} components={ptComponents} />
      </div>
    </div>
  );
}
