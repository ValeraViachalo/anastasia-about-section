import { getBlog } from "@/helpers/sanity/getBlog";
import React from "react";
import { useQuery } from "react-query";
import { Card } from "./Card/Card";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";
import { blogAnim } from "@/helpers/anim";

import "./Blog.scss";
import { Transition } from "@/components/Transition/Transition";

export default function Blog() {
  const isPresent = useIsPresent();

  const { data: posts, isLoading } = useQuery({
    queryFn: () => getBlog(),
    queryKey: ["data"],
  });

  return (
    <>
      <main className="blog container">
        <AnimatePresence mode="wait">
          <h1>Medium</h1>

          {isLoading ? (
            <motion.h1 {...blogAnim.Presence}>[Loading...]</motion.h1>
          ) : (
            <motion.section className="blog__list" {...blogAnim.Presence}>
              {posts.map((curP, i) => {
                const { title, slug, mainImage } = curP;
                const { current: link } = slug;
                const { asset: mainImageAsset } = mainImage;
                const { url: image } = mainImageAsset;

                return (
                  <Card
                    key={`card__${i}`}
                    title={title}
                    link={link}
                    image={image}
                  />
                );
              })}
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Transition isPresent={isPresent} />
    </>
  );
}
