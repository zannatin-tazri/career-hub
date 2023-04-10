import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import JobCategories from './Components/jobCategory/JobCategories'
import FeaturedJobs from './Components/featureJobs/FeaturedJobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      {/* <JobCategories></JobCategories> */}
      {/* <FeaturedJobs></FeaturedJobs> */}
    </div>
  )
}

export default App
