"use client";

import { useEffect, useState } from "react";
import "./../../styles/blog.css";
import { sanityClient } from "../../../lib/sanity.js";

import ProductsFilter from "../../components/Blog/ProductsFilter.jsx";
import PaginationSection from "../../components/Blog/PaginationSection.jsx";
import BlogCard from "../../components/Blog/BlogCard.jsx";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const POSTS_PER_PAGE = 1;

  async function getPosts(page = 1, filterType = "all") {
    try {
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
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  }

  useEffect(() => {
    getPosts(currentPage, filter);
  }, [currentPage, filter]);

  return (
    <section className="blog-section">
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-container">
        <div className="blog-grid">
          {posts.map((post, idx) => (
            <BlogCard key={idx} post={post} idx={idx} />
          ))}
        </div>

        <ProductsFilter
          filter={filter}
          currentPage={currentPage}
          setFilter={setFilter}
          setCurrentPage={setCurrentPage}
          getPosts={getPosts}
        />
      </div>

      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
