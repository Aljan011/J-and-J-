"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "next-sanity";
import "../styles/components/BlogInternal.css";

const sanity = createClient({
  projectId: "jz6c1suz", 
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

export default function BlogInternalSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "post"] | order(publishedAt desc)[0...3]{
          title,
          slug,
          publishedAt,
          excerpt,
          mainImage{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("en-US", { month: "short" }),
      year: date.getFullYear(),
    };
  };

  if (!blogs.length) return null;

  return (
    <section className="hm-blog-section">
      <h2 className="hm-blog-title">Latest Blogs</h2>
      {/* <div className="hm-blog-icon">📰</div> */}

      <div className="hm-blog-container">
        {blogs.map((blog, index) => {
          const { day, month, year } = formatDate(blog.publishedAt);
          return (
            <Link
              href={`/blog/${blog.slug.current}`}
              key={index}
              className="hm-blog-card"
            >
              <div className="hm-blog-date">
                <span className="hm-blog-day">{day}</span>
                <span className="hm-blog-year-month">
                  {month} {year}
                </span>
              </div>

              <div className="hm-blog-image-container">
                <img
                  src={blog.mainImage?.asset?.url}
                  alt={blog.title}
                  className="hm-blog-image"
                />
              </div>

              <div className="hm-blog-content">
                <h3 className="hm-blog-card-title">{blog.title}</h3>
                <p className="hm-blog-description">{blog.excerpt}</p>
                <button className="hm-blog-btn">
                  Read More <span className="hm-blog-arrow">→</span>
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
