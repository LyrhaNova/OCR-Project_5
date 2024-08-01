import {
   BrowserRouter as Router,
   Routes,
   Route,
   useParams,
 } from "react-router-dom";
import { Home } from '../pages/HomePage'
import { About } from '../pages/AboutPage'
import { Accommodation } from '../pages/AccommodationPage'
import { Header } from '../components/Header/header'
import { Footer } from '../components/Footer/footer'
import { Error } from '../pages/ErrorPage'

const index = () => {
   return (
      <Router>
         <Header />
            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/accommodation/:id" element={<Accommodation />} />
                  <Route path="*" element={<Error />} />
               </Routes>
            </main>
            <Footer />
      </Router>
   )
}

export default index

