import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React, { useRef, useState } from "react";
import "./Home.scss";
import { motion, useIsPresent } from "framer-motion";
import { Transition } from "@/components/Transition/Transition";
import { useInView } from "react-intersection-observer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const animation = (y) => {
  return {
    initial: (i) => ({
      y,
      transition: {
        duration: 0.7,
        ease: [.51,-0.01,.21,1.01],
        delay: 0.075 * i,
      },
    }),
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.7,
        ease: [.51,-0.01,.21,1.01],
        delay: 0.075 * i,
      },
    }),
  };
};

export default function Home() {
  const isPresent = useIsPresent();

  const [isFliped, setFlip] = useState(false);

  const phase = [
    "You`re okay! It`s not an illusion, let me hear you,",
    "I`ll show you your scale and how you can get there",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to('.hero', {
      backgroundPositionY: '10%',
      clipPath: 'inset(0 0 60% 0)',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.to(".slider", {
      scrollTrigger: {
        trigger: ".slider-wrapper",
        start: "top center",
        end: "95% center",
        pin: ".slider",
        pinSpacer: false,
      },
    });

    ScrollTrigger.create({
      trigger: ".slider-wrapper",
      start: "40% center",
      end: "top center",
      scrub: true,
      onEnter: () => setFlip(true),
      onLeaveBack: () => setFlip(false),
    });
  });

  return (
    <main className="home">
      <div className="hero">
        <h1 className="hero__title">
          Your vision partner.
        </h1>
      </div>
      <div className="slider-wrapper">
        <div className="slider">
          <h1 className="bold">
            <motion.p
              variants={animation(-100)}
              initial="initial"
              animate={!isFliped ? "enter" : "initial"}
            >
              but...
            </motion.p>
          </h1>
          <div className="slider__text">
            <motion.p
              variants={animation(-100)}
              initial="initial"
              animate={!isFliped ? "enter" : "initial"}
            >
              the most important thing you need to know
            </motion.p>
          </div>

          <h1 className="slider__title-2">
            <div>
              {phase.map((p, index) => {
                return (
                  <div key={index} className="mask-text__line">
                    <motion.p
                      custom={index}
                      variants={animation(100)}
                      initial="initial"
                      animate={isFliped ? "enter" : "initial"}
                    >
                      {p}
                    </motion.p>
                  </div>
                );
              })}
            </div>
          </h1>
        </div>
      </div>
      <div className="second-part">
        <div className="safe-space">
          <h1 className="safe-space__title">
            <span>Let me be a safe</span>
            <span>space for your</span>
            <span>business vision ツ</span>
          </h1>
          <img src="/images/safe-space-card.jpg" alt="anastasia-1" className="safe-space__image" />
        </div>
      </div>
    </main>
  );
}

function MaskText({ phrase }) {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView, entry } = useInView({});

  return (
    <div ref={ref} className="mask-text">
      {phrase &&
        phrase.map((p, index) => {
          return (
            <div key={index} className="mask-text__line">
              <motion.p
                custom={index}
                variants={animation}
                initial="initial"
                animate={inView ? "enter" : ""}
              >
                {p}
              </motion.p>
            </div>
          );
        })}
    </div>
  );
}
