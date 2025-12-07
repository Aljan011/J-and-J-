"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProductDetailsClient from "../../../components/ProductDetailsClient.jsx";
import RelatedProducts from "../../../components/PackagingServices/Realtedproduct/RelatedProducts.jsx";

import "../../../styles/product-details/product-details.css";

import { sanityClient } from "../../../../lib/sanity.js";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await sanityClient.fetch(
          `*[_type=="producte" && slug.current == $slug][0]{
           
    _id,
    name,
    slug,
    brand,
    size,
    material,
    shape,
    usage,
    recyclable,
    customPrinting,
    mainImage,
    images,
    packs,
    defaultPack,
    colors[]{
      name,
      hex,
      packPrices[]{
        packSize,
        price
      }
    },
    discountRate,
    seo,
    shortDescription,
    longDescription,
    faqs,
    details,
    category
  }`,
          { slug }
        );

        if (!fetchedProduct) {
          setProduct(null);
          return;
        }

        setProduct(fetchedProduct);

        // Fetch related products
        const related = await sanityClient.fetch(
          `*[_type=="product" && category == $category && slug.current != $slug]{
            _id,
            name,
            slug,
            mainImage,
            shortDescription
          }`,
          { category: fetchedProduct.category, slug }
        );

        setRelatedProducts(related);
      } catch (err) {
        console.error(err);
        setProduct(null);
      }
    }



    fetchProduct();
  }, [slug]);


  if (!product) return <div>Product not found</div>;

  console.log("Rendering product:", product);

  return (
    <main className="pd-page">
      <ProductDetailsClient product={product} />
      <RelatedProducts products={relatedProducts} addToCart={(p) => console.log("Add to cart:", p)} />
    </main>
  );
}
