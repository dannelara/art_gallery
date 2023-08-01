import GetStarted from '_sections/GetStarted'
import Trending from '_sections/Trending'
import TopCreators from '_sections/TopCreators'
import Categories from '_sections/Categories'
import Discover from '_sections/Discover'
import Highlight from '_sections/Highlight'
import HowItWorks from '_sections/HowItWorks'
import Subscribe from '_sections/Subscribe'
import PageContent from '_components/global/PageContent'
import { use } from 'react'

export default function Home() {

  const fetchArtists = async () => {
    const res = await fetch('http://localhost:3000/api/artists', {
      // cache: 'no-store',
    })
    return await res.json()
  }

  const artists = use(fetchArtists())


  return (
    <PageContent>
      <GetStarted />
      <Trending />
      <TopCreators data={artists} />
      <Categories />
      <Discover />
      <Highlight />
      <HowItWorks />
      <Subscribe />
    </PageContent>
  )
}
