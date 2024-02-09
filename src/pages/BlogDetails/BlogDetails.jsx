import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getPostDetails } from "@/helpers/sanity/getBlog";
import SanityBlockContent from "@sanity/block-content-to-react";
import { useQuery } from "react-query";
import { motion, useIsPresent } from "framer-motion";

import { getDate } from "@/helpers/getDate";

import "./BlogDatails.scss";
import { Transition } from "@/components/Transition/Transition";

export default function BlogDetails() {
  const isPresent = useIsPresent();

  const location = useLocation();
  const { pathname } = location;
  const postSlug = pathname.split("/blogs/")[1];

  console.log(postSlug);

  const { data: post, isLoading } = useQuery({
    queryFn: () => getPostDetails(postSlug),
    queryKey: ["post"],
  });

  return (
    <>
      <main className="blog-details">
        {isLoading ? (
          <h1>[Loading...]</h1>
        ) : (
          <motion.div className="container">
            <h2>
              <Link to="/blog" className="back-button">
                {"<"} Back
              </Link>
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <h1>{post.title}</h1>
              <h3>{getDate(post.publishedAt)}</h3>
            </div>
            {post.mainImage && post.mainImage.asset && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                title={post.title}
                className="blog-details__image"
              />
            )}

            <div className="block__content">
              <SanityBlockContent blocks={post.body} />
            </div>
          </motion.div>
        )}
      </main>

      <Transition isPresent={isPresent} />
    </>
  );
}
