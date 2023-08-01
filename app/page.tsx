import GetStarted from '_components/_sections/GetStarted'
import Trending from '_components/_sections/Trending'
import TopCreators from '_components/_sections/TopCreators'
import Categories from '_components/_sections/Categories'
import Discover from '_components/_sections/Discover'
import Highlight from '_components/_sections/Highlight'
import HowItWorks from '_components/_sections/HowItWorks'
import Subscribe from '_components/_sections/Subscribe'
import PageContent from '_components/global/PageContent'
import React from 'react'

export default function Home() {

  const fetchArtists = async () => {
    const res = await fetch('http://localhost:3000/api/artists', {
      cache: 'no-cache',
    })
    return await res.json()
  }

  const artists = React.use(fetchArtists())

  return (
    <PageContent>
      <GetStarted />
      <Trending />
      <TopCreators artists={artists} />
      <Categories />
      <Discover />
      <Highlight />
      <HowItWorks />
      <Subscribe />
    </PageContent>
  )
}
