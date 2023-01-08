import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Muffled Youthful Jackal</title>
        <meta property="og:title" content="Muffled Youthful Jackal" />
      </Helmet>
      <div className="home-container1">
        <span>
          <span className="Heading">Best Teacher is Parent</span>
          <br></br>
        </span>
      </div>
      <div className="home-container2">
        <div className="home-container3">
          <span className="home-text03">The Best Teacher is Parent</span>
        </div>
        <img
          src="/playground_assets/par-300h.jpg"
          alt="image"
          className="home-image"
        />
      </div>
      <div className="home-container4">
        <span className="home-text04">
          <span className="home-text05">For Parents</span>
          <br></br>
          <br></br>
          <span className="home-text08">
            Parenting is the process of raising and caring for a child or
            children, including providing physical care, emotional support, and
            guidance. It is a demanding and rewarding role that requires
            patience, understanding, and a strong sense of responsibility.
            Effective parenting involves setting boundaries, establishing
            routines, and teaching children right from wrong. It also involves
            helping children develop their own sense of identity and
            independence, as well as supporting their physical, emotional, and
            social growth. Parenting can be challenging at times, but it is also
            a deeply fulfilling experience that allows parents to watch their
            children grow and develop into unique individuals.
          </span>
        </span>
      </div>
      <div className="home-container5"></div>
      <div className="home-features">
        <h1 className="home-text09">EXPLORE BY TOPIC</h1>
        <div className="home-container6">
          <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
        </div>
      </div>
    </div>
  )
}

export default Home
