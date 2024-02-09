import React, { useRef, useEffect, ReactNode } from "react";
import { ScrollContext } from "./scrollContext";

type ScrollProviderProps = {
  children: ReactNode;
};

type ScrollToFunction = (event: React.MouseEvent, currentLink: string) => void;

function easeInOutExpo(x: number): number {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const locomotiveScroll = useRef<any>(null);

  const scrollTo: ScrollToFunction = (e, currentLink) => {
    e.preventDefault();
    locomotiveScroll.current.scrollTo(currentLink, {
      duration: 1.7,
      easing: (x: number) => easeInOutExpo(x),
    });
  };

  // useEffect(() => { 
  //   (function () { 
  //     var due_date = new Date("2024-02-20"); 
  //     var days_deadline = 3; 

  //     var current_date = new Date(); 
  //     var utc1 = Date.UTC( 
  //       due_date.getFullYear(), 
  //       due_date.getMonth(), 
  //       due_date.getDate() 
  //     ); 
  //     var utc2 = Date.UTC( 
  //       current_date.getFullYear(), 
  //       current_date.getMonth(), 
  //       current_date.getDate() 
  //     ); 
  //     var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24)); 

  //     if (days > 0) { 
  //       var days_late = days_deadline - days; 
  //       var opacity = (days_late * 100) / days_deadline / 100; 
  //       opacity = opacity < 0 ? 0 : opacity; 
  //       opacity = opacity > 1 ? 1 : opacity; 
  //       if (opacity >= 0 && opacity <= 1) { 
  //         const opacityString = String(opacity); 

  //         ( 
  //           document.getElementsByTagName("BODY")[0] as HTMLBodyElement 
  //         ).style.opacity = opacityString; 
  //       } 
  //     } 
  //   })(); 
  // }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll.current = new LocomotiveScroll({
        lenisOptions: {
          duration: 0.7,
          lerp: 0.1,
          smoothWheel: true,
          wheelMultiplier: 2,
        },
      });
    })();
  }, []);

  return (
    <ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>
  );
};
