import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
// import { Home } from '../../pages/page_home'
// import { About } from '../../pages/page_about'
import { Accommodation } from '../../pages/page_accommodation'
import { Error } from '../Error/error'
import { Header } from '../Header/header'
import { HeroHeader } from "../HeroHeaderHome/heroheader";
import { HeroHeaderAbout } from "../HeroHeaderAbout/heroheader"
import { Footer } from '../Footer/footer'

const index = () => {
   return (
      <Router>
         <Header />
            <main>
               <Routes>
                  <Route path="/" element={<HomeChild />} />
                  <Route path="/about" element={<AboutChild />} />
                  <Route path="/accommodation" element={<Accommodation />} />
                  <Route path="*" element={<Error />} />
               </Routes>
            </main>
            <Footer />
      </Router>
   )
}

export default index

function HomeChild() {
   return (
      <>
      <HeroHeader />
      </>
   )
}

function AboutChild() {
   return (
      <>
      <HeroHeaderAbout />
      </>
   )
}

