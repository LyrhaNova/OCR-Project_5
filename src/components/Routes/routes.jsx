import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
import { Accommodation } from '../../pages/page_accommodation'
import { Error } from '../Error/error'
import { Header } from '../Header/header'
import { HeroHeader } from "../HeroHeaderHome/heroheader";
import { HeroHeaderAbout } from "../HeroHeaderAbout/heroheader_about"
import { Cards } from '../Cards/cards'
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
      <Cards />
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

