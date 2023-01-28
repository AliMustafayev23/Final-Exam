import React from 'react'
import { Helmet } from 'react-helmet'
import FacultyMembers from './faculty members'
import FannySpencer from './fanny spencer'
import Features from './features'
import Over from './over'
import WeRank from './we rank'

const Home = () => {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <WeRank/>
      <Over/>
    <Features/>
    <FacultyMembers/>
    <FannySpencer/>
    </div>
  )
}

export default Home