import GetStarted from '_sections/GetStarted'
import Trending from '_sections/Trending'
import TopCreators from '_sections/TopCreators'
import Categories from '_sections/Categories'
import Discover from '_sections/Discover'
import Highlight from '_sections/Highlight'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-gray-600">
      <GetStarted />
      <Trending />
      <TopCreators />
      <Categories />
      <Discover />
      <Highlight />
    </main >
  )
}
