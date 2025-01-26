import Blogs from "../components/Blogs/Blogs"
import Footer from "../components/Footer/Footer"
import Landing from "../components/Landing/Landing"
import Services from "../components/Services/Services"
import Testimonials from "../components/Testimonials/Testimonials"
const Home = () => {
  return (
    <div>
      <Landing />
      <Services />
      <Testimonials />  
      <Blogs />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
