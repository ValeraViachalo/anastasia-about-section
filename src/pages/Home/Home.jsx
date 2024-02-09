import FullWidthBg from "@/components/FullWidthBg/FullWidthBg";
import React from "react";
import "./Home.scss";
import { useIsPresent } from "framer-motion";
import { Transition } from "@/components/Transition/Transition";

export default function Home() {
  const isPresent = useIsPresent();

  return (
    <>
      <main className="home">
        <FullWidthBg
          classSection="home-section section-1 "
          url="https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="home__content">
            <h1>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h1>
          </div>
        </FullWidthBg>
        <FullWidthBg
          classSection="home-section section-2 "
          url="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="home__content">
            <h1>Matthias Leidinger</h1>
            Originally hailing from Austria, Berlin-based photographer Matthias
            Leindinger is a young creative brimming with talent and ideas. This
            is a story on the border between reality and imaginary, about the
            contradictory feelings that the insularity of a rocky, arid, and
            wild territory provokes”—so French photographer Clément Chapillon
            describes his latest highly captivating project Les rochers fauves
            (French for ‘The tawny rocks’). Though he views photography as a
            medium for storytelling, Zissou’s images don’t insist on a
            narrative. Both crisp and ethereal, they’re encoded with an
            ambiguity—a certain tension—that lets the viewer find their own
            story within them.
          </div>
        </FullWidthBg>
        <FullWidthBg
          classSection="home-section section-3"
          id="clement"
          url="https://images.unsplash.com/photo-1550275994-2bc88dc68637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8M1JwNl9KdnJtU1l8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="home__content">
            <h1>Clément Chapillon</h1>
            Though he views photography as a medium for storytelling, Zissou’s
            images don’t insist on a narrative. Both crisp and ethereal, they’re
            encoded with an ambiguity—a certain tension—that lets the viewer
            find their own story within them.
          </div>
        </FullWidthBg>
        <FullWidthBg
          classSection="home-section section-4 "
          url="https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
        >
          <div className="home__content">
            <h1>Mathias Svold and Ulrik Hasemann</h1>
            Dutch photographer Mark Rammers has shared with IGNANT the first
            chapter of his latest photographic project, ‘all over
            again’—captured while in residency at Hektor, an old farm in Los
            Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection
            of images is a visual and meditative journey into the origins of
            regrets and the uncertainty of stepping into new unknowns.
          </div>
        </FullWidthBg>
      </main>

      <Transition isPresent={isPresent} />
    </>
  );
}
