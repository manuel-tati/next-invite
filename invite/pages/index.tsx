import type { NextPage } from 'next'
import Image from 'next/image'
import UnderConstruction from '../asset/under_construction.png'


const Home: NextPage = () => {
  return (
    <div>
      <Image src={UnderConstruction} alt="Under Construction" />
    </div>
  )
}

export default Home
