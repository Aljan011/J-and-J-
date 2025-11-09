"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./../../styles/blog.css";
import { createClient } from "next-sanity";

//  setup sanity client 
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jz6c1suz",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-08-10",
  useCdn: true,
});

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const POSTS_PER_PAGE = 8; 

  // Fetch paginated posts from Sanity
  async function getPosts(page = 1, filterType = "all") {
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;

    let filterQuery =
      filterType === "all" ? "" : `&& productType == "${filterType}"`;

    const query = `*[_type == "post" ${filterQuery}] | order(publishedAt desc) {
      title,
      slug,
      mainImage{
        asset->{url}
      },
      publishedAt,
      author->{
        name
      },
      body,
      productType
    }[${start}...${end}]`;

    const totalQuery = `count(*[_type == "post" ${filterQuery}])`;

    const [fetchedPosts, total] = await Promise.all([
      sanityClient.fetch(query),
      sanityClient.fetch(totalQuery),
    ]);

    setPosts(fetchedPosts);
    setTotalPages(Math.ceil(total / POSTS_PER_PAGE));
  }

  // Fetch posts whenever filter or page changes
  useEffect(() => {
    getPosts(currentPage, filter);
  }, [currentPage, filter]);

  return (
    <section className="blog-section">
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-container">
        {/* Blog Grid */}
        <div className="blog-grid">
          {posts.map((post, idx) => (
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
          ))}
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <h2>Products</h2>
          <ul>
            <li
              className={filter === "all" ? "active" : ""}
              onClick={() => {
                setFilter("all");
                setCurrentPage(1);
              }}
            >
              All
            </li>
            <li
              className={filter === "packaging" ? "active" : ""}
              onClick={() => {
                setFilter("packaging");
                setCurrentPage(1);
              }}
            >
              Packaging Services
            </li>
            <li
              className={filter === "printing" ? "active" : ""}
              onClick={() => {
                setFilter("printing");
                setCurrentPage(1);
              }}
            >
              Printing Services
            </li>
            <li
              className={filter === "paperbags" ? "active" : ""}
              onClick={() => {
                setFilter("paperbags");
                setCurrentPage(1);
              }}
            >
              Paper Bags
            </li>
          </ul>
        </aside>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}
