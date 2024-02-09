import React from 'react'
import { Link } from 'react-router-dom';
import FullWidthBg from '@/components/FullWidthBg/FullWidthBg'

import './ErrorPage.scss';
import { Transition } from '@/components/Transition/Transition';
import { useIsPresent } from 'framer-motion';

export default function ErrorPage() {
  const isPresent = useIsPresent();

  return (
    <>
    <FullWidthBg
      url="/images/404page.png"
      classSection="error-page"
    >
      <div className="error-page__content">
        <h1 className="big-text">
          404
        </h1>
        <h1>
          You`re lost bro <Link to="/" className="error-page__link">Go home</Link> 
        </h1>
      </div>
    </FullWidthBg>

    <Transition isPresent={isPresent} />
    </>
  )
}
