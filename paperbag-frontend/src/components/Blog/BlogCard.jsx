import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


function BlogCard( { post, idx } ) {
  return (
    <Link key={idx} href={`/blog/${post.slug.current}`}>
              <div className="blog-card">
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="blog-card-image"
                  />
                )}
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-meta">
                    By {post.author?.name || "Unknown"} •{" "}
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString()
                      : "No date"}
                  </p>
                  <p className="blog-card-excerpt">
                    {post.body?.[0]?.children?.[0]?.text || "Read more..."}
                  </p>
                </div>
              </div>
            </Link>
  )
}

export default BlogCard