"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./../../styles/blog.css";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all");

  // Fetch blog posts from our API
  useEffect(() => {
    fetch("../../pages/api/blog.js")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Filter posts by productType
  const filteredPosts =
    filter === "all" ? posts : posts.filter((p) => p.productType === filter);

  return (
    <section className="blog-section">
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-container">
        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post, idx) => (
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
              onClick={() => setFilter("all")}
            >
              All
            </li>
            <li
              className={filter === "packaging" ? "active" : ""}
              onClick={() => setFilter("packaging")}
            >
              Packaging Services
            </li>
            <li
              className={filter === "printing" ? "active" : ""}
              onClick={() => setFilter("printing")}
            >
              Printing Services
            </li>
            <li
              className={filter === "paperbags" ? "active" : ""}
              onClick={() => setFilter("paperbags")}
            >
              Paper Bags
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
