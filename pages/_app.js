import '../styles/globals.css'
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function MyApp({ Component, pageProps }) {
  return <div className='max-w-[1440px] mx-auto'>
  <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
