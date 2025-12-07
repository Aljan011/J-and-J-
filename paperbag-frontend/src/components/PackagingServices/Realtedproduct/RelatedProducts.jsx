"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../styles/components/relatedproduct/relatedproduct.css";

export default function RelatedProducts({ products, addToCart }) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="related-products-section">
      {" "}
      <h2 className="related-title">Related Products</h2>
      {isMobile ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true} // enable arrows
          // pagination={{ clickable: true }} // enable dots
        >
          {products.map((p) => {
            const getLowestRelatedPrice = (p) => {
              let min = Infinity;

              p.colors?.forEach((c) => {
                c.packPrices?.forEach((pp) => {
                  const v = pp.price * pp.packSize;
                  if (v < min) min = v;
                });
              });

              return min === Infinity ? 0 : min;
            };

            const lowestColorPrice = Math.min(...colorPrices);
            const lowestPackSize = Math.min(...p.packs);
            const low = lowestColorPrice * lowestPackSize;

            return (
              <SwiperSlide key={p.slug}>
                <Link href={`/packaging-services/${p.slug}`} passHref>
                  <article className="related-card">
                    <div className="related-img-wrap">
                      <Image
                        src={p.mainImage}
                        alt={p.name}
                        width={400}
                        height={300}
                        className="related-img"
                      />
                    </div>
                    <div className="related-body">
                      <h3 className="related-name">{p.name}</h3>
                      <p className="related-price">Rs {getLowestRelatedPrice(p)}</p>

                      <button
                        className="related-add-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(p);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="related-products-grid">
          {products.map((p) => {
            const colorPrices = Object.values(p.colors).map(
              (c) => c.pricePerUnit
            );
            const lowestColorPrice = Math.min(...colorPrices);
            const lowestPackSize = Math.min(...p.packs);
            const low = lowestColorPrice * lowestPackSize;

            return (
              <Link
                href={`/packaging-services/${p.slug}`}
                key={p.slug}
                passHref
              >
                <article className="related-card">
                  <div className="related-img-wrap">
                    <Image
                      src={p.mainImage}
                      alt={p.name}
                      width={400}
                      height={300}
                      className="related-img"
                    />
                  </div>
                  <div className="related-body">
                    <h3 className="related-name">{p.name}</h3>
                    <p className="related-price">Rs {low}</p>
                    <button
                      className="related-add-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(p);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
