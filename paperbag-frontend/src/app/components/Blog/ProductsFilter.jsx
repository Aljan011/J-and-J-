import React from 'react'
import { useEffect } from 'react'


function ProductsFilter( { filter, currentPage, setFilter, setCurrentPage, getPosts} ) {

    // Fetch posts whenever filter or page changes
useEffect(() => {
    getPosts(currentPage, filter);
  }, [currentPage, filter]);

  return (
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
  )
}

export default ProductsFilter