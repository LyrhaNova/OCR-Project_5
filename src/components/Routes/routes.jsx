import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
import { Home } from '../../pages/page_home'
import { About } from '../../pages/page_about'
import { Accommodation } from '../../pages/page_accommodation'
import { Error } from '../Error/error'
import { Header } from '../Header/header'

const index = () => {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<HomeChild />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
   )
}

export default index

// function HomeChild() {
//    return (
//       <>
//       <Header />
//       <main>
//       </main>
//       </>
//    )
// }
