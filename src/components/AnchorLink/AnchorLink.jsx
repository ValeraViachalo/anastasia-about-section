import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../../helpers/scrollContext";
import { Link, useLocation } from "react-router-dom";

const AnchorLink = ({ toSection, children, page = "/", ...rest }) => {
  const [eventClick, setEventClick] = useState(null);
  const location = useLocation();
  const { pathname, hash } = location;

  const scrollTo = useContext(ScrollContext);

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      {pathname === page ? (
        <Link
          to={toSection}
          onClick={(event) => scrollTo(event, toSection)}
          {...rest}
        >
          {children}
        </Link>
      ) : (
        <a
          href={`${page}${toSection}`}
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default AnchorLink;
